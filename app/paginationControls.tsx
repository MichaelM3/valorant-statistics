import { PaginationControlsProps } from "../interfaces"
import { IoPlaySkipForwardSharp, IoPlaySkipBackSharp, IoPlaySharp } from "react-icons/io5"

const PaginationControls = ({ handleClick, currentPage, maxPlayers, lastPage }: PaginationControlsProps) => {
    return (
        <div className='flex justify-end'>
            <span
                className='bg-slate-900 w-14 h-14 flex justify-center items-center mr-2 transition-colors duration-200 ease-in-out hover:bg-red-400 hover:cursor-pointer'
                onClick={() => handleClick(-10)}
            >
                <IoPlaySkipBackSharp size={35} />
            </span>
            <span
                className='bg-slate-900 w-14 h-14 flex justify-center items-center mr-2 transition-colors duration-200 ease-in-out hover:bg-red-400 hover:cursor-pointer'
                onClick={() => handleClick(-1)}
            >
                <IoPlaySharp className='rotate-180' size={35} />
            </span>
            <span className="bg-slate-900 flex justify-center items-center w-80 h-14">{currentPage}/{lastPage}</span>
            <span
                className='bg-slate-900 w-14 h-14 flex justify-center items-center ml-2 transition-colors duration-200 ease-in-out hover:bg-red-400 hover:cursor-pointer'
                onClick={() => handleClick(1)}
            >
                <IoPlaySharp size={35} />
            </span>
            <span
                className='bg-slate-900 w-14 h-14 flex justify-center items-center ml-2 transition-colors duration-200 ease-in-out hover:bg-red-400 hover:cursor-pointer'
                onClick={() => handleClick(10)}
            >
                <IoPlaySkipForwardSharp size={35} />
            </span>
        </div>
    )
}

export default PaginationControls
