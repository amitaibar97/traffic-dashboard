import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-800">Traffic Dashboard</h1>
      <button
        onClick={handleLogout}
        className="text-sm text-red-500 hover:text-red-700 font-medium transition"
      >
        Logout
      </button>
    </nav>
  );
};
