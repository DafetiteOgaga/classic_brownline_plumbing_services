import { DafetiteFooter } from "../../hooks/dafetiteFooter/dafetiteFooter"


function Footer({address, phoneNumber1, email}) {
	return (
		<div className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
			<div className="container py-3">
				<div className="row g-5 justify-content-between">
					<div className="col-lg-5 col-md-6">
						<h4 className="text-light mb-4">Address</h4>
						<p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>{address}</p>
						<p className="mb-2"><i className="fa fa-phone me-3"></i>{phoneNumber1}</p>
						<p className="mb-2"><i className="fa fa-envelope me-3"></i>{email}</p>
						<div className="d-flex pt-2">
							<a className="btn btn-outline-light btn-social" href="##"><i className="fab fa-twitter"></i></a>
							<a className="btn btn-outline-light btn-social" href="##"><i className="fab fa-facebook-f"></i></a>
							<a className="btn btn-outline-light btn-social" href="##"><i className="fab fa-youtube"></i></a>
							<a className="btn btn-outline-light btn-social" href="##"><i className="fab fa-linkedin-in"></i></a>
						</div>
					</div>
					{/* <div className="col-lg-3 col-md-6">
						<h4 className="text-light mb-4">Opening Hours</h4>
						<h6 className="text-light">Monday - Friday:</h6>
						<p className="mb-4">09.00 AM - 09.00 PM</p>
						<h6 className="text-light">Saturday - Sunday:</h6>
						<p className="mb-0">09.00 AM - 12.00 PM</p>
					</div> */}
					{/* <div className="col-lg-3 col-md-6">
						<h4 className="text-light mb-4">Services</h4>
						<a className="btn btn-link" href="##">Drain Cleaning</a>
						<a className="btn btn-link" href="##">Sewer Line</a>
						<a className="btn btn-link" href="##">Water Heating</a>
						<a className="btn btn-link" href="##">Toilet Cleaning</a>
						<a className="btn btn-link" href="##">Broken Pipe</a>
					</div> */}
					<div className="col-lg-3 col-md-6">
						<h4 className="text-light mb-4">Newsletter</h4>
						<p>Subscribe to receive industry insights, maintenance advice, and the latest news.</p>
						<div className="position-relative mx-auto max-h-400">
							<input className="form-control border-0 w-100 py-3 ps-4 pe-5 border-radius-10 white-bg" type="text" placeholder="Your email" />
							<button type="button" className="btn btn-primary-color py-2 position-absolute top-0 end-0 mt-2 me-2 border-radius-10">SignUp</button>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<h5 className="text-light text-center text-uppercase">
							<span className="" href="##">Classic Brown</span>
						</h5>
						<h5 className="text-light text-center mb-4">
							<span className="" href="##">All Rights Reserved.</span>
						</h5>
						<div className="text-center">
							<DafetiteFooter />
						</div>
					</div>
				</div>
			</div>
			{/* <div className="container">
				<div className="copyright">
					<div className="row">
						<div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
							&copy; <a className="border-bottom" href="##">Classic Brown</a>, All Right Reserved.
						</div>
						<div className="col-md-6 text-center text-md-end">
							Developed By <a className="border-bottom" href="##">Dafetite</a>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	)
}
export { Footer }