import React from 'react'

const TbHeader = () => {
  return (
    <>
        <tr className='bg-gray-200'>
            <th className='p-3 text-sm tracking-wide text-center w-[250px]' data-testid='th'>Name</th>
            <th className='p-3 text-sm tracking-wide text-center'>Role</th>
            <th className='p-3 text-sm tracking-wide text-center'>Gender</th>
            <th className='p-3 text-sm tracking-wide text-center'>PreferredLanguage</th>
            <th className='p-3 text-sm tracking-wide text-center'>Birthday</th>
            <th className='p-3 text-sm tracking-wide text-center'>Status</th>
            <th className=' text-sm tracking-wide text-center'></th>
        </tr>
    </>
  )
}

export default TbHeader
