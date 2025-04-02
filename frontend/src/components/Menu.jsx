import { useState } from "react";
import {
  Home,
  MessageSquare,
  Settings,
  Menu as MenuIcon,
  LogOut,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {/* Toggle Button (Visible only on mobile) */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-base-content p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon className="w-6 h-6" />
      </button>

      {/* Menubar */}
      <div
        className={`h-screen z-40 bg-base-200 text-base-content p-4 fixed top-0 left-0 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:w-20  w-60 pt-15 lg:pt-4`}
      >
        {/* Menu Items */}
        <nav className="space-y-4">
          <MenuItem icon={<Home />} text="Home" />
          <MenuItem icon={<MessageSquare />} text="Messages" />
          <MenuItem icon={<Settings />} text="Settings" />
          <MenuItem
            icon={
              <button onClick={() => dispatch(logout())}>
                <LogOut />
              </button>
            }
            text="Logout"
          />
        </nav>
      </div>
    </>
  );
};

// Reusable Menu Item Component
const MenuItem = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
      <span className="w-8 h-8 ">{icon}</span>
      <span className="lg:hidden">{text}</span>
    </div>
  );
};

export default Menu;
