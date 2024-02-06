import { ErrorPage } from './components';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CSFR from "./pages/CSFR.jsx";
import Home from "./pages/Home.jsx";

const App = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/csfr/:link",
            element: <CSFR />,
            errorElement: <ErrorPage />,
        },
    ]);
    return <RouterProvider router={router} />
}
export default App;