/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lR6nTziBTfp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
import { Button } from "@/components/ui/button"
import useSWR from 'swr';
import WelcomeComponentWeekItem from "./WelcomeComponentWeekItem";
import { fetcher } from "@/lib/utils/fetcher";

export default function Component() {
    const { data, error } = useSWR('http://127.0.0.1:8000/api/courses/1/weeks', fetcher);
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>Loading...</div>;
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <div className="text-xl font-bold">Web Development Course</div>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <FilterIcon className="h-4 w-4" />
            <span className="sr-only sm:not-sr-only">Filter</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <DownloadIcon className="h-4 w-4" />
            <span className="sr-only sm:not-sr-only">Download</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 p-4 sm:p-6">
        <div className="grid gap-6">
        {
            data.map((week)=>(<WelcomeComponentWeekItem week={week}/>))
        }
        </div>
      </main>
    </div>
  )
}




function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}