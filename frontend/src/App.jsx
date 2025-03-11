import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SigninPage from "./pages/SignInPage";

function App() {
  return (
    <div data-theme="dark">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/signin" element={<SigninPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
