import { Act } from "../interfaces"
import fetchValContent from "../lib/fetchValContent"
import SearchForm from "./SearchForm"

const Homepage = async () => {
    const acts: Act[] = await fetchValContent()
    return (
        <main className='text-white'>
            <SearchForm acts={acts} />
        </main>
    )
}

export default Homepage
