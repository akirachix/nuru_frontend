// import './table.css';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios'
// function Table() {
//   // const [, setIsLoading] = useState(false);
//   // const [, setError] = useState();
//   const [users, setUsers] = useState([]);
//   useEffect(()=>{
//     getUsers()
//     console.log('users')
//   },[]);
//   const getUsers =() => {
//     console.log('hhhhh')
//     // setIsLoading(true);
//     // try {
//       // const response = await
//       axios.get("https://still-oasis-20492.herokuapp.com/api/mother/")
//       .then(res=>{
//         console.log(res.data)
//         setUsers(res.data)
//       })
//       // console.log(response.data)
//       // if (response.status !== 200) {
//       //   throw new Error(`Something went wrong!: ${response.status}`);
//       // }
//       // const data = await response.data.json();
//       // if (data) setUsers(data);
//     // } catch (error) {
//     //   setError(error);
//     // } finally {
//     //   setIsLoading(false);
//     // }
//   };
// return (
//   <div className="app">
//        <h1>Users</h1>
//  <div className='head'>
//         </div>
//  <table id="users">
//         <tr>
//           <th>User's Name</th>
//           <th>Child's Name</th>
//           <th>Child's Date of Birth</th>
//           <th>Registration Date</th>
//           <th>User's Phone Number</th>
//           <th>Appointment Date</th>
//           <th>Action</th>
//         </tr>
//          {users.map(item => {
//           return (
//             <tr>
//               <td>{item.full_name}</td>
//               <td>{item.child_name}</td>
//               <td>{item.child_date_of_birth}</td>
//               <td>{item.registration_date}</td>
//               <td>{item.phone_number}</td>
//               <td>{item.appointment_date}</td>
//               <td>{item.action}</td>
//             </tr>
//           )
//         })}
//       </table>
//     </div>
//   );
// }
// export default Table