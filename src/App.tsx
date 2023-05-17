import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./assets/components/Header";
import Planet, {
	planetLoader,
} from "./assets/components/pages/Planet/Planet";
import Redirect from "./assets/components/pages/Redirect";
function App() {


	const router = createBrowserRouter([
		{
			path: "/",
			element: <Redirect />,
			
		},
		{
			element:
			<>
				<Header />
				<Planet />
			</>,
			path: "/:planet_name/:info_type/",
			loader: planetLoader,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
