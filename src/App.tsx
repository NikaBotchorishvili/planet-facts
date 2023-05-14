import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./assets/components/Header";
import Planet from "./assets/components/pages/Planet/Planet";
function App() {
	const router = createBrowserRouter([
        {
            path: "/",
            element: "",
        }
    ])
    return (
		<>
			<Header />
            <Planet />
		</>
	);
}

export default App;
