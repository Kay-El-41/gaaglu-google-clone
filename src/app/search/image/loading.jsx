import React from "react"

const loaderArray = [1, 2, 3, 4]

export default function loading() {
  return (
    <>
      <div className="flex sm:space-x-4 flex-col sm:flex-row">
        {loaderArray.map((loader) => (
          <div className="animate-pulse pt-10 mx-2" key={loader}>
            <div className="h-48 w-60 mb-4 bg-gray-200 rounded-md"></div>
            <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
            <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
          </div>
        ))}
      </div>
    </>
  )
}
