// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notification from './components/Notifications';

function App() {
  return (
    <Sidebar/>
    // <div>
    //   <Router>
    //     <Routes>
    //       <Route path='/sidebar' element={<Sidebar/>}/>
    //       {/* <Route path='/notification'   element={<Notification/>}/> */}
    //     </Routes>
    //   </Router>
    // </div>

  );
}

export default App;
