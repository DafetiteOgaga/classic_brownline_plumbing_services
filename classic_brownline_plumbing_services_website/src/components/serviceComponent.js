import { Service } from "./modularComponents/service";
import { Booking } from "./modularComponents/booking";
import { Pagerousel } from "./modularComponents/pagerousel";
import { useOutletContext } from "react-router-dom";

function ServiceComponent() {
	const { yearFounded, currentYear } = useOutletContext();
	// console.log("Rendering ServiceComponent:", handleNavigationScroll);
	return (
		<>
			{/* Pagerousel */}
			<Pagerousel />

			{/* Service */}
			<Service
			// handleNavigationScroll={handleNavigationScroll}
			yearFounded={yearFounded}
			currentYear={currentYear} />

			{/* Booking */}
			<Booking />
		</>
	);
}
export { ServiceComponent }