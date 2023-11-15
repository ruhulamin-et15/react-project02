import React, { useState } from 'react'
import User from './User';

const Users = () => {
    // const [userName, setUserName] = useState("Ruhul Amin");
    // const [userId, setUserId] = useState(376);

    const [user, setUser] = useState({
        name: "Ruhul Amin",
        id: 376,
    })
  return (
    <>
    {/* <User userName={userName} userId={userId}/> */}

    <User user={user}/>
    
    </>
  )
}

export default Users;