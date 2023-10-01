"use client"
import React, { useState } from "react"
import { RxCross2 } from "react-icons/rx"
import { BsFillMicFill } from "react-icons/bs"
import { AiOutlineSearch } from "react-icons/ai"
import { useRouter, useSearchParams } from "next/navigation"

export default function SearchBox() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const currentSearchTerm = searchParams.get("searchTerm") || ""

  const [searchKeyWord, setSearchKeyword] = useState(currentSearchTerm)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!searchKeyWord.trim()) return
    router.push(`/search/web?searchTerm=${searchKeyWord}`)
  }

  const handleClearSearch = (e) => {
    e.preventDefault()
    setSearchKeyword("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border max-w-3xl border-gray-200 flex-grow rounded-full shadow-lg px-5 py-3 ml-5 sm:ml-10 sm:mr-5 focus-within:border-blue-500"
    >
      <input
        type="text"
        className="w-full focus:outline-none"
        value={searchKeyWord}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={handleClearSearch}
      />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 cursor-pointer pl-4 border-l-2 border-gray-300 mr-3" />
      <AiOutlineSearch
        onClick={handleSubmit}
        className="text-2xl text-blue-500 hidden sm:inline-flex cursor-pointer"
      />
    </form>
  )
}
