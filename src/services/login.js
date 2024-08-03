import { postData, fetchData } from "./fetchData";

export const loginWithEmail = async (formData, login, navigate) => {
  try {
    const response = await postData(
      "users-login-tan.vercel.app/api/connect",
      formData
    );
    const authHeader = response.headers.get("authorization");
    const token = authHeader.split(" ")[1];
    if (!token) {
      navigate("/login");
    }
    login(token);
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};

export const loginWithGoogle = async (login, navigate) => {
  try {
    const response = await fetchData("users-login-tan.vercel.app/api/google");
    const authHeader = response.headers.get("authorization");
    const token = authHeader.split(" ")[1];
    if (!token) {
      navigate("/login");
    }
    login(token);
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};
