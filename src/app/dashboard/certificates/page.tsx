import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CertificatesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Your Certificates</h1>
        <p className="text-muted-foreground">
          A showcase of your accomplishments.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>
            This section is under construction. Your earned certificates will appear here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Complete a course to earn your first certificate!</p>
        </CardContent>
      </Card>
    </div>
  );
}
