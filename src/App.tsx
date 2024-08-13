import { Route, Routes, useNavigate } from "react-router-dom";
import { Home, Register, SignIn } from "./pages";
import Cookies from "js-cookie";

function App() {
  const navigate = useNavigate();

  if (!Cookies.get("token")) {
    navigate("/sign-in");
  } else {
    navigate("/");
  }

  return (
    <main className="bg-base text-secondary min-h-screen w-screen overflow-x-hidden relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </main>
  );
}

export default App;
