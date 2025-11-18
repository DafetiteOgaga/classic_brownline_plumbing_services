// import { ServiceHero } from "./modularComponents/serviceHero";
import { About } from "./modularComponents/about";
import { Facts } from "./modularComponents/facts";
import { Service } from "./modularComponents/service";
import { Booking } from "./modularComponents/booking";
import { Gallery } from "./modularComponents/gallery";
import { Testimonial } from "./modularComponents/testimonials";
import { useOutletContext } from "react-router-dom";
import { Carousel } from "./modularComponents/carousel";

function HomeComponent() {
	const { onCarouselLoaded, yearFounded, currentYear } = useOutletContext();
	// console.log("Rendering HomeComponent:", handleNavigationScroll);
	return (
		<>
			{/* Service-hero */}
			{/* <ServiceHero /> */}

			{/* Carousel */}
			<Carousel
			// tagText={tagText}
			// handleNavigationScroll={handleNavigationScroll}
			// menuHeadInserted={menuHeadInserted}
			onCarouselLoaded={onCarouselLoaded} />

			{/* Service */}
			<Service
			// handleNavigationScroll={handleNavigationScroll}
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
			<Gallery />

			{/* Testimonial */}
			<Testimonial />
		</>
	);
}
export { HomeComponent }