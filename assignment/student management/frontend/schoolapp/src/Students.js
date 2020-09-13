//const Students = ()=> {

//     const [setIsLoading] = useState(false);
//     const [error, setError] = useState();
//     const [loadedStudents, setLoadedStudents] = useState();

// useEffect(() => {
//         const sendRequest = async () => {
//       try{

//   const response = await fetch('http://localhost:7000/student');

//   const responseData = await response.json();
//   console.log(response);
//   if (!response.ok){
//       throw new Error(responseData.message);
//   }
//   setLoadedStudents(responseData.Students);
//        setIsLoading(false);
//       }catch(err){
//             setError(err.messsage);
//       }

//         };
//         sendRequest();
// }, []);
//  return <StudentsList items= {loadedStudents} />

//console.log(response);

//   return  <div>
//       <p>hi...................</p>
//   </div>
// }

// export default Students ;

// import React, { Component } from 'react';
// import MaterialTableDemo from './StudentTable';
// import axios from 'axios';

// import StudentsList from './StudentsList';

// export class Students extends Component {
//   state = {
//     students: []
//   };

//   componentDidMount() {
//     axios.get('http://localhost:7000/student').then(response => {
//       this.setState({ students: response.data });
//       console.log(response);
//     });
//   }

//   render() {
//     const stu = this.state.students.map(student => {
//       return <MaterialTableDemo name={student.name} email={student.email} />;
//     });

//     return <div>{stu}</div>;
//   }
// }

// export default Students;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter, useParams } from 'react-router-dom';

import MaterialTable from 'material-table';
import './StudentsItem.css';
const columns = [
  { title: 'Name', field: 'name' },
  { title: 'Email', field: 'email' },
  { title: 'Gender', field: 'gender' },
  { title: 'Class', field: 'class', editable: 'onAdd' },
  { title: 'Birthdate', field: 'birthDate' },
  { title: 'Address', field: 'address' },
  { title: 'ContactNo', field: 'contactNo', type: 'numeric' }
  // { title: 'City', field: 'city' },
  // {
  //   title: 'State',
  //   field: 'state',
  //   lookup: { 1: 'MP', 2: 'MH', 3: 'DH', 4: 'GU' }
  // },
  // { title: 'Country', field: 'country', lookup: { 91: 'India' } },
  // { title: 'PostalCode', field: 'postalCode', type: 'numeric' }
];

const baseUrl = 'http://localhost:7000/student';

const Students = props => {
  const [data, setData, setState] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const getdata = async () => {
    await axios.get(baseUrl).then(response => {
      setData(response.data);
    });
  };

  const em = useParams().email;
  const filtered = data.filter(obj => obj.email === em);

  useEffect(() => {
    getdata();
  }, []);

  return (
    <MaterialTable
      title="Editable Example"
      columns={columns}
      data={filtered}
      //   editable={{
      //     onRowAdd: newData =>
      //       new Promise(resolve => {
      //         setTimeout(() => {
      //           resolve();
      //           //   setState(prevState => {
      //           //     const data = [...prevState.data];
      //           //     data.push(newData);
      //           //     return { ...prevState, data };
      //           //   });
      //           // }, 600);
      //           console.log('Added');
      //         });
      //       }),
      //     onRowUpdate: (newData, oldData) =>
      //       new Promise(resolve => {
      //         setTimeout(() => {
      //           resolve();
      //           if (oldData) {
      //             // setState(prevState => {
      //             //   const data = [...prevState.data];
      //             //   data[data.indexOf(oldData)] = newData;
      //             //   return { ...prevState, data };
      //             // });
      //             console.log('Updated');
      //           }
      //         }, 600);
      //       }),
      //     onRowDelete: oldData =>
      //       new Promise(resolve => {
      //         setTimeout(async () => {
      //           resolve();
      //           // setState(prevState => {
      //           //   const data = [...prevState.data];
      //           //   data.splice(data.indexOf(oldData), 1);
      //           //   return { ...prevState, data };
      //           // });
      //           console.log(oldData._id);
      //           await axios
      //             .delete(`http://localhost:7000/${oldData._id}`)
      //             .then(response => {
      //               setData(response.data);
      //             });
      //         }, 600);
      //       })
      //   }}
    />
  );
};

export default withRouter(Students);
