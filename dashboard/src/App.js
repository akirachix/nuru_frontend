import './App.css';
import Form from './components/signin/Signin';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
function App() {
  return (
    
    <div className='App'>
    <Router>
    <Routes>
       <Route path="/sidebar" element={<Sidebar/>}/>
       <Route path="/login" element={<Login/>} />
       <Route path="/signin" element={<Form/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
