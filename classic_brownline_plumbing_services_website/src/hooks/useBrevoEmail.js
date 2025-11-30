import { useState } from 'react';
import { dateHook } from './dateHook';
import { sentenceCase, titleCase } from './changeCase';
import { siteName } from '../components/index';
import { fetchBrevoKeyFromBackend } from './useFetchApi';
// import { config } from './myKey';
// import { useFetchApi } from './useFetchApi';

// Function to check the size of the email content
function checkEmailContentSize(content) {
	const emailHtml = content;
	const sizeInBytes = new Blob([emailHtml]).size;
	const sizeInKB = (sizeInBytes / 1024).toFixed(2);

	console.log(`Email size: ${sizeInKB} KB`);
}

// Function to send email using Brevo API
const sendEmail = async (emailData, apiKey) => {
	const response = await fetch('https://api.brevo.com/v3/smtp/email', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'api-key': apiKey
		},
		body: JSON.stringify(emailData)
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || `HTTP Error: ${response.status}`);
	}

	return response.json();
};

// Function to generate email content
const emailContentTemplate = ({ formData, type = 'owner', isBooking }) => {
	const { todaySeconds, todayMinutes, todayHours, todayDay, todayDateWithSuffix, todayMonthName, todayYear } = dateHook();
	const dateTimeStamp = `${todayDay}, ${todayDateWithSuffix} ${todayMonthName} ${todayYear} at exactly ${todayHours}:${todayMinutes}:${todaySeconds}`
	const h2 = type === 'owner' ? `New ${isBooking?'Booking':'Message'} From - ${titleCase(formData.name)}` : (isBooking?'Booking received!':'Thank you for contacting us!');
	const socialIconStyle = 'width:24px;height:24px;vertical-align:middle;';
	const socialLinkStyle = 'margin:0 8px;text-decoration:none;display:inline-block;';
	const socialLinks = `
		<div style="text-align:center;">
			<a href="#" target="_blank" rel="noopener noreferrer" style="${socialLinkStyle}">
				<img src="https://raw.githubusercontent.com/DafetiteOgaga/dafetite_logo/refs/heads/main/github.png" alt="GitHub" style="${socialIconStyle}" />
			</a>
			<a href="#" target="_blank" rel="noopener noreferrer" style="${socialLinkStyle}">
				<img src="https://raw.githubusercontent.com/DafetiteOgaga/dafetite_logo/refs/heads/main/linkedin.png" alt="LinkedIn" style="${socialIconStyle}" />
			</a>
			<a href="#" target="_blank" rel="noopener noreferrer" style="${socialLinkStyle}">
				<img src="https://raw.githubusercontent.com/DafetiteOgaga/dafetite_logo/refs/heads/main/x.png" alt="X (Twitter)" style="${socialIconStyle}" />
			</a>
			<a href="#" target="_blank" rel="noopener noreferrer" style="${socialLinkStyle}">
				<img src="https://raw.githubusercontent.com/DafetiteOgaga/dafetite_logo/refs/heads/main/whatsapp.png" alt="Whatsapp" style="${socialIconStyle}" />
			</a>
		</div>
	`;

	return `
		<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
			<h2 style="color:#333;border-bottom:2px solid rgba(0,0,0,0.5);padding-bottom:10px;">${h2}</h2>
			${
				type === 'owner'
				?
				`
					<div style="background:#f8f9fa;padding:20px;border-radius:8px;margin:20px 0;">
						<p><strong>From:</strong> ${titleCase(formData.name)}</p>

						${isBooking ?
						`
							<p><strong>Selected Service:</strong> ${formData.select_a_service}</p>
							<p><strong>Service Date:</strong> ${formData.service_date}</p>
							<p><strong>Telephone Number:</strong> ${formData.phone}</p>
						`
						:
						`
							<p><strong>Subject:</strong> ${sentenceCase(formData.subject)}</p>
						`
						}

						<p><strong>Email:</strong> ${formData.email}</p>
						<p><strong>Time:</strong> ${dateTimeStamp}</p>
					</div>
					<div style="background:#fff;padding:20px;border-left:4px solid rgba(0,0,0,0.5);margin:20px 0;">
						<h3 style="color:#333;margin-top:0;">Customer Message:</h3>
						<p style="line-height:1.6;color:#555;">${formData.message.replace(/\n/g, '<br>')}</p>
					</div>
					<div style="text-align:center;margin-top:30px;padding-top:20px;border-top:1px solid #eee;">
						<p style="color:#888;font-size:12px;">This message was sent from ${siteName}'s contact form (${dateTimeStamp}).</p>
					</div>
				`
				:
				`
					<p style="color:#555;line-height:1.6;">Dear ${titleCase(formData.name)},</p>
					<p style="color:#555;line-height:1.6;">
						${isBooking?'Thank you, we have received your booking.':'This email is to confirm that we have received your message.'}
						Our team will review it and get back to you as soon as possible — typically within 24-48 hours.
					</p>
					<p style="color:#555;line-height:1.6;">
						If you need urgent assistance, you can also reach us through our social media channels using the links below.
					</p>
					<br/>
					<div>
						<img src="https://raw.githubusercontent.com/DafetiteOgaga/dafetite_logo/refs/heads/main/logo4_128@2x_transparent.png" alt="${siteName}" style="width:150px;height:auto;" />
					</div>
					<p style="color:#555;line-height:1.6;margin-top:0%;padding-left:2%;">Thanks again,<br/>${siteName}.</p>
					${socialLinks}
					<div style="text-align:center;margin-top:30px;padding-top:20px;border-top:1px solid #eee;">
						<p style="color:#888;font-size:12px;">This is an automated confirmation email sent on ${dateTimeStamp}.</p>
					</div>
				`
			}
		</div>
	`;
};

