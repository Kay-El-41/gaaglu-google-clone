import React from "react"
import CountryLookup from "./CountryLookup"

export default function Footer() {
  return (
    <footer className="w-full text-sm text-gray-500 bg-[#f2f2f2]">
      <div className="border-b px-8 py-3">
        <CountryLookup />
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-7 sm:space-y-0 px-8 py-3">
        <ul className="flex flex-wrap justify-center gap-y-6 items-center space-x-6">
          <li className="links">About</li>
          <li className="links">Advertising</li>
          <li className="links">Business</li>
          <li className="links">How Search Works</li>
        </ul>
        <ul className="flex items-center flex-wrap gap-y-6  justify-center space-x-6">
          <li className="links">Privacy</li>
          <li className="links">Terms</li>
          <li className="links">Settings</li>
        </ul>
      </div>
    </footer>
  )
}
