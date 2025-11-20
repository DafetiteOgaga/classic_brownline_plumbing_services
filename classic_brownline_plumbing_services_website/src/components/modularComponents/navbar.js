import { Fragment } from "react";
import { titleCase } from "../../hooks/changeCase";
import { Link, useLocation } from "react-router-dom";
import { JustSiteLogo } from "../../assets/svgs/siteLogo";

const headerOptions = [
    {to: "/"},
	{to: "about"},
	{to: "services"},
    {to: "##"},
    {to: "contact"},
	// {to: "logos"}, // test, remove later
]

const pagesArray = [
    // {to: "booking"},
    {to: "gallery"},
    {to: "testimonials"},
]

function Navbar({isSticky}) {
	const currentPath = useLocation().pathname.split('/')[1];
	return (
		<div className={`container-fluid nav-bar bg-light ${isSticky ? 'sticky-top shadow' : ''}`} id="dynamic-navbar">
			<nav className={`navbar navbar-expand-lg navbar-light app-bg-color p-3 py-lg-0 px-lg-4 ${isSticky ? '' : 'border-tl-radius-10 border-tr-radius-10'}`}>
				<Link to="/" className="navbar-brand d-flex align-items-center m-0 p-0 d-lg-none">
					<h1 className="text-primary m-0 text-uppercase">Classic Brown</h1>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
					<span className="fa fa-bars"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<div className="navbar-nav me-auto">
						{headerOptions.map((header, hIdx) => {
							let isActive = header.to.toLowerCase() === currentPath.toLowerCase();
							if (currentPath.toLowerCase() === '' && header.to.toLowerCase() === '/') {
								isActive = true
							}
							return (
								<div key={header.to+hIdx}
								className="nav-item nav-link-container">
									{header.to !== '##' ?
										<Link to={header.to}
										// onClick={(e)=>{
										// 	handleNavigationScroll(e, header.to);
										// }}
										className={`nav-item nav-link ${isActive?'active':''}`}>{titleCase(header.to==='/'?'home':header.to)}</Link>
										:
										<div className="nav-item dropdown">
											<span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Sections</span>
											<div className="dropdown-menu fade-up m-0 app-bg-color">
												{pagesArray.map((page, pIdx) => {
													isActive = page.to.toLowerCase() === currentPath.toLowerCase();
													// console.log({
													// 	page: page.to.toLowerCase(),
													// 	activeSection: activeSection.toLowerCase(),
													// 	isActive,
													// })
													return (
														<Link key={page.to+pIdx} to={page.to}
														// onClick={(e)=>{
														// 	handleNavigationScroll(e, page.to);
														// }}
														className={`dropdown-item ${isActive?'active':''}`}>{titleCase(page.to)}</Link>
													)
												})}
											</div>
										</div>
									}
								</div>
							)
						})}
					</div>
					<div className={`mt-4 mt-lg-0 me-lg-n4 d-flex align-items-center ${isSticky ? '' : 'd-none bg-primary border-tr-radius-10'}`}>
						<Link to="/" className={`site-logo navbar-brand m-0 p-0 ${isSticky ? '' : 'd-none d-lg-flex'}`}>
							<JustSiteLogo />
							{/* <h2 className="text-primary m-0 text-uppercase">Classic Brown</h2> */}
						</Link>
					</div>
				</div>
			</nav>
		</div>
	)
}
export { Navbar }
