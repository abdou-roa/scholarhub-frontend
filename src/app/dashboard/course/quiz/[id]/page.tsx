/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8fLtuEBXmmT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { fetcher } from "@/lib/utils/fetcher"
import useSWR from "swr"
import QuizQuestion from "@/app/dashboard/components/QuizQuestion"

export default function Component() {
    const [showResults, setShowResults] = useState(false)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [score, setScore] = useState(0)

    const upgradeScoore = (e) => {
      console.log(e);
      e=='true' ? setScore(prevScore => prevScore + 1) : setScore(prevScore => {const newScore = prevScore - 1;return newScore < 0 ? 0 : newScore;});
      console.log(score)
  };

    // const fetchQuestionchoices =  async (question_id) =>{
    //     const Token = "Token 993d1875ae14b23eaab542f425a64cab35bea196"
    //     try{
    //         const response = await fetch(`http://127.0.0.1:8000/api/quiz/question/${question_id}/choices`,{
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `${Token}`,
    //             }
    //         })
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //           }
    //           const data = await response.json();
    //             setLoading(false);
    //             console.log(data)
    //           return data;
    //     }catch (error) {
    //         //setError(error);
    //         setLoading(false);
    //         console.error('Error fetching question choices:', error);
    //         return null;
    //       }
    // }

    const searchParams = useSearchParams() 
    const search = searchParams.get('id')
    const {data: data1, error: error1} = useSWR(`http://127.0.0.1:8000/api/quiz/${search}/questions`, fetcher)
    const { data: data2, error: error2, isLoading: isLoading2 } = useSWR(
        `http://127.0.0.1:8000/api/quiz/${search}`,
        fetcher
      );
    if (error1 || error2) return <div>Error: {error1.message}</div>;
    if (!data1 || !data2) return <div>Loading...</div>;
  const quiz =  {
    title: data2[0].quiz_title,
    description: "Test your knowledge with this fun quiz!",
    questions: [
      {
        text: data1[0].question_text,
        choices:["Mars", "Jupiter", "Venus"],

        correctAnswer: 1,
      },
      {
        text: "Which planet is known as the 'Red Planet'?",
        choices: ["Mars", "Jupiter", "Venus"],
        correctAnswer: 0,
      },
      {
        text: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
        correctAnswer: 2,
      },
    ],
  }

  const handleSubmit = () => {
    setShowResults(true)
  }
  const getScore = () => {
    return score
  }
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{quiz.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{quiz.description}</p>
        {
            
                data1.map(question => (
                        <QuizQuestion 
                        key={question.question_id} 
                        id={question.question_id} 
                        title={question.question_text}
                        upgradeScoore={upgradeScoore}
                        />
                      ))

        }
        
        {}
        {showResults && (
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">
              You scored {getScore()} out of {quiz.questions.length}
            </h2>
          </div>
        )}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}