import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDeviceType } from "../../hooks/deviceType";

const serviceCardsSlides = [
	{
		id: 1,
		icon: "fa-tools",
		title: "Toilet & Pipe Repair",
		description:
			"Professional toilet and pipe repair services. From leaks to complete replacements, our team ensures your fixtures work efficiently and reliably.",
		detailedDescription:
			"Leaky pipes and faulty toilets are more than just inconveniences—they can lead to water damage, mold growth, and high utility bills. Our expert plumbers are equipped to repair, replace, or install any type of pipe or toilet fixture. We begin with a detailed inspection to identify the exact cause of leaks or blockages, whether it’s cracked pipes, corroded joints, or worn-out seals. From quick patching and valve replacement to full piping system overhauls, we handle it all with precision and care. Our pipe repair services include leak detection, joint sealing, re-piping, and pressure balancing. Toilet repair services include unclogging, flushing mechanism replacement, tank repair, and installation of modern, water-efficient units. Our goal is to restore efficiency, save water, and ensure long-term reliability.",
		img: require("../../assets/img/output_thumbnail/service-details-1.jpg"),
	},
	{
		id: 2,
		icon: "fa-faucet-drip",
		title: "Drain Repair",
		description:
			"Expert drain repair for clogged or slow drains. We provide fast, reliable solutions to keep your plumbing flowing smoothly and prevent future blockages.",
		detailedDescription:
			"Our drain repair service covers every aspect of drainage system maintenance and restoration. Whether you're dealing with a slow drain, recurring clogs, unpleasant odors, or full blockages, our technicians use advanced inspection tools—such as drain cameras and hydro-jetting equipment—to identify and clear the problem efficiently. We don’t just fix the issue temporarily; we diagnose the root cause, whether it’s grease buildup, corrosion, or collapsed pipes. Once repaired, we perform flow tests and provide tips to help you maintain a clean, efficient drainage system. Ideal for residential, commercial, and industrial drainage systems. Common issues fixed include clogged sinks, floor drains, showers, toilets, and main sewer lines.",
		img: require("../../assets/img/output_thumbnail/service-details-2.jpg"),
	},
	{
		id: 3,
		icon: "fa-thermometer-three-quarters",
		title: "Water Heater Repair & Installation",
		description:
			"Reliable water heater services, including repairs, maintenance, and new installations. Enjoy consistent hot water and energy-efficient solutions for your home or business.",
		detailedDescription:
			"Whether your water heater is leaking, making strange noises, or struggling to provide consistent heat, our certified plumbers are ready to help. We service both tank and tankless water heaters, offering repair, maintenance, and full replacement options. Our process begins with a detailed system inspection—checking thermostats, heating elements, and valves—to identify performance issues. We then repair faulty components or recommend modern, energy-efficient replacements when necessary. For new installations, we help you choose the right capacity and model based on your household or business needs, ensuring maximum performance and energy savings. We service electric, gas, solar, and hybrid water heaters. Our goal is to provide safe, efficient, and reliable hot water all year round.",
		img: require("../../assets/img/output_thumbnail/service-details-3.jpg"),
	},
	{
		id: 4,
		icon: "fa-wrench",
		title: "Sewer Line Repair",
		description:
			"Comprehensive sewer line repair and maintenance. We handle everything from minor fixes to major line replacements, protecting your property from costly damage.",
		detailedDescription:
			"Sewer line issues can quickly escalate into serious property damage if not addressed promptly. Our comprehensive sewer line repair service ensures your waste disposal system operates safely and efficiently. We use non-invasive diagnostic tools such as sewer cameras to pinpoint blockages, cracks, or tree root intrusion—without unnecessary digging. Depending on the damage, we offer trenchless pipe repair, sectional replacements, or full re-piping solutions. Our technicians ensure minimal disruption to your property while maintaining strict health and safety standards. After repairs, we conduct flow tests and sanitization to leave your system fully operational. Common causes we handle include corrosion, ground shifting, tree roots, and collapsed lines. Service available for homes, apartment complexes, offices, and industrial facilities.",
		img: require("../../assets/img/output_thumbnail/service-details-4.jpg"),
	},
]

