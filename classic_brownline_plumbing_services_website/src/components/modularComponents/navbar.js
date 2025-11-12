import { Fragment } from "react";
import { titleCase } from "../../hooks/changeCase";

const headerOptions = [
    {to: "home"},
	{to: "services"},
    {to: "##"},
	{to: "about"},
    {to: "contact"},
]

const pagesArray = [
    {to: "booking"},
    {to: "technicians"},
    {to: "testimonials"},
]

function Navbar({activeSection, handleNavigationScroll, isSticky}) {
	return (
		<div className={`container-fluid nav-bar bg-light ${isSticky ? 'sticky-top shadow' : ''}`} id="dynamic-navbar">
			<nav className={`navbar navbar-expand-lg navbar-light app-bg-color p-3 py-lg-0 px-lg-4 ${isSticky ? '' : 'border-tl-radius-10 border-tr-radius-10'}`}>
				<a href="##" className="navbar-brand d-flex align-items-center m-0 p-0 d-lg-none">
					<h1 className="text-primary m-0 text-uppercase">Classic Brown</h1>
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
					<span className="fa fa-bars"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<div className="navbar-nav me-auto">
						{headerOptions.map((header, hIdx) => {
							let isActive = header.to.toLowerCase() === activeSection.toLowerCase();
							if (activeSection.toLowerCase() === '' && header.to.toLowerCase() === 'home') {
								isActive = true
							}
							return (
								<div key={header.to+hIdx}
								className="nav-item nav-link-container">
									{header.to !== '##' ?
										<a href="##"
										onClick={(e)=>{
											handleNavigationScroll(e, header.to);
										}}
										className={`nav-item nav-link ${isActive?'active':''}`}>{titleCase(header.to)}</a>
										:
										<div className="nav-item dropdown">
											<a href="##" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
											<div className="dropdown-menu fade-up m-0 app-bg-color">
												{pagesArray.map((page, pIdx) => {
													isActive = page.to.toLowerCase() === activeSection.toLowerCase();
													// console.log({
													//     page: page.to.toLowerCase(),
													//     activeSection: activeSection.toLowerCase(),
													//     isActive,
													// })
													return (
														<a key={page.to+pIdx} href="##"
														onClick={(e)=>{
															handleNavigationScroll(e, page.to);
														}}
														className={`dropdown-item ${isActive?'active':''}`}>{titleCase(page.to)}</a>
													)
												})}
											</div>
										</div>
									}
								</div>
							)
						})}
					</div>
					<div className={`mt-4 mt-lg-0 me-lg-n4 py-3 px-4 d-flex align-items-center ${isSticky ? '' : 'd-none bg-primary border-tr-radius-10'}`}>
						{/* <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white w-45 h-45">
							<i className="fa fa-phone text-primary"></i>
						</div>
						<div className="ms-3">
							<p className="mb-1 text-white">Emergency 24/7</p>
							<h5 className="m-0 text-secondary">+012 345 6789</h5>
						</div> */}
						<a href="##" className={`navbar-brand m-0 p-0 ${isSticky ? '' : 'd-none d-lg-flex'}`}>
							<h2 className="text-primary m-0 text-uppercase">Classic Brown</h2>
						</a>
					</div>
				</div>
			</nav>
		</div>
	)
}
export { Navbar }
