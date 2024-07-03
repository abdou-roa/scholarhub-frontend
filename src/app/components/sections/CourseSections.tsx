/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2mrMjerOXgI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Collapsible, CollapsibleTrigger, CollapsibleChevron, CollapsibleContent } from "@/components/ui/collapsible"
import Link from "next/link"

export default function InnerSection() {
  return (
    <div className="container py-16 lg:py-16">    
    <div className="space-y-4">
    <h2 className="text-3xl font-bold lg:text-4xl">What You'll Learn</h2>
    <p className="mt-3 text-muted-foreground">
        For as long as there have been cities, the public square has
        been a fundamental part of the urban landscape - an open,
        approachable space to meet and engage with friends and
        neighbours. Space aims to capture this spirit of bringing people
        together in an exciting, welcoming environment.
    </p>

    <div className="space-y-4 pt-10">
      <Collapsible className="rounded-lg border bg-background shadow-sm">
        <CollapsibleTrigger className="flex items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-4">
            <BookIcon className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
          </div>
          <div className="h-5 w-5 text-muted-foreground" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-4 px-6 pb-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Lessons</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                Lesson 1: Understanding React and Its Ecosystem
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                Lesson 2: JSX and Rendering Elements
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                Lesson 3: Components and Props
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                Lesson 4: Component Lifecycle and State
                </Link>
              </li>
            </ul>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="rounded-lg border bg-background shadow-sm">
        <CollapsibleTrigger className="flex items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-4">
            <CodeIcon className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold">State and Props</h3>
          </div>
          <div className="h-5 w-5 text-muted-foreground" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-4 px-6 pb-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Lessons</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                Lesson 1: Managing State in React
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                Lesson 2: Lifting State Up
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                Lesson 3: Controlled and Uncontrolled Components
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                Lesson 4: PropTypes and DefaultProps
                </Link>
              </li>
            </ul>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="rounded-lg border bg-background shadow-sm">
        <CollapsibleTrigger className="flex items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-4">
            <ServerIcon className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold">Hooks</h3>
          </div>
          <div className="h-5 w-5 text-muted-foreground" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-4 px-6 pb-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Lessons</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                Lesson 1: Introduction to Hooks
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                Lesson 2: useState Hook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                Lesson 3: useEffect Hook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                Lesson 4: Custom Hooks
                </Link>
              </li>
            </ul>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="rounded-lg border bg-background shadow-sm">
        <CollapsibleTrigger className="flex items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-4">
            <RocketIcon className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold">Routing</h3>
          </div>
          <div className="h-5 w-5 text-muted-foreground" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-4 px-6 pb-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Lessons</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                Lesson 1: Introduction to React Router
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                Lesson 2: Nested Routes and Dynamic Routing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                Lesson 3: Programmatic Navigation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                Lesson 4: Route Guards and Authentication
                </Link>
              </li>
            </ul>
          </div>
        </CollapsibleContent>
      </Collapsible>
      </div>
    </div>
    </div>
  )
}

function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function CodeIcon(props) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function RocketIcon(props) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function ServerIcon(props) {
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
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}