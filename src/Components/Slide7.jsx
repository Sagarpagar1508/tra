import React, { useEffect } from 'react';
import './Slide7.css'
import { Link } from 'react-router-dom';

const Slide7 = () => {
    const text = `
    1.you should take note of the
    LP’s/ investors to ensure
    there is no change to their
    profile, or payment
    transfers- an LP may
    typically restructure their
    investment holdings during
    a longer PE type investment
    therefore such changes to
    the LP interest should
    trigger a review.
  `;

  const lines = text.trim().split('\n');

  useEffect(() => {
    const spans = document.querySelectorAll('.text-container span');
    spans.forEach((span, index) => {
      span.style.animationDelay = `${index * 0.5}s`;
    });
  }, []);


    return (
      <>
        <div className='container-fuild p-5 text-light' style={{backgroundColor:'#131842'}}>
            <h2 className='' >12. Vulnerabilities</h2>
            <div className="d-flex align-items-center justify-content-evenly p-5" style={{fontWeight:'500'}}>
                <div className="mt-5">
                    <p className='fs-5' style={{color:'#FF4191'}}>PE is vulnerable to</p>
                    <ol>
                        <li className='mb-2'>Longer term investment so <br /> additional funding can be funnelled <br />into the investment    </li>
                        <li className='mb-2'>Changes in payments during the <br /> longer term investment term </li>
                        <li className='mb-2'>Additional capital calls <br /> opportunity to move money into <br />the structure from other sources</li>
                        <li className='mb-2'>Changes to the profile of LP’s, <br /> investors</li>
                        <li>Clarity around how and to whom <br /> investments may be exited</li>
                    </ol> 
                </div>


                <div className="text-container">
      {lines.map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </div>
            </div>
        </div>
          {/* buttons */}
          <div className='d-flex align-items-center justify-content-end gap-3 mx-3' style={{ position: "sticky", bottom: "10px" }}>
          <Link to="/slide6" style={{ color: 'inherit', textDecoration: 'none' }}> <button className="btn btn-primary"><i className="fa-solid fa-circle-arrow-left"></i></button></Link>
          <Link to="" style={{ color: 'inherit', textDecoration: 'none' }}> <button className="btn btn-primary"><i className="fa-solid fa-circle-arrow-right"></i></button></Link>
          
      </div>
      </>
    )
}

export default Slide7