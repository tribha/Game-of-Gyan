
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockData } from '@/lib/mock-data';
import { hardChallenges } from '@/lib/hard-challenges';
import { ArrowRight, Code } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type HardModeLanguage = {
  language: string;
  name: string;
  image: (typeof PlaceHolderImages)[0] | undefined;
};

export default function CoursesPage() {
  const uniqueLanguages = [...new Set(hardChallenges.map(c => c.language))];
  
  const getLanguageName = (lang: string) => {
    switch (lang) {
        case 'cplusplus': return 'C++';
        case 'javascript': return 'JavaScript';
        case 'python': return 'Python';
        case 'c': return 'C';
        case 'java': return 'Java';
        case 'sql': return 'SQL';
        case 'html': return 'HTML/CSS';
        default: return lang;
    }
  };

  const hardModeLanguages: HardModeLanguage[] = uniqueLanguages.map(lang => {
    const imageName = `course-${lang === 'html' ? 'html-css' : lang}`;
    return {
        language: lang,
        name: getLanguageName(lang),
        image: PlaceHolderImages.find(p => p.id === imageName)
    }
  });

  return (
    <div className="space-y-6">
       <div>
        <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
        <p className="text-muted-foreground">
          Choose a learning path or test your skills by finding the error.
        </p>
      </div>

      <Tabs defaultValue="medium">
        <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="hard">Hard</TabsTrigger>
        </TabsList>
        <TabsContent value="medium" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {mockData.courses.map((course) => (
            <Card key={course.name} className="flex flex-col">
                <CardHeader>
                <CardTitle>{course.name}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{course.levels.length} Levels</p>
                </CardContent>
                <div className="p-6 pt-0">
                <Button asChild className="w-full">
                    <Link href={`/dashboard/courses/${course.id}`}>
                    Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
                </div>
            </Card>
            ))}
        </div>
        </TabsContent>
        <TabsContent value="hard" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {hardModeLanguages.map((lang) => (
                <Card key={lang.language} className="flex flex-col">
                    {lang.image && (
                        <div className="relative h-40 w-full">
                            <Image
                            src={lang.image.imageUrl}
                            alt={lang.image.description}
                            data-ai-hint={lang.image.imageHint}
                            fill
                            className="object-cover rounded-t-lg"
                            />
                        </div>
                    )}
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Code className="h-6 w-6" />
                            <span>Find the Error: {lang.name}</span>
                        </CardTitle>
                        <CardDescription>
                            Test your debugging skills by spotting the error in code snippets.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                    <Button asChild className="w-full">
                        <Link href={`/dashboard/courses/hard/${lang.language}`}>
                        Start Challenge <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    </CardContent>
                </Card>
                ))}
            </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
