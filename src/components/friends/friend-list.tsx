'use client';

import { useFirestore, useUser, useMemoFirebase, useCollection, useDoc } from '@/firebase';
import { collection, query, where, doc, getDoc } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { ShieldCheck, Flame, Trophy } from 'lucide-react';
import { useEffect, useState } from 'react';

export function FriendList() {
  const { user } = useUser();
  const firestore = useFirestore();
  const [friendsData, setFriendsData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const profileRef = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'userProfiles', user.uid);
  }, [firestore, user]);

  const { data: userProfile } = useDoc(profileRef);

  useEffect(() => {
    const fetchFriends = async () => {
      if (!userProfile?.friendIds || !firestore) {
        setIsLoading(false);
        return;
      }

      try {
        const friendsPromises = userProfile.friendIds.map((id: string) => 
          getDoc(doc(firestore, 'userProfiles', id))
        );
        const friendsSnapshots = await Promise.all(friendsPromises);
        const data = friendsSnapshots.map(snap => ({ id: snap.id, ...snap.data() }));
        setFriendsData(data);
      } catch (err) {
        console.error("Error fetching friends:", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (userProfile) {
      fetchFriends();
    }
  }, [userProfile, firestore]);

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map(i => <Skeleton key={i} className="h-32 w-full" />)}
      </div>
    );
  }

  if (friendsData.length === 0) {
    return (
      <Card className="border-dashed">
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-muted p-4 mb-4">
            <Trophy className="h-8 w-8 text-muted-foreground" />
          </div>
          <CardTitle>No friends yet</CardTitle>
          <CardDescription className="max-w-[250px] mt-2">
            The coding journey is better with allies. Find other users to start competing!
          </CardDescription>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {friendsData.map((friend) => (
        <Card key={friend.id} className="overflow-hidden hover:border-primary/50 transition-all">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border-2 border-primary/20">
                <AvatarImage src={friend.avatarUrl || `https://api.dicebear.com/8.x/adventurer/png?seed=${friend.name || friend.id}`} />
                <AvatarFallback>{friend.name?.charAt(0) || 'U'}</AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <CardTitle className="text-lg truncate">{friend.name || 'Mysterious Warrior'}</CardTitle>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <ShieldCheck className="h-3 w-3" />
                  Level {Math.floor((friend.xp || 0) / 1000) + 1}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-1.5 text-sm font-medium">
                <Flame className="h-4 w-4 text-orange-500" />
                <span>{friend.xp?.toLocaleString() || 0} XP</span>
              </div>
              <Badge variant="secondary">{friend.streak || 0} Day Streak</Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
