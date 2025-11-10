import { useState, useEffect, Fragment } from "react";
import { titleCase } from "../hooks/changeCase";
// import OwlCarousel from "react-owl-carousel2";

const headerOptions = [
    {to: "home"},
    {to: "about"},
    {to: "services"},
    {to: "##"},
    {to: "contact"},
]
const pagesArray = [
    {to: "booking"},
    {to: "technicians"},
    {to: "testimonials"},
]

const carouselSlides = [
    {
        id: 1,
        img: require("../assets/img/carousel-1.jpg"),
        title: "Plumbing & Repairing Services",
        headline: "Efficient Residential Plumbing Services",
        text: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
    },
    {
        id: 2,
        img: require("../assets/img/carousel-2.jpg"),
        title: "Plumbing & Repairing Services",
        headline: "Efficient Commercial Plumbing Services",
        text: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
    },
];

const servicesSlides = [
    {
        id: 1,
        img: require("../assets/img/service-1.jpg"),
        title: "Residential Plumbing",
    },
    {
        id: 2,
        img: require("../assets/img/service-2.jpg"),
        title: "Commercial Plumbing",
    },
    {
        id: 3,
        img: require("../assets/img/service-3.jpg"),
        title: "Emergency Servicing",
    }
]

const factsSlides = [
    {
        id: 1,
        icon: "fa-check",
        end: 1233,
        title: "Years Experience",
    },
    {
        id: 2,
        icon: "fa-users-cog",
        end: 1237,
        title: "Expert Technicians",
    },
    {
        id: 3,
        icon: "fa-users",
        end: 1231,
        title: "Satisfied Clients",
    },
    {
        id: 4,
        icon: "fa-wrench",
        end: 1236,
        title: "Compleate Projects",
    }
]

// fact
const CountUp = ({ end, duration = 2000, className = "" }) => {
    const [value, setValue] = useState(0);
  
    useEffect(() => {
        let startTime;
        let animationFrame;
    
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easedProgress = easeOutCubic(progress); // smoother easing
            setValue(easedProgress * end);
    
            if (progress < 1) {
                animationFrame = requestAnimationFrame(step);
            }
        };
    
        requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);
  
    return (
        <h2
            className={`count-up text-white mb-2 ${className}`}
            style={{ "--count": value }}>
            {Math.floor(value)}
        </h2>
    );
};

  // Optional: easing function for natural timing
function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

// service card slider
const serviceCardsSlides = [
    {
        id: 1,
        icon: "fa-water",
        title: "Drain Repair",
        description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.",
    },
    {
        id: 2,
        icon: "fa-toilet",
        title: "Toilet Pipe Repair",
        description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.",
    },
    {
        id: 3,
        icon: "fa-shower",
        title: "Sewer Line Repair",
        description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.",
    },
    {
        id: 4,
        icon: "fa-tint",
        title: "Water Heater Repair",
        description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.",
    },
    {
        id: 5,
        icon: "fa-water",
        title: "Drain Repair",
        description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.",
    },
    {
        id: 6,
        icon: "fa-toilet",
        title: "Toilet Pipe Repair",
        description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.",
    },
    {
        id: 7,
        icon: "fa-shower",
        title: "Sewer Line Repair",
        description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.",
    },
    {
        id: 8,
        icon: "fa-tint",
        title: "Water Heater Repair",
        description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.",
    },
]

// team
const initialTeamSliders = [
    {
        id: 1,
        img: require("../assets/img/team-1.jpg"),
        name: "Full Name",
        position: "Designation",
    },
    {
        id: 2,
        img: require("../assets/img/team-2.jpg"),
        name: "Full Name",
        position: "Designation",
    },
    {
        id: 3,
        img: require("../assets/img/team-3.jpg"),
        name: "Full Name",
        position: "Designation",
    },
    {
        id: 4,
        img: require("../assets/img/team-4.jpg"),
        name: "Full Name",
        position: "Designation",
    }
]
const additionalTeamSliders = [
    {
        id: 5,
        img: require("../assets/img/team-1.jpg"),
        name: "Full Name",
        position: "Designation",
    },
    {
        id: 6,
        img: require("../assets/img/team-2.jpg"),
        name: "Full Name",
        position: "Designation",
    },
    {
        id: 7,
        img: require("../assets/img/team-3.jpg"),
        name: "Full Name",
        position: "Designation",
    },
    {
        id: 8,
        img: require("../assets/img/team-4.jpg"),
        name: "Full Name",
        position: "Designation",
    }
]

