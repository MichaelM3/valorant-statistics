'use client'
import { useState } from "react"
import { SearchFormProps } from "../interfaces"

const SearchForm = ({ acts }: SearchFormProps) => {
    const [userInput, setUserInput] = useState<string>("")
    return (
        <div>
            <input
                type="text"
                placeholder="Enter username here..."
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button className="">
                Search
            </button>
        </div>
    )
}

export default SearchForm
