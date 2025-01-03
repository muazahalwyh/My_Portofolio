import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../component/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Interest from "../pages/Interest";
import Skills from "../pages/Skills";
import Experience from "../pages/Experience";
import Awards from "../pages/Awards";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <Home />,
                children: [
                    {
                        path: "about",
                        element: <About />
                    },
                    {
                        path: "interest",
                        element: <Interest />
                    },
                    {
                        path: "skills",
                        element: <Skills />
                    },
                    {
                        path: "experience",
                        element: <Experience />
                    },
                    {
                        path: "awards",
                        element: <Awards />
                    },
                ],
            },
        ],
    },
]);

export default router;