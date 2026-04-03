import React from 'react'

const Login = () => {
  return (
    <div className='flex min-h-screen'>

     <div className='w-1/2 bg-gradient-to-r from-[#524be6] to-[#6564ee] min-h-screen flex items-center justify-center' >Left</div>
      
      {/* Right Div */}
     <div className='w-1/2 bg-[#7d87f8] min-h-screen flex  justify-center items-end ' >
     <div className='bg-white w-[370px] h-[480px] rounded-t-xl p-8' >
      <h2 className='text-2xl text-center font-semibold' >Welcome Back</h2>
      <p className='text-gray-600 text-[10px] text-center pt-2 pb-6' >Let get started wit hyour 30 days free trial</p>
      <input type="text" placeholder='Username' 
      className='border border-gray-300 rounded-xl px-4 py-2 w-full mb-4'
      />
       <input type="text" placeholder='Password' 
      className='border border-gray-300 rounded-xl px-4 py-2 w-full'
      />
      <button className='text-blue-500 mb-5 text-xs w-full text-center cursor-pointer hover:text-blue-900'>Forget Password?</button>

      <button className='bg-blue-500 px-4 py-2 text-white text-center w-full rounded-xl cursor-pointer hover:bg-blue-600'>Login</button>

      <div className="flex items-center gap-2 my-4 mt-12">
  <div className="flex-1 h-px bg-gray-300"></div>
  <span className="text-gray-500 text-sm">OR</span>
  <div className="flex-1 h-px bg-gray-300"></div>
</div>


      <div className='flex justify-between' >
        <div className='px-8 py-2 bg-[#d8d8d8] rounded-3xl text-blue-600 font-bold cursor-pointer' >Google</div>
        <div className='px-8 py-2 bg-[#d8d8d8] rounded-3xl text-blue-600 font-bold cursor-pointer' >Facebook</div>
      </div>

      <div className='flex mt-4 gap-1 items-center justify-center w-full' >
        <p className='text-sm text-gray-800' >Don't have an account?</p>
        <button className='text-blue-800 font-bold cursor-pointer' >Sign Up</button>
      </div>
      
     </div>
     </div>

    </div>
  )
}

export default Login