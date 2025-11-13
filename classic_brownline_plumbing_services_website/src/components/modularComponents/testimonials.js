import { useEffect, useState } from "react"

const testimonialSliders = [
    {
        id: 1,
        img: require("../../assets/img/testimonial-1.jpg"),
        name: "Client Name",
        position: "Profession",
        feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    },
    {
        id: 2,
        img: require("../../assets/img/testimonial-2.jpg"),
        name: "Client Name",
        position: "Profession",
        feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    },
    {
        id: 3,
        img: require("../../assets/img/testimonial-3.jpg"),
        name: "Client Name",
        position: "Profession",
        feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    },
    {
        id: 4,
        img: require("../../assets/img/testimonial-4.jpg"),
        name: "Client Name",
        position: "Profession",
        feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    },
    {
        id: 5,
        img: require("../../assets/img/testimonial-1.jpg"),
        name: "Client Name",
        position: "Profession",
        feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    },
    {
        id: 6,
        img: require("../../assets/img/testimonial-2.jpg"),
        name: "Client Name",
        position: "Profession",
        feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    },
    {
        id: 7,
        img: require("../../assets/img/testimonial-3.jpg"),
        name: "Client Name",
        position: "Profession",
        feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    },
    {
        id: 8,
        img: require("../../assets/img/testimonial-4.jpg"),
        name: "Client Name",
        position: "Profession",
        feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    },
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
	const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(1);
    const totalTestimonials = testimonialSliders.length;

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
	return (
		<div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
			<div className="container">
				<div className="text-center">
					{/* <h6 className="text-secondary text-uppercase">Testimonial</h6> */}
					<h1 className="mb-2">Testimonials</h1>
				</div>
				<div className="owl-carousel owl-loaded testimonial-carousel position-relative wow fadeInUp" data-wow-delay="0.1s">
					<div className="owl-stage-outer">
						<div className="owl-stage testimonial-slider"
						style={{
							transform: `translate3d(-${currentTestimonialIndex * 424}px, 0, 0)`, // <-- move horizontally
							transition: "transform 0.5s ease-in-out", // smooth animation
						}}>
							{[...testimonialSliders, ...testimonialSliders].map((testimonial, tesIdx) => {
								const isActive = tesIdx % (totalTestimonials * 2) === currentTestimonialIndex + 1;
								// console.log({isActive, tesIdx, currentTestimonialIndex, totalTestimonials});
								return (
									<div key={testimonial.name+tesIdx}
									className="owl-item testimonial-cloned">
									<div className="testimonial-item text-center">
										<div className={`testimonial-text bg-light text-center p-4 mb-3 border-radius-10 ${isActive?'active':''}`}>
											<p className="mb-0">{tesIdx+1}-{testimonial.feedback}</p>
										</div>
										<img className="bg-light rounded-circle p-2 mx-auto mb-2 w-80 h-80" alt="" src={testimonial.img} />
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
					<div className="owl-nav">
						<div className="owl-prev" onClick={prevSlide}><i className="fa fa-chevron-left"></i></div>
						<div className="owl-next" onClick={nextSlide}><i className="fa fa-chevron-right"></i></div>
					</div>
				</div>
			</div>
		</div>
	)
}
export { Testimonial }