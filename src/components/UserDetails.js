import React from 'react';

const UserDetails = ({ user }) => {
  console.log(user, 'user')
  return(
    <div className="container">
    {!user ? (<>
        <h3>未登录</h3>
    </>) : (<>
        <h3>欢迎 <span className="username">{user.name}.</span></h3>
        <h3>您有如下权限:</h3>
        {user.permissions.map(p => <div key={p}><p className="userpermission-text">{p}</p></div>)}
    </>)}
    </div>
  )};

export default UserDetails;
