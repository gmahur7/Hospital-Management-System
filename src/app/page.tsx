// import ModeToggle from "@/components/theme/theme-toggler";
import { Typography } from "@/components/ui/typography";
// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-4xl">
        <Typography variant="h1" className="mb-6" color="destructive">
          Welcome to Your App
        </Typography>

        <Typography variant="p" className="mb-8">
          This is your new Next.js application with a complete typography
          system. The system includes four carefully selected fonts for
          different use cases.
        </Typography>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <Typography variant="h3" className="mb-3">
              Font System
            </Typography>
            <Typography variant="p" className="mb-4">
              Your typography system includes:
            </Typography>
            <ul className="space-y-2">
              <li className="font-poppins">• Poppins - For display text</li>
              <li className="font-montserrat">• Montserrat - For headings</li>
              <li className="font-merriweather">
                • Merriweather - For body text
              </li>
              <li className="font-roboto-mono">
                • Roboto Mono - For code & captions
              </li>
            </ul>
          </div>

          <div className="rounded-lg border p-6">
            <Typography variant="h3" className="mb-3">
              Quick Links
            </Typography>
            <Typography variant="p" className="mb-4">
              Explore the typography system:
            </Typography>
            <Link
              href="/typography"
              className="text-primary font-medium hover:underline"
            >
              View Typography Examples →
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <Typography variant="h2" className="mb-4">
            Usage Example
          </Typography>
          <div className="space-y-4">
            <Typography variant="p">
              Here's an example of how to use the Typography component:
            </Typography>
            <pre className="bg-muted font-roboto-mono rounded-lg p-4 text-sm">
              {`import { Typography } from '@/components/ui/typography'

function Example() {
  return (
    <div>
      <Typography variant="display-lg">
        Page Title
      </Typography>
      <Typography variant="h2">
        Section Heading
      </Typography>
      <Typography variant="body-base">
        Your content goes here...
      </Typography>
    </div>
  )
}`}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}
