import React, { useState } from 'react'

function Practice() {

    // react hook practice

    // const state = useState()
    // const [id,newId] = useState(1)
    // const [emId,newEmpID] = useState(1)

    const [empDetails, newEmployeeDetails] = useState({
        empId: '',
        empName: '',
        empAddress: '',
        empContact: '',
        empEmail: ''
    })

    const [employeeDetails, addedEmployeeDetails] = useState([])

    // const [employeeDetails, addedEmployeeDetails] = useState()

    // input ma onChange function rakhnu parni raixa
    // Id ko unchange ma IdChange vanni function huda
    // const IdChange = (event) =>{
    //   console.log(event.target.value)
    //   newId(event.target.value)
    // }
    const empDetailChange = (event) => {
        const { value, name } = event.target;

        newEmployeeDetails((preValue) => {

            return ({
                //seperator
                ...preValue,
                [name]: value,
            })

            // if (name === 'empId') {
            //   return {
            //     id: value,
            //     name: preValue.name,
            //     address: preValue.address,
            //     contact: preValue.contact,
            //     email: preValue.email
            //   }
            // } else if (name === 'empName') {
            //   return {
            //     id: preValue.id,
            //     name: value,
            //     address: preValue.address,
            //     contact: preValue.contact,
            //     email: preValue.email
            //   }
            // } else if (name === 'empAddress') {
            //   return {
            //     id: preValue.id,
            //     name: preValue.name,
            //     address: value,
            //     contact: preValue.contact,
            //     email: preValue.email
            //   }
            // } else if (name === 'empContact') {
            //   return {
            //     id: preValue.id,
            //     name: preValue.name,
            //     address: preValue.address,
            //     contact: value,
            //     email: preValue.email
            //   }
            // } else if (name === 'empEmail') {
            //   return {
            //     id: preValue.id,
            //     name: preValue.name,
            //     address: preValue.address,
            //     contact: preValue.contact,
            //     email: value
            //   }
            // }
        })
    }

    // button click huda ko function
    // emp id matra huda ko submit function
    // const DisplayEmployee = (event) => {
    //   event.preventDefault();
    //   newEmpId(id)
    // }

    const DisplayEmployee = (event) => {
        event.preventDefault();
        addedEmployeeDetails(empDetails)
    }

    return (
        <>
            <h1>Employee List</h1>

            <div className="add-employee">
                <form onSubmit={DisplayEmployee}>
                    Id: <input
                        type="number"
                        name="empId"
                        id="empId"
                        onChange={empDetailChange}
                        value={employeeDetails.empId} />
                    <br /><br />

                    Name: <input
                        type="text"
                        name="empName"
                        id="empName"
                        onChange={empDetailChange}
                        value={employeeDetails.empName} />
                    <br /><br />

                    Adress: <input
                        type="text"
                        name="empAddress"
                        id="empAddress"
                        onChange={empDetailChange}
                        value={employeeDetails.empAddress} />
                    <br /><br />

                    Contact Number: <input
                        type="number"
                        name="empContact"
                        id="empContact"
                        onChange={empDetailChange}
                        value={employeeDetails.empContact} />
                    <br /><br />

                    Email: <input
                        type="email"
                        name="empEmail"
                        id="empEmail"
                        onChange={empDetailChange}
                        value={employeeDetails.empEmail} />
                    <br /><br />

                    <button type="submit">Add Employee</button>
                </form>
            </div>

            <div className="show-employee">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Contact Number</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{employeeDetails.empId}</td>
                            <td>{employeeDetails.empName}</td>
                            <td>{employeeDetails.empAddress}</td>
                            <td>{employeeDetails.empContact}</td>
                            <td>{employeeDetails.empEmail}</td>
                            <td><button type="submit">Edit</button> <button type="submit">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default Practice
