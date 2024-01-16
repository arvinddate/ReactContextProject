import React, { useContext } from 'react'
import UserContext from '../context/userContext'

const Profile = () => {
  const {user}=useContext(UserContext);
  if(!user) return <div>Please Login</div>
  return (
    <div>
    <h2>Profile</h2>
    <p> Welcome! {user.userName}</p>
      
    </div>
  )
}

export default Profile
