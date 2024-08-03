import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginWithEmail, loginWithGoogle } from "../services/login";

export const useLoginAuth = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.id === "login") {
      await loginWithEmail(formData, login, navigate);
    } else {
      await loginWithGoogle(login, navigate);
    }
  };

  return { handleChange, handleSubmit };
};
