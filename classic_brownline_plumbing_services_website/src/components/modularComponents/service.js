import { useEffect, useState } from "react";

const serviceCardsSlides = [
    {
		id: 1,
		icon: "fa-water",
		title: "Drain Repair",
		description: "Expert drain repair for clogged or slow drains. We provide fast, reliable solutions to keep your plumbing flowing smoothly and prevent future blockages.",
	},
	{
		id: 2,
		icon: "fa-toilet",
		title: "Toilet & Pipe Repair",
		description: "Professional toilet and pipe repair services. From leaks to complete replacements, our team ensures your fixtures work efficiently and reliably.",
	},
	{
		id: 3,
		icon: "fa-shower",
		title: "Sewer Line Repair",
		description: "Comprehensive sewer line repair and maintenance. We handle everything from minor fixes to major line replacements, protecting your property from costly damage.",
	},
	{
		id: 4,
		icon: "fa-tint",
		title: "Water Heater Repair & Installation",
		description: "Reliable water heater services, including repairs, maintenance, and new installations. Enjoy consistent hot water and energy-efficient solutions for your home or business.",
	},
    // {
    //     id: 5,
    //     icon: "fa-water",
    //     title: "Drain Repair",
    //     description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.",
    // },
    // {
    //     id: 6,
    //     icon: "fa-toilet",
    //     title: "Toilet Pipe Repair",
    //     description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.",
    // },
    // {
    //     id: 7,
    //     icon: "fa-shower",
    //     title: "Sewer Line Repair",
    //     description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.",
    // },
    // {
    //     id: 8,
    //     icon: "fa-tint",
    //     title: "Water Heater Repair",
    //     description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.",
    // },
]

function Service({yearFounded, currentYear}) {
	const [currentServiceCardIndex, setCurrentServiceCardIndex] = useState(0);
    const totalServiceCards = serviceCardsSlides.length;
    useEffect(() => {
        const intervalTime = 1500; // match your CSS slide duration/pause timing
        const interval = setInterval(() => {
            setCurrentServiceCardIndex((prev) => (prev + 1) % totalServiceCards);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [totalServiceCards]);
	return (
		<div className={`container-fluid py-5 px-4 px-lg-0`}>
			<div className="row g-0">
				<div className="col-lg-2 d-none d-lg-flex">
					<div className="d-flex align-items-center justify-content-center bg-primary w-100 h-100">
						<h1 className="display-4 text-white m-0 rotate-n90 text-center">{`Over ${currentYear - yearFounded} Years of Plumbing Excellence`}</h1>
					</div>
				</div>
				<div className="col-md-12 col-lg-9">
					<div className="ms-lg-5 ps-lg-5">
						<div className="text-center text-lg-start wow fadeInUp" data-wow-delay="0.1s">
							<h6 className="text-secondary text-uppercase">Our Services</h6>
							<h1 className="mb-5">Explore Our Services</h1>
						</div>
						<div className="owl-carousel service-carousel position-relative wow fadeInUp" data-wow-delay="0.1s">
							<div className="owl-stage-outer">
								<div className="owl-stage service-card-slider"
								style={{
									transform: `translate3d(-${(currentServiceCardIndex - 2) * 372}px, 0, 0)`, // <-- move horizontally
									transition: "transform 1s ease-in-out", // smooth animation
								}}>
									{serviceCardsSlides.map((serviceCard, scIdx) => {
										// const isActive = scIdx % totalServiceCards === currentServiceCardIndex
										return (
											<div key={serviceCard.title+scIdx}
											className="owl-item cloned">
												<div className="bg-light p-4 border-radius-10">
													<div className="d-flex align-items-center justify-content-center border border-5 border-white mb-4 w-75 h-75 border-radius-10">
														<i className={`fa ${serviceCard.icon} fa-2x text-primary`}></i>
													</div>
													<h4 className="mb-3">{serviceCard.title}</h4>
													<p>{serviceCard.description}</p>
													<p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
													<p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
													<p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p>
													<a href="##" className="btn bg-white text-primary w-100 mt-2 border-radius-5">Read More<i className="fa fa-arrow-right text-secondary ms-2"></i></a>
												</div>
											</div>
										)
									})}
								</div>
								<div className="owl-dots">
									{serviceCardsSlides.map((_, _idx) => {
										const isActive = _idx % totalServiceCards === currentServiceCardIndex
										return (
											<div key={_idx} className={`owl-dot ${isActive?'active':''}`}><span></span></div>
									)})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export { Service }