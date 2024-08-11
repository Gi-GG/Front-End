import { Route, Routes } from "react-router-dom";
import { Home, Register } from "./pages";

function App() {
    return (
        <main className="bg-base min-h-screen w-screen">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </main>
    );
}

export default App;
