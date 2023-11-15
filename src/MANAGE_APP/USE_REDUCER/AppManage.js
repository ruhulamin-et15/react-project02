import React from 'react';
import Users from './Users';
import NewUser from './NewUser';
import UsersProvider from './UsersContext';

const AppManage = () => {
  
  return (
    <UsersProvider>
      <div>
      <NewUser />
      <Users/>
      </div>
    </UsersProvider>
  )
};

export default AppManage;