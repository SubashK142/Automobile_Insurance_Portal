// import React, { useState } from "react";
// import './App.css';
// import { Link } from "react-router-dom";
// import Navbar from "./navbar";

// function Signup() {
//   const [isLoginForm, setIsLoginForm] = useState(true);
//   const [name,setName]=useState('');
//   const [email,setEmail]=useState('');
//   const [mobile,setMobile]=useState('');
//   const [vechile_number,setVechile_No]=useState('');

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };
//   const handleMobileChange = (e) => {
//     setMobile(e.target.value);
//   };

//   const handleVechileChange = (e) => {
//     setVechile_No(e.target.value);
//   };
//   const handleSubmit =(e)=> {
//     e.preventDefault();
//     const data={
//     name:name
//     // email:email,
//     // mobile:mobile,
//     // vechile_no:vechile_number,
//     }

//   fetch('http://localhost:8080/post', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
//     .then((response) => response.json())
//     .then((responseData) => {
//       console.log('Success:', responseData);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//      });
// };

//   // const switchToLogin = (event) => {
//   //   event.preventDefault();
//   //   setIsLoginForm(true);
//   // };

//   // const switchToSignup = (event) => {
//   //   event.preventDefault();
//   //   setIsLoginForm(false);
//   // };

//   return (
   
//     <div className="container">
//       <div className={`form-container-sign ${!isLoginForm ? "active" : ""}`} id="signup-form">
//         <h1>New User</h1>
//         <form onSubmit={handleSubmit}> 
//           <label htmlFor="new-username">First name</label>
//           <input  value={name}  onChange={handleNameChange} className="margin" type="text" id="new-username" name="new-username" required placeholder="   enter your firstname"/>
//           <label htmlFor="new-email">Email Id</label>
//           <input value={email}  onChange={handleEmailChange} className="margin" type="text" id="new-username" name="new-username" required placeholder="   Enter your emailid"/>
//           <label htmlFor="new-email">Mobile No</label>
//           <input value={mobile}  onChange={handleMobileChange} className="margin" type="number" id="new-password" name="new-password" placeholder="   enter mobile no" required />
//           <label   htmlFor="new-email">Vechile No</label>
//           <input  value={vechile_number}  onChange={handleVechileChange} className="margin" type="text" id="new-password" name="new-password" placeholder="   enter vechile no" required />
//           <label htmlFor="new-email">Select Vechile Type </label>
//           <select className="margin1" id="new-password" name="new-paddword" >
//             <option value="volvo">  select a option</option>
//              <option value="volvo">  TWO-Wheeler</option>

//              <option value="fiat">  FOUR-Wheeler  </option>
//              <option value="audi">  OTHER</option>
             
//              </select>
//           <label >License Proof</label>
//           <input className="file" type="file"  />
//           <button  className="sumit" type="submit"><Link to='/home'>Sign Up</Link></button>
//         </form>
//         <p>
//           Already have an account?{" "}
//           <Link to="/login"  id="login-link">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
    
//   );
// }

// export default Signup;


// import React, { useState } from "react";
// import './App.css';
// import { Link } from "react-router-dom";
// import Navbar from "./navbar";

// function Signup() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [vechile_number, setVechileNumber] = useState('');

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };
//   const handleMobileChange = (e) => {
//     setMobile(e.target.value);
//   };

//   const handleVechileChange = (e) => {
//     setVechileNumber(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       name,
//       email,
//       mobile,
//       vechile_number,
//     };

//     fetch('http://localhost:8080/post', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((responseData) => {
//         console.log('Success:', responseData);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div className="container">
//       <div className="form-container-sign">
//         <h1>New User</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="new-username">First name</label>
//           <input value={name} onChange={handleNameChange} className="margin" type="text" id="new-username" name="new-username" required placeholder="Enter your firstname" />
//           <label htmlFor="new-email">Email Id</label>
//           <input value={email} onChange={handleEmailChange} className="margin" type="email" id="new-email" name="new-email" required placeholder="Enter your email" />
//           <label htmlFor="new-mobile">Mobile No</label>
//           <input value={mobile} onChange={handleMobileChange} className="margin" type="text" id="new-mobile" name="new-mobile" placeholder="Enter mobile no" required />
//           <label htmlFor="new-vechile">Vehicle No</label>
//           <input value={vechile_number} onChange={handleVechileChange} className="margin" type="text" id="new-vechile" name="new-vechile" placeholder="Enter vehicle no" required />
//           <label htmlFor="new-vechile">Select Vehicle Type</label>
//           <select className="margin1" id="new-vechile" name="new-vechile">
//             <option value="">Select an option</option>
//             <option value="two-wheeler">Two-Wheeler</option>
//             <option value="four-wheeler">Four-Wheeler</option>
//             <option value="other">Other</option>
//           </select>
          
//           <button className="submit" type="submit">Sign Up</button>
//         </form>
//         <p>
//           Already have an account?{" "}
//           <Link to="/login" id="login-link">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;


import React, { useState } from "react";
import './App.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";

function Signup() {

  const navigate = useNavigate();
  const [ins_Id, setins_Id] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [vechile_number, setVechileNumber] = useState('');
  const [error, setError] = useState('');

  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleVechileChange = (e) => {
    setVechileNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const generatedInsId = `AMI-${randomNumber}-${randomNumber}`;
    setins_Id(generatedInsId);
    
    const data = {
      name,
      email,
      mobile,
      vechile_number,
      ins_Id: generatedInsId,
    };

    fetch('http://localhost:8080/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

      .then((response) => {
        if (response.ok) {
          fun();
          return response.json();
        } else {
          throw new Error('Error occurred during signup');
        }
      })

      
      .then((responseData) => {
        console.log('Success:', responseData);
        // Perform any necessary actions after successful signup
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('Error occurred during signup');
      });

      function fun(){
        alert("User created");
        navigate('/home')
      }

      // function generatePattern() {
      //   const randomNumber = Math.floor(1000 + Math.random() * 9000);
      //   return `AUTO-${randomNumber}-${randomNumber}`;
      // }
      
      // Example usage
      // const pattern = generatePattern();
      // console.log(pattern);
  };

  return (
    <div className="container">
      <div className="form-container-sign">
        <h1>New User</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="new-username">First name</label>
          <input value={name} onChange={handleNameChange} className="margin" type="text" id="new-username" name="new-username" required placeholder="Enter your firstname" />
          <label htmlFor="new-email">Email Id</label>
          <input value={email} onChange={handleEmailChange} className="margin" type="email" id="new-email" name="new-email" required placeholder="Enter your email" />
          <label htmlFor="new-mobile">Mobile No</label>
          <input value={mobile} onChange={handleMobileChange} className="margin" type="text" id="new-mobile" name="new-mobile" placeholder="Enter mobile no" required />
          <label htmlFor="new-vechile">Vehicle No</label>
          <input value={vechile_number} onChange={handleVechileChange} className="margin" type="text" id="new-vechile" name="new-vechile" placeholder="Enter vehicle no" required />
          <label htmlFor="new-vechile">Select Vehicle Type</label>
          <select className="margin1" id="new-vechile" name="new-vechile">
            <option value="">Select an option</option>
            <option value="two-wheeler">Two-Wheeler</option>
            <option value="four-wheeler">Four-Wheeler</option>
            <option value="other">Other</option>
          </select>

          
          <button className="submit" type="submit">Sign Up</button>
        </form>
        {error && <p className="error">{error}</p>}
        <p>
          Already have an account?{" "}
          <Link to="/login" id="login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
