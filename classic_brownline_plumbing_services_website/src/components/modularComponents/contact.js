

function ContactUs() {
	return (
		<div className="container-xxl py-5">
			<div className="container">
				<div className="row g-4">
					<div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
						<h6 className="text-secondary text-uppercase">Get In Touch</h6>
						<h1 className="mb-4">Contact Us</h1>
						{/* <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
						<iframe className="position-relative w-100 border-radius-10"
							title="map"
							// src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507365.35487409495!2d2.954296628594845!3d6.547947654560678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1762733082337!5m2!1sen!2sng"
							frameBorder="0" style={{height: "300px", border: "0"}} allowFullScreen="" aria-hidden="false"
							tabIndex="0"></iframe>
						<div className="d-inline-flex align-items-center me-4">
							<i className="fa fa-map-marker-alt text-primary me-2"></i>
							<p className="m-0">123 Street, Brown Ave, South Africa</p>
						</div>
						<div className="d-inline-flex align-items-center me-4">
							<i className="far fa-envelope-open text-primary me-2"></i>
							<p className="m-0">info@example.com</p>
						</div>
					</div>
					<div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
						<div className="bg-light p-5 h-100 d-flex align-items-center border-radius-10">
							<form>
								<div className="row g-3">
									<div className="col-md-6">
										<div className="form-floating">
											<input type="text" className="form-control border-radius-10" id="name" placeholder="Your Name"/>
											<label htmlFor="name">Your Name</label>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-floating">
											<input type="email" className="form-control border-radius-10" id="email" placeholder="Your Email"/>
											<label htmlFor="email">Your Email</label>
										</div>
									</div>
									<div className="col-12">
										<div className="form-floating">
											<input type="text" className="form-control border-radius-10" id="subject" placeholder="Subject"/>
											<label htmlFor="subject">Subject</label>
										</div>
									</div>
									<div className="col-12">
										<div className="form-floating">
											<textarea className="form-control border-radius-10" placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
											<label htmlFor="message">Message</label>
										</div>
									</div>
									<div className="col-12">
										<button className="btn btn-primary w-100 py-3 border-radius-10" type="submit">Send Message</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export { ContactUs }