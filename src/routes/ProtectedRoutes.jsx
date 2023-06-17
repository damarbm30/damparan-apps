import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const location = useLocation();

  const handleAuth = () => {
    const token = localStorage.getItem("token");

    if (!token) return false;
    return true;
  };

  useEffect(() => {
    handleAuth();
  }, [location]);

  return !handleAuth() ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRoutes;
