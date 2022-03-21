import React, { useEffect, useState, useRef } from 'react';
import DisplayTable from './DisplayTable';
import DisplayForm from './DisplayForm';
import DisplayEmployeeDetails from './DisplayEmployeeDetails';

// get local storage to display the table everytime the browser is render
const getLocalStorage = () => {
  const EmployeeDetails = localStorage.getItem('EmployeeDetails');
  if (EmployeeDetails) {
    return JSON.parse(localStorage.getItem('EmployeeDetails'));
  } else {
    return [];
  }
}

function EmployeeForm() {
  // hook jahilay pani function ko top ma
  // each row 
  const [empDetails, newEmployeeDetails] = useState({
    empName: '',
    empAddress: '',
    empContact: '',
    empEmail: '',
    empProfile: ''
  });
  // every array
  const [employeeDetails, addedEmployeeDetails] = useState(getLocalStorage());
  // change add and edit button
  const [toggleAddEdit, setToggleAddEdit] = useState(true);
  // edit employee ko id set garna
  const [editEmployee, setEditEmployee] = useState(null);
  // form display garauni ki nai vanna ko lagi
  const [formDisplay, setFormDisplay] = useState(false);
  const [userDisplay, setUserDisplay] = useState(false);

  const refButton = useRef()

  useEffect(() => {
    localStorage.setItem("EmployeeDetails", JSON.stringify(employeeDetails))
  }, [employeeDetails]);

  // input ma onChange function rakhnu parni raixa
  const empDetailChange = (event) => {
    const { value, name } = event.target;

    newEmployeeDetails((preValue) => {
      if (name === 'empProfile') {
        empDetails.empProfile = event.target.files[0];
        return {
          empProfile: URL.createObjectURL(empDetails.empProfile),
          empName: preValue.empName,
          empAddress: preValue.empAddress,
          empContact: preValue.empContact,
          empEmail: preValue.empEmail
        }
      } else {
        return ({
          // spread operator or three dots
          ...preValue,
          [name]: value,
        })
      }
    })
  };

  // button click huda ko function
  const AddEmployee = () => {
    const idEmployeeData = { id: new Date().getTime().toString(), name: empDetails }

    if (empDetails.empName === '' ||
      empDetails.empAddress === '' ||
      empDetails.empContact === '' ||
      empDetails.empEmail === '') {
      alert("Sorry,Empty row cannot be inserted");
    }
    else if (!toggleAddEdit) {
      addedEmployeeDetails(employeeDetails.map((employee) => {
        if (editEmployee === employee.id)
          return {
            ...employee,
            name: empDetails
          }
        return employee;
      }))
      URL.revokeObjectURL(empDetails.empProfile)
      setToggleAddEdit(true);
      setEditEmployee(null);
      setFormDisplay(false);
    } else {
      addedEmployeeDetails((oldValue) => {
        return [
          ...oldValue,
          idEmployeeData
        ]
      });
      setFormDisplay(false);
    }

    newEmployeeDetails(() => {
      return ({
        empName: '',
        empAddress: '',
        empContact: '',
        empEmail: '',
        empProfile: null
      })
    });
  };

  const DeleteEmployee = (id) => {
    addedEmployeeDetails((oldValue) => {
      return oldValue.filter((employees) => {
        return id !== employees.id;
      })
    })
  };

  const EditEmployee = (id) => {
    setFormDisplay(true)
    const recentEditEmployee = employeeDetails.find((employees) => {
      return employees.id === id;
    });
    setToggleAddEdit(false);
    newEmployeeDetails(recentEditEmployee.name);
    setEditEmployee(id);
  }

  const onDisplayForm = () => {
    setFormDisplay(true);
  }

  const CancelAddEdit = () => {
    setFormDisplay(false);
    toggleAddEdit ? setToggleAddEdit(false) : setToggleAddEdit(true);
    setEditEmployee(null);
    newEmployeeDetails(() => {
      return ({
        empName: '',
        empAddress: '',
        empContact: '',
        empEmail: ''
      })
    });
  }

  const onDisplayEmployee = (id) => {
    setUserDisplay(true);
    const recentDisplayEmployee = employeeDetails.find((viewEmployees) => {
      return viewEmployees.id === id
    })
    newEmployeeDetails(recentDisplayEmployee.name)
  }

  const onCancelDisplay = () => {
    setUserDisplay(false)
    newEmployeeDetails(() => {
      return ({
        empName: '',
        empAddress: '',
        empContact: '',
        empEmail: ''
      })
    });
  }

  return (
    <>
      <h1>Employee List</h1>

      <div className="add-button">
        <button className='btn-add' onClick={onDisplayForm}>Add Employees</button>
      </div>

      <div className="add-employee" >
        {formDisplay ?
          <DisplayForm
            onChange={empDetailChange}
            valueName={empDetails.empName}
            valueAddress={empDetails.empAddress}
            valueContact={empDetails.empContact}
            valueEmail={empDetails.empEmail}
            valueProfile={empDetails.empProfile}
            toggle={toggleAddEdit}
            refButton={refButton}
            onSubmit={AddEmployee}
            onCancel={CancelAddEdit} />
          : null}
      </div>

      <div className="show-employee" >
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          {employeeDetails.map((employeeDetails) => {
            return (
              <DisplayTable
                empname={employeeDetails.name.empName}
                empaddress={employeeDetails.name.empAddress}
                empcontact={employeeDetails.name.empContact}
                empemail={employeeDetails.name.empEmail}
                empimage={employeeDetails.name.empProfile}
                key={employeeDetails.id}
                id={employeeDetails.id}
                onSelect={DeleteEmployee}
                onSubmit={EditEmployee}
                onClick={onDisplayEmployee}
              />
            )
          })}
        </table>
      </div>

      <div className="show-employee-profile" >
        {userDisplay ?
          <DisplayEmployeeDetails
            profile={empDetails.empProfile}
            name={empDetails.empName}
            address={empDetails.empAddress}
            contact={empDetails.empContact}
            email={empDetails.empEmail}
            onCancel={onCancelDisplay}
          /> : null}
      </div>
    </>
  )
}

export default EmployeeForm