

const topbarSocials = [
    {icon: "fa-facebook-f", link: "##"},
    {icon: "fa-twitter", link: "##"},
    {icon: "fa-linkedin-in", link: "##"},
    {icon: "fa-instagram", link: "##"},
]

function Topbar() {
	return (
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
						{topbarSocials.map((social, sIdx) => {
							return (
								<a key={social.icon+sIdx} className="btn btn-sm-square bg-white text-primary me-1 border-radius-50" href={social.link}><i className={`fab ${social.icon}`}></i></a>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}
export { Topbar }