"use client"
import React from "react"

import { usePathname, useSearchParams } from "next/navigation"
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs"
import Link from "next/link"

export default function PaginationButtons() {
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get("searchTerm")

  const startIndex = +searchParams.get("start") || 1

  return (
    <div className="text-blue-700 flex w-full sm:justify-start sm:space-x-20 justify-between pb-4 md:px-0">
      {startIndex > 10 && (
        <Link
          className="flex items-center flex-col gap-1"
          href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <BsChevronBarLeft className="text-xl"/>
          <span>Prev</span>
        </Link>
      )}
      <Link
        className="flex items-center flex-col gap-1"
        href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
      >
        <BsChevronBarRight className="text-xl"/>
        <span>Next</span>
      </Link>
    </div>
  )
}
