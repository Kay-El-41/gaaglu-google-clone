"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { AiOutlineSearch } from "react-icons/ai"
import { BsFillMicFill } from "react-icons/bs"
import Image from "next/image"

export default function HomeSearch() {
  const [input, setInput] = useState("")
  const [isRandomSearchLoading, setIsRandomSearchLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    router.push(`/search/web?searchTerm=${input}`)
  }

  const handleRandomSearch = async () => {
    setIsRandomSearchLoading(true)
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0])
    if (!response) return
    router.push(`/search/web?searchTerm=${response}`)
    setIsRandomSearchLoading(false)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-8 mx-auto items-center max-w-[90%] sm:max-w-xl lg:max-w-2xl border border-gray-200 focus-within:shadow-md px-5 py-3 rounded-full hover:shadow-md transition-shadow"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className="text-lg text-gray-500 ml-3" />
      </form>

      <div className="flex mt-8 flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row justify-center">
        <button onClick={handleSubmit} className="btn">
          Gaaglu Search
        </button>
        <button
          onClick={handleRandomSearch}
          className="btn flex justify-center items-center"
        >
          {isRandomSearchLoading ? (
            <Image
              height={24}
              width={24}
              src="spinner.svg"
              alt="loading..."
            ></Image>
          ) : (
            "I Am Feeling GLU!"
          )}
        </button>
      </div>
    </>
  )
}
