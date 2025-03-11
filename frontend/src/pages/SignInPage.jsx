import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="h-screen items-center  overflow-hidden flex ">
      {/* Left Section */}
      <div className="flex-1 p-8 lg:p-12 bg-base-100">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-1">EchoChat</h1>

          <h2 className="text-4xl font-bold mb-4 ">
            Welcome to <br /> Echochat
          </h2>

          <p className="mb-8">
            Real-Time Conversations, Boundless Connections...
          </p>

          <form className="space-y-4">
            <div>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@hatypo.studio"
                  className="input input-bordered w-full pr-10"
                  required
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              className={`btn btn-primary w-full ${isLoading ? "" : ""}`}
              disabled={isLoading}
            >
              Sign in
            </button>
          </form>

          <p className="mt-6 text-center">
            Didn't Signup Yet?
            <Link to="/signup" className="text-primary hover:underline">
              SignUp
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:block flex-1 bg-base-200 relative p-5">
        <img src="chat-img.jpg" className="rounded-lg"></img>
      </div>
    </div>
  );
};

export default SigninPage;
