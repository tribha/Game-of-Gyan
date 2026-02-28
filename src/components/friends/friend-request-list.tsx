'use client';

import { useFirestore, useUser, useMemoFirebase, useCollection } from '@/firebase';
import { collection, query, where, doc, updateDoc, arrayUnion, increment, serverTimestamp, deleteDoc } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Check, X, Loader2, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function FriendRequestList() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();

  const incomingQuery = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return query(
      collection(firestore, 'friendRequests'),
      where('receiverId', '==', user.uid),
      where('status', '==', 'pending')
    );
  }, [firestore, user]);

  const outgoingQuery = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return query(
      collection(firestore, 'friendRequests'),
      where('senderId', '==', user.uid),
      where('status', '==', 'pending')
    );
  }, [firestore, user]);

  const { data: incomingRequests, isLoading: loadingIncoming } = useCollection(incomingQuery);
  const { data: outgoingRequests, isLoading: loadingOutgoing } = useCollection(outgoingQuery);

  const handleAccept = async (request: any) => {
    if (!firestore || !user) return;

    try {
      // 1. Update request status
      await updateDoc(doc(firestore, 'friendRequests', request.id), {
        status: 'accepted',
        respondedAt: serverTimestamp(),
      });

      // 2. Add to both users' friend lists
      const userRef = doc(firestore, 'userProfiles', user.uid);
      const friendRef = doc(firestore, 'userProfiles', request.senderId);

      await updateDoc(userRef, {
        friendIds: arrayUnion(request.senderId),
      });

      await updateDoc(friendRef, {
        friendIds: arrayUnion(user.uid),
      });

      toast({
        title: "Friendship forged!",
        description: `You are now friends with ${request.senderName || 'another warrior'}.`,
      });
    } catch (error) {
      console.error("Accept error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to accept request.",
      });
    }
  };

  const handleReject = async (requestId: string) => {
    if (!firestore) return;
    try {
      await updateDoc(doc(firestore, 'friendRequests', requestId), {
        status: 'rejected',
        respondedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Reject error:", error);
    }
  };

  const handleCancel = async (requestId: string) => {
    if (!firestore) return;
    try {
      await deleteDoc(doc(firestore, 'friendRequests', requestId));
      toast({
        title: "Request Cancelled",
        description: "Your friend request has been withdrawn.",
      });
    } catch (error) {
      console.error("Cancel error:", error);
    }
  };

  return (
    <div className="grid gap-8">
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          Incoming Requests
          {incomingRequests && incomingRequests.length > 0 && (
            <span className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-0.5">
              {incomingRequests.length}
            </span>
          )}
        </h2>
        <div className="grid gap-4">
          {loadingIncoming ? (
            <div className="flex items-center gap-2 text-muted-foreground"><Loader2 className="h-4 w-4 animate-spin" /> Loading...</div>
          ) : incomingRequests?.length === 0 ? (
            <p className="text-muted-foreground italic">No incoming requests.</p>
          ) : (
            incomingRequests?.map((req) => (
              <Card key={req.id}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`https://api.dicebear.com/8.x/adventurer/png?seed=${req.senderName}`} />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{req.senderName}</p>
                      <p className="text-xs text-muted-foreground">Wants to be your friend</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => handleAccept(req)} className="h-8 w-8 p-0">
                      <Check className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleReject(req.id)} className="h-8 w-8 p-0">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Sent Requests</h2>
        <div className="grid gap-4">
          {loadingOutgoing ? (
            <div className="flex items-center gap-2 text-muted-foreground"><Loader2 className="h-4 w-4 animate-spin" /> Loading...</div>
          ) : outgoingRequests?.length === 0 ? (
            <p className="text-muted-foreground italic">No pending sent requests.</p>
          ) : (
            outgoingRequests?.map((req) => (
              <Card key={req.id}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`https://api.dicebear.com/8.x/adventurer/png?seed=${req.receiverName}`} />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{req.receiverName}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        Pending approval
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" onClick={() => handleCancel(req.id)}>
                    Cancel
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
