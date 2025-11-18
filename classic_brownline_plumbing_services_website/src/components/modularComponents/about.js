import { Pagerousel } from "./pagerousel"
import { useOutletContext } from 'react-router-dom';

function About() {
	const { yearFounded, currentYear } = useOutletContext();
	return (
		<>
			<Pagerousel />
			<div className={`container-xxl py-5`}>
				<div className="container">
					<div className="row g-5">
						<div className="col-lg-6 wow serviceFadeInUp" style={{animationDelay: '0.2s'}}>
							{/* <h6 className="text-secondary text-uppercase">About Us</h6> */}
							<h1 className="mb-4">Delivering Reliable Plumbing Solutions Since {yearFounded}</h1>
							<p className="mb-4">
								For over {currentYear - yearFounded} years, we’ve been a trusted name in plumbing excellence—
								delivering dependable, high-quality solutions for both homes and businesses. Our certified
								technicians combine technical expertise, precision craftsmanship, and unwavering integrity to
								ensure every job is completed efficiently and correctly the first time. From routine maintenance
								to complex system installations, we’re committed to keeping your water systems flowing smoothly
								and safely year-round.
							</p>
							<p className="fw-medium text-primary"><i className="fa fa-check text-primary me-3"></i>Residential & commercial plumbing</p>
							<p className="fw-medium text-primary"><i className="fa fa-check text-primary me-3"></i>Quality services at affordable prices</p>
							<p className="fw-medium text-primary"><i className="fa fa-check text-primary me-3"></i>Immediate 24/ 7 emergency services</p>
							<p className="fw-medium text-primary"><i className="fa fa-check text-primary me-3"></i>Leak detection and water damage prevention</p>
							<p className="fw-medium text-primary"><i className="fa fa-check text-primary me-3"></i>Licensed, insured, and certified professionals</p>
							<p className="fw-medium text-primary"><i className="fa fa-check text-primary me-3"></i>Long-lasting solutions with high-grade materials</p>
							<p className="fw-medium text-primary"><i className="fa fa-check text-primary me-3"></i>100% satisfaction guaranteed on every project</p>
							{/* <div className="bg-primary d-flex align-items-center p-4 mt-5 border-radius-10">
								<div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white w-60 h-60">
									<i className="fa fa-phone fa-2x text-primary"></i>
								</div>
								<div className="ms-3">
									<div className="d-flex align-items-baseline">
										<p className="fs-5 fw-medium mb-1 text-white">We are available 24/7</p>
										<i className="fa fa-check text-white ms-2"></i>
									</div>
									<h3 className="m-0 text-white">+012 345 6789</h3>
								</div>
							</div> */}
						</div>
						<div className="col-lg-6 pt-4 min-h-500">
							<div className="position-relative h-100 wow fadeInUp" data-wow-delay="0.5s">
								<img className="position-absolute img-fluid w-80p h-80p position-left-20 fit-cover serviceFadeInUp border-radius-40 fine-border"
								src={require("../../assets/img/about-1.jpg")}
								style={{
									// padding: "0 0 50px 100px",
									animationDelay: '0.4s'
									}} alt="" />
								<img className="position-absolute bottom-0 img-fluid bg-white w-60p h-60p fit-cover serviceFadeInUp border-radius-40 fine-border"
								src={require("../../assets/img/about-2.jpg")}
								style={{
									animationDelay: '0.6s'
									}}
								alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export { About }