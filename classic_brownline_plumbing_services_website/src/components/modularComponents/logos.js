import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Pagerousel } from "./pagerousel";
import { useDeviceInfo, useDeviceType } from "../../hooks/deviceType";

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

function Logos() {
    // const deviceInfo = useDeviceInfo();
    // const deviceType = useDeviceType();
    // const galleryPage = useLocation().pathname.split('/')[1]
	// const [teamSliders, setTeamSliders] = useState([]);
    // const [showModal, setShowModal] = useState(false);
    // const [modalImageIndex, setModalImageIndex] = useState(0);
	// useEffect(() => {
    //     if (galleryPage==='gallery') {
    //         setTeamSliders([...gallerySlides, ...additionalGallerySlides]);
    //     } else {
    //         setTeamSliders(gallerySlides);
    //     }
    // }, [showModal])
    // console.log({
    //     galleryPage,
    //     teamSliders
    // })
    // const handleNext = () => {
    //     setModalImageIndex((prev) =>
    //         prev === gallerySlides.length - 1 ? 0 : prev + 1
    //     );
    // };
    
    // const handlePrev = () => {
    //     setModalImageIndex((prev) =>
    //         prev === 0 ? gallerySlides.length - 1 : prev - 1
    //     );
    // };
    // // console.log({galleryPage})
    // console.log({ deviceInfo, deviceType})
	return (
        <>
            <Pagerousel />
            <div className={`container-xxl py-5`}>
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        {/* <h6 className="text-secondary text-uppercase">Our Technicians</h6> */}
                        {/* {galleryPage==='' ? <h1 className="mb-5">Completed Projects</h1> : ''} */}
                    </div>
                    <div className="row g-4">
                        {Array.from({length: 8}).map((_,_idx) => {
                            return (
                                <div key={_idx}
                                className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="gallery-item"
                                    // onClick={() => {
                                    //     setModalImageIndex(tIdx);
                                    //     setShowModal(true);
                                    // }}
                                    >
                                        {/* <h1>{_idx+1}.</h1> */}
                                        <div className="position-relative overflow-hidden border-radius-10">
                                            <h3>{_idx+1}.</h3>
                                            <img
                                            className="img-fluid"
                                            src={require(`../../assets/svgs/logo${_idx+1}.svg`)}
                                            alt="" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* <div> */}
                {/* disabled modal */}
                {/* </div> */}
            </div>
        </>
	)
}

// const totalNumberOfTechnicians = initialTeamSliders.length + additionalTeamSliders.length;
export { Logos }