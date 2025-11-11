

function Spinner({isLoading}) {
	return (
		<div id="spinner"
		className={`app-bg-color position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center ${isLoading ? 'show' : ''}`}>
			<div className="spinner-border text-primary w-3rem h-3rem" role="status">
				<span className="sr-only"></span>
			</div>
		</div>
	)
}
export { Spinner }
