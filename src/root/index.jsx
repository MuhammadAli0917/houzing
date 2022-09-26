import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {PropertiesPage} from "../pages/Properties";
import {HomePage} from "../pages/Home";
import {navbar} from "../utils/navbar";
import Navbar from "../components/Navbar";

function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route element={<Navbar />}>
                    {navbar.map(value => {
                        const {path, element, useId} = value
                        return <Route key={useId} path={path} element={element} />
                    })}
                </Route>
                <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Index;