import Link from "next/link"
import React from "react"
import PaginationButtons from "./PaginationButtons"

export default function ImageSearchResult({ results }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {results?.map((result, idx) => (
          <div key={idx}>
            <div className="group">
              <Link href={result.image.contextLink}>
                {/* We have to use img tag here since there will be images from multiple sources, Next Image will required adding domains in the config file which we can't with that many images */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={result.link}
                  alt={result.title}
                  className="h-60 group-hover:shadow-sm w-full object-contain transition-shadow"
                />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className="truncate group-hover:underline text-xl">
                  {result.title}
                </h2>
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className="text-gray-600 group-hover:underline">
                  {result.displayLink}
                </h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <PaginationButtons />
      </div>
    </div>
  )
}

// {
//     kind: 'customsearch#result',
//     title: 'Lecture - Wikipedia',
//     htmlTitle: '<b>Lecture</b> - Wikipedia',
//     link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/ADFA_Lecture_Theatres.jpg/1200px-ADFA_Lecture_Theatres.jpg',
//     displayLink: 'en.wikipedia.org',
//     snippet: 'Lecture - Wikipedia',
//     htmlSnippet: '<b>Lecture</b> - Wikipedia',
//     mime: 'image/jpeg',
//     fileFormat: 'image/jpeg',
//     image: {
//       contextLink: 'https://en.wikipedia.org/wiki/Lecture',
//       height: 799,
//       width: 1200,
//       byteSize: 1001478,
//       thumbnailLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8DFeRCOoIcOnYqlvO6MA6lWH16EnNbTVeG-E6bpsXPnypIKFVx0R6aA&s',
//       thumbnailHeight: 100,
//       thumbnailWidth: 150
//     }
//   },
