import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Suspense } from "react";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Loading from "./components/Loading";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


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