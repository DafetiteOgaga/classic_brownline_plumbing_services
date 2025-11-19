import { SiteLogo } from "../../assets/svgs/siteLogo"
import { Socials } from "./socials"
import { Link } from 'react-router-dom';

function Topbar() {
	return (
		<div className="container-fluid bg-light d-none d-lg-block" id="top">
			<div className="row align-items-center top-bar">
				<Link to={"/"} className="site-logo col-lg-3 col-md-12 text-center text-lg-start">
					{/* <Link to="/" */}
					{/* // className="navbar-brand m-0 p-0" */}
					{/* > */}
						{/* <h1 className="text-primary m-0 text-uppercase">Classic Brown</h1> */}
						<SiteLogo />
						{/* <JustSiteLogo /> */}
					{/* </Link> */}
				</Link>
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