import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./assets/components/Header";
import Planet, { planetLoader } from "./assets/components/pages/Planet/Planet";
function App() {
	const router = createBrowserRouter([
		{
			path: "/",
            element: <Header />,
            children: [
                {
                    element: <Planet />,
                    path: "/:planet_name/:info_type/",
					loader: planetLoader
                }
            ]
		},
	]);
	return (
		<RouterProvider router={router}  />
	);
}

export default App;
