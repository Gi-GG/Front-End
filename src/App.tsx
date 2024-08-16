import { Route, Routes } from "react-router-dom";
import { ChangePassword, Home, Register, RegisterStage, SignIn } from "./pages";
import PageContainer from "./components/containers/PageContainer";
// import SideBar from "./components/containers/SideBar";

function App() {
  return (
    <main className="bg-base text-secondary min-h-screen w-screen relative flex">
      {/* <SideBar /> */}

      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register-stage" element={<RegisterStage />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </PageContainer>
    </main>
  );
}

export default App;
