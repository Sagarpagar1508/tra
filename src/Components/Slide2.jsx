import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './slide2.css';
import { Link } from 'react-router-dom';


const Slide2 = ({ onSelectionChange }) => {
    // State for selected country and role within this component
    const [country, setCountry] = useState('');
    const [role, setRole] = useState('');

    // When the country changes, update the state and call the parent's callback
    const handleCountryChange = (e) => {
        const newCountry = e.target.value;
        setCountry(newCountry);
        onSelectionChange({ country: newCountry, role }); // Update the parent with the new values
    };

    // When the role changes, update the state and call the parent's callback
    const handleRoleChange = (e) => {
        const newRole = e.target.value;
        setRole(newRole);
        onSelectionChange({ country, role: newRole }); // Update the parent with the new values
    };
    return (
        <>
            <div className="container-fluid" style={{ height: '100vh', backgroundColor: '#505050' }}>
                <div className="row p-5">
                    <div className="d-flex align-items-start">
                        <div>
                            <h1 className='mb-5 text-center text-light fw-bold'>Welcome to this AML, CTF, PF Training Module</h1>
                            <div className="d-flex align-items-start gap-5 mt-5">
                                <div className="w-50">
                                    <label>Country of trainee</label>
                                    <select className="form-select" onChange={handleCountryChange}>
                                        <option value="">Select Country</option>
                                        <option value="UAE">UAE</option>
                                        <option value="UK">UK</option>
                                    </select>
                                </div>
                                <div className="w-50">
                                    <label>Role</label>
                                    <select className="form-select" onChange={handleRoleChange}>
                                        <option value="">Select Role</option>
                                        <option value="Business">Business</option>
                                        <option value="HR">HR</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="ms-5">
                            <img className='img1 rounded' src="/src/assets/slide2img.jpg" alt="Slide" />
                        </div>
                    </div>
                </div>
            </div>

            {/* buttons */}
            <div className='d-flex align-items-center justify-content-end gap-3 mx-3' style={{ position: "fixed", bottom: "0px", left: '90%', top: '90vh' }}>
                <button className="btn btn-primary">
                    <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <i className="fa-solid fa-circle-arrow-left"></i>
                    </Link>
                </button>
                <button className="btn btn-primary">
                    <Link to="/slide3" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                    </Link>
                </button>
            </div>


            
        </>
    );
};
const DisplaySelection = ({ selection }) => {
    return (
        <div>
            <h3>Selected Country: {selection.country}</h3>
            <h3>Selected Role: {selection.role}</h3>
        </div>
    );
};

// The App component is the main component that holds the state and renders child components
const App = () => {
    // State for the selected country and role
    const [selection, setSelection] = useState({ country: '', role: '' });

    // This function updates the state when the selection changes
    const handleSelectionChange = (newSelection) => {
        setSelection(newSelection);
    };

    return (
        <div>
            <SelectForm onSelectionChange={handleSelectionChange} />
            <DisplaySelection selection={selection} />
        </div>
    );
};

export default Slide2;
