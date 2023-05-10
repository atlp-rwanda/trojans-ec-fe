import React, { useEffect } from 'react'
// import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import disableThunk from '../redux/features/actions/disable'
import usersThunk from '../redux/features/actions/users'

const DisableAccount = () => {
  const dispatch=useDispatch()
  const { users }=useSelector(state=>state.users)
  const disable=(id)=>{
    dispatch(disableThunk(id))
  }
  useEffect(()=>{
    dispatch(usersThunk())
  },[])
  return (
    <>
      <div className="disable-list" data-testid='disable-list'>
        <h1>Accounts</h1>
        {users &&
          users != null &&
          users.map((user) => (
            <div className="sect" key={user.id}>
              <div className="image">
                <img src={user.profilePic} alt="Img" />
              </div>
              <div className="address">
                <h2>{user.name}</h2>
                <h3>{user.email}</h3>
              </div>
              <div>
                <button className={`btn ${user.status==="active"? '' : 'active' }`} onClick={()=>disable(user.id)}>{user.status==="active"? 'Disable' : 'Enable' }</button>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}
export default DisableAccount
