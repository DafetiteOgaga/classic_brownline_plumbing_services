

const topbarSocials = [
    {icon: "fa-facebook-f", link: "##"},
    {icon: "fa-twitter", link: "##"},
    // {icon: "fa-linkedin-in", link: "##"},
    {icon: "fa-instagram", link: "##"},
	// {icon: "fa-youtube", link: "##"},
]

function Socials({classStyle=null}) {
	return (
		<>
			{topbarSocials.map((social, sIdx) => {
				return (
					<a key={social.icon+sIdx} className={classStyle} href={social.link}><i className={`fab ${social.icon}`}></i></a>
				)
			})}
		</>
	)
}
export { Socials }