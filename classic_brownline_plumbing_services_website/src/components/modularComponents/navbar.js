import { useState, useEffect, useRef } from "react";
import { titleCase } from "../../hooks/changeCase";
import { Link, useLocation } from "react-router-dom";
import { SiteLogo, JustSiteLogo } from "../../assets/svgs/siteLogo";

const headerOptions = [
    {to: "/"},
	{to: "about"},
	{to: "services"},
    {to: "##"},
    {to: "contact"},
	{to: "logos"}, // test, remove later
]

const pagesArray = [
    // {to: "booking"},
    {to: "gallery"},
    {to: "testimonials"},
]

const NavLogo = ({isSticky}) => {
	return (
		<div className={`.site-logo mt-4 mt-lg-0 me-lg-n4 d-flex align-items-center ${isSticky ? '' : 'd-none bg-primary border-tr-radius-10'}`}>
			<Link to="/" className={`site-logo navbar-brand m-0 p-0 navbar-socials ${isSticky ? '' : 'd-none d-lg-flex'}`}>
				<JustSiteLogo />
				{/* <h2 className="text-primary m-0 text-uppercase">Classic Brown</h2> */}
			</Link>
		</div>
	)
}

function Navbar({isSticky, scrollY}) {
	const menuRef = useRef(null);
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const currentPath = useLocation().pathname.split('/')[1];
	useEffect(() => {
		setShowMobileMenu(false);
	}, [scrollY])

	useEffect(() => {
		function handleClickOutside(event) {
		  // If menu is open AND the click is outside the menu container
			if (showMobileMenu && menuRef.current && !menuRef.current.contains(event.target)) {
			setShowMobileMenu(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		// cleanup
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [showMobileMenu]);

	// console.log({scrollY})
	return (
		<div className={`container-fluid nav-bar bg-light ${isSticky ? 'sticky-top shadow' : ''}`} id="dynamic-navbar">
			<nav className={`navbar navbar-expand-lg navbar-light app-bg-color p-1 py-lg-0 px-lg-4 ${isSticky ? '' : 'border-tl-radius-10 border-tr-radius-10'}`}>
				<div className="d-flex justify-content-between w-100 align-items-center">
					<Link to="/" className="navbar-brand d-flex align-items-center m-0 p-0 d-lg-none">
						{/* <h1 className="text-primary m-0 text-uppercase">Classic Brown</h1> */}
						<SiteLogo />
						{/* <JustSiteLogo /> */}
					</Link>
					<div className="d-flex">
						<button className="navbar-toggler position-relative"
						onClick={()=>setShowMobileMenu(prev=>!prev)} data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
							<span
							className={`fa ${showMobileMenu?'fa-times':'fa-bars'} text-primary`}
							// key={showMobileMenu}
							style={{
								transition: 'transform 0.5s ease',
								transform: showMobileMenu ? 'rotate(90deg)' : 'rotate(0deg)',
								
								}}/>
						</button>
						
						<div ref={menuRef}
						className={`${showMobileMenu?'':'collapse'} ${isSticky?'left-and-width':''} navbar-collapse app-bg-color`} id="navbarCollapse">
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
												onClick={(e)=>{
													setShowMobileMenu(false);
												}}
												className={`nav-item nav-link ${isActive?'active':''}`}>{titleCase(header.to==='/'?'home':header.to)}</Link>
												:
												<div className="nav-item dropdown">
													<span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Sections</span>
													<div className={`dropdown-menu fade-up m-0 app-bg-color ${isSticky ? 'navbar-sticky' : ''}`}>
														{pagesArray.map((page, pIdx) => {
															isActive = page.to.toLowerCase() === currentPath.toLowerCase();
															// console.log({
															// 	page: page.to.toLowerCase(),
															// 	activeSection: activeSection.toLowerCase(),
															// 	isActive,
															// })
															return (
																<Link key={page.to+pIdx} to={page.to}
																onClick={(e)=>{
																	setShowMobileMenu(false);
																}}
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
							
						</div>
					</div>
				</div>
				<NavLogo isSticky={isSticky} />
			</nav>
		</div>
	)
}
export { Navbar }
