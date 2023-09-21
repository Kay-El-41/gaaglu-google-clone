import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { BsFillMicFill } from "react-icons/bs"

export default function HomeSearch() {
  return (
    <>
      <form className="flex w-full mt-8 mx-auto items-center max-w-[90%] sm:max-w-xl lg:max-w-2xl border border-gray-200 focus-within:shadow-md px-5 py-3 rounded-full hover:shadow-md transition-shadow">
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input type="text" className="flex-grow focus:outline-none" />
        <BsFillMicFill className="text-lg text-gray-500 ml-3" />
      </form>

      <div className="flex mt-8 flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row justify-center">
        <button className="btn">Gaaglu Search</button>
        <button className="btn">I Am Feeling GLU!</button>
      </div>
    </>
  )
}
