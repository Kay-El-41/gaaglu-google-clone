"use client"
import React, { useEffect, useState } from "react"

export default function CountryLookup() {
  const [country, setCountry] = useState("United States")

  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_EXTREME_IP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountry(`${data.city}, ${data.country} (${data.countryCode})`)
      })
  }, [])

  return (
    <div className="flex gap-2 items-center">
      <div className="bg-green-500 rounded-full h-2 w-2"></div>
      {country}
    </div>
  )
}
