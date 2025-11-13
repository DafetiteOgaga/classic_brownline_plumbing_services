// import { ServiceHero } from "./modularComponents/serviceHero";
import { About } from "./modularComponents/about";
import { Facts } from "./modularComponents/facts";
import { Service } from "./modularComponents/service";
import { Booking } from "./modularComponents/booking";
import { Gallery } from "./modularComponents/gallery";
import { Testimonial } from "./modularComponents/testimonials";

function HomeComponent({handleNavigationScroll, yearFounded, currentYear, activeSection}) {
	// console.log("Rendering HomeComponent:", handleNavigationScroll);
	return (
		<>
			{/* Service-hero */}
			{/* <ServiceHero /> */}

			{/* Service */}
			<Service
			handleNavigationScroll={handleNavigationScroll}
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
			<Gallery
			activeSection={activeSection} />

			{/* Testimonial */}
			<Testimonial />
		</>
	);
}
export { HomeComponent }