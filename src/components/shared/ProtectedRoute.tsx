import React from "react";
import useAuthStore from "../../store/userTokenStore";
import RegisterModal from "./ui/RegisterModal";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useAuthStore((state) => state.authToken);

  return (
    <>
      {children}
      {!token && <RegisterModal />}
    </>
  );
};

export default ProtectedRoute;
