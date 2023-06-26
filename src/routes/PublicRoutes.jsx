import Cookies from "js-cookie";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PublicRoutes = () => {
  const location = useLocation();

  const handleAuth = () => {
    const token = Cookies.get("_accToken");

    if (!token) return false;
    return true;
  };

  useEffect(() => {
    handleAuth();
  }, [location]);

  return handleAuth() ? <Outlet /> : <Navigate to="/login" />;
};
export default PublicRoutes;
