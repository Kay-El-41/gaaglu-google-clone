import Link from "next/link"
import React from "react"
import { TbGridDots } from "react-icons/tb"

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm gap-x-4">
      <div className="flex space-x-4 items-center">
        <Link href={"#"} className="hover:underline">
          Glu-mail
        </Link>
        <Link href={"#"} className="hover:underline">
          Glu-Images
        </Link>
      </div>
      <TbGridDots className="bg-transparent cursor-pointer hover:bg-gray-200 rounded-full text-4xl p-2" />
      <button className="bg-blue-500 hover:shadow-md transition-shadow text-white px-6 py-2 font-medium rounded-md hover:brightness-105">
        Sign in
      </button>
    </header>
  )
}