// testimonial
const testimonialSliders = [
    {
        id: 1,
        img: require("../assets/img/testimonial-1.jpg"),
        name: "Client Name",
        position: "Profession",
        feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    },
    {
        id: 2,
        img: require("../assets/img/testimonial-2.jpg"),
        name: "Client Name",
        position: "Profession",
        feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    },
    {
        id: 3,
        img: require("../assets/img/testimonial-3.jpg"),
        name: "Client Name",
        position: "Profession",
        feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    },
    {
        id: 4,
        img: require("../assets/img/testimonial-4.jpg"),
        name: "Client Name",
        position: "Profession",
        feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    },
    {
        id: 5,
        img: require("../assets/img/testimonial-1.jpg"),
        name: "Client Name",
        position: "Profession",
        feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    },
    {
        id: 6,
        img: require("../assets/img/testimonial-2.jpg"),
        name: "Client Name",
        position: "Profession",
        feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    },
    {
        id: 7,
        img: require("../assets/img/testimonial-3.jpg"),
        name: "Client Name",
        position: "Profession",
        feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    },
    {
        id: 8,
        img: require("../assets/img/testimonial-4.jpg"),
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
                        <small key={idx} className="fa fa-star" style={{color: '#32CD32'}}></small>
                    )
                })
            }
        </>
    )
}

const yearFounded = 2010
const currentYear = new Date().getFullYear();

