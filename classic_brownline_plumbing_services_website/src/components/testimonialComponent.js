import { Testimonial } from "./modularComponents/testimonials";
import { Booking } from "./modularComponents/booking";
import { Pagerousel } from "./modularComponents/pagerousel";

function TestimonialComponent() {
	return (
		<>
			{/* Pagerousel */}
			<Pagerousel />

			{/* Testimonial */}
			<Testimonial />

			{/* Booking */}
			<Booking />
		</>
	);
}
export { TestimonialComponent }