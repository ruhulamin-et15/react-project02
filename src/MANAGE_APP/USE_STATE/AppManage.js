import React from 'react';
import Users from './Users';
import NewUser from './NewUser';
import UsersProvider from './UsersContext';

const AppManage = () => {
  
  return (
    <UsersProvider>
      <NewUser />
      <Users/>
    </UsersProvider>
  )
};

export default AppManage;