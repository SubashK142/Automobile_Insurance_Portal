import React from 'react'
import Navbar from '../navbar'
import '../style.css'
import { connect, useSelector } from 'react-redux';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
export default function Profile() {
    const id=useSelector(state=>state.insid)
  return (
    <div>
      <>
      <div>
      <Navbar/>
      </div>
      <div className='policy' style={{width:'100vw',height:'704px'}}>
      <h1>User Details</h1>
      <p>Insurance Id:{id}</p>
      <p>UserName:Subash </p>
      <p>Contact:637966791 </p>
      <p>Email ID:727721euai055@skcet.ac.in</p>
      </div>
      </>
    </div>
  )
}
