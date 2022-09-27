import {useId} from "react";
import {HomePage} from "../pages/Home";
import {PropertiesPage} from "../pages/Properties";

export const navbar = [
    {
        id: useId,
        title: "Home",
        hidden: false,
        private: false,
        path: "/home",
        element: <HomePage />
    },
    {
        id: useId,
        title: "Properties",
        hidden: false,
        private: false,
        path: "/properties",
        element: <PropertiesPage />
    },
    {
        id: useId,
        title: "Sign In",
        hidden: true,
        private: false,
        path: "/signin",
        element: <h1>Sign In Section</h1>
    },
]