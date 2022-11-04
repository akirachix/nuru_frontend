import './User.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { IoSettings } from "react-icons/io5";
import prof from "/home/student/nuru_frontend/dashboard/src/image/profile.jpeg";
import { VscBell } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import Searchbar from "../Searchbar/Searchbar.jsx";
import styled from "styled-components";
// import { searching } from '../Searchbar/Searchbar.jsx';


function Users() {
  const [, setIsLoading] = useState(false);
  const [, setError] = useState();
  const [users, setUsers] = useState([]);
  const [filter,setFilteredUsers]=useState()
  
  useEffect(()=>{
    getUsers()
  },[]);
  const searching=(search)=>{
        if(search!==''){
            console.log(search, 'goooo')
             const filteredData = users.filter((item) => {
                return Object.values(item.full_name).join('').toLowerCase().includes(search.toLowerCase());
        },
    )
    setUsers(filteredData)

}
else{
  
}

}
  const getUsers =() => {
    console.log('hhhhh')
    // setIsLoading(true);
    // try {
      // const response = await
      axios.get("https://still-oasis-20492.herokuapp.com/api/Users/")
      .then(res=>{
        console.log(res.data)
        setUsers(res.data)
      })
      // console.log(response.data)
      // if (response.status !== 200) {
      //   throw new Error(`Something went wrong!: ${response.status}`);
      // }
      // const data = await response.data.json();
      // if (data) setUsers(data);
    // } catch (error) {
    //   setError(error);
    // } finally {
    //   setIsLoading(false);
    // }
  };
return (
  <div className="app">
   <nav className='nav'>
                <div className="title">
                    {/* <h1>
                        <span></span>
                    </h1>import prof from "./image/profile.jpeg"; */}
                    <div>
         <div className="search">  
                    <input 
                    type="text" 
                    placeholder="Search" 
                    onChange={(e)=>{searching(e.target.value)}}
                    
                    />
                </div>
    </div>                </div>
                <div className="notification">
                    <VscBell />
                </div>
                <div className="icon">
                    <IoSettings />
                </div>
                <Link to="/profile">
                <div className="image">
                  <a href="/profile">
                    {/* <img src={prof} alt="" /> */}
                    </a>
                </div>
                </Link>
            </nav>
       <h1 className='user'>Users</h1>
 <div className='head'>
        </div>
         <button className='add' type="button">Add</button>
 <table id="users" className="table table-dark table-borderless">
        <tr>
          <th>User's full Name</th>
          <th>Child's Name</th>
          <th>Child's Date of Birth</th>
          <th>Registration Date</th>
          <th>User's Phone Number</th>
          <th>Appointment Date</th>
          {/* <th>Action</th> */}
        </tr>
        {/* {filteredUsers.length!==} */}
         {users.map(item => {
          return (
            <tr>
              <td>{item.full_name}</td>
              <td>{item.child_name}</td>
              <td>{item.child_date_of_birth}</td>
              <td>{item.registration_date}</td>
              <td>{item.Phone_number}</td>
              <td>{item.appointment_date}</td>
              {/* <td>{item.action}</td> */}
            </tr>
          )
        })}
      </table>
      {/* <h2>Add</h2> */}
      {/* <form>
        <input
        type='text'
        name='full_name'
        required='required'
        placeholder='Enter a name'>
        </input>
        </form> */}
      <button className='del' type="button">Delete</button>
    </div>
  );
}
export default Users;
