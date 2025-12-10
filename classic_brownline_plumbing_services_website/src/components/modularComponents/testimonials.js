import { useEffect, useState } from "react"
import { useDeviceType } from "../../hooks/deviceType"

const testimonialSliders = [
    {
        id: 1,
        img: require("../../assets/img/testimonial-1.jpg"),
        name: "Chinedu Okafor",
        position: "Civil Engineer",
        feedback:
            "Classic Brownline responded faster than I expected. Their team handled my leaking pipes professionally and ensured everything was restored the same day. Highly reliable service.",
    },
    {
        id: 2,
        img: require("../../assets/img/testimonial-2.jpg"),
        name: "Aisha Bello",
        position: "Business Owner",
        feedback:
            "They installed the plumbing system for my new shop and the quality is outstanding. I’ve had zero issues since then. I recommend them to anyone who wants long-term solutions.",
    },
    {
        id: 3,
        img: require("../../assets/img/testimonial-1.jpg"),
        name: "Tunde Adeyemi",
        position: "Estate Manager",
        feedback:
            "We use Classic Brownline for all our estate plumbing maintenance. Their workmanship is clean and they always meet deadlines. Easily one of the best plumbing services in Lagos.",
    },
    {
        id: 4,
        img: require("../../assets/img/testimonial-2.jpg"),
        name: "Ngozi Chukwuma",
        position: "Home Owner",
        feedback:
            "Their technicians are polite, skilled, and very thorough. They fixed a long-standing drainage issue that others couldn’t figure out. I’m extremely satisfied with the work.",
    },
    // {
    //     id: 5,
    //     img: require("../../assets/img/testimonial-1.jpg"),
    //     name: "Client Name",
    //     position: "Profession",
    //     feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    // },
    // {
    //     id: 6,
    //     img: require("../../assets/img/testimonial-2.jpg"),
    //     name: "Client Name",
    //     position: "Profession",
    //     feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    // },
    // {
    //     id: 7,
    //     img: require("../../assets/img/testimonial-3.jpg"),
    //     name: "Client Name",
    //     position: "Profession",
    //     feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    // },
    // {
    //     id: 8,
    //     img: require("../../assets/img/testimonial-4.jpg"),
    //     name: "Client Name",
    //     position: "Profession",
    //     feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    // },
]
const AllStars = () => {
    return (
        <>
            {
                Array.from({length: 5}).map((_, idx) => {
                    return (
                        <small key={idx} className="fa fa-star text-primary"></small>
                    )
                })
            }
        </>
    )
}

function Testimonial() {
    const isMobile = useDeviceType()
	const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(1);
    let totalTestimonials = testimonialSliders.length - 2;
    let numberOfCardsToSlideTo = 0 // 2
	if (isMobile.width > 768 && isMobile.width <= 1024) {
        totalTestimonials = testimonialSliders.length;
		numberOfCardsToSlideTo = 1
	}
	else if (isMobile.width <= 768) {
        totalTestimonials = testimonialSliders.length;
		numberOfCardsToSlideTo = 0
	}

    useEffect(() => {
        const intervalTime = 2900; // match your CSS slide duration/pause timing
        const interval = setInterval(() => {
            setCurrentTestimonialIndex((prev) => (prev + 1) % totalTestimonials);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [totalTestimonials]);

    const nextSlide = () => {
        setCurrentTestimonialIndex((prev) => (prev + 1) % totalTestimonials);
    };

    const prevSlide = () => {
        setCurrentTestimonialIndex((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
    };
    // console.log({currentTestimonialIndex});
    
    // console.log(
	// 	`        numberOfCardsToSlideTo: ${numberOfCardsToSlideTo},
	// 	currentTestimonialIndex: ${currentTestimonialIndex},
	// 	used: ${currentTestimonialIndex} - ${numberOfCardsToSlideTo} = ${currentTestimonialIndex - numberOfCardsToSlideTo}
	// `)
	return (
		<div className="container-xxl py-5 mobile-container wow fadeInUp">
			<div className="container">
				<div className="text-center">
					{/* <h6 className="text-secondary text-uppercase">Testimonial</h6> */}
					<h1 className="mb-2">Testimonials</h1>
				</div>
				<div className="owl-carousel owl-loaded testimonial-carousel position-relative wow fadeInUp">
					<div className="owl-stage-outer">
						<div className="owl-stage testimonial-slider"
						style={{
							transform: `translate3d(-${(currentTestimonialIndex - numberOfCardsToSlideTo) * 424}px, 0, 0)`, // <-- move horizontally
							transition: "transform 0.5s ease-in-out", // smooth animation
						}}>
							{testimonialSliders.map((testimonial, tesIdx) => {
								const isActive = null // tesIdx % (totalTestimonials * 2) === currentTestimonialIndex + 1;
                                const first = tesIdx === 0
                                const last = testimonialSliders.length - 1
                                // console.log({last: testimonialSliders.length, tesIdx})
								// console.log({isActive, tesIdx, currentTestimonialIndex, totalTestimonials});
								return (
									<div key={testimonial.name+tesIdx}
									className="owl-item testimonial-cloned"
                                    style={(isMobile.width>360 && isMobile.width<=768)?
                                        {
                                            marginLeft: first?10:40,
                                            marginRight: last?0:20,
                                        }:
                                        isMobile.width<=360?
                                        {
                                            marginLeft: first?10:95,
                                            marginRight: last?0:20,
                                        }:{}}>
									<div className="testimonial-item text-center">
										<div className={`testimonial-text bg-light text-center p-4 mb-3 border-radius-10 ${isActive?'active':''}`}>
											<p className="mb-0">{testimonial.feedback}</p>
										</div>
										<img className="bg-light border-radius-20 p-2 mx-auto mb-2 w-80 h-80" alt="" src={testimonial.img} />
										<div className="mb-2">
											<AllStars />
										</div>
										<h5 className="mb-1">{testimonial.name}</h5>
										<p className="m-0">{testimonial.position}</p>
									</div>
									</div>
								)
							})}
						</div>
					</div>
					{isMobile.width<=768 ?
                    <div className="owl-nav">
						<div className="owl-prev" onClick={prevSlide}><i className="fa fa-chevron-left"></i></div>
						<div className="owl-next" onClick={nextSlide}><i className="fa fa-chevron-right"></i></div>
					</div>:null}
				</div>
			</div>
		</div>
	)
}
export { Testimonial }