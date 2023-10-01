"use client"
// Error pages must be client side
import React, { useEffect } from "react"

export default function Error({ error, reset }) {

  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div className="flex flex-col justify-center items-center py-10">
      <h1 className="text-3xl mb-4">Something Went Wrong</h1>
      <button onClick={() => reset()} className="test-blue-500">Try Again</button>
    </div>
  )
}
