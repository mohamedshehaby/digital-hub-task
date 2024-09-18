import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/context/authContext.tsx";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  const isAuthenticated = user?.email;

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/auth/login", { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate]);

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
