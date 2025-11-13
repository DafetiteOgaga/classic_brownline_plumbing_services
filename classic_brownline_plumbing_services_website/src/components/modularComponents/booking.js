

function Booking() {
	return (
		<div className={`container-fluid my-5 px-0`}>
			<div className="container position-relative wow mt-1 fadeInUp" data-wow-delay="0.1s" style={{marginTop: "-6rem"}}>
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="bg-light text-center p-5 border-radius-10">
							<h1 className="mb-4">Book Our Service</h1>
							<form>
								<div className="row g-3">
									<div className="col-12 col-sm-6">
										<input type="text" className="form-control border-0 h-55 border-radius-10" placeholder="Your Name" />
									</div>
									<div className="col-12 col-sm-6">
										<input type="email" className="form-control border-0 h-55 border-radius-10" placeholder="Your Email" />
									</div>
									<div className="col-12 col-sm-6">
										<select className="form-select border-0 h-55 border-radius-10">
											<option selected>Select A Service</option>
											<option value="1">Service 1</option>
											<option value="2">Service 2</option>
											<option value="3">Service 3</option>
										</select>
									</div>
									<div className="col-12 col-sm-6">
										<div className="date" id="date1" data-target-input="nearest">
											<input type="text"
												className="form-control border-0 datetimepicker-input h-55 border-radius-10"
												placeholder="Service Date" data-target="#date1" data-toggle="datetimepicker" />
										</div>
									</div>
									<div className="col-12">
										<textarea className="form-control border-0 border-radius-10" placeholder="Special Request"></textarea>
									</div>
									<div className="col-12">
										<button className="btn btn-primary-color w-100 py-3 border-radius-10" type="submit">Book Now</button>
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
export { Booking }