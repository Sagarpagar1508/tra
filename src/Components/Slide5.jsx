import React from 'react'
import './Slide5.css';
import { Link } from 'react-router-dom';

const Slide5 = () => {
	return (
		<>
		<div className="container-fluid">
			<div className='maindiv text-center' >
				<main >
					<h1 className='fw-bold text-light'>United Arab Emirates (UAE)
					</h1>

					<section className="accordion" id="overview">
						<h1 className="title"><a href="#overview">International:</a></h1>
						<div className="content">
							<div className="wrapper">

								<p>FATF</p>
								<p>United Nations Security Council Resolutions
								</p>
							</div>
						</div>
					</section>

					<section className="accordion" id="how-does-it-work" >
						<h1 className="title"><a href="#how-does-it-work">Domestic Laws </a></h1>
						<div className="content" >
							<div className="wrapper">
								<p>UAE Federal Laws</p>
								<p>UAE Cabinet Resolutions</p>
								<p>Financial Intelligence Unit (FIU)</p>
								<p>Criminal & Civil powers</p>
							</div>
						</div>
					</section>

					<section className="accordion" id="inspiration">
						<h1 className="title"><a href="#inspiration">Financial Free Zones
						</a></h1>
						<div className="content">
							<div className="wrapper">
								<p>ADGM</p>
								<p>DIFC</p>
								<p>Civil powers only</p>
							</div>
						</div>
					</section>
				</main>
			</div>
			
			{/* buttons */}
			<div className='d-flex align-items-center justify-content-end gap-3 mx-2' style={{ position: "sticky", bottom: "10px" }}>
			<Link to="/slide4" style={{ color: 'inherit', textDecoration: 'none' }}><button className="btn btn-primary"><i className="fa-solid fa-circle-arrow-left"></i></button></Link>
			<Link to="/slide6" style={{ color: 'inherit', textDecoration: 'none' }}><button className="btn btn-primary"><i className="fa-solid fa-circle-arrow-right"></i></button></Link>
				
			</div>
			</div>
		</>
	)
}

export default Slide5
