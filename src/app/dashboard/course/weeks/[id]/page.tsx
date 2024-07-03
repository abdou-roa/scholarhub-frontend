/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iGfDBoI8pJz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import useSWR from "swr"
import { fetcher } from "@/lib/utils/fetcher"
import TopicListItem from "@/app/dashboard/components/TopicList"

export default function Component() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const searchParams = useSearchParams()
  const search = searchParams.get('id')
  const { data, error } = useSWR(`http://127.0.0.1:8000/api/weeks/${search}/topics`, fetcher);
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;
  return (
      <main className="flex-1 p-8">
        {
          data.map((topic)=>(
            <TopicListItem key={topic.topic_id} topic={topic}/>
          ))
        }
      </main>
    
  )
}

