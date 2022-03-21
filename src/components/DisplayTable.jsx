import React from 'react'
// import DisplayEmployee from './EmployeeForm'

export default function AddItem({
    empname,
    empaddress,
    empcontact,
    empemail,
    empimage,
    id,
    onSelect,
    onSubmit,
    onClick
}) {

    return (
        <>
            <tbody>
                <tr>
                    <td>{empname}</td>
                    <td>{empaddress}</td>
                    <td>{empcontact}</td>
                    <td>{empemail}</td>
                    <td>{empimage}</td>
                    <td className='buttons'>
                        <button type="submit" className='btn-edit'
                            onClick={() => {
                                onSubmit(id)
                            }}>Edit
                        </button>

                        <button type="submit" className='btn-delete'
                            onClick={() => {
                                onSelect(id)
                            }}>
                            Delete
                        </button>

                        <button type="submit" className='btn-view-details'
                            onClick={() => {
                                onClick(id)
                            }}>
                            View Details
                        </button>
                    </td>
                </tr>
            </tbody>
        </>
    )
}
