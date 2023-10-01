import React from "react"

const page = async ({ searchParams }) => {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CX_KEY}&q=${searchParams.searchTerm}`
  )
  const data = await response.json()
  const results = data.items

  return <>{results && results.map((result) => <h1>{result.title}</h1>)}</>
}

export default page


//   queries: { request: [ [Object] ], nextPage: [ [Object] ] },

// searchInformation: {
//   searchTime: 0.487849,
//   formattedSearchTime: '0.49',
//   totalResults: '2650000000',
//   formattedTotalResults: '2,650,000,000'
// },


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
// ]
