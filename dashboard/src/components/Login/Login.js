import React, {useState}from 'react'
import "./login.css"
import picture from "../Login/pic.png"
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom'

export default function Form() {
    const{register,handleSubmit,formState:{errors}}=useForm()
    const onSubmit=data=> console.log(data);
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }
  return (
   <section>
    <div className='container'>
        <div className='holder'>
            <h2>Log In</h2>
            
            <form id="form" className='flex flex-col'onSubmit={handleSubmit(onSubmit)}>
                <label id='top-names'>Username</label>
                <input type="text" {...register("username",{required:true})}placeholder='Username'/>
                {errors.firstname?. type==="required" && "Username is required"}               
                <label id='top-names'>Password</label>
                <input type={passwordShown ? "text" : "password"}  {...register("password",{required:true})}placeholder='Password'/>
                <button onClick={togglePassword} className="show"></button>
                {errors.password?. type==="required" && "Password is required"}

                <button className='btn'>Submit</button>
            </form>
            <div className='create-account-wrap'>
                <p>Not a member?<Link path to="/signin">Sign Up</Link></p>
                
            </div>
            <div className='pic'>
                <img src={picture}></img>
            </div>

        </div>
    </div>
   </section>
  )
}

