import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContextProvider } from "./assets/components/context/Context";
import Header from "./assets/components/Header";
import Planet from "./assets/components/pages/Planet/Planet";
function App() {
	const router = createBrowserRouter([
		{
			path: "/",
            element: <Header />,
            children: [
                {
                    element: <Planet />,
                    path: "planet/:planet_name",
                }
            ]
		},
	]);
	return (
		<ContextProvider>
			<RouterProvider router={router} />
		</ContextProvider>
	);
}

export default App;
