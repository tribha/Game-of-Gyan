
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Crown, ArrowUp, ArrowDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const leaderboardData = [
  { rank: 1, name: 'Alex Doe', xp: 1550, avatar: PlaceHolderImages.find(p => p.id === 'user-avatar-1')?.imageUrl, trend: 'up' },
  { rank: 2, name: 'Lia Smith', xp: 1420, avatar: PlaceHolderImages.find(p => p.id === 'user-avatar-2')?.imageUrl, trend: 'up' },
  { rank: 3, name: 'Boro', xp: 1300, avatar: PlaceHolderImages.find(p => p.id === 'user-avatar-3')?.imageUrl, trend: 'down' },
  { rank: 4, name: 'Kira', xp: 1250, avatar: PlaceHolderImages.find(p => p.id === 'user-avatar-4')?.imageUrl, trend: 'up' },
  { rank: 5, name: 'Zoe', xp: 1180, avatar: PlaceHolderImages.find(p => p.id === 'user-avatar-6')?.imageUrl, trend: 'down' },
];


export function Leaderboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
        <CardDescription>See how you rank among other warriors.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leaderboardData.map((user, index) => (
            <div key={user.name} className="flex items-center gap-4 hover:bg-muted/50 p-2 rounded-md transition-colors">
              <span className="font-bold text-lg w-6 text-center text-muted-foreground">{user.rank}</span>
              <Avatar>
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold">{user.name} {user.rank === 1 && <Crown className="inline h-4 w-4 text-yellow-400" />}</p>
                <p className="text-sm text-muted-foreground">{user.xp.toLocaleString()} XP</p>
              </div>
              {user.trend === 'up' && <ArrowUp className="h-5 w-5 text-green-500" />}
              {user.trend === 'down' && <ArrowDown className="h-5 w-5 text-red-500" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
