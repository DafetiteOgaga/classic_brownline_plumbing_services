import { useState, useEffect } from "react";
import { titleCase } from "../../hooks/changeCase";

const carouselSlides = [
    {
        id: 1,
        img: require("../../assets/img/carousel-1.jpg"),
        title: "Plumbing & Repairing Services",
        headline: "Efficient Residential Plumbing Services",
        text: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
    },
    {
        id: 2,
        img: require("../../assets/img/carousel-2.jpg"),
        title: "Plumbing & Repairing Services",
        headline: "Efficient Commercial Plumbing Services",
        text: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
    },
];

function Carousel({menuHeadInserted, tagText, handleNavigationScroll}) {
	const [isImageLoaded, setIsImageLoaded] = useState(false);
	const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState("");
    const [isFading, setIsFading] = useState(false);
    const [isSliding, setIsSliding] = useState(false);
    
    const length = carouselSlides.length;

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
	return (
		<div className={`container-fluid mb-5 position-relative ${!menuHeadInserted?'p-0':'page-header py-5'}`} id={tagText.toLowerCase()}>
			{/* Spinner */}
			<div className={`owl-carousel owl-loaded header-carousel position-relative overflow-hidden ${!menuHeadInserted?'':'d-none'}`}>
				<div className="owl-stage-outer">
					<div className="owl-stage"
					style={{
						transform: `translate3d(-0, 0, 0)`, // <-- move horizontally
						transition: "transform 1.5s ease-in-out", // smooth animation
					}}>
						{/* Spinner */}
						{!isImageLoaded && (
						<div id="spinner" className="show position-fixed translate-middle w-100 h-100 top-50 start-50 d-flex align-items-center justify-content-center">
							<div className="spinner-border text-primary w-3rem h-3rem" role="status">
								<span className="sr-only"/>
							</div>
						</div>)}
						{/* Spinner */}
						<img
						key={slide.id}
						className={`img-fluid carousel-slide ${
							// isSliding ? `slide-${direction}` : "enter"
							isFading ? 'fade-out' : 'fade-in'
							}`}
						src={slide.img}
						alt={slide.title}
						onLoad={() => setIsImageLoaded(true)} // image ready
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
										<a href="##" className="btn btn-secondary py-md-3 px-md-5 animated littleSlideInRight border-radius-5">Free Quote</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Arrows */}
				<button className="carousel-btn prev" onClick={handlePrevWithFade}>
					<i className="fa fa-chevron-left"></i>
				</button>
				<button className="carousel-btn next" onClick={handleNextWithFade}>
					<i className="fa fa-chevron-right"></i>
				</button>
			</div>
			{/* : */}
			<div className={`container ${menuHeadInserted?'':'d-none'}`}>
				<h1 className="display-3 text-white mb-3 animated littleSlideInDown">{titleCase(tagText)}</h1>
				<nav aria-label="breadcrumb animated slideInDown">
					<ol className="breadcrumb text-uppercase">
						<li className="breadcrumb-item"><a className="text-white" href="##"
						onClick={(e)=>{
							handleNavigationScroll(e, 'home');
						}}>Home</a></li>
						{/* <li className="breadcrumb-item"><a className="text-white" href="##">Pages</a></li> */}
						<li className="breadcrumb-item text-white active" aria-current="page">{titleCase(tagText)}</li>
					</ol>
				</nav>
			</div>
			{/* } */}
		</div>
	)
}
export { Carousel }