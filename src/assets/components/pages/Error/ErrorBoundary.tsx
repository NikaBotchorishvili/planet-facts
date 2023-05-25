import { useRouteError } from "react-router-dom";



function ErrorBoundary() {
    const error = useRouteError();
    return (
        <div className="error">
            <h1>Whoops, {error.statusText}</h1>
            <p>{error.data}</p>
            <small className="back-element"><a href="/">Click Here</a> to go back to main page</small>
            <small>status: {error.status}</small>
        </div>
    );
}

export default ErrorBoundary;