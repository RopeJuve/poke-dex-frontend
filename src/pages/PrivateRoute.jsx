import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }){
  const navigate = useNavigate();
  const { authToken, logout, setUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authToken) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(
            'users-login-tan.vercel.app/api/auth/user',
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );
          setUser(response.data.user);
        } catch (error) {
          setError(error);
          logout();
        } finally {
          setLoading(false);
        }
      };
      fetchUserData();
    } else {
      setLoading(false);
    }
  }, [authToken]);

  if (error || !authToken) {
    return navigate("/Login");
  }

  return <Component {...rest} loading={loading} />;
};

