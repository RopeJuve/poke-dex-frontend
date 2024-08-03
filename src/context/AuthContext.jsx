import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, authToken: action.payload };
    case "LOGOUT":
      return { ...state, authToken: null, user: null };
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    authToken: localStorage.getItem("authToken")
      ? localStorage.getItem("authToken")
      : null,
    user: localStorage.getItem("user") ? localStorage.getItem("user") : null,
  });

  const { authToken, user } = state;

  useEffect(() => {
    if (authToken) {
      localStorage.setItem("authToken", authToken);
    } else {
      localStorage.removeItem("authToken");
    }
  }, [authToken]);

  const login = (token) => {
    dispatch({ type: "LOGIN", payload: token });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const setUser = (user) => {
    dispatch({ type: "SET_USER", payload: user });
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout, setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
