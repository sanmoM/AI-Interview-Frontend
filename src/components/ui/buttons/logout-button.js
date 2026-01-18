import { logout } from "@/store/features/auth-slice";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/signin");
  };
  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 font-semibold text-white py-2 rounded-xl mt-4 flex items-center justify-center gap-2 px-4"
    >
      <FiLogOut className="w-6 h-6" />
      Logout
    </button>
  );
}
