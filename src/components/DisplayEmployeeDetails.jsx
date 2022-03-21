import React from 'react'

export default function DisplayEmployeeDetails({
    name,
    address,
    contact,
    email,
    profile,
    onCancel
}) {
    return (
        <div className='display-form'>
            <div className="form-content profile">
                <h1>Profile view</h1>
                <div className="display-block">
                    <div className="display-image">
                        {profile ?
                            <img src={profile} alt="Notfound" /> :
                            <i className='fa fa-user fa-4x'></i>}
                    </div>
                </div>
                <h3>{name}</h3>
                <p>Address:{address}</p>
                <p>Contact:{contact}</p>
                <p>Email:{email}</p>
                <button className='btn-cancel' type="submit" onClick={onCancel}>Cancel</button>
            </div>
        </div>
    )
}
