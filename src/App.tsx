import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Suspense } from "react";
import { Loading } from "./components/Loading";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import './styles/global.css'


export default function App() {

    return(
        <>
            <Suspense fallback={<Loading />}>
                <BrowserRouter>
                    <SpeedInsights />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    )
}