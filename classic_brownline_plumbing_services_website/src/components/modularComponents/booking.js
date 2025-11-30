import { useState, useEffect } from "react"
import { serviceCardsSlides } from "./service"
import { useBrevoEmail, getKey } from "../../hooks/useBrevoEmail"
import { toast } from "react-toastify"
import { siteName, formEmail } from "../index"
import { dateHook } from "../../hooks/dateHook"
import { useLocation } from 'react-router-dom';


const formInputValues = [
	{
		type: "text",
		name: "name",
		placeholder: "Your Name",
		required: true,
	},
	{
		type: "email",
		name: "email",
		placeholder: "Email",
		required: true,
	},
	{
		type: "select",
		name: "select_a_service",
		placeholder: "Select A Service",
		required: true,
	},
	{
		type: "tel",
		name: "phone",
		placeholder: "Telephone number",
		required: false,
	},
	{
		type: "date",
		name: "service_date",
		placeholder: "Service Date",
		required: true,
	},
	{
		type: "textarea",
		name: "message",
		placeholder: "Special Request",
		required: false,
	}
]
const formValues = {
	name: "",
	email: "",
	select_a_service: "",
	service_date: "",
	phone: "",
	message: "",
}

function Booking() {
	const stateBookingData = useLocation()?.state
	// console.log({stateBookingData})
	const { sendOutEmails, success, loading, error, clearInfo } = useBrevoEmail(); // useBrevoEmail hook
	const [apiKey, setApiKey] = useState(null);
	const [apiEmail, setApiEmail] = useState(null);
	const [formData, setFormData] = useState(formValues);

	useEffect(() => {
		if (stateBookingData) {
			setFormData({
				...formData,
				select_a_service: stateBookingData
			})
		}
	}, [])
	const handleInputChange = (e) => {
		getKey(apiKey, setApiKey, setApiEmail);
		// console.log('apiKey:', apiKey);
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log("handleSubmit called");
		// toast.success(
		// 	<div>
		// 		{/* use success response */}
		// 		<strong>Success! {success}</strong>
		// 		<br />
		// 		Kindly check your inbox
		// 		<br />
		// 		(or spam folder) for confirmation
		// 	</div>); return;
		// console.warn('success before clearing:', success)
		clearInfo();
		// console.warn('success after clearing:', success)

		const config = {
			apiKey: apiKey, // 'brevo-api-key',
			apiEmail: apiEmail, // brevo email address
			ownerEmail: formEmail, // your-email (address to receive contact form messages)',
			senderName: siteName, // 'your-Website Name (as sender-subject in email)',
		};

		// Format date to a more readable format
		const date = dateHook(new Date(formData.service_date));
		let message = formData.message;
		if (!message) {
			message = "No message specified";
		}

		const cleanedData = {
			...formData,
			service_date: `${date.todayDay}, ${date.todayDateWithSuffix} ${date.todayMonthName} ${date.todayYear}`,
			message: message,
		};
		try {
			// passed formData and config to the hook
			// console.log("Sending booking with data:", cleanedData);
			await sendOutEmails(cleanedData, config);
			// Success
			toast.success(
				<div>
					{/* use success response */}
					<strong>Booking Successful! {success}</strong>
					<br />
					Kindly check your inbox
					<br />
					(or spam folder) for confirmation
				</div>);
				setFormData(formValues); // Resets the form data
			// console.log("Emails sent successfully");
		} catch (err) {
			// Error
			toast.error(
				<div>
					{/* use error response */}
					Error: :::{error} ::::: {err.message}
				</div>);
			console.error("Failed to send emails:", 'error');
			console.error("Failed to send emails:", err);
		}
	};
	// console.log({
	// 	formData,
	// 	// loading,
	// 	// success,
	// 	// error,
	// 	// apiKey,
	// 	// apiEmail,
	// 	// siteName,
	// 	// formattedToday: dateHook(new Date()),
	// 	// formattedDate: dateHook(formData.service_date||new Date()),
	// })
	return (
		<div className={`container-fluid my-5 px-0 mobile-container`}>
			<div className="container position-relative wow mt-1 fadeInUp" style={{marginTop: "-6rem"}}>
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="bg-light text-center p-5 border-radius-10 mobile-padding">
							<h1 className="mb-4">{`Book ${stateBookingData?'a '+stateBookingData+' Service':'Our Service'}`}</h1>
							<form onSubmit={handleSubmit}>
								<div className="row g-3">
									{formInputValues.map((input, idx) => {
										return (
											<div key={input.name+idx}
											className={input.type==='textarea'?`col-12`:`col-12 col-sm-6`}>
												<div className="form-floating">
													{(input.type==="text"||
														input.type==="email"||
														input.type==="date"||
														input.type==="tel") ?
													<input
													name={input.name}
													type={input.type}
													id={input.name}
													value={formData[input.name]}
													onChange={handleInputChange}
													className="form-control white-bg border-0 h-55 border-radius-10"
													placeholder={input.placeholder}
													required={input.required}
													autoComplete="on" />
													:
													input.type==="select" ?
													<select className="form-select white-bg border-0 h-55 border-radius-10"
													name={input.name}
													id={input.name}
													value={formData[input.name]}
													onChange={handleInputChange}
													required={input.required}>
														<option value=""> --Select A Service-- </option>
														{serviceCardsSlides.map((serviceTitle, stIdx) => {
															return (
																<option
																key={serviceTitle.title+stIdx}
																value={serviceTitle.title}>
																	{serviceTitle.title}
																</option>
															)
														})}
													</select>
													:
													<textarea
													className="form-control white-bg border-0 border-radius-10"
													name={input.name}
													id={input.name}
													value={formData[input.name]}
													onChange={handleInputChange}
													placeholder={input.placeholder}></textarea>
													}
													<label htmlFor="name">{input.placeholder}</label>
												</div>
											</div>
										)
									})}
									<div className="col-12">
										<button
										className="btn btn-primary-color w-100 py-3 border-radius-10"
										type="submit">
											{loading?'Booking':'Book Now'}
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export { Booking }