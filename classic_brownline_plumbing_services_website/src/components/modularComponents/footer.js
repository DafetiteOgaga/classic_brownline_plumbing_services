import { DafetiteFooter } from "../../hooks/dafetiteFooter/dafetiteFooter"


function Footer() {
	return (
		<div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
			<div className="container py-5">
				<div className="row g-5 justify-content-between">
					<div className="col-lg-3 col-md-6">
						<h4 className="text-light mb-4">Address</h4>
						<p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, Brown Ave, S/Africa</p>
						<p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
						<p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
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
						<p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
						<div className="position-relative mx-auto max-h-400">
							<input className="form-control border-0 w-100 py-3 ps-4 pe-5 border-radius-10" type="text" placeholder="Your email" />
							<button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2 border-radius-10">SignUp</button>
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