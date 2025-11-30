import { Pagerousel } from "./pagerousel"

function PageNotFound() {
	return (
		<>
			{/* Pagerousel */}
			<Pagerousel extra="page not found" />

			{/* page not found */}
			<div className="container-xxl mobile-container wow fadeInUp">
				<div className="container">
					<div className="text-center page-not-found">
						<h1 className="mb-2">Oopsy!</h1>
						<h2>Page not found. Check the address again.</h2>
					</div>
				</div>
			</div>
		</>
	)
}
export { PageNotFound }