import React, { useState } from 'react'

const Home = () => {
  const [school, setSchool] = useState('')
  
  const handleGetCode = () => {
  }

  return (
    <div className='w-full h-screen items-center justify-center bg-white flex ' >
      <div className='flex-col items-center flex w-[40%] min-h-[110px]' >
        <h1 className='text-secondary text-5xl font-psemibold' >Icona</h1>
        <select value={school} onChange={e => setSchool(e.target.value)}
          className='w-[55%] text-gray-600 text-sm mt-8 active:border active:border-secondary cursor-pointer items-center justify-center font-psemibold h-[50px] rounded-md flex px-2 bg-primary'
        >
          <option value={'Technology'} >School of Technology</option>
          <option value={'Natural Resource Management'} >School of Natural Resource Management</option>
          <option value={'Basic Sciences'}>School of Basic Sciences</option>
          <option value={'Social Sciences and Law'}>School of Social Sciences and Law</option>
          <option value={'Agriculture'} >School of Agriculture</option>
        </select>
        {/* <input 
          type='text' 
          className='w-[55%] text-gray-600 mt-8 active:border active:border-secondary font-psemibold h-[50px] rounded-md px-4 bg-primary'
          placeholder='Enter department email...'
        />
        <input 
          type='text' 
          className='w-[55%] mt-2 text-gray-600 font-psemibold h-[50px] rounded-md active:border px-4 bg-primary'
          placeholder='Enter password...'
        /> */}
        <button 
            onClick={handleGetCode}
            className='bg-secondary hover:bg-blue-500 w-[55%] mt-6 rounded-md text-white h-[50px] items-center justify-center' >
          Get Code
        </button>
        {/* <div className='w-full items-start justify-center flex mt-2 text-gray-700' >
          <p>Already have an account? </p>
        </div> */}
      </div>
    </div>
  )
}

export default Home