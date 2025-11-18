import { Socials } from "./socials"

function Topbar() {
	return (
		<div className="container-fluid bg-light d-none d-lg-block" id="top">
			<div className="row align-items-center top-bar">
				<div className="col-lg-3 col-md-12 text-center text-lg-start">
					<a href="##" className="navbar-brand m-0 p-0">
						<h1 className="text-primary m-0 text-uppercase">Classic Brown</h1>
					</a>
				</div>
				<div className="col-lg-9 col-md-12 text-end">
					<div className="h-100 d-inline-flex align-items-center">
						<Socials classStyle="btn btn-sm-custom bg-white text-primary me-1 border-radius-50"/>
					</div>
				</div>
			</div>
		</div>
	)
}
export { Topbar }