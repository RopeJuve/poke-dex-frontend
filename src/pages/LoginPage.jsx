import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import LogInForm from "@/components/LogInForm/LogInForm";
import { useEffect } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const { authToken } = useAuth();

  useEffect(() => {
    if (authToken) {
      navigate("/");
    }
  }, [authToken]);

  return (
    <div className="max-w-[800x] h-[100vh] mx-auto mt-[2.5rem] flex flex-col gap-[1.5rem] items-center">
      <LogInForm />
    </div>
  );
}
