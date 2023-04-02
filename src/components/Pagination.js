import React from 'react'

// eslint-disable-next-line react/prop-types
const Pagination = ({totalUsers, usersPerPage, setCurrentPage, currentPage}) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pages.push(i)
    }
    return (
    <div>
        {
            pages.map((page,index)=>(
                <button className={`pag-btn ${page === currentPage ? `active` : ''}`}  key={index} onClick={() => setCurrentPage(page)}>{page}</button>
            ))
        }
    </div>
  )
}

export default Pagination
