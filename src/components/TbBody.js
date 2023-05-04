/* eslint-disable react/prop-types */
import React from 'react'
import { AiOutlineMore } from 'react-icons/ai'
import useTbBody from './hooks/useTbBody'
import Spinner from './viewProducts/spinner'
import UpdateStatusButton from './updatestatus'

const TbBody = ({ currentUsers }) => {
  const {
    handleRole,
    toggleActive,
    dropOption,
    activeDropdown,
    loadingState,
  } = useTbBody(currentUsers)

  return (
    <>
      {currentUsers.map((user, index) => (
        <tr
          data-testid="tb-row"
          key={index}
          className={`${index % 2 != 0 ? `bg-gray-100` : `bg-white`}`}
        >
          <td className="p-3 text-sm tracking-wide">
            <div className="flex items-center w-[250px]">
              <div className="userImg">
                <img
                  src={user.profilePic}
                  alt="userImg"
                  className="w-11 h-11 rounded-full "
                />
              </div>
              <div className="">
                <div className="flex justify-start flex-col userName mx-2 text-md basis-1/2">
                  <p className="font-md">{user.name}</p>
                  <p className="text-sm">{user.email}</p>
                </div>
              </div>
            </div>
          </td>
          <td className="p-3 text-md tracking-wide text-center">{user.role}</td>
          <td className="p-3 text-md tracking-wide text-center">
            {user.gender}
          </td>
          <td className="p-3 text-md tracking-wide text-center">
            {user.preferredLanguage}
          </td>
          <td className="p-3 text-md tracking-wide text-center">
            {new Date(user.birthdate).toLocaleDateString()}
          </td>
          <td className="p-3 text-md tracking-wide text-center">
            <UpdateStatusButton user={user} />
          </td>
          <td className=" tracking-wide text-center text-2xl">
            <div className="dropdown">
              {loadingState[index] ? (
                <Spinner withoutText={true} />
              ) : (
                <div
                  className="action drop-btn"
                  data-testid="drop-btn"
                  onClick={() => toggleActive(index)}
                >
                  <AiOutlineMore className="cursor-pointer" />
                </div>
              )}

              {activeDropdown === index && (
                <div className="drop-content absolute right-0 w-48 py-2 mt-2 bg-white bg-gray-100 rounded-md shadow-xl">
                  {dropOption.map((options, id) => (
                    <a
                      key={id}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white"
                      onClick={() => handleRole(user.id, options, index)}
                    >
                      Make {options}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </td>
        </tr>
      ))}
    </>
  )
}

export default TbBody
