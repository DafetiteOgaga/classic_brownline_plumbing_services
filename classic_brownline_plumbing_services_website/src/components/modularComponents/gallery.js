import { useState, useEffect } from "react";

const gallerySlides = [
    {
        id: 1,
        img: require("../../assets/img/team-1.jpg"),
        name: "Full Name",
        position: "Designation",
    },
    {
        id: 2,
        img: require("../../assets/img/team-2.jpg"),
        name: "Full Name",
        position: "Designation",
    },
    {
        id: 3,
        img: require("../../assets/img/team-3.jpg"),
        name: "Full Name",
        position: "Designation",
    },
    {
        id: 4,
        img: require("../../assets/img/team-4.jpg"),
        name: "Full Name",
        position: "Designation",
    },
]
const additionalGallerySlides = [
    {
        id: 5,
        img: require("../../assets/img/team-1.jpg"),
        name: "Full Name",
        position: "Designation",
    },
    {
        id: 6,
        img: require("../../assets/img/team-2.jpg"),
        name: "Full Name",
        position: "Designation",
    },
    {
        id: 7,
        img: require("../../assets/img/team-3.jpg"),
        name: "Full Name",
        position: "Designation",
    },
    {
        id: 8,
        img: require("../../assets/img/team-4.jpg"),
        name: "Full Name",
        position: "Designation",
    },
    {
        id: 9,
        img: require("../../assets/img/team-1.jpg"),
        name: "Full Name",
        position: "Designation",
    },
    {
        id: 10,
        img: require("../../assets/img/team-2.jpg"),
        name: "Full Name",
        position: "Designation",
    },
    {
        id: 11,
        img: require("../../assets/img/team-3.jpg"),
        name: "Full Name",
        position: "Designation",
    },
    {
        id: 12,
        img: require("../../assets/img/team-4.jpg"),
        name: "Full Name",
        position: "Designation",
    }
]

function Gallery({activeSection}) {
	const [teamSliders, setTeamSliders] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);
	useEffect(() => {
        if (activeSection) {
            setTeamSliders([...gallerySlides, ...additionalGallerySlides]);
        } else {
            setTeamSliders(gallerySlides);
        }
    }, [showModal])
    // console.log({
    //     activeSection,
    //     teamSliders
    // })
    const handleNext = () => {
        setModalImageIndex((prev) =>
            prev === gallerySlides.length - 1 ? 0 : prev + 1
        );
    };
    
    const handlePrev = () => {
        setModalImageIndex((prev) =>
            prev === 0 ? gallerySlides.length - 1 : prev - 1
        );
    };
    console.log({activeSection})
	return (
		<div className={`container-xxl py-5`}>
			<div className="container">
				<div className="text-center wow fadeInUp" data-wow-delay="0.1s">
					{/* <h6 className="text-secondary text-uppercase">Our Technicians</h6> */}
					{activeSection==='' ? <h1 className="mb-5">Completed Projects</h1> : ''}
				</div>
				<div className="row g-4">
					{teamSliders.map((teamPlayer,tIdx) => {
						return (
							<div key={teamPlayer.name+tIdx}
							className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
								<div className="team-item"
                                onClick={() => {
                                    setModalImageIndex(tIdx);
                                    setShowModal(true);
                                }}>
									<div className="position-relative overflow-hidden border-radius-10">
										<img className="img-fluid" src={teamPlayer.img} alt="" />
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
            {/* <div> */}
            <div className={showModal?'modal-bg':''}
            // onClick={(e) => {
            //     // if you clicked directly on the background, close modal
            //     if (e.target === e.currentTarget) {
            //         setShowModal(false);
            //     }
            // }}
            >
                <div className={`modal fade modal-box ${showModal?'show':'hide'} fadeInUp`} id="gallery-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content border-radius-10">
                            <div className="modal-header">
                                <h5 className="modal-title" id="gallery">Gallery of Completed Projects</h5>
                                <button
                                onClick={() => setShowModal(false)}
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {/* <!-- 16:9 aspect ratio --> */}
                                <div className="ratio ratio-16x9">
                                        <img className="img-fluid" src={gallerySlides[modalImageIndex].img} alt="" />
                                </div>

                                {/* LEFT ARROW */}
                                <button
                                    className="carousel-btn prev"
                                    onClick={handlePrev}
                                >
                                    <i className="fa fa-chevron-left dual-arrow-prev"></i>
                                </button>

                                {/* RIGHT ARROW */}
                                <button
                                    className="carousel-btn next"
                                    onClick={handleNext}
                                >
                                    <i className="fa fa-chevron-right dual-arrow-next"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
		</div>
	)
}

// const totalNumberOfTechnicians = initialTeamSliders.length + additionalTeamSliders.length;
export { Gallery }