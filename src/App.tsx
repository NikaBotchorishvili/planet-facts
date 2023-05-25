import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "./assets/components/pages/Error/ErrorBoundary";

import Header from "./assets/components/partials/Header/Header";
import Planet, {
	planetLoader,
} from "./assets/components/pages/Planet/Planet";


import Redirect from "./assets/components/pages/Redirect";
function App() {


	const router = createBrowserRouter([
		{
			path: "/",
			element: <Redirect />,
			errorElement: <ErrorBoundary />
			
		},
		{
			element:
			<>
				<Header />
				<Planet />
			</>,
			path: "/:planet_name/:info_type/",
			loader: planetLoader,
			errorElement: <ErrorBoundary />
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
