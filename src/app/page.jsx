import HomeHeader from "@/components/HomeHeader"
import HomeSearch from "@/components/HomeSearch"
import Logo from "@/components/Logo"
import React from "react"

export default function Home() {
  return (
    <>
      <HomeHeader />

      {/* BODY */}
      <div className="flex flex-col items-center mt-24">
        <Logo />
        <HomeSearch />
      </div>
    </>
  )
}
