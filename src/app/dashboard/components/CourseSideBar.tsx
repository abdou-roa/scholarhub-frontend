"use client"
import React, {useState} from "react";
import useSWR from 'swr';

import { fetcher } from "@/lib/utils/fetcher";
import Link from 'next/link';


export default function CourseSideBar(){
    //const { token } = useContext(AuthContext); // Get the token from context
    const [clickedItem, setClickedItem] = useState(null);

    const handleItemClick = (item) => {
        setClickedItem(item);  // Update state with the clicked item
    };
    const { data, error } = useSWR('/courses/1/weeks', fetcher);
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>Loading...</div>;
    return (
        <aside className="w-64 p-4 border-r">
        <div className="mb-8">
          <h1 className="text-lg font-bold">Master React</h1>
          <p className="text-sm text-muted-foreground">EMSI: École Marocaine des Sciences de l'Ingénieur</p>
        </div>
        <nav className="space-y-4">
          <div>
            <h2 className="text-sm font-bold">Contenu Cours</h2>
            <ul className="mt-2 space-y-2">
              {
                data.map((week)=>(
                    <Link href="/dashboard/course/weeks/[id]" as={`/dashboard/course/weeks/${week.week_number}?id=${week.week_number}`}>
                        <li key={week.week_number} className={clickedItem === `Item ${week.week_number}` ? "flex items-center space-x-2 bg-gray-100 p-2 rounded cursor-pointer" : "flex items-center space-x-2 p-2 cursor-pointer"} onClick={() => handleItemClick(`Item ${week.week_number}`)}>
                            {/* <CircleCheckIcon className="w-4 h-4 text-green-500" /> */}
                            <span>Semaine {week.week_number}</span>
                        </li>
                    </Link>
                ))
              }
              
              {/* <li className="flex items-center space-x-2">
                <CircleCheckIcon className="w-4 h-4 text-green-500" />
                <span>Semaine 4</span>
              </li> */}

            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold">Notes</h2>
          </div>
          <div>
            <h2 className="text-sm font-bold">Notes Personnelles</h2>
          </div>
          <div>
            <h2 className="text-sm font-bold">Forums de discussion</h2>
          </div>
        </nav>
      </aside>
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