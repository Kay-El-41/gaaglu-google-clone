export const dynamic = "force dynamic"

import EmptyResult from "@/components/EmptyResult"
import PaginationButtons from "@/components/PaginationButtons"
import WebSearchResults from "@/components/WebSearchResults"
import React from "react"

const page = async ({ searchParams }) => {
  const startIndex = searchParams.start || "1"
  // await new Promise((resolve) => setTimeout(resolve, 10000))
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CX_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
  )

  if (!response.ok) {
    throw new Error("Something went wrong")
  }

  const data = await response.json()
  const results = data.items

  if (!results) {
    return <EmptyResult searchKeyWord={searchParams.searchTerm} />
  }

  return (
    <>
      <div className="px-4 md:pl-52">
        <p className="mt-2 my-4 text-gray-400 text-sm">
          About {data.searchInformation.formattedTotalResults} results (
          {data.searchInformation.formattedSearchTime} seconds)
        </p>

        <WebSearchResults results={results} />
        <div className="pb-10">
          <PaginationButtons />
        </div>
      </div>
    </>
  )
}

export default page

//   queries: { request: [ [Object] ], nextPage: [ [Object] ] },
//
// searchInformation: {
//   searchTime: 0.487849,
//   formattedSearchTime: '0.49',
//   totalResults: '2650000000',
//   formattedTotalResults: '2,650,000,000'
// },
//
// items[
// {
//   kind: 'customsearch#result',
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
// },
// {
//   kind: 'customsearch#result',
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
// },
// ]

// - // - // - // - // - // - // - // - // - // - //
