

function About({yearFounded, currentYear}) {
	return (
		<div className={`container-xxl py-5`}>
			<div className="container">
				<div className="row g-5">
					<div className="col-lg-6 wow serviceFadeInUp" style={{animationDelay: '0.2s'}}>
						<h6 className="text-secondary text-uppercase">About Us</h6>
						<h1 className="mb-4">Your Trusted Plumbing Experts Since {yearFounded}</h1>
						<p className="mb-4">
							For over {currentYear - yearFounded} years, we've delivered reliable,
							high-quality plumbing solutions for homes and businesses alike. Our
							certified technicians combine expertise, precision, and integrity to
							ensure every project is done right—the first time.
						</p>
						<p className="fw-medium text-primary"><i className="fa fa-check text-success me-3"></i>Residential & commercial plumbing</p>
						<p className="fw-medium text-primary"><i className="fa fa-check text-success me-3"></i>Quality services at affordable prices</p>
						<p className="fw-medium text-primary"><i className="fa fa-check text-success me-3"></i>Immediate 24/ 7 emergency services</p>
						<div className="bg-primary d-flex align-items-center p-4 mt-5 border-radius-10">
							<div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white w-60 h-60">
								<i className="fa fa-phone fa-2x text-primary"></i>
							</div>
							<div className="ms-3">
								<p className="fs-5 fw-medium mb-2 text-white">Emergency 24/7</p>
								<h3 className="m-0 text-white">+012 345 6789</h3>
							</div>
						</div>
					</div>
					<div className="col-lg-6 pt-4 min-h-500">
						<div className="position-relative h-100 wow fadeInUp" data-wow-delay="0.5s">
							<img className="position-absolute img-fluid w-100 h-100 fit-cover serviceFadeInUp border-radius-10" src={require("../../assets/img/about-1.jpg")}
							style={{
								padding: "0 0 50px 100px",
								animationDelay: '0.4s'
								}} alt="" />
							<img className="position-absolute start-0 bottom-0 img-fluid bg-white pt-2 pe-2 w-50 h-50 fit-cover serviceFadeInUp border-radius-10" src={require("../../assets/img/about-2.jpg")}
							style={{
								animationDelay: '0.6s'
								}}
							alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export { About }