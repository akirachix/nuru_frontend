import Home from "./pages/home/Home";
import Sms from "./pages/sms/Sms"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Profile from "./components/profile/Profile";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>

     

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="sms">
              <Route index element={<Sms/>}/></Route>

              <Route path="/profile" element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
