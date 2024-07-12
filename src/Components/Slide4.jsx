import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #232130;
  position: relative;
`;

const Ellipse = styled.div`
  width: 200px;
  height: 100px;
  background-color: ${props => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  color: white;
  font-size: 18px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease; /* Smooth transition for color change */

  &:hover {
    background-color: #333; /* Change background color on hover */
    cursor: pointer; /* Optional: Change cursor to pointer on hover */
  }
`;

const SvgLine = styled.svg`
  position: absolute;
  width: 100%;
  height: 100vh;
  pointer-events: none;
`;

const Label = styled.div`
  color: white;
  position: absolute;
  font-size: 14px;
  ${props => (props.right ? 'right: -10px;' : 'left: -10px;')}
  top: -10px;
`;

const Popup = styled.div`
  position: absolute;
  background-color: white;
  color: black;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px;
  border-radius: 5px;
  width: 300px;
  top: 100%;
  left: 10%;
  transform: translate(-50%, -50%);
`;

const Slide4 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState('');

  const handleEllipseClick = (text) => {
    setShowPopup(true);
    setPopupText(text);
  };

  return (
    <>
      <Container>
        <h2 className='text-light'>2. Customer Due Diligence Standards - Risk Based</h2>
        <Ellipse color="#555" >
          Standard DD may apply
        </Ellipse>
        {showPopup && popupText === 'Standard DD may apply' && (
          <Popup>Details for Standard DD</Popup>
        )}
        <SvgLine className='' style={{ marginTop: '12%' }}>
          <line x1="50%" y1="120" x2="30%" y2="250" stroke="white" strokeWidth="2" />
          <line x1="50%" y1="120" x2="70%" y2="250" stroke="white" strokeWidth="2" />
        </SvgLine>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '80%', marginTop: '100px' }}>
          <div style={{ position: 'relative' }}>
            <Ellipse color="#B56551" onClick={() => handleEllipseClick('Enhanced DD may apply')}>
              Enhanced DD may apply
            </Ellipse>
            {showPopup && popupText === 'Enhanced DD may apply' && (
              <Popup>Details for Enhanced DD</Popup>
            )}
            <Label>High Risk</Label>
          </div>
          <div style={{ position: 'relative' }}>
            <Ellipse color="#00ff40" onClick={() => handleEllipseClick('Simplified DD may apply')}>
              Simplified DD may apply
            </Ellipse>
            {showPopup && popupText === 'Simplified DD may apply' && (
              <Popup>Details for Simplified DD</Popup>
            )}
            <Label>Low Risk</Label>
          </div>
        </div>
      <div className='d-flex align-items-center justify-content-end gap-3' style={{ position: "fixed", bottom: "0px",left: '90%', top: '90vh'  }}>
        <button className="btn btn-primary"><Link to="/slide3" style={{ color: 'inherit', textDecoration: 'none' }}><i className="fa-solid fa-circle-arrow-left"></i></Link></button>

        
        <button className="btn btn-primary"><Link to="/slide5" style={{ color: 'inherit', textDecoration: 'none' }}><i className="fa-solid fa-circle-arrow-right"></i></Link></button>
      </div>
      </Container>
      {/* buttons */}
    </>
  );
};

export default Slide4;
