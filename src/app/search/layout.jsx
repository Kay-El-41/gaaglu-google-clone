import SearchHeader from "@/components/SearchHeader"

export const metadata = {
  title: "Gaaglu - Gaaglu Search",
  description: "Gaaglu is a simple google clone created by next JS 13",
}

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  )
}
