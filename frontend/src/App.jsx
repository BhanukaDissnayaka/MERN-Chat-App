import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SigninPage from "./pages/SignInPage";
import ProfilePage from "./pages/ProfilePage";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./slices/authSlice";
import { Loader } from "lucide-react";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { authUser, isCheckingAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <div data-theme="dark">
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to={"/signin"} />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signin"
          element={!authUser ? <SigninPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <Navigate to={"/signin"} />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
