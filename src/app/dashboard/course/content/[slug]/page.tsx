/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FK5gF8Vfqzy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { Button } from "@/components/ui/button"
import { fetcher } from "@/lib/utils/fetcher"
import { useSearchParams } from "next/navigation"
import useSWR from "swr"

export default function Component() {
    const searchParams = useSearchParams()
    const search = searchParams.get('slug')
    const { data, error } = useSWR(`http://127.0.0.1:8000/api/content/${search}`, fetcher);
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>Loading...</div>;
    console.log(data[0])
    return (
        <div className="container fluid flex flex-col gap-8">
          <div className="px-4 md:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {data[0].content_title}
            </h1>
            <p>{data[0].content_description}</p>
          </div>
      
          {data[0].content_type === "video" ? (
            <div className="rounded-xl overflow-hidden">
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${data[0].content_url}`}
                frameBorder="0"
                allowFullScreen
                />
            </div>
          ) : data[0].content_type === "pdf" ? (
            <div className="px-4 md:px-6 lg:px-8">
              <div className="bg-muted rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">Course Materials</h2>
                <div className="flex flex-col gap-4">
                  <div className="bg-background rounded-xl overflow-hidden">
                    <div className="h-[600px] w-full">
                      <iframe
                        src={data[0].content_url}
                        className="w-full h-full"
                        frameBorder="0"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline">Download PDF</Button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      );
      
}