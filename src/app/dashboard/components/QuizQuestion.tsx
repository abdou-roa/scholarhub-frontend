"use client";

import { fetcher } from "@/lib/utils/fetcher";
import { ButtonHTMLAttributes, useRef, useState } from "react";
import useSWR from "swr";

export default function QuizQuestion({ id, title ,upgradeScoore}) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const { data, error } = useSWR(`http://127.0.0.1:8000/api/quiz/question/${id}/choices`, fetcher);
  const refData = useRef();

  // Handle answer selection
  const handleAnswerClick = (answerId) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [id]: answerId,
    }));
  };

  // Error handling
  if (error) return <div>Error: Failed to load choices.</div>;

  // Loading state
  if (!data) return <div>Loading...</div>;

  // Rendering the choices
  return (
    <div key={id} className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {data.map((choice) => (
          <button
            key={choice.choice_id}
            onClick={(e) => {handleAnswerClick(choice.choice_id)
                const btn = (e.nativeEvent.target as HTMLButtonElement).getAttribute('aria-expanded');              
                upgradeScoore(btn)
            
            }}
            className={`px-4 py-2 rounded-md transition-colors ${
              selectedAnswers[id] === choice.choice_id ? 'bg-blue-200' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            aria-expanded = {choice.is_correct}
          >
            {choice.choice_text}
          </button>
        ))}
      </div>
    </div>
  );
}
