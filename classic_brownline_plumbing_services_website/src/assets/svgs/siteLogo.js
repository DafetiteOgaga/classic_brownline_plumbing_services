

function IconAndClassicBrownline({mainColor, accentColor}) {
	return (
		<>
			{/* <!-- Shower head icon - clean and simple --> */}
			<g transform="translate(25, 55)">
				{/* <!-- Shower arm/pipe --> */}
				{/* <!-- <rect x="15" y="0" width="40" height="3" fill={mainColor} rx="1"/> --> */}
				
				{/* <!-- Shower head body --> */}
				<ellipse cx="35" cy="13" rx="55" ry="17" fill={mainColor}/>
				
				{/* <!-- Shower head face plate --> */}
				<ellipse cx="35" cy="18" rx="48" ry="14" fill="#EDF1FC" opacity="0.3"/>
				
				{/* <!-- Water spray holes --> */}
				<circle cx="00" cy="11" r="1.5" fill={mainColor} opacity="0.6"/>
				<circle cx="17" cy="7" r="1.5" fill={mainColor} opacity="0.6"/>
				<circle cx="35" cy="6" r="1.5" fill={mainColor} opacity="0.6"/>
				<circle cx="55" cy="7" r="1.5" fill={mainColor} opacity="0.6"/>
				<circle cx="71" cy="11" r="1.5" fill={mainColor} opacity="0.6"/>

				<circle cx="-7" cy="15" r="1.5" fill={mainColor} opacity="0.6"/>
				<circle cx="14" cy="15" r="1.5" fill={mainColor} opacity="0.6"/>
				<circle cx="35" cy="15" r="1.5" fill={mainColor} opacity="0.6"/>
				<circle cx="56" cy="15" r="1.5" fill={mainColor} opacity="0.6"/>
				<circle cx="77" cy="15" r="1.5" fill={mainColor} opacity="0.6"/>
				
				<circle cx="00" cy="20" r="1.5" fill={mainColor} opacity="0.6"/>
				<circle cx="17" cy="23" r="1.5" fill={mainColor} opacity="0.6"/>
				<circle cx="35" cy="25" r="1.5" fill={mainColor} opacity="0.6"/>
				<circle cx="55" cy="23" r="1.5" fill={mainColor} opacity="0.6"/>
				<circle cx="71" cy="20" r="1.5" fill={mainColor} opacity="0.6"/>
				
				{/* <!-- Water drops --> */}
				{/* <circle cx="19" cy="20" r="1.2" fill={mainColor} opacity="0.5"/>
				<circle cx="28" cy="23" r="1" fill={mainColor} opacity="0.5"/>
				<circle cx="35" cy="25" r="1.5" fill={mainColor} opacity="0.5"/>
				<circle cx="42" cy="24" r="1" fill={mainColor} opacity="0.5"/>
				<circle cx="50" cy="20" r="1.3" fill={mainColor} opacity="0.5"/> */}

				<circle cx="02" cy="30" r="4.2" fill={accentColor} opacity="0.5"/>
				<circle cx="20" cy="33" r="4" fill={accentColor} opacity="0.5"/>
				<circle cx="38" cy="35" r="4.5" fill={accentColor} opacity="0.5"/>
				<circle cx="58" cy="34" r="4" fill={accentColor} opacity="0.5"/>
				<circle cx="74" cy="30" r="4.4" fill={accentColor} opacity="0.5"/>

				<circle cx="-2" cy="40" r="4.2" fill={mainColor} opacity="0.5"/>
				<circle cx="14" cy="43" r="4" fill={mainColor} opacity="0.5"/>
				<circle cx="32" cy="45" r="4" fill={mainColor} opacity="0.5"/>
				<circle cx="52" cy="44" r="4.5" fill={mainColor} opacity="0.5"/>
				<circle cx="68" cy="40" r="4.8" fill={mainColor} opacity="0.5"/>

				<circle cx="02" cy="50" r="4.5" fill={accentColor} opacity="0.5"/>
				<circle cx="20" cy="53" r="4" fill={accentColor} opacity="0.5"/>
				<circle cx="38" cy="55" r="4" fill={accentColor} opacity="0.5"/>
				<circle cx="58" cy="54" r="4.3" fill={accentColor} opacity="0.5"/>
				<circle cx="74" cy="51" r="4.5" fill={accentColor} opacity="0.5"/>

				<circle cx="-2" cy="61" r="4.7" fill={mainColor} opacity="0.5"/>
				<circle cx="14" cy="64" r="4" fill={mainColor} opacity="0.5"/>
				<circle cx="32" cy="66" r="4.6" fill={mainColor} opacity="0.5"/>
				<circle cx="52" cy="65" r="4" fill={mainColor} opacity="0.5"/>
				<circle cx="68" cy="63" r="4.3" fill={mainColor} opacity="0.5"/>

				<circle cx="02" cy="73" r="4.5" fill={accentColor} opacity="0.5"/>
				<circle cx="20" cy="77" r="4" fill={accentColor} opacity="0.5"/>
				<circle cx="38" cy="80" r="4" fill={accentColor} opacity="0.5"/>
				<circle cx="58" cy="78" r="4.5" fill={accentColor} opacity="0.5"/>
				<circle cx="74" cy="77" r="4" fill={accentColor} opacity="0.5"/>

				{/* <circle cx="-2" cy="90" r="1.5" fill={mainColor} opacity="0.5"/>
				<circle cx="17" cy="93" r="1" fill={mainColor} opacity="0.5"/>
				<circle cx="35" cy="95" r="1" fill={mainColor} opacity="0.5"/>
				<circle cx="55" cy="94" r="1.3" fill={mainColor} opacity="0.5"/>
				<circle cx="71" cy="93" r="1.5" fill={mainColor} opacity="0.5"/> */}

			</g>
			
			<text x="120" y="80"
					fontFamily="'Helvetica', 'Arial', sans-serif"
					fontSize="46"
					fontWeight="300"
					fill={mainColor}
					letterSpacing="6">CLASSIC</text>
			
			<text x="120" y="125"
					fontFamily="'Helvetica', 'Arial', sans-serif"
					fontSize="55"
					fontWeight="700"
					fill={mainColor}
					letterSpacing="4">BROWNLINE</text>
		</>
	)
}

function PlumbingServices({mainColor, accentColor}) {
	return (
		<>
			<rect x="120" y="135" width="360" height="3" fill={accentColor}/>
			
			<text x="120" y="155"
					fontFamily="'Helvetica', 'Arial', sans-serif"
					fontSize="19"
					fontWeight="400"
					fill={mainColor}
					letterSpacing="10"
					opacity="0.7">PLUMBING SERVICES</text>
		</>
	)
}

function SiteLogo({mainColor = "#014569", accentColor = "#FFA500", size = 800}) {
	return (
		<svg viewBox={`0 0 ${size} 180`} xmlns="http://www.w3.org/2000/svg"
		style={{ width: '100%', height: 'auto', display: 'block' }}>
			<IconAndClassicBrownline mainColor={mainColor} />
			<PlumbingServices mainColor={mainColor} accentColor={accentColor} />
		</svg>
	)
}

function JustSiteLogo({mainColor = "#014569", accentColor = "#FFA500", size = 800}) {
	return (
		<svg
		viewBox={`0 0 ${size} 180`} xmlns="http://www.w3.org/2000/svg"
		style={{ width: '100%', height: 'auto', display: 'block' }}>
			<IconAndClassicBrownline mainColor={mainColor} accentColor={accentColor} />
		</svg>
	)
}
export { SiteLogo,  JustSiteLogo }