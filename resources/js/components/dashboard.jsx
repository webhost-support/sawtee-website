import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function dashboard() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex-1 bg-muted/40 p-6">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Recent Blog Posts</h1>
          <Button variant="outline" size="sm">
            <PlusIcon className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </header>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>How to Build a Successful Blog</CardTitle>
              <CardDescription>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <UserIcon className="h-4 w-4" />
                  <span>John Doe</span>
                  <CalendarIcon className="h-4 w-4" />
                  <span>May 1, 2023</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                In this post, we'll explore the key strategies and best
                practices for building a successful blog that attracts and
                engages your audience.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>The Future of Content Marketing</CardTitle>
              <CardDescription>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <UserIcon className="h-4 w-4" />
                  <span>Jane Smith</span>
                  <CalendarIcon className="h-4 w-4" />
                  <span>April 15, 2023</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Discover the latest trends and emerging technologies that are
                shaping the future of content marketing.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>SEO Strategies for Bloggers</CardTitle>
              <CardDescription>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <UserIcon className="h-4 w-4" />
                  <span>Michael Johnson</span>
                  <CalendarIcon className="h-4 w-4" />
                  <span>March 30, 2023</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Learn the essential SEO techniques and best practices to help
                your blog rank higher in search engine results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
