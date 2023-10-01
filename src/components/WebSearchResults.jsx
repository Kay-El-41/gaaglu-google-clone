import Link from "next/link"
import React from "react"
import Parser from "html-react-parser"

export default function WebSearchResults({ results }) {
  return (
    <>
      {results?.map((result, idx) => (
        <div className="mb-8 max-w-xl" key={idx}>
          <div className=" group flex flex-col">
            <Link className="text-sm truncate " href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className="text-xl font-medium text-blue-500 truncate group-hover:underline decoration-blue-800"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
    </>
  )
}

// /   kind: 'customsearch#result',
//   title: 'Lecture - Wikipedia',
//   htmlTitle: '<b>Lecture</b> - Wikipedia',
//   link: 'https://en.wikipedia.org/wiki/Lecture',
//   displayLink: 'en.wikipedia.org',
//   snippet: "A lecture (from Latin: lēctūra 'reading') is an oral presentation intended to present information or teach people about a particular subject, for example by ...",
//   htmlSnippet: 'A <b>lecture</b> (from Latin: lēctūra &#39;reading&#39;) is an oral presentation intended to present information or teach people about a particular subject, for example by&nbsp;...',
//   cacheId: 'd9Pjta02fmgJ',
//   formattedUrl: 'https://en.wikipedia.org/wiki/Lecture',
//   htmlFormattedUrl: 'https://en.wikipedia.org/wiki/Lecture',
//   pagemap: [Object]
