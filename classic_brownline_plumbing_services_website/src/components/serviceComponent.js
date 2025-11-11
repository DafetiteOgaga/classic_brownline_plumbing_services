import { Service } from "./modularComponents/service";
import { Booking } from "./modularComponents/booking";

function ServiceComponent({yearFounded, currentYear, activeSection}) {
	return (
		<>
			{/* Service */}
			<Service
			yearFounded={yearFounded}
			currentYear={currentYear} />

			{/* Booking */}
			<Booking />
		</>
	);
}
export { ServiceComponent }