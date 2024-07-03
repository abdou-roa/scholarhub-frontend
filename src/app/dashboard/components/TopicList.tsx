"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import useSWR from "swr"
import { fetcher } from "@/lib/utils/fetcher"
import Link from "next/link"


export default function TopicListItem(props) {
    const [isCollapsed, setIsCollapsed] = useState(true)
    const {topic} = props

    const { data: data1, error: error1 } = useSWR(`http://127.0.0.1:8000/api/topic/${props.topic.topic_id}/content`, fetcher);

    const { data: data2, error: error2, isLoading: isLoading2 } = useSWR(
    `http://127.0.0.1:8000/api/quiz/${props.topic.topic_id}`,
    fetcher
  );
    console.log(data2)
    if (error1 || error2) return <div>Error: {error1.message}</div>;
    if (!data1 || !data2) return <div>Loading...</div>;

    return (
        <>
        <div className="border-b border-t pb-4 mb-4 mt-3">
            <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">{topic.topic_title}</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)}>
                <ChevronsDownUpIcon className="w-4 h-4" />
            </Button>
            </div>
            <div className="flex space-x-4 mt-2 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
                <CirclePlayIcon className="w-4 h-4" />
                <span>Toutes les vidéos terminées</span>
            </div>
            <div className="flex items-center space-x-1">
                <BookOpenIcon className="w-4 h-4" />
                <span>Toutes les lectures terminées</span>
            </div>
            <div className="flex items-center space-x-1">
                <ClipboardCheckIcon className="w-4 h-4" />
                <span>Toutes les évaluations notées sont complétées</span>
            </div>
            </div>
            </div>
            {!isCollapsed && (
            <>
            <p className="mb-4">
                Cette semaine nous étudions comment étendre les opérateurs du langage C++ à nos propres classes.
            </p>
            <ul className="space-y-4">
                {
                    data1.map((content)=>(
                        <Link href="/dashboard/course/content/[slug]" as={`/dashboard/course/content/${content.content_slug}?slug=${content.content_slug}`}>
                            <li className="flex items-start space-x-2 space-y-4">
                                <CircleCheckIcon className="w-4 h-4 text-green-500" />
                                <div>
                                    <h3 className="font-bold">{content.content_title}</h3>
                                    <p className="text-sm text-muted-foreground">{content.content_type} • {content.content_duration.substring(7, 11)} min</p>
                                </div>
                            </li>
                        </Link>
                    ))
                }
                {
                    data2.map((quiz)=>(
                        <Link href="/dashboard/course/quiz/[id]" as={`/dashboard/course/quiz/${quiz.quiz_id}?id=${quiz.quiz_id}`}>
                            <li className="flex items-start space-x-2">
                                <CircleCheckIcon className="w-4 h-4 text-green-500" />
                                <div>
                                    <h3 className="font-bold">{quiz.quiz_title}</h3>
                                    <Badge variant="secondary" className="mt-1">
                                    Noté
                                    </Badge>
                                    <p className="text-sm text-muted-foreground">Quiz • 6 questions • Note 83,33 %</p>
                                </div>
                            </li>
                        </Link>
                    ))
                }
                
                <li className="flex items-start space-x-2">
                <CircleCheckIcon className="w-4 h-4 text-green-500" />
                <div>
                    <h3 className="font-bold">Exercices</h3>
                    <p className="text-sm text-muted-foreground">Lecture • 1 h 30 min</p>
                </div>
                </li>
                <li className="flex items-start space-x-2">
                <CircleCheckIcon className="w-4 h-4 text-green-500" />
                <div>
                    <h3 className="font-bold">Surcharge des opérateurs</h3>
                    <Badge variant="secondary" className="mt-1">
                    Noté
                    </Badge>
                    <p className="text-sm text-muted-foreground">Exercice de programmation • 1 h 30 min • Note 100 %</p>
                </div>
                </li>
            </ul>
            </>
            )}
        </>
    )
}

function BookOpenIcon(props) {
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
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    )
  }
  
  
  function ChevronUpIcon(props) {
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
        <path d="m18 15-6-6-6 6" />
      </svg>
    )
  }
  
  
  function ChevronsDownUpIcon(props) {
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
        <path d="m7 20 5-5 5 5" />
        <path d="m7 4 5 5 5-5" />
      </svg>
    )
  }
  
  
  function CircleCheckIcon(props) {
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
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }
  
  
  function CirclePlayIcon(props) {
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
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    )
  }
  
  
  function ClipboardCheckIcon(props) {
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
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    )
  }