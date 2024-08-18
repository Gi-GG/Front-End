import { Route, Routes, Navigate } from "react-router-dom";
import {
    ChangePassword,
    Home,
    Profile,
    Register,
    RegisterStage,
    Search,
    SignIn,
} from "./pages";
import { NavBar, PageContainer, SideBar } from "./components";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import Followers from "./components/profile/Followers";
import Following from "./components/profile/Following";
import ConcertsYouWent from "./components/profile/ConcertsYouWent";
import ChangeEmail from "./pages/ChangeEmail";

function App() {
    return (
        <main className="bg-base text-secondary h-screen w-screen relative flex">
            <SideBar />
            <NavBar />

            <PageContainer>
                <Routes>
                    <Route path="/" element={<Home />} />

                    {/******************** Forms ********************/}
                    <Route path="/register" element={<Register />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/register-stage" element={<RegisterStage />} />
                    <Route
                        path="/change-password"
                        element={<ChangePassword />}
                    />
                    <Route path="/change-email" element={<ChangeEmail />} />
                    {/******************** Forms ********************/}

                    <Route path="/search" element={<Search />} />
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    >
                        <Route index element={<Navigate to={"followers"} />} />
                        <Route path="followers" element={<Followers />} />
                        <Route path="following" element={<Following />} />
                        <Route
                            path="concerts-you-went"
                            element={<ConcertsYouWent />}
                        />
                    </Route>
                </Routes>
            </PageContainer>
        </main>
    );
}

export default App;
