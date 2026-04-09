import React from 'react'

const Dashboard = () => {


  const data = [
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
  ]

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between px-5 py-10'>
        <h3 className='font-semibold text-2xl' >Current Leads</h3>
        <button className='bg-[#4e19ff] text-white rounded-sm px-2 py-1 font-semibold cursor-pointer active:scale-90 transition-all duration-120' >Add New +</button>

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
            <span className='py-5 text-sm cursor-pointer text-gray-600'>{item.status}</span>
            <span className='py-5 text-sm cursor-pointer text-gray-600'>{item.assigned}</span>
            <span className='py-5 text-sm cursor-pointer text-gray-600'>🗑️</span>
            </div>
          ) )}

        </div>

      </div>

    </div>
  )
}

export default Dashboard