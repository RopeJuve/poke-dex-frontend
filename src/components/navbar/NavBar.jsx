import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";


export default function NavBar() {
  const { user } = useAuth();
  console.log(user);
  return (
    <nav className="max-w-[1200px] mx-auto bg-background flex justify-between items-center p-4">
      <div className="flex flex-col items-center">
        <img
          className="w-[7rem] object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="Pokemon"
        />
        <h1 className=" text-xl font-bold">Pokemon Dex</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/" className=" uppercase hover:text-gray-200">
          Home
        </Link>
        {user ? (
          <Link to="/dashboard" className=" uppercase hover:text-gray-200">
            Profile
          </Link>
        ) : (
          <>
            {" "}
            <Link to="/login" className="uppercase hover:text-gray-200">
              Login
            </Link>
            <Link to="/register" className=" uppercase hover:text-gray-200">
              Register
            </Link>
          </>
        )}
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
