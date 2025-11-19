import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Pagerousel } from "./pagerousel";
import { useDeviceInfo, useDeviceType } from "../../hooks/deviceType";

function Logos() {
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
                        {Array.from({length: 12}).map((_,_idx) => {
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