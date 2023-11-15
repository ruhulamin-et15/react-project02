import React, { createContext, useState } from 'react';

export const UsersContext = createContext({});

const UsersProvider = ({children}) => {
    //API Data
    const [users, setUsers] = useState([
    //     {id: 1, username: "Ruhul Amin", email:"ruhulamin.et15@gmail.com" }
    ]);

      return <UsersContext.Provider value={{users, setUsers}}> 
        {children}
      </UsersContext.Provider>
};

export default UsersProvider;

