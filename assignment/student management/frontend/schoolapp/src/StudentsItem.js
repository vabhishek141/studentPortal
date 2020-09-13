import React from 'react';

//import './UserItem.css';

const StudentsItem = props => {
  return (
    <li className="user-item">
    <div>
    {props.name} {props.email} 

    </div>
          
    </li>
  );
};

export default StudentsItem;