import React, {useState}from 'react'
import "./adduser.css"
import axios from 'axios';
import { useForm } from 'react-hook-form';
export default function Form() {
    // const { register, handleSubmit, formState: { errors }, reset } = useForm({
    //     resolver: yupResolver(formSchema),
    //   });

    const{formState:{errors}, reset}=useForm()
    const onSubmit=data=> console.log(data);
    


    const [user,setUser] = useState({
        full_name:"",
        Phone_number:"",
        child_name: "",
        child_date_of_birth:"",
        registration_date:"",
        appointment_date:"" 
    })


    const handleChange = e =>{
        const {name,value} = e.target
        setUser({
        ...user,
        [name]:value
        })
        console.log(user)
        }


const addUsers =() => {
        const{full_name,Phone_number,child_name,child_date_of_birth,registration_date,appointment_date} = user
      if (full_name && Phone_number && child_name && child_date_of_birth && registration_date && appointment_date){
          axios.post("https://nurucare.herokuapp.com/api/Users/",user)
          .then(res=>{
            console.log(res)
            reset()
          }
          )}
          else{
            alert("Invalid input")
          }
      };



  return (
   <section>
    <div className='container'>
        <form className='form' >
            <h2>Add User</h2>
            <div id='name'>
                <label>Mother's full Name</label>
            </div>
            <input id='input' type='text' name='full_name' placeholder='Full Name'
            onChange={handleChange}/>
            <div className='error'>{errors.password?.type==='required'&& 'Full Name required'}</div>

            <div id='child'>
                <label>Child's full Name</label>
            </div>
            <input id='input' type='text'name='child_name' placeholder='Full Name' onChange={handleChange}/>
            <div className='error'>{errors.password?.type==='required'&& 'Full Name required'}</div>
            
            
            
            <div id='dates'>
                <label>Child's date of birth</label>
            </div>
            <div className='date_of_birth'>
                <input type='date' id='dt' name='child_date_of_birth' onChange={handleChange}></input>
            </div>
            <div className='error'>{errors.password?.type==='required'&& 'Full Name required'}</div>


            <div id='date'>
                <label>Registration date</label>
            </div>
            <div className='date_of_birth'>
                <input type='date' id='dt' name='registration_date' onChange={handleChange}></input>
            </div>
            <div className='error'>{errors.password?.type==='required'&& 'Full Name required'}</div>

            <div id='date'>
                <label>Appointment date</label>
            </div>
            <div className='date_of_birth'>
                <input type='date' id='dt' name='appointment_date' onChange={handleChange}cd ></input>
            </div>
            <div className='error'>{errors.password?.type==='required'&& 'Full Name required'}</div>

            <div id='children'>
                <label>Mother's phone number</label>
            </div>
            <input id='input' type='text' name='Phone_number' placeholder='Phone number' onChange={handleChange}/>
            <div className='error'>{errors.password?.type==='required'&& 'Full Name required'}</div>

            <div className='btn'>
                <button type='button' onClick={addUsers} id='button'> Save</button>
            </div>
            
        </form>
    </div>
     </section>
  )
}
    
  