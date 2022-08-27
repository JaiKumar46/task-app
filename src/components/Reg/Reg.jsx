import React,{useState} from 'react'

import Login from '../Login/Login';

const Reg = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      setFlag(true);
     
    } else {
      setFlag(false);
      localStorage.setItem("Name", JSON.stringify(name));

      localStorage.setItem("Email", JSON.stringify(email));

      localStorage.setItem(
        "Password",
        JSON.stringify(password)
      );
      localStorage.setItem("Phone", JSON.stringify(phone));
      
      console.log("Saved in Local Storage");

      setLogin(!login);
   
    }
  }

  function handleClick() {
    setLogin(!login);

  }
  return (
<div className='flex  h-screen w-screen items-center justify-center'>
    <div className=" h-auto w-[30rem] rounded-lg shadow-md bg-[#484848] " >
        {" "}
          {login ? (
            <form onSubmit={handleFormSubmit} className=" leading-10 relative top-4  ">
              <h3 className="text-center text-4xl">Register</h3>

              <div className="form-group m-4">
                <label>Name:</label>
                <input
                  type="text"
                  className="form-control relative h-[2rem] left-2 w-[20rem]
                   rounded-md p-1 bg-[#9E9E9E] text-black placeholder:text-black border-none outline-none"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group m-4">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control relative h-[2rem] left-2 w-[20rem]
                  rounded-md p-1 bg-[#9E9E9E] text-black placeholder:text-black border-none outline-none"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group m-4">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control relative h-[2rem] left-2 w-[20rem]
                  rounded-md p-1 bg-[#9E9E9E] text-black placeholder:text-black border-none outline-none"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="form-group m-4">
                <label>Phone No.:</label>
                <input
                  type="Phone"
                  className="form-control relative h-[2rem] left-2 w-[20rem]
                  rounded-md p-1 bg-[#9E9E9E] text-black placeholder:text-black border-none outline-none"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

             
              <button type="submit" 
              className="btn m-4 bg-[#FBB666] relative left-14 text-xl rounded-lg
               shadow-md cursor-pointer h-[2.4rem] w-[20rem] hover:scale-75">
                Register
              </button>
              <p onClick={handleClick} className="forgot-password text-right m-4 text-[#8083FF] cursor-pointer">
                Already registered{" "}log in?
                
              </p>
              {flag && (
                <p color="primary" variant="danger"
                 className='h-[5rem] w-[20rem] text-center p-1 relative left-12 m-6 bg-[#FF6172] rounded-md' >
                  I got it you are in hurry! But every Field is important!
                </p>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
        </div>
  )
}

export default Reg