import React, { useState } from 'react'
import image from '../images/delete.png'

const Dashboard = () => {

  const [openform, setOpenForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");


  const [data, setData] = useState([
    {
      name: "Michael",
      email: "michael@gmail.com",
      date: "Jan 04",
      status: "Not Interested",
      assigned: "Lawson"
    },
    {
      name: "Lindsay",
      email: "lindsay@gmail.com",
      date: "Dec 30",
      status: "In Progress",
      assigned: "Ferguson"
    },
    {
      name: "Tobias",
      email: "tobias@gmail.com",
      date: "Dec 25",
      status: "Sold",
      assigned: "Funke"
    }
  ])

  const handleDelete = (i) => {
    const newData = data.filter((item,index) => index !== i )
    setData(newData);
  }

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between px-5 py-10'>
        <h3 className='font-semibold text-2xl' >Current Leads</h3>
        <button 
        onClick={(() => setOpenForm(true))}
        className='bg-[#4e19ff] text-white rounded-sm px-2 py-1 font-semibold cursor-pointer active:scale-90 transition-all duration-120' >Add New +</button>

        {openform && (
          <div 
          onClick={() => setOpenForm(false)}
          className='fixed inset-0 bg-black/40 flex justify-center items-center'>

            {/* main card */}

            <div
            onClick={(e) => e.stopPropagation()}
            className='bg-white w-[350px] p-6 rounded-xl space-y-4' >
              <h2 className='text-center font-bold text-xl'>Add Lead</h2>

              <input 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='px-4 py-2 border border-1 border-gray-200 rounded w-full'
              type="text"
              placeholder='Enter Name'
               />

                <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              className='px-4 py-2 border border-1 border-gray-200 rounded w-full'
              type="text"
              placeholder='Enter Email'
               />

             <select
             value={status}
             onChange={(e) => setStatus(e.target.value)}
             placeholder = "Status"
             className='px-4 py-2 border border-1 border-gray-200 rounded w-full'>
             <option>Status</option>
             <option>Done</option>
             <option>In Progress</option>
             <option>Pending</option>
             <option>Not Interested</option>
</select>

           {/* auto-date */}

           <p className='text-sm text-gray-500' >
            Date: {new Date().toDateString()}</p>

            <div className='flex justify-between'>

              <button
              onClick={() => setOpenForm(false)}
              className='text-white bg-red-600 rounded font-semibold px-3 py-1 active:scale-90 transition-all duration-120 cursor-pointer' >Cancel</button> 
              
              <button
              onClick={() => {
                const newLead = {
                  name:name,
                  email:email,
                  status:status,
                  date: new Date().toDateString(),
                  assigned:"You"
                }
                setData([...data, newLead])
                setOpenForm(false);
              }}
              className='bg-[#4e19ff] text-white rounded-sm px-2 py-1 font-semibold cursor-pointer active:scale-90 transition-all duration-120'
              >Add</button>

            </div>
              
            </div>

          </div>

        )}

      </div>

      <div className=' h-px bg-gray-300 mx-10' ></div>

      {/* Clients Data */}

      <div className='p-6'>
 
        <div className='bg-white rounded-xl shadow-md overflow-hidden'>

          {/* Table */}

          <div className='grid grid-cols-6 px-6 pt-3 pb-3 text-center border-b border-gray-400' >
            <span className='text-gray-800 font-semibold' >Name</span>
            <span className='text-gray-800 font-semibold' >Email Id</span>
            <span className='text-gray-800 font-semibold' >Created At</span>
            <span className='text-gray-800 font-semibold' >Status</span>
            <span className='text-gray-800 font-semibold' >Assigned to</span>
            <span className='text-gray-800 font-semibold' ></span>
          </div>

          {/* row */}

          {data.map((item,index) => (
            <div className='grid grid-cols-6 px-6 text-center border-b border-gray-300  hover:bg-gray-50 transition-all ' >
            <span className='py-5 text-sm cursor-pointer text-gray-600'>{item.name}</span>
            <span className='py-5 text-sm cursor-pointer text-gray-600'>{item.email}</span>
            <span className='py-5 text-sm cursor-pointer text-gray-600'>{item.date}</span>
<span 
  className={`py-5 text-sm cursor-pointer 
    ${
      item.status === "Done"
        ? "text-green-500"
        : item.status === "In Progress"
        ? "text-blue-500"
        : item.status === "Not Interested"
        ? "text-gray-900": "text-gray-600"
    }`}
>
  {item.status}
</span>

            <span className='py-5 text-sm cursor-pointer text-gray-600'>{item.assigned}</span>
            <div className='flex items-center' >
            <img 
            onClick={() => handleDelete(index)}
            src={image} alt="delete" className='w-6 h-5 cursor-pointer hover:scale-115 transition-all duration-100 active:scale-95' /> </div>
            </div>
          ) )}

        </div>

      </div>

    </div>
  )
}

export default Dashboard