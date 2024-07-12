import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <>
    <div className="container-fluid gx-0">
      <div className="row gx-0 gy-0">
        <div className="col-6 text-light gx-0" style={{ backgroundColor: 'black' }}>
          <p className='fs-3 m-5' style={{ paddingTop: '15%', paddingLeft: '15px', color: '#ffa500' }}>CONFIDENTIAL & PRIVILEGED</p>
          <p className='fs-1' style={{ marginTop: '20%', marginLeft: '50px' }}>Stone Advisory- <span className='fs-4'>Demo File</span></p>
        </div>

        <div className="col-6 position-relative">
          <img src="./src/assets/home_img.jpg" alt="Image" className="img-fluid" />
          <section className="star-container">
            <div className="star star1"></div>
            <div className="star star2"></div>
            <div className="star star3"></div>
            <div className="star star4"></div>
            <div className="star star5"></div>
            <div className="star star6"></div>
            <div className="star star7"></div>
            <div className="star star8"></div>
            <div className="star star9"></div>
            <div className="star star10"></div>
            <div className="star star11"></div>
            <div className="star star12"></div>
            <div className="star star13"></div>
            <div className="star star14"></div>
            <div className="star star15"></div>
            <div className="star star16"></div>
          </section>
        </div>
      </div>
      
    </div>
    <div className='d-flex align-items-center justify-content-end gap-3 mx-3' style={{ position: "sticky", bottom: "0px" }}>
    <button  className="btn btn-primary"><i className="fa-solid fa-circle-arrow-left"></i></button>
    <button className="btn btn-primary"><Link to="/slide2" style={{ color: 'inherit', textDecoration: 'none' }}><i className="fa-solid fa-circle-arrow-right"></i></Link></button>
</div>
</>
  );
};

export default  HomePage;