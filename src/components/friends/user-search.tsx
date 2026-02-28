'use client';

import { useState } from 'react';
import { useFirestore, useUser, useMemoFirebase, useCollection } from '@/firebase';
import { collection, query, where, addDoc, serverTimestamp, getDocs, limit } from 'firebase/firestore';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, UserPlus, Check, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function UserSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [pendingRequests, setPendingRequests] = useState<Set<string>>(new Set());
  
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim() || !firestore) return;

    setIsSearching(true);
    try {
      // Simple exact match search for demonstration
      const usersRef = collection(firestore, 'users');
      const q = query(usersRef, where('username', '==', searchTerm.trim()), limit(5));
      const querySnapshot = await getDocs(q);
      
      const users = querySnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(u => u.id !== user?.uid); // Don't show current user

      setResults(users);
      if (users.length === 0) {
        toast({
          title: "No users found",
          description: `We couldn't find anyone with the username "${searchTerm}".`,
        });
      }
    } catch (error) {
      console.error("Search error:", error);
      toast({
        variant: "destructive",
        title: "Search failed",
        description: "An error occurred while searching. Please try again.",
      });
    } finally {
      setIsSearching(false);
    }
  };

  const sendFriendRequest = async (targetUserId: string, targetUsername: string) => {
    if (!user || !firestore) return;

    try {
      await addDoc(collection(firestore, 'friendRequests'), {
        senderId: user.uid,
        senderName: user.displayName || user.email,
        receiverId: targetUserId,
        receiverName: targetUsername,
        status: 'pending',
        sentAt: serverTimestamp(),
        createdAt: serverTimestamp(),
      });

      setPendingRequests(prev => new Set(prev).add(targetUserId));
      toast({
        title: "Request Sent!",
        description: `Friend request sent to ${targetUsername}.`,
      });
    } catch (error) {
      console.error("Error sending request:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send friend request.",
      });
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by username..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button type="submit" disabled={isSearching}>
          {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Search'}
        </Button>
      </form>

      <div className="grid gap-4">
        {results.map((result) => (
          <div key={result.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={`https://api.dicebear.com/8.x/adventurer/png?seed=${result.username}`} />
                <AvatarFallback>{result.username?.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{result.username}</p>
                <p className="text-xs text-muted-foreground">{result.email}</p>
              </div>
            </div>
            {pendingRequests.has(result.id) ? (
              <Button variant="ghost" disabled className="gap-2">
                <Check className="h-4 w-4" />
                Sent
              </Button>
            ) : (
              <Button size="sm" onClick={() => sendFriendRequest(result.id, result.username)} className="gap-2">
                <UserPlus className="h-4 w-4" />
                Add Friend
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
