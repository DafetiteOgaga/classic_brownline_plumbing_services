

function SiteLogo({mainColor = "#014569", accentColor = "#FFA500", size = 800}) {
	return (
		<svg viewBox={`0 0 ${size} 180`} xmlns="http://www.w3.org/2000/svg">
  
			{/* <!-- PVC pipe sections icon - modern plumbing --> */}
			<g transform="translate(40, 35)">
				{/* <!-- Vertical pipe section 1 --> */}
				<rect x="20" y="15" width="12" height="85" fill={mainColor} rx="2"/>
				<ellipse cx="26" cy="20" rx="6" ry="3" fill={mainColor}/>
				<ellipse cx="26" cy="55" rx="6" ry="3" fill={mainColor}/>
				
				{/* <!-- Vertical pipe section 2 --> */}
				<rect x="40" y="25" width="12" height="95" fill={mainColor} rx="2"/>
				<ellipse cx="46" cy="30" rx="6" ry="3" fill={mainColor}/>
				<ellipse cx="46" cy="70" rx="6" ry="3" fill={mainColor}/>
				
				{/* <!-- Vertical pipe section 3 --> */}
				<rect x="60" y="20" width="12" height="88" fill={mainColor} rx="2"/>
				<ellipse cx="66" cy="25" rx="6" ry="3" fill={mainColor}/>
				<ellipse cx="66" cy="63" rx="6" ry="3" fill={mainColor}/>
				
				{/* <!-- Pipe detail/highlights --> */}
				<rect x="22" y="30" width="8" height="3" fill="#EDF1FC" opacity="0.2" rx="1"/>
				<rect x="42" y="40" width="8" height="3" fill="#EDF1FC" opacity="0.2" rx="1"/>
				<rect x="62" y="35" width="8" height="3" fill="#EDF1FC" opacity="0.2" rx="1"/>
			</g>
			
			{/* <!-- CLASSIC text --> */}
			<text x="120" y="80"
					fontFamily="'Helvetica', 'Arial', sans-serif"
					fontSize="46"
					fontWeight="300"
					fill={mainColor}
					letterSpacing="6">CLASSIC</text>
			
			{/* <!-- BROWNLINE text - bold --> */}
			<text x="120" y="125"
					fontFamily="'Helvetica', 'Arial', sans-serif"
					fontSize="55"
					fontWeight="700"
					fill={mainColor}
					letterSpacing="4">BROWNLINE</text>
			
			{/* <!-- Extended line matching BROWNLINE width - orange accent --> */}
			<rect x="120" y="135" width="360" height="3" fill={accentColor}/>
			
			{/* <!-- Tagline --> */}
			<text x="120" y="155"
					fontFamily="'Helvetica', 'Arial', sans-serif"
					fontSize="19"
					fontWeight="400"
					fill={mainColor}
					letterSpacing="10"
					opacity="0.7">PLUMBING SERVICES</text>

		</svg>
	)
}

function JustSiteLogo({mainColor = "#014569", accentColor = "#FFA500", size = 800}) {
	return (
		<svg
		viewBox={`0 0 ${size} 180`} xmlns="http://www.w3.org/2000/svg"
		style={{ width: '100%', height: 'auto', display: 'block' }}>
  
			{/* <!-- PVC pipe sections icon - modern plumbing --> */}
			<g transform="translate(40, 35)">
				{/* <!-- Vertical pipe section 1 --> */}
				<rect x="20" y="15" width="12" height="85" fill={mainColor} rx="2"/>
				<ellipse cx="26" cy="20" rx="6" ry="3" fill={mainColor}/>
				<ellipse cx="26" cy="55" rx="6" ry="3" fill={mainColor}/>
				
				{/* <!-- Vertical pipe section 2 --> */}
				<rect x="40" y="25" width="12" height="95" fill={mainColor} rx="2"/>
				<ellipse cx="46" cy="30" rx="6" ry="3" fill={mainColor}/>
				<ellipse cx="46" cy="70" rx="6" ry="3" fill={mainColor}/>
				
				{/* <!-- Vertical pipe section 3 --> */}
				<rect x="60" y="20" width="12" height="88" fill={mainColor} rx="2"/>
				<ellipse cx="66" cy="25" rx="6" ry="3" fill={mainColor}/>
				<ellipse cx="66" cy="63" rx="6" ry="3" fill={mainColor}/>
				
				{/* <!-- Pipe detail/highlights --> */}
				<rect x="22" y="30" width="8" height="3" fill="#EDF1FC" opacity="0.2" rx="1"/>
				<rect x="42" y="40" width="8" height="3" fill="#EDF1FC" opacity="0.2" rx="1"/>
				<rect x="62" y="35" width="8" height="3" fill="#EDF1FC" opacity="0.2" rx="1"/>
			</g>
			
			{/* <!-- CLASSIC text --> */}
			<text x="120" y="92"
					fontFamily="'Helvetica', 'Arial', sans-serif"
					fontSize="46"
					fontWeight="300"
					fill={mainColor}
					letterSpacing="6">CLASSIC</text>
			
			{/* <!-- BROWNLINE text - bold --> */}
			<text x="120" y="137"
					fontFamily="'Helvetica', 'Arial', sans-serif"
					fontSize="55"
					fontWeight="700"
					fill={mainColor}
					letterSpacing="4">BROWNLINE</text>
			
			{/* <!-- Extended line matching BROWNLINE width - orange accent --> */}
			{/* <rect x="120" y="135" width="360" height="3" fill={accentColor}/> */}
			
			{/* <!-- Tagline --> */}
			{/* <text x="120" y="155"
					fontFamily="'Helvetica', 'Arial', sans-serif"
					fontSize="19"
					fontWeight="400"
					fill={mainColor}
					letterSpacing="10"
					opacity="0.7">PLUMBING SERVICES</text> */}

		</svg>
	)
}
export { SiteLogo,  JustSiteLogo }