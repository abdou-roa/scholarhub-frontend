"use client"
import React from 'react'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import useSWR from 'swr';
import { fetcher } from '@/lib/utils/fetcher';

function WelcomeComponentWeekItem({week}) {
    const { data, error } = useSWR(`http://127.0.0.1:8000/api/weeks/${week.week_number}/topics`, fetcher);
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>Loading...</div>;
  return (
    <Collapsible className="grid gap-4">
            <CollapsibleTrigger className="flex items-center justify-between rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
              <div className="flex items-center gap-4">
                
                <div>
                  <div className="text-lg font-medium">Week {week.week_number}</div>
                  <p className="text-muted-foreground">
                  {week.week_title}
                  </p>
                </div>
              </div>
              <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 pb-4">
              <div className="grid gap-4">
                {data.map(topic=>(
                    <div>
                    <div className="text-lg font-medium">{topic.topic_title} </div>
                    </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
  )
}

export default WelcomeComponentWeekItem


function ChevronDownIcon(props) {
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
        <path d="m6 9 6 6 6-6" />
      </svg>
    )
  }