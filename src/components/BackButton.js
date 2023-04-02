import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCaretLeft } from "react-icons/ai";

const BackButton = () => {
  return (
    <div>
        <button className='flex items-center bg-primary text-white px-3 py-1 rounded-md'> 
            <AiFillCaretLeft/> 
            <Link to="/">Back</Link>
        </button>
    </div>
  )
}

export default BackButton
