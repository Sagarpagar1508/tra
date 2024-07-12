import React, { useEffect, useState } from 'react';
import './Slide6.css';
import { Link } from 'react-router-dom';

const Slide6 = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className="container-fluid">
            <div className="container">
                <h1>Reviewing Suspicious Activity Report</h1>
                <hr />
                <div className="arrows">
                    <span className="arrow" style={{marginLeft:"-5px"}}>&#x2193;</span>
                    <span className="arrow">&#x2193;</span>
                    <span className="arrow" style={{marginRight:"-5px"}}>&#x2193;</span>
                </div>
            </div>
            <div className={`flex1 ${animate ? 'slide-in' : ''}`}>
                <div className='w-100'>
                    <p className="parastyle slide-in slide-in-1">
                        inquires into and documents the circumstances in relation to which the notification made under was made;
                    </p>
                   
                    <i className="fa-solid fa-circle-arrow-down slide-in downarrow slide-in-2"></i>

                    <p className="slide-in parastyle slide-in-2">
                        determines whether in accordance with Federal AML legislation a Suspicious Activity Report must be made to the FIU and documents such determination;
                    </p>
                    <i className="fa-solid fa-circle-arrow-down slide-in downarrow slide-in-3"></i>
                    <p className="slide-in parastyle slide-in-3">
                        if required, makes a Suspicious Activity Report to the FIU as soon as practicable; and
                    </p>
                    
                    <i className="fa-solid fa-circle-arrow-down slide-in downarrow slide-in-4"></i>
                    <p className="slide-in parastyle slide-in-4">
                        notifies the DFSA of the making of such Suspicious Activity Report immediately following its submission to the FIU
                    </p>
                </div>
                <div>
                    <p className="slide-in parastyle slide-in-1">
                        Where, following a notification to the MLRO no Suspicious Activity Report is made, a Relevant Person must record the reasons for not making a Suspicious Activity Report.
                    </p>
                </div>
                <div>
                    <p className="slide-in parastyle slide-in-1">
                        A Relevant Person must ensure that if the MLRO decides to make a Suspicious Activity Report, his decision is made independently and is not subject to the consent or approval of any other person.
                    </p>
                </div>
            </div>
            {/* Buttons */}
            <div className='d-flex align-items-center justify-content-end gap-3 mx-2' style={{ position: "sticky", bottom: "10px" }}>
                <Link to="/slide5" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <button className="btn btn-primary">
                        <i className="fa-solid fa-circle-arrow-left"></i>
                    </button>
                </Link>
                <Link to="/slide7" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <button className="btn btn-primary">
                        <i className="fa-solid fa-circle-arrow-right"></i>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Slide6;
