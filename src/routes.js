import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Sobre from "./components/Sobre/Sobre";
import Usuario from "./components/Usuario/Usuario";


function MyRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Sobre />} path="/sobre" />
                <Route element={<Usuario />} path="/usuario" />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;