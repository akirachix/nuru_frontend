import React from 'react';
import './profile.scss';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import Prof from '../images/profile.png';

const Profile = () => {
  return (
    <div className="profile">

      <Sidebar />
      <div className="profileContainer">
        <Navbar />
        <div className="imgCont">

          <img src={Prof} alt="profile picture"
            className='profile'
          />
          
          <div className='text'>
          <p>Maureen Masau</p>
            <p className='para2'>Lorem Ipsum is simply dummy text of <br />
              the printing and typesetting industry. <br />
              Lorem Ipsum has been the industry's <br />
              standard dummy text ever ... More
            </p>
    
          </div>
          


        </div>


      </div>
    </div>
  )
}

export default Profile