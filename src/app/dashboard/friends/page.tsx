'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserSearch } from '@/components/friends/user-search';
import { FriendList } from '@/components/friends/friend-list';
import { FriendRequestList } from '@/components/friends/friend-request-list';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserPlus, Inbox } from 'lucide-react';

export default function FriendsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Social Hub</h1>
        <p className="text-muted-foreground">
          Connect with other learners, challenge your friends, and rise together.
        </p>
      </div>

      <Tabs defaultValue="friends" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="friends" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>My Friends</span>
          </TabsTrigger>
          <TabsTrigger value="requests" className="flex items-center gap-2">
            <Inbox className="h-4 w-4" />
            <span>Requests</span>
          </TabsTrigger>
          <TabsTrigger value="search" className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            <span>Find People</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="friends">
          <FriendList />
        </TabsContent>

        <TabsContent value="requests">
          <FriendRequestList />
        </TabsContent>

        <TabsContent value="search">
          <Card>
            <CardHeader>
              <CardTitle>Find New Warriors</CardTitle>
              <CardDescription>
                Search for users by their username to send them a friend request.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <UserSearch />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
