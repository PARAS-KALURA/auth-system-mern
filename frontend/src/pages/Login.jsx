import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import API from "../api/api";



const Login = () => {


const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const navigate = useNavigate();

const handleSubmit = async(e) => {
  
  e.preventDefault();

  if(!username || !password){
    setError("All fields required");
    return;
  }

  try{
    const res = await API.post("/login", {
     username,
     password,
    });

    console.log(res.data);
     

//     This token = user logged in
// Later used for protected routes
    localStorage.setItem("token", res.data.token); //Store the login token in browser so user stays logged in 
    
    setError("");
     setUsername("");
    setPassword("");
    navigate("/dashboard");

   

  } catch(err) {
    setError(err.response?.data?.message || "Login failed"); // Show real error otherwise show default error
  }
}


  return (
    <div className='flex min-h-screen  bg-gradient-to-r from-[#524be6] to-[#7d87f8]'>
      

      {/* Left Div */}
     <div className=' hidden md:flex w-1/2 min-h-screen items-center justify-center' >
     <div className='flex flex-col' >
     <h1 className='text-6xl text-white w-full text-center p-5 font-bold' >Sample</h1>
     <p className='text-white/80 text-sm leading-relaxed pl-10 max-w-md' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque dolor necessitatibus quas odio, assumenda fugiat molestiae, aliquam quaerat officiis quam repellat rem dicta, voluptatem nostrum officia delectus sit maiores consectetur non consequatur expedita. Temporibus quo cum iusto quod, placeat praesentium!</p>
     </div>
     </div>
      
      {/* Right Div */}
     <div className='w-full md:w-1/2 min-h-screen flex  justify-center md:items-end items-center' >
     <form onSubmit={handleSubmit} >
     <div className='bg-white w-[370px] h-[480px] rounded-xl md:rounded-t-xl md:rounded-b-none p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.40)] transition-all duration-300' >
      <h2 className='text-2xl text-center font-semibold' >Welcome Back</h2>
      <p className='text-gray-600 text-[10px] text-center pt-2 pb-6' >Let get started wit hyour 30 days free trial</p>
     
      
      <input
      type="text"
      placeholder='Username' 
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className='border border-gray-300 rounded-xl px-4 py-2 w-full mb-4'
      />
       <input
       type="password"
       placeholder='Password' 
       value={password}
       onChange={(e) => setPassword(e.target.value)}
      className='border border-gray-300 rounded-xl px-4 py-2 w-full'
      />
      <button
      type='button'
      className='text-blue-500 mb-5 text-xs w-full text-center cursor-pointer hover:text-blue-900'>Forget Password?</button>
      

      {error && (
  <p className="border border-red-500 text-white bg-red-500 rounded-xl px-4 py-2 w-full mb-4 text-sm text-center">
    {error}
  </p>
)}

<button
  type='submit'
  className='bg-blue-500 px-4 py-2 text-white text-center active:scale-95 transition-all duration-150 w-full rounded-xl cursor-pointer hover:bg-blue-600'>
  Login
</button>
     

      <div className="flex items-center gap-2 my-4 mt-12">
  <div className="flex-1 h-px bg-gray-300"></div>
  <span className="text-gray-500 text-sm">OR</span>
  <div className="flex-1 h-px bg-gray-300"></div>
</div>


      <div className='flex justify-center gap-10' >
        <div className='px-5 py-2 text-sm bg-gradient-to-r from-purple-400 to-purple-500 hover:bg-purple-700 text-white rounded-3xl  font-bold cursor-pointer active:scale-90 active:bg-purple-800 transition-all duration-100' >Google</div>
        <div className='px-5 py-2 text-sm rounded-3xl bg-gradient-to-r from-purple-400 to-purple-500 text-white font-bold cursor-pointer active:scale-90 active:bg-purple-800 transition-all duration-100' >Facebook</div>
      </div>

      <div className='flex mt-4 gap-1 items-center justify-center w-full' >
        <p className='text-sm text-gray-800' >Don't have an account?</p>
        <button className='text-blue-800 font-semibold cursor-pointer' >Sign Up</button>
      </div>
      

     </div>
     </form>
     </div>
     

     

    </div>

  )
}

export default Login