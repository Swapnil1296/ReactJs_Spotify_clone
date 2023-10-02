import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginComponent } from "./routes/Login";

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Hello react</div>} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