function Service({yearFounded, currentYear}) {
	const isMobile = useDeviceType()
	const navigate = useNavigate();
	// console.log("Rendering Service component", handleNavigationScroll);
	const [currentServiceCardIndex, setCurrentServiceCardIndex] = useState(0);
    const totalServiceCards = serviceCardsSlides.length;
    useEffect(() => {
        const intervalTime = 1500; // match your CSS slide duration/pause timing
        const interval = setInterval(() => {
            setCurrentServiceCardIndex((prev) => (prev + 1) % totalServiceCards);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [totalServiceCards]);
	// console.log({
	// 	isMobile
	// })
	let numberOfCardsToSlideTo = 2
	let cardWidth = 372
	if (isMobile.width > 768 && isMobile.width <= 1024) {
		numberOfCardsToSlideTo = 1
	}
	else if (isMobile.width <= 768) {
		numberOfCardsToSlideTo = 0
	}
	if (isMobile.width <= 394) {
		cardWidth = 320
	}
	// console.log({
	// 	numberOfCardsToSlideTo,
	// 	currentServiceCardIndex,
	// 	isMobileWidth: isMobile.width,
	// 	used: currentServiceCardIndex - numberOfCardsToSlideTo
	// })
	return (
		<div className={`container-fluid py-5 px-4 px-md-0 mobile-service-container`}>
			<div className="row g-0 flex-nowrap">
				<div className="col-lg-2 d-none d-md-flex position-relative small-dev">
					{/* <div className="d-flex align-items-center justify-content-center bg-primary w-100 h-100"> */}
					<div className="bg-primary w-100 h-100 position-relative">
						<h1 className="display-4 years-badge text-white m-0 rotate-n90 text-center position-absolute">{`Over ${currentYear - yearFounded} Years of Plumbing Excellence`}</h1>
					</div>
				</div>
				<div className="col-md-12 col-lg-9">
					<div className="ms-lg-5 ps-lg-5">
						<div className="text-center text-lg-start wow fadeInUp">
							{/* <h6 className="text-secondary text-uppercase">Our Services</h6> */}
							<h1 className="mb-5 m-bottom">Our Services</h1>
						</div>
						<div className="owl-carousel service-carousel position-relative wow fadeInUp">
							<div className="owl-stage-outer">
								<div className="owl-stage service-card-slider"
								style={{
									transform: `translate3d(-${(currentServiceCardIndex - numberOfCardsToSlideTo) * cardWidth}px, 0, 0)`, // <-- move horizontally
									transition: "transform 1s ease-in-out", // smooth animation
								}}>
									{serviceCardsSlides.map((serviceCard, scIdx) => {
										// const isActive = scIdx % totalServiceCards === currentServiceCardIndex
										return (
											<Link key={serviceCard.title+scIdx}
											to={`detail/${encodeURIComponent(serviceCard.title)}`}
											state={serviceCard}
											className="owl-item cloned">
												<div className="bg-light p-4 border-radius-10 p-round">
													<div className="d-flex align-items-center justify-content-center border border-color-primary mb-4 w-75 h-75 border-radius-10">
														<i className={`fa ${serviceCard.icon} fa-2x text-primary`}></i>
													</div>
													<h4 className="mb-3">{serviceCard.title}</h4>
													<p>{serviceCard.description}</p>
													<p className="text-primary fw-medium"><i className="fa fa-check text-primary me-2"></i>Quality Service</p>
													<p className="text-primary fw-medium"><i className="fa fa-check text-primary me-2"></i>Customer Satisfaction</p>
													<p className="text-primary fw-medium"><i className="fa fa-check text-primary me-2"></i>Support 24/7</p>
													<span
													// onClick={(e)=>navigate(`detail/${scIdx}`, {state: serviceCard})}
													className="btn services-btn text-primary w-100 border-radius-5">
														Read More
														<i className="fa fa-arrow-right text-primary ms-2"/>
													</span>
												</div>
											</Link>
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
export { Service, serviceCardsSlides }