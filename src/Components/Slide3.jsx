import React from 'react'
import './Slide3.css';
import { Link } from 'react-router-dom';

const Slide3 = () => {
  return (
    <>
     <div className="container-fluid p-5">
    <div>
        <h2>1. What is Money Laundering, Terrorist Financing, Proliferation Financing.</h2>
    </div>
    <div className="flex1">
        <div>
            <h4 className="w-50 rounded p-2" style={{backgroundColor: '#A0937D'}}>Definitions </h4>
            <p className="bordered w-75 mt-4 zoom" style={{backgroundColor: '#E2BBE9'}}>Process of concealing the proceeds of illicit activity through the financial system

                OR
               
               using the financial system to use funds for illicit activity, such as terrorist financing or proliferation finance for weapons of mass destruction
               </p>
        </div>
        <div className="">
            <h4 className="text-center">Stages</h4>
           
            <div className="bordered slide-in slide-in-1" style={{backgroundColor: '#5A639C'}}>
                <h4>Placement</h4>
            <p>Placing funds into the financial system  </p>
        </div>
        <p className="text-center m-0 p-0">
            <i className="fa-solid fa-down-long"></i>
        </p>
            <div className="bordered slide-in slide-in-1" style={{backgroundColor: '#667BC6'}}>
                <h4>Layering</h4>
                <p>Using different products to layer the funds across the financial system, (cash, crypto, real estate etc) </p>
            </div>
            <p className="text-center m-0 p-0">
                <i className="fa-solid fa-down-long"></i>
            </p>
            <div className="bordered slide-in slide-in-1" style={{backgroundColor: '#B60071'}}>
                <h4>Integration</h4>
                <p>Funds have been ‘cleaned’ via the placement and layering into the financial system and then can be moved from one financial institution to another.</p>
            </div>
        </div>
    </div>

      
         {/* buttons */}
         <div className='d-flex align-items-center justify-content-end gap-3 mx-3 mt-2' style={{ position: "sticky", bottom: "0px" }}>
         <button className="btn btn-primary"><Link to="/slide2" style={{ color: 'inherit', textDecoration: 'none' }}><i className="fa-solid fa-circle-arrow-left"></i></Link></button>
                <button className="btn btn-primary"><Link to="/slide4" style={{ color: 'inherit', textDecoration: 'none' }}><i className="fa-solid fa-circle-arrow-right"></i></Link></button>
            </div>

            </div>   
    
    </>
  )
}

export default Slide3