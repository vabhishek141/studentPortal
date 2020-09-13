import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MaterialTable from 'material-table';
import { withRouter } from 'react-router-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import StudentForm from './StudentForm';
import './StudentsItem.css';
const columns = [
  { title: 'Name', field: 'name' },
  { title: 'Email', field: 'email', searchable: false },
  { title: 'Gender', field: 'gender', searchable: false },
  { title: 'Class', field: 'class', editable: 'onAdd', searchable: false },
  { title: 'Birthdate', field: 'birthDate', searchable: false },
  { title: 'Address', field: 'address', searchable: false },
  { title: 'ContactNo', field: 'contactNo', type: 'numeric', searchable: false }
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

const StudentTable = props => {
  const [data, setData, setState] = useState([]);
  const [name, setName] = useState('');
  const [tempData, setTempData] = useState([]);

  const getdata = async () => {
    await axios.get(baseUrl).then(response => {
      setData(response.data);
      setTempData(response.data);
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <React.Fragment>
      <MaterialTable
        title="Editable Example"
        columns={columns}
        data={data}
        editable={{
          onRowAdd: oldData =>
            new Promise(resolve => {
              setTimeout(async () => {
                resolve();
                //   setState(prevState => {
                //     const data = [...prevState.data];
                //     data.push(newData);
                //     return { ...prevState, data };
                //   });
                // }, 600);
                // <StudentForm data={data} />;
                await axios
                  .post('http://localhost:7000/student', oldData)
                  .then(response => {
                    setData(response.data);
                  });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(async () => {
                resolve();
                // if (oldData) {
                //   // setState(prevState => {
                //   //   const data = [...prevState.data];
                //   //   data[data.indexOf(oldData)] = newData;
                //   //   return { ...prevState, data };
                //   // });
                // }
                await axios
                  .patch(
                    `http://localhost:7000/student/${oldData._id}`,
                    newData
                  )
                  .then(response => {
                    setData(response.data);
                  });
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(async () => {
                resolve();
                // setState(prevState => {
                //   const data = [...prevState.data];
                //   data.splice(data.indexOf(oldData), 1);
                //   return { ...prevState, data };
                // });
                await axios
                  .delete(`http://localhost:7000/student/${oldData._id}`)
                  .then(response => {
                    setData(response.data);
                  });
              }, 600);
            })
        }}
      />
    </React.Fragment>
  );
};

export default withRouter(StudentTable);
