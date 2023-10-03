export const dynamic = "force dynamic"

import EmptyResult from "@/components/EmptyResult"
import ImageSearchResult from "@/components/ImageSearchResult"
import React from "react"

const page = async ({ searchParams }) => {
  const startIndex = searchParams.start || "1"
  // await new Promise((resolve) => setTimeout(resolve, 10000))
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CX_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
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
      <div className="px-4  pb-10">
        <p className="mt-2 my-4 md:pl-52 text-gray-400 text-sm">
          About {data.searchInformation.formattedTotalResults} results (
          {data.searchInformation.formattedSearchTime} seconds)
        </p>

        <ImageSearchResult results={results} />
      </div>
    </>
  )
}

export default page
