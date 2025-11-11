

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

function ServiceHero({renderSection}) {
	return (
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
	)
}
export { ServiceHero }