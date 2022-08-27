import React, { useState } from "react";
// import {useNavigate } from "react-router-dom";
import Home from "../Home/Home";

const Login = () => {
    const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);
//  const nav=useNavigate()
  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("Password")
      .replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    
    <div className=" h-auto w-[30rem] rounded-lg shadow-md bg-[#484848] ">
         {home ? (
        <form onSubmit={handleLogin} className=" leading-10 relative top-4  ">
          <h3  className="text-center text-4xl">LogIn</h3>
          <div className="form-group m-4">
            <label>Email:</label>
            <input
              type="email"
              className="form-control relative h-[2rem] left-2 w-[20rem]
              rounded-md p-1 bg-[#9E9E9E] text-black placeholder:text-black border-none outline-none"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group m-4">
            <label>Password:</label>
            <input
              type="password"
              className="form-control relative h-[2rem] left-2 w-[20rem]
              rounded-md p-1 bg-[#9E9E9E] text-black placeholder:text-black border-none outline-none"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit"
                    className="btn m-4 bg-[#FBB666] relative left-14 bottom-3 text-xl rounded-lg
                    shadow-md cursor-pointer h-[2.4rem] w-[20rem] hover:scale-75">
            Login
          </button>

          {flag && (
            <p color="primary"
            className='h-[5rem] w-[20rem] text-center p-1 relative left-12 m-6 bg-[#FF6172] rounded-md' 
            variant="warning">
              Fill correct Info else keep trying.
            </p>
          )}
        </form>
      ) : (
        <Home/>
      )}
    </div>
   
  )
}

export default Login