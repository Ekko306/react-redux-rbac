import React from 'react';

const UserDetails = ({ user }) => {
  console.log(user, 'user')
  return(
    <div className="container">
    {!user ? (<>
        <h3>Not logged in</h3>
    </>) : (<>
        <h3>Welcome <span className="username">{user.name}.</span></h3>
        <h3>You have the following permissions:</h3>
        {user.permissions.map(p => <div key={p}><p className="userpermission-text">{p}</p></div>)}
    </>)}
    </div>
  )};

export default UserDetails;
