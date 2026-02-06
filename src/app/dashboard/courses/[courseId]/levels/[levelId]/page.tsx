
'use client';
import { useParams, notFound } from 'next/navigation';
import { CodeChallenge } from '@/components/game/code-challenge';
import { MCQChallenge } from '@/components/game/mcq-challenge';
import { mockData } from '@/lib/mock-data';

export default function LevelPage() {
    const params = useParams();
    const { courseId, levelId } = params as { courseId: string; levelId: string };

    const course = mockData.courses.find(c => c.id === courseId);
    if (!course) {
        notFound();
    }

    const level = course.levels.find(l => l.id === levelId);
    if (!level) {
        notFound();
    }

    // For now, we'll just display the first game of the level.
    const game = level.games[0];
    if (!game) {
        // Handle case where level has no games
        return (
            <div className="text-center p-8">
                <h2 className="text-2xl font-semibold mb-4">Coming Soon!</h2>
                <p>No games available for this level yet. Check back later!</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold tracking-tight mb-4">
                <span className="capitalize">{course.name}</span> - Level {level.levelNumber}: {level.title}
            </h1>
            {game.type === 'code' && <CodeChallenge challenge={game} courseId={courseId} levelId={levelId} />}
            {game.type === 'mcq' && <MCQChallenge challenge={game} courseId={courseId} levelId={levelId} />}
        </div>
    );
}
