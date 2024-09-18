import LoginForm from "@/features/authentication/components/loginForm.tsx";
import { useUser } from "@/context/authContext.tsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  const isAuthenticated = user?.email;

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <div className={"flex min-h-[100dvh] justify-center items-center"}>
      <LoginForm />
    </div>
  );
}

export default Login;
