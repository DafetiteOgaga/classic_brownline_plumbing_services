import { useState, useEffect } from "react";

const initialTeamSliders = [
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
    }
]
const additionalTeamSliders = [
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
    }
]

function Technicians({activeSection}) {
	const [teamSliders, setTeamSliders] = useState([]);
	useEffect(() => {
        if (activeSection) {
            setTeamSliders([...initialTeamSliders, ...additionalTeamSliders]);
        } else {
            setTeamSliders(initialTeamSliders);
        }
    }, [activeSection])
    console.log({
        activeSection,
        teamSliders
    })
	return (
		<div className={`container-xxl py-5`}>
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
				</div>
			</div>
		</div>
	)
}

const totalNumberOfTechnicians = initialTeamSliders.length + additionalTeamSliders.length;
export { Technicians, totalNumberOfTechnicians }