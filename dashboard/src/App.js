import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sms from './components/sms/Sms';
import Profile from './components/profile/Profile';


function App() {
  return (
    <div className='app'>
      {/* <Sidebar/> */}
      {/* <Profile/> */}
      {/* <Sms/> */}
      < Router>
      <Routes>
      
        <Route path='/sidebar' element={ <Sidebar/> } />
        <Route path='/profile' element={ <Profile/> } />
        <Route path='/sms' element={ <Sms/> } />
        {/* <Route path='/profile' element={<Profile/>} /> */}
        

      </Routes>
      
      </Router>


    </div>
  );
}
export default App;
