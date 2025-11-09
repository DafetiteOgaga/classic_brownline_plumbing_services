import { useState, useEffect, Fragment } from "react";
// import OwlCarousel from "react-owl-carousel2";

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
        style={{ "--count": value }}
      >
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
const teamSliders = [
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

function Index() {
    // header
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            // // remove head when scrolling down
            if (window.scrollY > 10) {
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

    // carousel
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

    const handleNextWithFade = () => {
        setDirection("left");
        setIsFading(true);
        setIsSliding(true); // start fade-out
        setTimeout(() => {
            setIsFading(false);
            setIsSliding(false); // end fade-out
            setCurrent(current === length - 1 ? 0 : current + 1); // change slide after fade
        }, 800); // must match CSS fade duration
    };

    const handlePrevWithFade = () => {
        setDirection("right");
        setIsFading(true);
        setIsSliding(true);
        setTimeout(() => {
            setIsFading(false);
            setIsSliding(false);
            setCurrent(current === 0 ? length - 1 : current - 1);
        }, 800);
    };
    const slide = carouselSlides[current];

    // // fact
    // const CounterUp = ({ value, duration = 800, className = "" }) => {
    //     const count = useCounterUp(value, duration);
      
    //     return (
    //       <span className={`counter-up ${className}`}>
    //         {count.toLocaleString()}
    //       </span>
    //     );
    // };
    return (
        <>
            {/* <!-- Spinner Start --> */}
            {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary w-3rem h-3rem" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> */}
            {/* <!-- Spinner End --> */}


            {/* <!-- Topbar Start --> */}
            <div className="container-fluid bg-light d-none d-lg-block" id="topbar">
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
            <div className={`container-fluid nav-bar bg-light ${isSticky ? 'sticky-top shadow' : ''}`}>
                <nav className={`navbar navbar-expand-lg navbar-light bg-white p-3 py-lg-0 px-lg-4 ${isSticky ? '' : 'border-tl-radius-10 border-tr-radius-10'}`}>
                    <a href="##" className="navbar-brand d-flex align-items-center m-0 p-0 d-lg-none">
                        <h1 className="text-primary m-0">Plumberz</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav me-auto">
                            <a href="#topbar" className="nav-item nav-link active">Home</a>
                            <a href="#aboutus" className="nav-item nav-link">About</a>
                            <a href="#servicecards" className="nav-item nav-link">Services</a>
                            <div className="nav-item dropdown">
                                <a href="##" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu fade-up m-0">
                                    <a href="#bookingform" className="dropdown-item">Booking</a>
                                    <a href="#teams" className="dropdown-item">Technicians</a>
                                    <a href="#testimonials" className="dropdown-item">Testimonial</a>
                                    {/* <a href="404.html" className="dropdown-item">404 Page</a> */}
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
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
            <div className="container-fluid p-0 mb-5">
                <div className="owl-carousel header-carousel position-relative overflow-hidden">
                    {/* <img className={`img-fluid carousel-slide ${"active"}}`} src={slide.img} alt={slide.title} /> */}
                    <img
                    key={slide.id}
                    className={`img-fluid carousel-slide ${isSliding ? `slide-${direction}` : "enter"}`}
                    src={slide.img}
                    alt={slide.title}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center bg-0004">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div key={slide.id}
                                className={`col-10 col-lg-8`}>
                                    <h5 className={`text-white text-uppercase mb-3 animated slideInDown carousel-fade ${isFading ? 'fade-out' : 'fade-in'}`}>{slide.title}</h5>
                                    <h1 className={`display-3 text-white animated slideInDown mb-4 carousel-fade ${isFading ? 'fade-out' : 'fade-in'}`}>{slide.headline}</h1>
                                    <p className={`fs-5 fw-medium text-white mb-4 pb-2 carousel-fade ${isFading ? 'fade-out' : 'fade-in'}`}>{slide.text}</p>
                                    <a href="##" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft border-radius-5">Read More</a>
                                    <a href="##" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight border-radius-5">Free Quote</a>
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
            </div>
            {/* <!-- Carousel End --> */}


            {/* <!-- Service Start --> */}
            <div className="container-xxl py-5">
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
                        {/* <div className="col-lg-4 col-md-6 service-item-top wow fadeInUp" data-wow-delay="0.3s">
                            <div className="overflow-hidden">
                                <img className="img-fluid w-100 h-100" src={require("../assets/img/service-2.jpg")} alt="" />
                            </div>
                            <div className="d-flex align-items-center justify-content-between bg-light p-4">
                                <h5 className="text-truncate me-3 mb-0">Commercial Plumbing</h5>
                                <a className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0" href="##"><i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 service-item-top wow fadeInUp" data-wow-delay="0.5s">
                            <div className="overflow-hidden">
                                <img className="img-fluid w-100 h-100" src={require("../assets/img/service-3.jpg")} alt="" />
                            </div>
                            <div className="d-flex align-items-center justify-content-between bg-light p-4">
                                <h5 className="text-truncate me-3 mb-0">Emergency Servicing</h5>
                                <a className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0" href="##"><i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}


            {/* <!-- About Start --> */}
            <div className="container-xxl py-5" id="aboutus">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow serviceFadeInUp" style={{animationDelay: '0.2s'}}>
                            <h6 className="text-secondary text-uppercase">About Us</h6>
                            <h1 className="mb-4">We Are Trusted Plumbing Company Since 2010</h1>
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
            <div className="container-fluid fact bg-dark my-5 py-5">
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
                        {/* <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                            <i className="fa fa-users-cog fa-2x text-white mb-3"></i>
                            <h2 className="text-white mb-2" data-toggle="counter-up">1235</h2>
                            <p className="text-white mb-0">Expert Technicians</p>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                            <i className="fa fa-users fa-2x text-white mb-3"></i>
                            <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                            <p className="text-white mb-0">Satisfied Clients</p>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                            <i className="fa fa-wrench fa-2x text-white mb-3"></i>
                            <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                            <p className="text-white mb-0">Compleate Projects</p>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <!-- Fact End --> */}


            {/* <!-- Service Start --> */}
            <div className="container-fluid py-5 px-4 px-lg-0" id="servicecards">
                <div className="row g-0">
                    <div className="col-lg-3 d-none d-lg-flex">
                        <div className="d-flex align-items-center justify-content-center bg-primary w-100 h-100">
                            <h1 className="display-3 text-white m-0 rotate-n90">15 Years Experience</h1>
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
                                    <div className="owl-stage service-card-slider">
                                        {serviceCardsSlides.map((serviceCard, scIdx) => {
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
                                        {/* <div className="owl-item cloned">
                                            <div className="bg-light p-4">
                                                <div className="d-flex align-items-center justify-content-center border border-5 border-white mb-4 w-75 h-75">
                                                    <i className="fa fa-water fa-2x text-primary"></i>
                                                </div>
                                                <h4 className="mb-3">Drain Repair 1</h4>
                                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                <a href="##" className="btn bg-white text-primary w-100 mt-2">Read More<i className="fa fa-arrow-right text-secondary ms-2"></i></a>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned">
                                            <div className="bg-light p-4">
                                                <div className="d-flex align-items-center justify-content-center border border-5 border-white mb-4 w-75 h-75">
                                                    <i className="fa fa-toilet fa-2x text-primary"></i>
                                                </div>
                                                <h4 className="mb-3">Toilet Pipe Repair 2</h4>
                                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                <a href="##" className="btn bg-white text-primary w-100 mt-2">Read More<i className="fa fa-arrow-right text-secondary ms-2"></i></a>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned">
                                            <div className="bg-light p-4">
                                                <div className="d-flex align-items-center justify-content-center border border-5 border-white mb-4 w-75 h-75">
                                                    <i className="fa fa-shower fa-2x text-primary"></i>
                                                </div>
                                                <h4 className="mb-3">Sewer Line Repair 3</h4>
                                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                <a href="##" className="btn bg-white text-primary w-100 mt-2">Read More<i className="fa fa-arrow-right text-secondary ms-2"></i></a>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned">
                                            <div className="bg-light p-4">
                                                <div className="d-flex align-items-center justify-content-center border border-5 border-white mb-4 w-75 h-75">
                                                    <i className="fa fa-tint fa-2x text-primary"></i>
                                                </div>
                                                <h4 className="mb-3">Water Heater Repair 4</h4>
                                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                <a href="##" className="btn bg-white text-primary w-100 mt-2">Read More<i className="fa fa-arrow-right text-secondary ms-2"></i></a>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned">
                                            <div className="bg-light p-4">
                                                <div className="d-flex align-items-center justify-content-center border border-5 border-white mb-4 w-75 h-75">
                                                    <i className="fa fa-water fa-2x text-primary"></i>
                                                </div>
                                                <h4 className="mb-3">Drain Repair 5</h4>
                                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                <a href="##" className="btn bg-white text-primary w-100 mt-2">Read More<i className="fa fa-arrow-right text-secondary ms-2"></i></a>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned">
                                            <div className="bg-light p-4">
                                                <div className="d-flex align-items-center justify-content-center border border-5 border-white mb-4 w-75 h-75">
                                                    <i className="fa fa-toilet fa-2x text-primary"></i>
                                                </div>
                                                <h4 className="mb-3">Toilet Pipe Repair 6</h4>
                                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                <a href="##" className="btn bg-white text-primary w-100 mt-2">Read More<i className="fa fa-arrow-right text-secondary ms-2"></i></a>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned">
                                            <div className="bg-light p-4">
                                                <div className="d-flex align-items-center justify-content-center border border-5 border-white mb-4 w-75 h-75">
                                                    <i className="fa fa-shower fa-2x text-primary"></i>
                                                </div>
                                                <h4 className="mb-3">Sewer Line Repair 7</h4>
                                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                <a href="##" className="btn bg-white text-primary w-100 mt-2">Read More<i className="fa fa-arrow-right text-secondary ms-2"></i></a>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned">
                                            <div className="bg-light p-4">
                                                <div className="d-flex align-items-center justify-content-center border border-5 border-white mb-4 w-75 h-75">
                                                    <i className="fa fa-tint fa-2x text-primary"></i>
                                                </div>
                                                <h4 className="mb-3">Water Heater Repair 8</h4>
                                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                                                <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p>
                                                <a href="##" className="btn bg-white text-primary w-100 mt-2">Read More<i className="fa fa-arrow-right text-secondary ms-2"></i></a>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}


            {/* <!-- Booking Start --> */}
            <div className="container-fluid my-5 px-0" id="bookingform">
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
            <div className="container-xxl py-5" id="teams">
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
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s" id="testimonials">
                <div className="container">
                    <div className="text-center">
                        <h6 className="text-secondary text-uppercase">Testimonial</h6>
                        <h1 className="mb-5">Our Clients Say!</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel position-relative wow fadeInUp" data-wow-delay="0.1s">
                        {testimonialSliders.map((testimonial, tesIdx) => {
                            return (
                                <div key={testimonial.name+tesIdx}
                                className="testimonial-item text-center mb-5">
                                    <div className="testimonial-text bg-light text-center p-4 mb-1 border-radius-10">
                                        <p className="mb-0">{testimonial.feedback}</p>
                                    </div>
                                    <img className="bg-light rounded-circle p-2 mx-auto mb-2 w-80 h-80" alt="" src={testimonial.img} />
                                    <div className="mb-2">
                                        {/* <small className="fa fa-star text-secondary"></small>
                                        <small className="fa fa-star text-secondary"></small>
                                        <small className="fa fa-star text-secondary"></small>
                                        <small className="fa fa-star text-secondary"></small>
                                        <small className="fa fa-star text-secondary"></small> */}
                                        <AllStars />
                                    </div>
                                    <h5 className="mb-1">{testimonial.name}</h5>
                                    <p className="m-0">{testimonial.position}</p>
                                </div>
                            )
                        })}
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
            <a href="#topbar" className="btn btn-lg btn-primary btn-lg-square border-radius-5 back-to-top"><i className="fa fa-arrow-up"></i></a>
        </>
    )
}
export { Index}