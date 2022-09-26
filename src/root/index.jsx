import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {PropertiesPage} from "../pages/Properties";
import {HomePage} from "../pages/Home";

function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/properties" element={<PropertiesPage />} />
                <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Index;