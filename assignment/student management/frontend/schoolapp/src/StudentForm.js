import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';

const StudentForm = props => {
  // const [data]=props.data;
  const [data, setData] = useState({
    _id: '',
    name: '',
    email: '',
    gender: '',
    class: '',
    birthDate: '',
    address: '',
    contactNo: 0
  });

  useEffect(() => {
    setData(...props.data);
  }, []);

  return (
    <React.Fragment>
      {/* <form>
{'Name : '}<TextField />
        </form> */}
      <div>{data}</div>
    </React.Fragment>
  );
};

export default StudentForm;
