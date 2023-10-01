import React from "react"

export default function Logo({ fontSize = "text-8xl" }) {
  return (
    <div className={`${fontSize} font-semibold select-none`}>
      <span className="text-blue-500">G</span>
      <span className="text-red-500">a</span>
      <span className="text-yellow-500">a</span>
      <span className="text-blue-500">g</span>
      <span className="text-green-500">l</span>
      <span className="text-red-500">u</span>
    </div>
  )
}
