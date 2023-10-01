"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AiOutlineSearch } from "react-icons/ai"
import { BsFillMicFill } from "react-icons/bs"
import Image from "next/image"

export default function HomeSearch() {
  const router = useRouter()
  const [input, setInput] = useState("")
  const [randomWord, setRandomWord] = useState("Hello World")
  const [isVoiceListening, setIsVoiceListening] = useState(false)
  const [isRandomSearchLoading, setIsRandomSearchLoading] = useState(false)

  useEffect(() => {
    fetchRandomWord()
  }, [])

  const fetchRandomWord = async () => {
    setIsRandomSearchLoading(true)
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0])
    setRandomWord(response)
    setIsRandomSearchLoading(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    router.push(`/search/web?searchTerm=${input}`)
  }

  const handleRandomSearch = () => {
    router.push(`/search/web?searchTerm=${randomWord}`)
  }

  const handleVoiceSearch = () => {
    // This function uses the speech recognition api from browser.
    const voiceRecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition
    const voiceRecognitionListener = new voiceRecognitionAPI()

    // You need two functions to handle voice recognition

    // 1. onStart handler that will record the voice
    voiceRecognitionListener.onstart = () => {
      setIsVoiceListening(true)
    }
    // 2. onResult handler that will transcript the voice
    voiceRecognitionListener.onresult = (e) => {
      const transcript = e.results[0][0].transcript?.replace(".", "")
      // the transcript contain a lot of '.', remove this for better UX
      setInput(transcript)
      setIsVoiceListening(false)
    }
    // And finally start the voice recognition API
    voiceRecognitionListener.start()
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[90%] justify-between  mt-8 mx-auto items-center overflow-hidden sm:max-w-xl lg:max-w-2xl border border-gray-200 focus-within:shadow-md px-5 py-3 rounded-full hover:shadow-md transition-shadow"
      >
        <div>
          <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        </div>
        <input
          type="text"
          className="w-full focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {isVoiceListening && (
          <span className="text-sm text-gray-500">Listening...</span>
        )}
        <div className="cursor-pointer ml-3" onClick={handleVoiceSearch}>
          <BsFillMicFill
            className={`text-lg ${
              isVoiceListening ? "text-blue-500" : "text-gray-500"
            }`}
          />
        </div>
      </form>

      <div className="flex mt-8 flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row justify-center">
        <button onClick={handleSubmit} className="btn">
          Gaaglu Search
        </button>
        <button
          onClick={handleRandomSearch}
          className="btn flex justify-center items-center"
          disabled={isRandomSearchLoading}
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
