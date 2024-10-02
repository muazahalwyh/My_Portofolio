import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../component/MainLayout";
import Home from "../pages/Home";
// import About from "../pages/About";
// import Interest from "../pages/Interest";
// import Skills from "../pages/Skills";
// import Experience from "../pages/Experience";
// import Awards from "../pages/Awards";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <Home />
            },
            {
                path: "interest",
                element: <Home />
            },
            {
                path: "skills",
                element: <Home />
            },
            {
                path: "experience",
                element: <Home />
            },
            {
                path: "awards",
                element: <Home />
            },
        ],
    },
]);

export default router;