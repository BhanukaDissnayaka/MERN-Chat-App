import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SigninPage from "./pages/SignInPage";
import ProfilePage from "./pages/ProfilePage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div data-theme="dark">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/signin" element={<SigninPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
