
    import React, { Component } from 'react'
    import { useState, useRef } from 'react';

import { Link } from 'react-router-dom'
import Navbar from '../navbar'
import '../style.css'
import Insurance from './../insurance';


const Policy = () => {
    const [showDiv, setShowDiv] = useState(false);
    const [showDivs, setShowDivs] = useState(false);
    const [showDiv3, setShowDiv3] = useState(false);
    const [showDiv4, setShowDiv4] = useState(false);
  const divRef = useRef(null);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };
  const handleClicks = () => {
    setShowDivs(!showDivs);
  };
  const handleClicks3 = () => {
    setShowDiv3(!showDiv3);
  };
  const handleClicks4 = () => {
    setShowDiv4(!showDiv4);
  };

    return (
        <>
       <div>
       <Navbar/>
       </div>

        <div className="policy" style={{width:'100vw',height:'704px'}}>

        <div style={{width:700,marginLeft:400}}>

        <h1  style={{color:'white',paddingTop:60,marginLeft:-800}}>Automobile Insurance Policies</h1>
        <ul>
        <p style={{fontSize:19,wordSpacing:6,marginLeft:-200,textAlign:'justify'}}>
        <li>
        An automobile insurance policy, also known as auto insurance or car insurance, is a 
        contract between an individual and an insurance company. It provides financial protection in the event of accidents,
         theft, or damage to the insured vehicle, as well as liability coverage for injuries or damages caused to others.</li> <br></br><br></br><li>It is type of insurance policy that provides financial protection against 
         losses or damages that may occur to your vehicle or others involved in an accident. It is a legal requirement in most countries to have at least a minimum level 
         of automobile insurance coverage to drive on public roads.
         </li></p>
         </ul>
         <h1  style={{color:'white',paddingTop:40,marginLeft:-700}}>Types of Automobile Insurance Polices</h1>
         <div>
         <li>

        <p style={{paddingTop:30,marginLeft:-900,fontSize:20}} className="div1">1) Car Insurance</p>
        <br></br>
          <p style={{paddingTop:0,marginLeft:-100,fontSize:20,textAlign:'justify',width:1000}}>Car insurance, also known as vehicle insurance or motor insurance, provides financial protection to you & your 
          four-wheeler against any loss or damages resulting from accidents, theft, fire, calamities and third-party person or property</p></li>
        <p className="clickme" onClick={handleClick}>Click for More</p>
        {showDiv &&( <div  className={showDiv ? 'visible' : 'hidden'} style={{width:800,fontSize:15,paddingLeft:-100,wordSpacing:6}}>
        In India, there are three types of car insurance policies offered by 
        the general insurance companies i.e. third-party car insurance, comprehensive 
        insurance, and stand-alone insurance. You can choose a car insurance plan according 
        to your budget and need.
        
        </div>
        
        )}

          <li>
        <p style={{paddingTop:-30,marginLeft:-900,fontSize:20}} className="div1">2) Bike Insurance</p>
        <br></br>
          <p style={{paddingTop:10,marginLeft:-100,fontSize:20,textAlign:'justify',width:1000}}>Bike insurance, also known as vehicle insurance or motor insurance, provides financial protection to you & your 
          four-wheeler against any loss or damages resulting from accidents, theft, fire, calamities and third-party person or property</p></li>
        <p className="clickme" onClick={handleClicks}>Click for More</p>
        {showDivs &&( <div  className={showDivs ? 'visible' : 'hidden'} style={{width:800,fontSize:15,paddingLeft:-100,wordSpacing:6}}>
        In India, there are three types of car insurance policies offered by 
        the general insurance companies i.e. third-party car insurance, comprehensive 
        insurance, and stand-alone insurance. You can choose a car insurance plan according 
        to your budget and need.
        
        </div>
        
        )}
        <li>
        <p style={{paddingTop:-30,marginLeft:-900,fontSize:20}} className="div1">3) Car Insurance</p>
        <br></br>
          <p style={{paddingTop:-30,marginLeft:-100,fontSize:20,textAlign:'justify',width:1000}}>Car insurance, also known as vehicle insurance or motor insurance, provides financial protection to you & your 
          four-wheeler against any loss or damages resulting from accidents, theft, fire, calamities and third-party person or property</p></li>
        <p className="clickme" onClick={handleClicks3}>Click for More</p>
        {showDiv3 &&( <div  className={showDiv3 ? 'visible' : 'hidden'} style={{width:800,fontSize:15,paddingLeft:-100,wordSpacing:6}}>
        In India, there are three types of car insurance policies offered by 
        the general insurance companies i.e. third-party car insurance, comprehensive 
        insurance, and stand-alone insurance. You can choose a car insurance plan according 
        to your budget and need.
        
        </div>
        
        )}
        <li>
        <p style={{paddingTop:-30,marginLeft:-900,fontSize:20}} className="div1">4) Car Insurance</p>
        <br></br>
          <p style={{paddingTop:0,marginLeft:-100,fontSize:20,textAlign:'justify',width:1000}}>Car insurance, also known as vehicle insurance or motor insurance, provides financial protection to you & your 
          four-wheeler against any loss or damages resulting from accidents, theft, fire, calamities and third-party person or property</p></li>
        <p className="clickme" onClick={handleClicks4}>Click for More</p>
        {showDiv4 &&( <div  className={showDiv4 ? 'visible' : 'hidden'} style={{width:800,fontSize:15,paddingLeft:-100,wordSpacing:6}}>
        In India, there are three types of car insurance policies offered by 
        the general insurance companies i.e. third-party car insurance, comprehensive 
        insurance, and stand-alone insurance. You can choose a car insurance plan according 
        to your budget and need.
        
        </div>
        
        )}
        
        
        </div>
      
        
        </div>
        
      </div>
    
    </>
    )
  }
  export default Policy;