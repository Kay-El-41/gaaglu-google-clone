import React from "react"

const loaderArray = [1, 2, 3, 4]

export default function loading() {
  return (
    <>
      {loaderArray.map((loader) => (
        <div
          className="mx-2 pt-8 max-w-6xl lg:pl-52 animate-pulse"
          key={loader}
        >
          <div className="bg-gray-200 rounded-full mb-2.5 w-48 h-2.5"></div>
          <div className="bg-gray-200 rounded-full mb-2.5 h-3.5 w-[360px]"></div>
          <div className="bg-gray-200 rounded-full mb-2.5 w-[560px] h-2.5 "></div>
          <div className="bg-gray-200 rounded-full mb-2.5 h-2.5 w-[560px]"></div>
        </div>
      ))}
    </>
  )
}
