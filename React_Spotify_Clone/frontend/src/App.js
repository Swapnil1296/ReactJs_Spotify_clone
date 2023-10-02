import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginComponent } from "./routes/Login";
import { SignUpComponent } from "./routes/SignUp";

function App() {
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Hello react</div>} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignUpComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
