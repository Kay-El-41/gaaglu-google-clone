"use client"
import React from "react"
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function SearchHeaderOptions() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const searchTerm = searchParams.get("searchTerm")

  function selectTab(tab) {
    router.push(
      `/search/${tab === "All" ? "web" : "image"}?searchTerm=${searchTerm}`
    )
  }

  return (
    <div className="flex select-none border-b border-gray-200 w-full justify-star md:pl-52">
      <div
        onClick={() => selectTab("All")}
        className={`${
          pathname === "/search/web" && "!text-blue-600 !border-blue-600"
        } flex items-center space-x-2 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2`}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>

      <div
        onClick={() => selectTab("Images")}
        className={`${
          pathname === "/search/image" && "!text-blue-600 !border-blue-600"
        } flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2`}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  )
}
