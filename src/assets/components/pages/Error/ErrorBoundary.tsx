import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
	const error = useRouteError();
	return (
		<section className="error">
			<h1>
				Whoops,{" "}
				{(error as Error)?.message ||
					(error as { statusText?: string })?.statusText}
			</h1>
			<p>
				{(error as Error)?.message ||
					(error as { data?: string })?.data}
			</p>
			<small className="back-element">
				<a href="/">Click Here</a> to go back to main page
			</small>
			<small>
				{(error as Error)?.message ||
					(error as { status?: string })?.status}
			</small>
		</section>
	);
}

export default ErrorBoundary;
