import { ServiceHero } from "./modularComponents/serviceHero";
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
			<ServiceHero />

			{/* About */}
			<About
			yearFounded={yearFounded} />

			{/* Fact */}
			<Facts />

			{/* Service */}
			<Service
			yearFounded={yearFounded}
			currentYear={currentYear} />

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