import { postData, fetchData } from "./fetchData";

export const loginWithEmail = async (formData, login, navigate) => {
  try {
    const response = await postData(
      "http://localhost:8080/api/connect",
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
    const response = await fetchData("http://localhost:8080/api/google");
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
