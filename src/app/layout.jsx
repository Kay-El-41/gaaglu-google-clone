import Footer from "@/components/Footer"
import "./globals.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({ weight: "400", subsets: ["latin"] })

export const metadata = {
  title: "Gaaglu - A Google Clone",
  description: "Gaaglu is a simple google clone created by next JS 13",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        {children}
        {/* {Footer} */}
        <div className="mt-auto mb-0 relative">
          <Footer />
        </div>
      </body>
    </html>
  )
}
