import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { titleCase } from '../../hooks/changeCase';
import { useOutletContext } from "react-router-dom";
import { useDeviceInfo } from '../../hooks/deviceType';

function Pagerousel() {
	const { deviceInfo, width } = useDeviceInfo();
	// console.log({deviceInfo, width});
	const location = useLocation().pathname.split('/');
	const { onCarouselLoaded } = useOutletContext();
	useEffect(() => {
		onCarouselLoaded()
	}, [])
	if (location[1].toLowerCase() === '') {
		return null;
	}
	// console.log({
	// 	locations: location,
	// 	length: location.length
	// })
	let title;
	let page = location[1];
	if (location.length > 2) {
		if (page.toLowerCase() === 'services' && location.length === 4) {
			title = decodeURIComponent(location[3])
		} else if (location.length === 3) {
			title = decodeURIComponent(location[2])
		}
		if (page.toLowerCase() === 'detail') {
			page = 'services'
		}
	}
	// console.log({
	// 	page: page,
	// 	title: title
	// })
	return (
		<div className={`container-fluid mb-5 position-relative page-header py-5 ${page.toLowerCase()==='service-details'?'d-none':''}`} id={page.toLowerCase()}>
			<div className={`container`}>
				<h1
				className="display-3 text-white mb-3 animated littleSlideInDown">
					{titleCase(page)}
					{/* <span
					style={{
						whiteSpace: 'pre',
						fontSize: '30px',
					}}> ({`${deviceInfo} - ${width}px`})</span> */}
				</h1>
				<nav aria-label="breadcrumb animated slideInDown">
					<ol className="breadcrumb text-uppercase">
						<li className="breadcrumb-item">
							<Link
							to="/"
							className="text-white" href="##">
								Home
							</Link>
						</li>
						{/* <li className="breadcrumb-item"><a className="text-white" href="##">Pages</a></li> */}
						{title ?
							<Link
							to={`/${page.toLowerCase()}`}
							className="breadcrumb-item text-white active" aria-current="page">
							{/* // className="text-white" href="##"> */}
							{titleCase(page)}</Link>
							:null}
						<li className="breadcrumb-item text-white active" aria-current="page">{titleCase(title?title:page)}</li>
					</ol>
				</nav>
			</div>
		</div>
	)
}
export { Pagerousel }