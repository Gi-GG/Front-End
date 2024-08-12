import { Route, Routes } from "react-router-dom";
import { Home, Register, SignIn } from "./pages";

function App() {
  return (
    <main className="bg-base text-secondary min-h-screen w-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </main>
  );
}

export default App;
