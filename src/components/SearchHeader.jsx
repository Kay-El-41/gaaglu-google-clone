import React from "react"
import Logo from "./Logo"
import SearchBox from "./SearchBox"
import { RiSettings3Line } from "react-icons/ri"
import { TbGridDots } from "react-icons/tb"
import SearchHeaderOptions from "./SearchHeaderOptions"

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <div>
          <Logo fontSize="text-2xl sm:text-4xl " />
        </div>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex items-center space-x-2">
          <RiSettings3Line className="search-headers-icons" />
          <TbGridDots className="search-headers-icons" />
        </div>
        <button className="hidden md:inline-flex ml-2 bg-blue-500 hover:shadow-md transition-all text-white px-6 py-2 font-medium rounded-md hover:brightness-105">
          Sign in
        </button>
      </div>

      <SearchHeaderOptions />
    </header>
  )
}
