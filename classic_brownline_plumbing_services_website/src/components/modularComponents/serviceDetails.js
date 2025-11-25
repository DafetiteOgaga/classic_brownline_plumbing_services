import { useLocation } from "react-router-dom"
import { Pagerousel } from "./pagerousel";

function ServiceDetail() {
	const serviceData = useLocation().state
	// console.log("Rendering ServiceDetail component", serviceData);
	const { detailedDescription, title, img, icon } = serviceData
	return (
		<>
			<Pagerousel />
			<div className="container py-5">
				<div className="row g-5">
					{/* <!-- Left Section: Image --> */}
					<div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
						<img
							src={img}
							className="img-fluid border-radius-20 shadow"
							alt="Drain Repair Service"
						/>
					</div>

					{/* <!-- Right Section: Details --> */}
					<div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
						<div className="bg-light p-5 rounded shadow-sm border-radius-20">
							<div
							className="d-flex align-items-center justify-content-center border-color-primary border-radius-5 border mb-4 mx-auto"
							style={{width: "80px", height: "80px"}}
							>
								<i className={`fa ${icon} fa-2x text-primary`}></i>
							</div>
							<h2 className="mb-4 text-primary text-center">{title}</h2>
							<p className="mb-4 text-muted">{detailedDescription}</p>

							<ul className="list-unstyled">
								<li className="fw-medium text-primary mb-2">
									<i className="fa fa-check text-primary me-2"></i>
									Advanced leak detection and repair
								</li>
								<li className="fw-medium text-primary mb-2">
									<i className="fa fa-check text-primary me-2"></i>
									High-pressure drain cleaning
								</li>
								<li className="fw-medium text-primary mb-2">
									<i className="fa fa-check text-primary me-2"></i>
									Odor and blockage removal
								</li>
								<li className="fw-medium text-primary mb-2">
									<i className="fa fa-check text-primary me-2"></i>
									Maintenance plans to prevent future issues
								</li>
								<li className="fw-medium text-primary mb-2">
									<i className="fa fa-check text-primary me-2"></i>
									24/7 emergency response
								</li>
							</ul>

							<div className="mt-4">
								<a href="contact.html" className="btn btn-primary-color px-4 py-2 border-radius-5">
									<i className="fa fa-phone me-2"></i>Request Service
								</a>
								{/* <a href="services.html" className="btn btn-outline-primary px-4 py-2 ms-2">
									<i className="fa fa-arrow-left me-2"></i>Back to Services
								</a> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export { ServiceDetail }