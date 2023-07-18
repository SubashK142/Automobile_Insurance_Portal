import React from 'react'
import Navbar from './navbar'
import './style.css'



export default function Insurance() {
  return (
    <>
    <div>
    <Navbar/>
    </div>
    <div style={{backgroundColor:'black',height:'694px'}}>

    <div style={{display:'flex',flexDirection:'row'}}>
     <div className="card">
     <img style={{width:'370px',height:'170px',marginLeft:'-40px',marginTop:'-30px'}} src="https://res.cloudinary.com/dmyhvrlo2/image/upload/v1689248946/down-r_cyndk8.png" alt='image'/>
      <h2 className='name'>Car Insurance</h2>
      <p className='pp'>Card content goes here.</p>
    </div>
    <div className="card"> 
    <img style={{width:'370px',height:'170px',marginLeft:'10px',marginTop:'-20px'}} src="https://res.cloudinary.com/dmyhvrlo2/image/upload/v1689257193/bike1-removebg-preview_lcbktx.png" alt='image'/>
      <h2 className='bike'>Card Title</h2>
      <p className='pp'>Card content goes here.</p>
    </div>  
    <div className="card">
    <img style={{width:'370px',height:'170px',marginLeft:'-15px',marginTop:'-20px'}} src="https://res.cloudinary.com/dmyhvrlo2/image/upload/v1689259347/commercial-vehicle-insurance_pmtc8s.png" alt='image'/>
      <h2>Commercial Vehicle Insurance</h2>
      <p className='pp' >Card content goes here.</p>
    </div> 
    </div>
    <div style={{display:'flex',flexDirection:'row'}}>
    <div className="card">
    <img style={{width:'300px',height:'170px',marginLeft:'15px',marginTop:'-20px'}} src="https://res.cloudinary.com/dmyhvrlo2/image/upload/v1689259598/travel-removebg-preview_dqokis.png" alt='image'/>
     <h2>Travel Insurance</h2>
     <p className='pp'>Card content goes here.</p>
   </div>
   <div className="card"> 
   <img style={{width:'350px',height:'270px',marginLeft:'-15px',marginTop:'-20px'}} src="https://res.cloudinary.com/dmyhvrlo2/image/upload/v1689261655/motor-third-party-removebg_jwrmel.png" alt='image'/>
     <h2 className='third'>Card Title</h2>
     <p className='pp'>Card content goes here.</p>
   </div>  
   <div className="card">
   <img style={{width:'210px',height:'110px',marginLeft:'-15px',marginTop:'50px'}} src="https://res.cloudinary.com/dmyhvrlo2/image/upload/v1689264571/sddefault__1_y6ny1k.png" alt='image'/>
   
     <h2>Card Title</h2>
     <p className='zero'>Zero Deeperative</p>
     <p className='wal'>Insurance</p>
   </div> 
   </div>

  </div>
    
    </>
  )
}
