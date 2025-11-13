import { Service } from "./modularComponents/service";
import { Booking } from "./modularComponents/booking";

function ServiceComponent({handleNavigationScroll, yearFounded, currentYear, activeSection}) {
	// console.log("Rendering ServiceComponent:", handleNavigationScroll);
	return (
		<>
			{/* Service */}
			<Service
			handleNavigationScroll={handleNavigationScroll}
			yearFounded={yearFounded}
			currentYear={currentYear} />

			{/* Booking */}
			<Booking />
		</>
	);
}
export { ServiceComponent }