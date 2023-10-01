import React from "react"

export default function EmptyResult({ searchKeyWord }) {
  return (
    <div className="px-4 md:pl-52">
      <p className="mt-2 mb-10 text-gray-400">About 0 results (0.20 seconds)</p>
      <div>
        Your search - <span className="font-bold">{searchKeyWord}</span> - did
        not match any documents.
        <h3 className="my-3">Suggestions:</h3>
        <ul className="px-8">
          <li className="list-disc">
            Make sure that all words are spelled correctly.
          </li>
          <li className="list-disc">Try different keywords.</li>
          <li className="list-disc">Try more general keywords.</li>
        </ul>
      </div>
    </div>
  )
}
