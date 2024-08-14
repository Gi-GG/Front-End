import { Route, Routes, useNavigate } from "react-router-dom";
import { ChangePassword, Home, Register, RegisterStage, SignIn } from "./pages";
import Cookies from "js-cookie";
import { useEffect } from "react";

function App() {
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!Cookies.get("token")) {
    //         navigate("/sign-in");
    //     } else {
    //         navigate("/");
    //     }
    // }, []);

    return (
        <main className="bg-base text-secondary min-h-screen w-screen relative">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/register-stage" element={<RegisterStage />} />
                <Route path="/change-password" element={<ChangePassword />} />
            </Routes>
        </main>
    );
}

export default App;
