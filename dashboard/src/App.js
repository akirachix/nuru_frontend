import './App.css';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar'
import Users from './components/users/Users';
function App() {
  return (
    <div className='App'>
  <Sidebar/>
  <Users/>
    {/* <Router>
    <Routes> */}
       {/* <Route path="/sidebar" element={<Sidebar/>}/> */}
       {/* <Route path="/users" element={<Users/>}/>
       <Route path="/sidebar" element={<Sidebar/>}/>
      </Routes>
    </Router> */}
    </div>
  );
}
export default App
