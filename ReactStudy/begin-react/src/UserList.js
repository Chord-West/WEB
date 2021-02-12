import React from 'react';

const User = ({user}) =>{
    return(
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
        </div>
    );
}

const UserList = () => {
    const users = [
        {
            id : 1,
            username : 'kim',
            email : 'gustj2005@naver.com'
        },
        {
            id : 2,
            username : 'park',
            email : 'park2005@naver.com'
        },
        {
            id : 3,
            username : 'lee',
            email : 'lee2005@naver.com'
        },
    ];
    return(
      <div>
          {users.map((user,index) => (
              <User user={user} key={index}/>
          ))}
      </div>
    );
}

export default UserList;