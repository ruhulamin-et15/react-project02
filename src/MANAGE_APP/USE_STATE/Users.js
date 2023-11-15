import React from 'react';
import { useUsersContext } from './useUsersContext';
import User from './User';

const Users = () => {
  const {users} = useUsersContext();

  return (
    <section className='users'>
        {users.map(user => <User key={user.id} user={user} />)}
    </section>
  )
};

export default Users;