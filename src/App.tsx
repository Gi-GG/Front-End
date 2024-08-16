import { Route, Routes } from "react-router-dom";
import {
    ChangePassword,
    Home,
    Register,
    RegisterStage,
    Search,
    SignIn,
} from "./pages";
import { NavBar, PageContainer, SideBar } from "./components";

function App() {
    return (
        <main className="bg-base text-secondary h-screen w-screen relative flex">
            <SideBar />
            <NavBar />

            <PageContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/register-stage" element={<RegisterStage />} />
                    <Route
                        path="/change-password"
                        element={<ChangePassword />}
                    />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </PageContainer>
        </main>
    );
}

export default App;
