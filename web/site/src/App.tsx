import "./App.css";
import { useEffect, useState } from "react";
import HomePage from "./pages/home";
import CoursePage from "./pages/courses";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ScholarshipPage from "./pages/scholarship";
import ContactPage from "./pages/contact";
import RegisterPage from "./pages/register";
import AboutPage from "./pages/about";
import CourseInfoPage from "./pages/course-info";

function App() {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage width={screenSize.width} height={screenSize.height} />,
        },
        {
            path: "/about",
            element: <AboutPage width={screenSize.width} height={screenSize.height} />,
        },
        {
            path: "/courses",
            element: <CoursePage width={screenSize.width} height={screenSize.height} />,
        },
        {
            path: "/scholarship",
            element: <ScholarshipPage width={screenSize.width} height={screenSize.height} />,
        },
        {
            path: "/contact",
            element: <ContactPage width={screenSize.width} height={screenSize.height} />,
        },
        {
            path: "/register",
            element: <RegisterPage />,
        },
        {
            path: "/info",
            element: <CourseInfoPage width={screenSize.width} height={screenSize.height} />,
        },
    ]);

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension());
        };
        window.addEventListener("resize", updateDimension);

        return () => {
            window.removeEventListener("resize", updateDimension);
        };
    }, [screenSize]);

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
            {/* <Route
                    path="/"
                    element={<HomePage width={screenSize.width} height={screenSize.height} />}
                />
                <Route
                    path="/about"
                    element={<AboutPage width={screenSize.width} height={screenSize.height} />}
                />
                <Route
                    path="/contact"
                    element={<ContactPage width={screenSize.width} height={screenSize.height} />}
                />
                <Route
                    path="/scholarship"
                    element={
                        <ScholarshipPage width={screenSize.width} height={screenSize.height} />
                    }
                />
                <Route
                    path="/courses"
                    element={<CoursePage width={screenSize.width} height={screenSize.height} />}
                /> */}
        </>
    );
}

export default App;
