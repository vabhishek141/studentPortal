import React from 'react';

import StudentsItem from './StudentsItem';
import './StudentsItem.css';

const StudentsList = props => {
 

  return (

    <div className= "studentItem">
       <ul >
     
     <StudentsItem 
       
       name={props.name}
       email={props.email}

      
     />
  
 </ul>
    </div>
   
  );
};

export default StudentsList;


