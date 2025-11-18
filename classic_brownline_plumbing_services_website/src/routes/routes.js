import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { PageNotFound } from '../components/pageNotFound';
// import { Unauthorised } from '../components/Unauthorised';
import { Index } from '../components';
import { HomeComponent } from '../components/homeComponent';
import { About } from '../components/modularComponents/about';
import { ServiceComponent } from '../components/serviceComponent';
import { ServiceDetail } from '../components/modularComponents/serviceDetails';
import { Gallery } from '../components/modularComponents/gallery';
import { TestimonialComponent } from '../components/testimonialComponent';
import { ContactUs } from '../components/modularComponents/contact';

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Index />}>
				{/* This makes Home the default route */}
				<Route index element={<HomeComponent />} />

				{/* every other routes are from Outlet in Index */}
				<Route path="about" element={<About />} />
				<Route path="services" element={<ServiceComponent />} />
				<Route path="detail/:title" element={<ServiceDetail />} />
				<Route path="services/detail/:title" element={<ServiceDetail />} />
				<Route path="gallery" element={<Gallery />} />
				<Route path="testimonials" element={<TestimonialComponent />} />
				<Route path="contact" element={<ContactUs />} />
				{/* page not found and unauthorised */}
				{/* <Route path="unauthorised" element={<Unauthorised />} />
				<Route path="*" element={<PageNotFound />} /> */}
			</Route>
		</Routes>
	);
}

export {AppRoutes};