// Custom hook for sending emails via Brevo
const useBrevoEmail = () => {
	// console.log("useBrevoEmail hook loaded");
	const [success, setSuccess] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendOutEmails = async (formData, config) => {
		const { apiKey, apiEmail, ownerEmail, senderName } = config;
		const isBooking = formData.hasOwnProperty('select_a_service') && formData.hasOwnProperty('service_date');
		// console.log({isBooking})
		// console.log(`Preparing to send ${isBooking ? 'booking' : 'contact'} emails...`);
		// console.log('config:', config)
		// console.log('sendOutEmails called with formData:', formData);

		if (!apiKey || !ownerEmail) {
			throw new Error('API key and owner email are required');
		}

		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			// Email content to myself (site owner)
			// checkEmailContentSize(emailContentTemplate({formData}));
			const ownerEmailData = {
				sender: {
					name: senderName,
					email: apiEmail
				},
				to: [{
					email: ownerEmail,
					name: senderName
				}],
				replyTo: {
					email: formData.email,
					name: titleCase(formData.name)
				},
				subject: `New ${isBooking?'Booking':'Message'} from ${titleCase(formData.name)}`,
				htmlContent: emailContentTemplate({formData, type: 'owner', isBooking})
			};

			// Confirmation email to sender
			// checkEmailContentSize(emailContentTemplate({formData, type: 'visitor'}));
			const confirmationEmailData = {
				sender: {
					name: senderName,
					email: apiEmail
				},
				to: [{
					email: formData.email,
					name: titleCase(formData.name)
				}],
				replyTo: {
					email: ownerEmail,
					name: senderName
				},
				subject: isBooking ? 'Booking received' : sentenceCase(formData.subject),
				htmlContent: emailContentTemplate({formData, type: 'visitor', isBooking})
			};

			// Send both emails
			await Promise.all([
				sendEmail(ownerEmailData, apiKey),
				sendEmail(confirmationEmailData, apiKey)
			]);

			setSuccess('Message sent.');
			// return { success: true, message: 'Emails sent successfully' };

		} catch (err) {
			setError(err.message);
			throw err;
		} finally {
			setLoading(false);
		}
	};

	return {
		sendOutEmails,
		success,
		loading,
		error,
		clearInfo: () => {
			setError(null);
			setSuccess("");
		}
	};
};

// get brevo api key and email
async function getKey(apiKey, setApiKey, setApiEmail) {
	if (!apiKey) {
		// console.log('Fetching API key...');
		try {
			const endpoint = 'dafetite_brevo_api_key/dafetite_brevo_api'
			const response = await fetchBrevoKeyFromBackend(endpoint);
			if (response?.success && response?.key) {
				setApiKey(response.key);
				setApiEmail(response.email);
			} else {
				console.error('Failed to fetch API key:', response);
			}
		} catch (err) {
			console.error('Error while fetching API key:', err);
		}
	} else {
		// console.warn('Using existing API key');
	}
}
export { getKey, useBrevoEmail };