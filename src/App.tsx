import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./assets/components/Header";
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
		</>
	);
}

export default App;
