import React from 'react'
import Navbar from '../navbar'
import '../style.css'
import { connect, useSelector } from 'react-redux';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
export default function Renew() {
    const id=useSelector(state=>state.insid)
  return (
    <>
    <div>
    <Navbar/>
    </div>
    <div className='policy' style={{width:'100vw',height:'704px'}}>
      <h1 style={{marginLeft:-900,marginTop:50}}>Insurance Renewal Online</h1>
      <p style={{width:1100,marginLeft:200,fontSize:17,wordSpacing:3}}>Indeed! A car is not just an asset, but a marvel in its true sense. The satisfaction drawn from owning 
      and driving your own car is beyond words. While you’ve taken every effort to protect it from mishaps and secure 
      yourself from the financial implications arising due to its theft or accident through car insurance , 
      renewing your policy every year ensures you remain protected.</p>
   
      
      <p style={{color:'white',marginLeft:-1050,fontSize:30,marginTop:50}}>Renew Details</p>
      <p>Insurance ID :{id}</p>
      <p>Policy Name :Car Insurance</p>
      <p>Insurance Start Date :18/04/2022</p>
      <p>Total Payment:Rs.2000</p>
      <p></p>
    </div>
    </>
  )
}
