// import { ServiceHero } from "./modularComponents/serviceHero";
import { About } from "./modularComponents/about";
import { Facts } from "./modularComponents/facts";
import { Service } from "./modularComponents/service";
import { Booking } from "./modularComponents/booking";
import { Technicians } from "./modularComponents/technicians";
import { Testimonial } from "./modularComponents/testimonials";

function HomeComponent({yearFounded, currentYear, activeSection}) {
	return (
		<>
			{/* Service-hero */}
			{/* <ServiceHero /> */}

			{/* Service */}
			<Service
			yearFounded={yearFounded}
			currentYear={currentYear} />

			{/* Fact */}
			<Facts
			yearFounded={yearFounded}
			currentYear={currentYear} />

			{/* About */}
			{/* <About
			yearFounded={yearFounded} /> */}

			{/* Booking */}
			<Booking />

			{/* Team */}
			<Technicians
			activeSection={activeSection} />

			{/* Testimonial */}
			<Testimonial />
		</>
	);
}
export { HomeComponent }