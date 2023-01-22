'use client'
import { Act, SearchFormProps } from "../interfaces"

const SearchForm = ({ acts }: SearchFormProps) => {
    console.log(acts)
    return (
        <div>
        SearchForm
            {/* {acts.map((act: Act) => (
                <span key={act.id}>{act.name}</span>
            ))} */}
        </div>
    )
}

export default SearchForm
