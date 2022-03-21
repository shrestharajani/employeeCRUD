import React from 'react'
// import { useEffect, useState } from 'react'

export default function DisplayForm({
    onChange,
    onSubmit,
    onCancel,
    preview,
    refButton,
    valueName,
    valueAddress,
    valueContact,
    valueEmail,
    valueProfile,
    toggle
}) {

    return (
        <div className='display-form'>
            <div className="form-content">
                {
                    toggle ?
                        <h1>Add Employee Details</h1> :
                        <h1>Edit Employee Details</h1>
                }
                <form onSubmit={onSubmit}>
                    <div className="display-block">
                        <div className="display-image">
                            {valueProfile ?
                                <img src={valueProfile} alt="Notfound" /> :
                                <i className='fa fa-user fa-4x'></i>}
                        </div>
                    </div>

                    <div className='image-button'>
                        {toggle ? <button className='image-upload-button'
                            onClick={(event) => {
                                event.preventDefault();
                                refButton.current.click();
                            }}>
                            Add Image
                        </button> :
                            <button className='image-upload-button'
                                onClick={(event) => {
                                    event.preventDefault();
                                    refButton.current.click();
                                }}>
                                Edit Image
                            </button>}

                        <input type="file"
                            name="empProfile"
                            style={{ display: 'none' }}
                            accept="image/*"
                            ref={refButton}
                            onChange={onChange}
                        />
                    </div>

                    <i className='fa fa-user' /> Name <br />
                    <input
                        type="text"
                        name="empName"
                        onChange={onChange}
                        value={valueName} />
                    <br />

                    <i className='fa fa-home' /> Address <br />
                    <input
                        type="text"
                        name="empAddress"
                        onChange={onChange}
                        value={valueAddress} />
                    <br />

                    <i className='fa fa-address-book' /> Contact <br />
                    <input
                        type="number"
                        name="empContact"
                        onChange={onChange}
                        value={valueContact} />
                    <br />

                    <i className='fa fa-envelope' /> Email <br />
                    <input
                        type="email"
                        name="empEmail"
                        onChange={onChange}
                        value={valueEmail} />
                    <br />
                    <div className="buttons">
                        {
                            toggle ?
                                <button type="submit" className='btn-add'>Add Employee</button> :
                                <button type="submit" className='btn-edit-inside'>Edit Employee</button>
                        }
                        {
                            <button className='btn-cancel' type="submit" onClick={onCancel}>Cancel</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}