function Index() {
    const [isLoading, setIsLoading] = useState(true);
    // header
    const [isSticky, setIsSticky] = useState(false);
    const [menuHeadInserted, setMenuHeadInserted] = useState(false);
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [tagText, setTagText] = useState('');
    const [staleTag, setStaleTag] = useState(true);
    const [activeSection, setActiveSection] = useState("");
    const [teamSliders, setTeamSliders] = useState(initialTeamSliders);
    useEffect(() => {
        const handleScroll = () => {
            const updatedScrollY = window.scrollY;
            setScrollY(updatedScrollY); // update scrollY state
            // // remove head when scrolling down
            if (updatedScrollY > 10) {
                setIsSticky(true);
            } else {
                // show head when scrolling up (to top)
                setIsSticky(false);
            }
        };
        // event listener
        window.addEventListener("scroll", handleScroll);
        // cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])
    useEffect(() => {
        if (menuHeadInserted) {
            console.log("menuHeadInserted true");
            const topbar = document.getElementById("home");
            console.log({topbarHeight: topbar.offsetHeight});
            const dynamicNavbar = document.getElementById("dynamic-navbar");
            console.log({dynamicNavbarHeight: dynamicNavbar.offsetHeight});
            const tempHero = document.getElementById(tagText.toLowerCase());
            console.log({tempHeroHeight: tempHero.offsetHeight});
            const maxHeadHeight = tempHero.offsetHeight +
                                    // topbar.offsetHeight +
                                    dynamicNavbar.offsetHeight;
            console.log({
                maxHeadHeight,
                scrollY,
                tempHeroHeight: tempHero.offsetHeight,
                topbarHeight: topbar.offsetHeight,
                wholeHeader: topbar.offsetHeight + dynamicNavbar.offsetHeight,
                dynamicNavbarHeight: dynamicNavbar.offsetHeight,
            });
            console.log({scrollY, maxHeadHeight, staleTag});
            if (scrollY > maxHeadHeight && !staleTag) {
                console.log("scrollY > tempHero.offsetHeight");
                console.log({scrollY, maxHeadHeight});
                setMenuHeadInserted(false);
                setActiveSection("");
            }
        }
    }, [scrollY])

    useEffect(() => {
        if (activeSection === 'technicians') {
            setTeamSliders(prev => [...prev, ...additionalTeamSliders]);
        } else {
            setTeamSliders(initialTeamSliders);
        }
    }, [activeSection])

    // carousel
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState("");
    const [isFading, setIsFading] = useState(false);
    const [isSliding, setIsSliding] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const length = carouselSlides.length;

    useEffect(() => {
        // setIsImageLoaded(false);
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
        // setIsImageLoaded(false);
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
        // setIsImageLoaded(false);
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

    const handleNavigationScroll = (e, idTag) => {
        e.preventDefault();
        console.log({idTag})
        if (!idTag) return ''
        if (idTag.toLowerCase() === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMenuHeadInserted(false);
            setActiveSection("");
            return;
        }
        setActiveSection(idTag.toLowerCase());
        setTagText(idTag);
        setMenuHeadInserted(true);
        setStaleTag(true);

        // checks foe element in dom then scroll into view
        const checkExist = setInterval(() => {
            const target = document.getElementById(idTag);
            console.log('checking...', {target});
            if (target) {
                console.log('found target:', target);
                clearInterval(checkExist); // stop checking once found
                target.scrollIntoView({ behavior: "smooth", block: "start" });
                // setStaleTag(false);
            }
        }, 50);
    }

    // service cards
    const [currentServiceCardIndex, setCurrentServiceCardIndex] = useState(0);
    const totalServiceCards = serviceCardsSlides.length;
    useEffect(() => {
        const intervalTime = 1500; // match your CSS slide duration/pause timing
        const interval = setInterval(() => {
            setCurrentServiceCardIndex((prev) => (prev + 1) % totalServiceCards);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [totalServiceCards]);

    // testimonials
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

    // // fact
    // const CounterUp = ({ value, duration = 800, className = "" }) => {
    //     const count = useCounterUp(value, duration);
    //     return (
    //       <span className={`counter-up ${className}`}>
    //         {count.toLocaleString()}
    //       </span>
    //     );
    // };
    useEffect(() => {
        const handlePageLoad = () => setIsLoading(false);

        // If page is already loaded (fast browser cache)
        if (document.readyState === 'complete') {
            handlePageLoad();
        } else {
            window.addEventListener('load', handlePageLoad);
        }
        return () => window.removeEventListener('load', handlePageLoad);
    }, []);
    const renderSection  = ['services', 'booking', 'technicians', 'testimonials',].includes(activeSection)
    const renderServices = ['', 'about-us', 'services',].includes(activeSection)
    const renderBooking = ['', 'about-us', 'services', 'booking',].includes(activeSection)
    const renderTechnicians = ['', 'about-us', 'services', 'booking', 'technicians',].includes(activeSection)
    const renderTestimonials = ['', 'about-us', 'services', 'booking', 'technicians', 'testimonials',].includes(activeSection)
    const renderContact = activeSection === 'contact'
    // console.log({scrollY, menuHeadInserted, activeSection});
    // console.log({
    //     menuHeadInserted,
    //     // activeSection,
    //     // renderSection,
    //     // renderServices,
    //     // renderBooking,
    //     // renderTechnicians,
    //     // renderTestimonials,
    // });
    return (
        <>
            {/* <!-- Spinner Start --> */}
            {/* {isLoading && */}
            <div id="spinner"
            className={`app-bg-color position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center ${isLoading ? 'show' : ''}`}>
                <div className="spinner-border text-primary w-3rem h-3rem" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
            {/* } */}
            {/* <!-- Spinner End --> */}


            {!isLoading &&
            <div className="app-bg-color">
                {/* <!-- Topbar Start --> */}
                <div className="container-fluid bg-light d-none d-lg-block" id="home">
                    <div className="row align-items-center top-bar">
                        <div className="col-lg-3 col-md-12 text-center text-lg-start">
                            <a href="##" className="navbar-brand m-0 p-0">
                                <h1 className="text-primary m-0 text-uppercase">Classic Brown</h1>
                            </a>
                        </div>
                        <div className="col-lg-9 col-md-12 text-end">
                            <div className="h-100 d-inline-flex align-items-center me-4">
                                <i className="fa fa-map-marker-alt text-primary me-2"></i>
                                <p className="m-0">123 Street, Brown Ave, South Africa</p>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center me-4">
                                <i className="far fa-envelope-open text-primary me-2"></i>
                                <p className="m-0">info@example.com</p>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center">
                                <a className="btn btn-sm-square bg-white text-primary me-1 border-radius-50" href="##"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square bg-white text-primary me-1 border-radius-50" href="##"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square bg-white text-primary me-1 border-radius-50" href="##"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-sm-square bg-white text-primary me-0 border-radius-50" href="##"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Topbar End --> */}


                {/* <!-- Navbar Start --> */}
                <div className={`container-fluid nav-bar bg-light ${isSticky ? 'sticky-top shadow' : ''}`} id="dynamic-navbar">
                    <nav className={`navbar navbar-expand-lg navbar-light app-bg-color p-3 py-lg-0 px-lg-4 ${isSticky ? '' : 'border-tl-radius-10 border-tr-radius-10'}`}>
                        <a href="##" className="navbar-brand d-flex align-items-center m-0 p-0 d-lg-none">
                            <h1 className="text-primary m-0 text-uppercase">Classic Brown</h1>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav me-auto">
                                {headerOptions.map((header, hIdx) => {
                                    let isActive = header.to.toLowerCase() === activeSection.toLowerCase();
                                    if (activeSection.toLowerCase() === '' && header.to.toLowerCase() === 'home') {
                                        isActive = true
                                    }
                                    return (
                                        <Fragment key={header.to+hIdx}>
                                            {header.to !== '##' ?
                                                <a href="##"
                                                onClick={(e)=>{
                                                    handleNavigationScroll(e, header.to);
                                                }}
                                                className={`nav-item nav-link ${isActive?'active':''}`}>{titleCase(header.to)}</a>
                                                :
                                                <div className="nav-item dropdown">
                                                    <a href="##" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                                    <div className="dropdown-menu fade-up m-0 app-bg-color">
                                                        {pagesArray.map((page, pIdx) => {
                                                            isActive = page.to.toLowerCase() === activeSection.toLowerCase();
                                                            // console.log({
                                                            //     page: page.to.toLowerCase(),
                                                            //     activeSection: activeSection.toLowerCase(),
                                                            //     isActive,
                                                            // })
                                                            return (
                                                                <a key={page.to+pIdx} href="##"
                                                                onClick={(e)=>{
                                                                    handleNavigationScroll(e, page.to);
                                                                }}
                                                                className={`dropdown-item ${isActive?'active':''}`}>{titleCase(page.to)}</a>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            }
                                        </Fragment>
                                    )
                                })}
                            </div>
                            <div className={`mt-4 mt-lg-0 me-lg-n4 py-3 px-4 bg-primary d-flex align-items-center ${isSticky ? '' : 'border-tr-radius-10'}`}>
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white w-45 h-45">
                                    <i className="fa fa-phone text-primary"></i>
                                </div>
                                <div className="ms-3">
                                    <p className="mb-1 text-white">Emergency 24/7</p>
                                    <h5 className="m-0 text-secondary">+012 345 6789</h5>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* <!-- Navbar End --> */}


                {/* <!-- Carousel Start --> */}
                <div className={`container-fluid mb-5 position-relative ${!menuHeadInserted?'p-0':'page-header py-5'}`} id={tagText.toLowerCase()}>
                    {/* <!-- Spinner End --> */}
                    <div className={`owl-carousel owl-loaded header-carousel position-relative overflow-hidden ${!menuHeadInserted?'':'d-none'}`}>
                        <div className="owl-stage-outer">
                            <div className="owl-stage"
                            style={{
                                transform: `translate3d(-0, 0, 0)`, // <-- move horizontally
                                transition: "transform 1.5s ease-in-out", // smooth animation
                            }}>
                                {/* <!-- Spinner Start --> */}
                                {!isImageLoaded && (
                                <div id="spinner" className="show position-fixed translate-middle w-100 h-100 top-50 start-50 d-flex align-items-center justify-content-center">
                                    <div className="spinner-border text-primary w-3rem h-3rem" role="status">
                                        <span className="sr-only"/>
                                    </div>
                                </div>)}
                                {/* <!-- Spinner End --> */}
                                <img
                                key={slide.id}
                                className={`img-fluid carousel-slide ${
                                    isSliding ? `slide-${direction}` : "enter"
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
                                                <a href="##" className="btn btn-primary py-md-3 px-md-5 me-3 animated littleSlideInLeft border-radius-5">Read More</a>
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
                {/* <!-- Carousel End --> */}


                {renderContact &&
                (
                // <!-- Contact Start -->
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
                                        frameborder="0" style={{height: "300px", border: "0"}} allowfullscreen="" aria-hidden="false"
                                        tabindex="0"></iframe>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="bg-light p-5 h-100 d-flex align-items-center border-radius-10">
                                        <form>
                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control border-radius-10" id="name" placeholder="Your Name"/>
                                                        <label for="name">Your Name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input type="email" className="form-control border-radius-10" id="email" placeholder="Your Email"/>
                                                        <label for="email">Your Email</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control border-radius-10" id="subject" placeholder="Subject"/>
                                                        <label for="subject">Subject</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <textarea className="form-control border-radius-10" placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                                        <label for="message">Message</label>
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
                // {/* <!-- Contact End --> */}
                )}

                {/* <!-- Service Start --> */}
                <div className={`container-xxl py-5 ${renderSection?'d-none':''}`}>
                    <div className="container">
                        <div className="row g-4">
                            {servicesSlides.map((service, seIdx) => {
                                return (
                                    <div key={service.title+seIdx}
                                    className="col-lg-4 col-md-6 service-item-top wow serviceFadeInUp" data-wow-delay="0.1s"
                                    style={{
                                        // visibility: 'visible',
                                        // animationName: 'fadeInUp',
                                        animationDelay: `${(seIdx * 0.2) + 0.1}s`,
                                    }}
                                    >
                                        <div className="overflow-hidden border-tr-radius-10 border-tl-radius-10">
                                            <img className="img-fluid w-100 h-100" src={service.img} alt={service.title} />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between bg-light p-4 border-br-radius-10 border-bl-radius-10">
                                            <h5 className="text-truncate me-3 mb-0">{service.title}</h5>
                                            <a className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0" href="##"><i className="fa fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* <!-- Service End --> */}


                {/* <!-- About Start --> */}
                <div className={`container-xxl py-5 ${renderSection?'d-none':''}`}>
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 wow serviceFadeInUp" style={{animationDelay: '0.2s'}}>
                                <h6 className="text-secondary text-uppercase">About Us</h6>
                                <h1 className="mb-4">We Are Trusted Plumbing Company Since {yearFounded}</h1>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <p className="fw-medium text-primary"><i className="fa fa-check text-success me-3"></i>Residential & commercial plumbing</p>
                                <p className="fw-medium text-primary"><i className="fa fa-check text-success me-3"></i>Quality services at affordable prices</p>
                                <p className="fw-medium text-primary"><i className="fa fa-check text-success me-3"></i>Immediate 24/ 7 emergency services</p>
                                <div className="bg-primary d-flex align-items-center p-4 mt-5 border-radius-10">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white w-60 h-60">
                                        <i className="fa fa-phone fa-2x text-primary"></i>
                                    </div>
                                    <div className="ms-3">
                                        <p className="fs-5 fw-medium mb-2 text-white">Emergency 24/7</p>
                                        <h3 className="m-0 text-secondary">+012 345 6789</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 pt-4 min-h-500">
                                <div className="position-relative h-100 wow fadeInUp" data-wow-delay="0.5s">
                                    <img className="position-absolute img-fluid w-100 h-100 fit-cover serviceFadeInUp border-radius-10" src={require("../assets/img/about-1.jpg")}
                                    style={{
                                        padding: "0 0 50px 100px",
                                        animationDelay: '0.4s'
                                        }} alt="" />
                                    <img className="position-absolute start-0 bottom-0 img-fluid bg-white pt-2 pe-2 w-50 h-50 fit-cover serviceFadeInUp border-radius-10" src={require("../assets/img/about-2.jpg")}
                                    style={{
                                        animationDelay: '0.6s'
                                        }}
                                    alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- About End --> */}


                {/* <!-- Fact Start --> */}
                <div className={`container-fluid fact bg-dark my-5 py-5 ${renderSection?'d-none':''}`}>
                    <div className="container">
                        <div className="row g-4">
                            {factsSlides.map((fact, fIdx) => {
                                return (
                                    <div key={fact.title+fIdx} className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                                        <i className={`fa ${fact.icon} fa-2x text-white mb-3`}></i>
                                        {/* <h2 className="text-white mb-2" data-toggle="counter-up">{useCounterUp(1235)}</h2> */}
                                        <CountUp end={fact.end} className="text-white mb-2" />
                                        <p className="text-white mb-0">{fact.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* <!-- Fact End --> */}


                {/* <!-- Service Start --> */}
                <div className={`container-fluid py-5 px-4 px-lg-0 ${renderServices ? '' : 'd-none'}`}>
                    <div className="row g-0">
                        <div className="col-lg-3 d-none d-lg-flex">
                            <div className="d-flex align-items-center justify-content-center bg-primary w-100 h-100">
                                <h1 className="display-3 text-white m-0 rotate-n90">{currentYear-yearFounded} Years Experience</h1>
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
                                            transition: "transform 0.5s ease-in-out", // smooth animation
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
                                                            <h4 className="mb-3">{scIdx+1} {serviceCard.title}</h4>
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
                                    {/* <div className="owl-dots">
                                        <div className="owl-dot"><span></span></div>
                                        <div className="owl-dot"><span></span></div>
                                        <div className="owl-dot"><span></span></div>
                                        <div className="owl-dot"><span></span></div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Service End --> */}


                {/* <!-- Booking Start --> */}
                <div className={`container-fluid my-5 px-0 ${renderBooking ? '' : 'd-none'}`}>
                    {/* <div className="video wow fadeInUp" data-wow-delay="0.1s">
                        <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span></span>
                        </button>

                        <div className="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content rounded-0">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="ratio ratio-16x9">
                                            <iframe
                                            title="YouTube video player"
                                            className="embed-responsive-item"
                                            src=""
                                            id="video"
                                            allowfullscreen
                                            allowscriptaccess="always"
                                            allow="autoplay"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-white mb-4">Emergency Plumbing Service</h1>
                        <h3 className="text-white mb-0">24 Hours 7 Days a Week</h3>
                    </div> */}
                    <div className="container position-relative wow mt-1 fadeInUp" data-wow-delay="0.1s" style={{marginTop: "-6rem"}}>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="bg-light text-center p-5 border-radius-10">
                                    <h1 className="mb-4">Book For A Service</h1>
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
                                                <button className="btn btn-primary w-100 py-3 border-radius-10" type="submit">Book Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Booking End --> */}


                {/* <!-- Team Start --> */}
                <div className={`container-xxl py-5 ${renderTechnicians?'' : 'd-none'}`}>
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="text-secondary text-uppercase">Our Technicians</h6>
                            <h1 className="mb-5">Our Expert Technicians</h1>
                        </div>
                        <div className="row g-4">
                            {teamSliders.map((teamPlayer,tIdx) => {
                                return (
                                    <div key={teamPlayer.name+tIdx}
                                    className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="team-item">
                                            <div className="position-relative overflow-hidden border-tr-radius-10 border-tl-radius-10">
                                                <img className="img-fluid" src={teamPlayer.img} alt="" />
                                            </div>
                                            <div className="team-text border-br-radius-10 border-bl-radius-10">
                                                <div className="bg-light">
                                                    <h5 className="fw-bold mb-0">{teamPlayer.name}</h5>
                                                    <small>{teamPlayer.position}</small>
                                                </div>
                                                <div className="bg-primary">
                                                    <a className="btn btn-square mx-1 border-radius-10" href="##"><i className="fab fa-facebook-f"></i></a>
                                                    <a className="btn btn-square mx-1 border-radius-10" href="##"><i className="fab fa-twitter"></i></a>
                                                    <a className="btn btn-square mx-1 border-radius-10" href="##"><i className="fab fa-instagram"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="team-item">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid" src={require("../assets/img/team-1.jpg")} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <div className="bg-light">
                                            <h5 className="fw-bold mb-0">Full Name</h5>
                                            <small>Designation</small>
                                        </div>
                                        <div className="bg-primary">
                                            <a className="btn btn-square mx-1" href="##"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square mx-1" href="##"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square mx-1" href="##"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="team-item">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid" src={require("../assets/img/team-2.jpg")} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <div className="bg-light">
                                            <h5 className="fw-bold mb-0">Full Name</h5>
                                            <small>Designation</small>
                                        </div>
                                        <div className="bg-primary">
                                            <a className="btn btn-square mx-1" href="##"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square mx-1" href="##"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square mx-1" href="##"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="team-item">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid" src={require("../assets/img/team-3.jpg")} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <div className="bg-light">
                                            <h5 className="fw-bold mb-0">Full Name</h5>
                                            <small>Designation</small>
                                        </div>
                                        <div className="bg-primary">
                                            <a className="btn btn-square mx-1" href="##"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square mx-1" href="##"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square mx-1" href="##"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="team-item">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid" src={require("../assets/img/team-4.jpg")} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <div className="bg-light">
                                            <h5 className="fw-bold mb-0">Full Name</h5>
                                            <small>Designation</small>
                                        </div>
                                        <div className="bg-primary">
                                            <a className="btn btn-square mx-1" href="##"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square mx-1" href="##"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square mx-1" href="##"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Team End --> */}


                {/* <!-- Testimonial Start --> */}
                <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="text-center">
                            <h6 className="text-secondary text-uppercase">Testimonial</h6>
                            <h1 className="mb-2">Our Clients Say!</h1>
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
                {/* <!-- Testimonial End --> */}


                {/* <!-- Footer Start --> */}
                <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-light mb-4">Address</h4>
                                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, Brown Ave, S/Africa</p>
                                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                                <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                                <div className="d-flex pt-2">
                                    <a className="btn btn-outline-light btn-social" href="##"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-light btn-social" href="##"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light btn-social" href="##"><i className="fab fa-youtube"></i></a>
                                    <a className="btn btn-outline-light btn-social" href="##"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-light mb-4">Opening Hours</h4>
                                <h6 className="text-light">Monday - Friday:</h6>
                                <p className="mb-4">09.00 AM - 09.00 PM</p>
                                <h6 className="text-light">Saturday - Sunday:</h6>
                                <p className="mb-0">09.00 AM - 12.00 PM</p>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-light mb-4">Services</h4>
                                <a className="btn btn-link" href="##">Drain Cleaning</a>
                                <a className="btn btn-link" href="##">Sewer Line</a>
                                <a className="btn btn-link" href="##">Water Heating</a>
                                <a className="btn btn-link" href="##">Toilet Cleaning</a>
                                <a className="btn btn-link" href="##">Broken Pipe</a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-light mb-4">Newsletter</h4>
                                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                                <div className="position-relative mx-auto max-h-400">
                                    <input className="form-control border-0 w-100 py-3 ps-4 pe-5 border-radius-10" type="text" placeholder="Your email" />
                                    <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2 border-radius-10">SignUp</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="copyright">
                            <div className="row">
                                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    &copy; <a className="border-bottom" href="##">Classic Brown</a>, All Right Reserved.
                                </div>
                                <div className="col-md-6 text-center text-md-end">
                                    Developed By <a className="border-bottom" href="##">Dafetite</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Footer End --> */}


                {/* <!-- Back to Top --> */}
                <a href="#home" className="btn btn-lg btn-primary btn-lg-square border-radius-5 back-to-top"><i className="fa fa-arrow-up"></i></a>
            </div>}
        </>
    )
}
export { Index}