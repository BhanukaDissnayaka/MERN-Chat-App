import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { singup } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

function SignUpPage() {
  const dispatch = useDispatch();
  const { isSigningUp } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 5)
      return toast.error("Password must be at least 5 characters");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sunccess = validateForm();
    if (sunccess === true) dispatch(singup(formData));
  };

  return (
    <div className="h-screen items-center  overflow-hidden flex ">
      <div className="flex-1 p-8 lg:p-12 bg-base-100">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-1">EchoChat</h1>

          <h2 className="text-4xl font-bold mb-4 ">
            Welcome to <br /> Echochat
          </h2>

          <p className="mb-8">
            Real-Time Conversations, Boundless Connections...
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <div className="relative">
                <input
                  value={formData.fullName}
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  placeholder="Full Name"
                  className="input input-bordered w-full pr-10"
                  required
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <input
                  value={formData.email}
                  type="email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="hello@hatypo.studio"
                  className="input input-bordered w-full pr-10"
                  required
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  value={formData.password}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Password"
                  className="input input-bordered w-full pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 "
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={`btn btn-primary w-full ${isSigningUp ? "" : ""}`}
              disabled={isSigningUp}
            >
              Sign up
            </button>
          </form>

          <p className="mt-6 text-center">
            Already have an account?{" "}
            <a href="#" className="text-primary hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>

      <div className="hidden lg:block flex-1 bg-base-200 relative p-5">
        <img src="chat-img.jpg" className="rounded-lg"></img>
      </div>
    </div>
  );
}

export default SignUpPage;
