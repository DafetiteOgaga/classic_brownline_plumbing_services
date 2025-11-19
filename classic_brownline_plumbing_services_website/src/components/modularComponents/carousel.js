import { useState, useEffect } from "react";
import { titleCase } from "../../hooks/changeCase";

// const carouselSlides = [
//     {
//         id: 1,
//         img: require("../../assets/img/carousel-1.jpg"),
//         title: "Plumbing & Repairing Services",
//         headline: "Efficient Residential Plumbing Services",
//         text: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
//     },
//     {
//         id: 2,
//         img: require("../../assets/img/carousel-2.jpg"),
//         title: "Plumbing & Repairing Services",
//         headline: "Efficient Commercial Plumbing Services",
//         text: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
//     },
// ];

const carouselSlides = [
    {
        id: 1,
        img: require("../../assets/img/carousel-1.jpg"),
        title: "Professional Plumbing & Repair Services",
        headline: "Fast and Reliable Residential Plumbing Solutions",
        text: "From leaky faucets to burst pipes, we provide prompt and affordable plumbing repairs to keep your home running smoothly. Trusted by homeowners for quality workmanship and lasting results.",
    },
    {
        id: 2,
        img: require("../../assets/img/carousel-2.jpg"),
        title: "Expert Commercial Plumbing Services",
        headline: "Keeping Your Business Flowing Without Disruptions",
        text: "Our certified plumbers handle large-scale plumbing installations, maintenance, and emergency repairs for offices, hotels, and industrial facilities — ensuring minimal downtime and maximum efficiency.",
    },
    {
        id: 3,
        img: require("../../assets/img/service-1.jpg"),
        title: "Emergency Plumbing Support",
        headline: "24/7 Emergency Plumbing — We’re Always Ready",
        text: "Day or night, our team is available for urgent plumbing issues like blocked drains, flooding, or broken pipes. Quick response and professional service guaranteed every time.",
    },
];

function Carousel({onCarouselLoaded}) {
	const [isImageLoaded, setIsImageLoaded] = useState(false);
	const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState("");
    const [isFading, setIsFading] = useState(false);
    const [isSliding, setIsSliding] = useState(false);
    
    const length = carouselSlides.length;

	useEffect(() => {
		let loadedCount = 0;
		// console.log("Starting to preload carousel images");
		const handleAllLoaded = () => {
			// tell parent that carousel images are ready
			// console.log("handling loaded images");
			if (typeof onCarouselLoaded === "function") {
				// console.log("onCarouselLoaded is a function");
				onCarouselLoaded();
			}
		};
	
		// preload all slides
		carouselSlides.forEach(slide => {
			const img = new Image();
			img.src = slide.img;
			// console.log(`Preloading image: ${slide.img}`);
			img.onload = () => {
				// console.log("count:", loadedCount + 1);
				loadedCount++;
				if (loadedCount === carouselSlides.length) {
					// console.log("All carousel images loaded");
					handleAllLoaded(); // all images loaded
				}
			};
			img.onerror = () => {
				// console.log(`Error loading image: ${slide.img}`);
				// console.log("count (with error):", loadedCount + 1);
				// still count errors as loaded (so spinner doesn’t stay forever)
				loadedCount++;
				if (loadedCount === carouselSlides.length) {
					// console.log("All carousel images attempted to load (with some errors)");
					handleAllLoaded();
				}
			};
		});
	}, []);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextWithFade();
        }, 4000);

        return () => clearInterval(interval);
    }, [current]);

	const preloadImage = (src) => {
        const img = new Image();
        img.src = src;
    };

    const handleNextWithFade = () => {
        setDirection("left");
        setIsFading(true);
        setIsSliding(true); // start fade-out

        const nextIndex = current === length - 1 ? 0 : current + 1;
        preloadImage(carouselSlides[nextIndex].img); // preloads next image early to avoid flicker

        setTimeout(() => {
            setIsFading(false);
            setIsSliding(false); // end fade-out
            setCurrent(nextIndex); // change slide after fade
        }, 800); // must match CSS fade duration
    };

    const handlePrevWithFade = () => {
        setDirection("right");
        setIsFading(true);
        setIsSliding(true);

        const prevIndex = current === 0 ? length - 1 : current - 1;
        preloadImage(carouselSlides[prevIndex].img);

        setTimeout(() => {
            setIsFading(false);
            setIsSliding(false);
            setCurrent(prevIndex);
        }, 800);
    };
    const slide = carouselSlides[current];
	const showSpinner = !isImageLoaded;
	// console.log({showSpinner});
	return (
		<div className={`container-fluid mb-5 position-relative p-0`}>
			{/* Spinner */}
			<div className={`owl-carousel owl-loaded header-carousel position-relative overflow-hidden`}>
				<div className="owl-stage-outer">
					<div className="owl-stage"
					style={{
						transform: `translate3d(-0, 0, 0)`, // <-- move horizontally
						transition: "transform 1.5s ease-in-out", // smooth animation
					}}>
						{/* Spinner */}
						<div
						id="spinner"
						className={`${showSpinner?'show':''} app-bg-color position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center`}>
							<div className="spinner-border text-primary w-3rem h-3rem" role="status">
								<span className="sr-only"/>
							</div>
						</div>

						<img
						key={slide.id}
						className={`img-fluid carousel-slide ${
							// isSliding ? `slide-${direction}` : "enter"
							isFading ? 'fade-out' : 'fade-in'
							}`}
						src={slide.img}
						alt={slide.title}
						onLoad={(e) => {
							setIsImageLoaded(true);
							// console.log({height: e.target.naturalHeight, width: e.target.naturalWidth});
							// console.log({offHeight: e.target.offsetHeight, offWidth: e.target.offsetWidth});
						}} // image ready
						onError={() => console.error(`Failed to load image: ${slide.img}`)}
						/>
						<div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center bg-0004">
							<div className="container">
								<div className="row justify-content-start">
									<div key={slide.id}
									className={`col-10 col-lg-8`}>
										<h5 className={`text-white text-uppercase mb-3 animated slideInDown carousel-fade ${isFading ? 'fade-out' : 'fade-in'}`}>{slide.title}</h5>
										<h1 className={`display-3 text-white animated slideInDown mb-4 carousel-fade ${isFading ? 'fade-out' : 'fade-in'}`}>{slide.headline}</h1>
										<p className={`fs-5 fw-medium text-white mb-4 pb-2 carousel-fade ${isFading ? 'fade-out' : 'fade-in'}`}>{slide.text}</p>
										{/* <a href="##" className="btn btn-primary py-md-3 px-md-5 me-3 animated littleSlideInLeft border-radius-5">Read More</a> */}
										<a href="##" className="btn btn-primary btn-border-white py-md-3 px-md-5 animated littleSlideInRight border-radius-5">Free Quote</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Arrows */}
				<button className="carousel-btn prev" onClick={handlePrevWithFade}>
					<i className="fa fa-chevron-left dual-arrow-prev"></i>
				</button>
				<button className="carousel-btn next" onClick={handleNextWithFade}>
					<i className="fa fa-chevron-right dual-arrow-next"></i>
				</button>
			</div>
			{/* : */}
			
			{/* } */}
		</div>
	)
}
export { Carousel }