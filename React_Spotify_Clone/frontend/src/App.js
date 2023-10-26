import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginComponent } from "./routes/Login";
import { SignUpComponent } from "./routes/SignUp";
import HomeComponent from "./routes/Home";
import { useCookies } from "react-cookie";
import LoggedInHomeComponent from "./routes/LoggedInHome";
import UploadSongs from "./routes/UploadSongs";
import MyMusic from "./routes/MyMusic";
import SongContext from "./Context/SongContext";
import { useState } from "react";

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        {cookie.token ? (
          // logged in routes
          <SongContext.Provider value={{ currentSong, setCurrentSong }}>
            <Routes>
              <Route path="/home" element={<LoggedInHomeComponent />} />
              <Route path="/upload" element={<UploadSongs />} />
              <Route path="/myMusic" element={<MyMusic />} />
              {/* if the user is logged in then only show home component ,he will not able to access login or signup page by changing the url in search bar */}
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </SongContext.Provider>
        ) : (
          // logged out routes
          <Routes>
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignUpComponent />} />
            <Route path="/home" element={<HomeComponent />} />

            {/* if the user is not logged in then he will not be able to access other routes */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
