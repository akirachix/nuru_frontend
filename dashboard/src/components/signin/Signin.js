import React from 'react'
import "./signin.css"
import {useForm} from 'react-hook-form';
import nurupic from "../signin/pic.png"
import {Link} from 'react-router-dom'
export default function Form() {
    const{register,handleSubmit,formState:{errors}}=useForm()
    const onSubmit=data=> console.log(data);

  return (
   <section>
    <div className='register'>
        <div className='holder'>
            <h2>Sign Up</h2>
            
            <form id="form" className='flex flex-col'onSubmit={handleSubmit(onSubmit)}>
                <label id='top-names'>First name</label>
                <input type="text" {...register("firstname",{required:true})}placeholder='First name'/>
                {errors.firstname?. type==="required" && "First name is required"}
                <label id='top-names'>Last name</label>
                <input type="text" {...register("lastname",{required:true})}placeholder='Last name'/>
                {errors.lastname?. type==="required" && "Last name is required"}
                <label id='top-name'>Phone number</label>
                <input type="text" {...register("phonenumber",{required:true})}placeholder='Phone number'/>
                {errors.phonenumber?. type==="required" && "Phone number is required"}
                <label id='top-names'>Password</label>
                <input type="text" {...register("password",{required:true})}placeholder='Password'/>
                {errors.password?. type==="required" && "Password is required"}
                <label id='top-namess'>Confirm password</label>
                <input type="text" {...register("confirmpassword",{required:true})}placeholder='Confirm password'/>
                {errors.confirmpassword?. type==="required" && "confirm your password"}


                <button className='btn'>Submit</button>
            </form>
            <div className='create-account-wrap'>
                <p>Already a member?<Link path to="/login">Login</Link></p>
            </div>
            <div className='pic'>
                <img src={nurupic}></img>
            </div>

        </div>
    </div>
   </section>
  )
}
