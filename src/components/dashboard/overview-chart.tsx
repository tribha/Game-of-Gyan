'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Skeleton } from '@/components/ui/skeleton';

type ChartData = {
  name: string;
  total: number;
};

type OverviewChartProps = {
  data: ChartData[];
  isLoading: boolean;
};

export function OverviewChart({ data, isLoading }: OverviewChartProps) {
  if (isLoading) {
    return (
      <div className="h-[350px] w-full p-4 pl-2">
        <Skeleton className="h-full w-full" />
      </div>
    );
  }
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
