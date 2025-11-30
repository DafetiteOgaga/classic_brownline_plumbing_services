import { useEffect, useState } from "react";
import { Pagerousel } from "./pagerousel"
import { useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useBrevoEmail, getKey } from "../../hooks/useBrevoEmail";
import { siteName, formEmail } from "../index";

const formInputValues = [
	{
		type: "text",
		name: "name",
		placeholder: "Your Name",
		required: true,
	},
	{
		type: "text",
		name: "subject",
		placeholder: "Subject",
		required: true,
	},
	{
		type: "email",
		name: "email",
		placeholder: "Email",
		required: true,
	},
	{
		type: "textarea",
		name: "message",
		placeholder: "Leave a message here",
		required: true,
	}
]
const formValues = {
	name: "",
	email: "",
	subject: "",
	message: "",
}

function ContactUs() {
	const { address, email } = useOutletContext();
	const { sendOutEmails, success, loading, error, clearInfo } = useBrevoEmail(); // useBrevoEmail hook
	const [apiKey, setApiKey] = useState(null);
	const [apiEmail, setApiEmail] = useState(null);
	const [formData, setFormData] = useState(formValues);

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

		const cleanedData = {
			...formData,
			// subject: 'Message Received! - Email confirmation',
		};
		try {
			// passed formData and config to the hook
			// console.log("Sending contact emails with data:", cleanedData);
			await sendOutEmails(cleanedData, config);
			// Success
			toast.success(
				<div>
					{/* use success response */}
					<strong>Success! {success}</strong>
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
	// 	apiKey,
	// 	apiEmail,
	// 	siteName,
	// })
	return (
		<>
			{/* Pagerousel */}
			<Pagerousel />

			<div className="container-xxl py-5">
				<div className="container">
					<div className="row g-4">
						<div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
							{/* <h6 className="text-secondary text-uppercase">Get In Touch</h6> */}
							<h1 className="mb-4">Contact Us</h1>
							{/* <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
							<iframe className="position-relative w-100 border-radius-10"
								title="map"
								// src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507365.35487409495!2d2.954296628594845!3d6.547947654560678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1762733082337!5m2!1sen!2sng"
								frameBorder="0" style={{height: "300px", border: "0"}} allowFullScreen="" aria-hidden="false"
								tabIndex="0"></iframe>
							<div className="d-inline-flex align-items-center me-4">
								<i className="fa fa-map-marker-alt text-primary me-2"></i>
								<p className="m-0">{address}</p>
							</div>
							<div className="d-inline-flex align-items-center me-4">
								<i className="far fa-envelope-open text-primary me-2"></i>
								<p className="m-0">{email}</p>
							</div>
						</div>
						<div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
							<div className="bg-light p-5 h-100 d-flex align-items-center border-radius-10 mobile-padding">
								<form onSubmit={handleSubmit}>
									<div className="row g-3">
										{formInputValues.map((input, idx) => {
											return (
												<div key={input.name+idx}
												className={`${input.type==="text"?"col-md-6":"col-12"}`}>
													<div className="form-floating">
														{(input.type==="text"||input.type==="email") ?
														<input
														type={input.type}
														className="form-control border-radius-10"
														name={input.name}
														id={input.name}
														value={formData[input.name]}
														onChange={handleInputChange}
														placeholder={input.placeholder}
														required={input.required}
														autoComplete="on" />
														:
														<textarea
														className="form-control border-radius-10"
														placeholder={input.placeholder}
														name={input.name}
														id={input.name}
														value={formData[input.name]}
														onChange={handleInputChange}
														style={{height: "150px"}}></textarea>}
														<label htmlFor="name">{input.placeholder}</label>
													</div>
												</div>
											)
										})}
										<div className="col-12">
											<button className="btn btn-primary-color w-100 py-3 border-radius-10"
											type="submit">{loading?'Sending':'Send Message'}</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export { ContactUs }