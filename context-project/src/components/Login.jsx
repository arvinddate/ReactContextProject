import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/userContext";
const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {setUser}=useContext(UserContext);
  const handleClick=(e)=>{
    e.preventDefault();
    setUser({userName,password});
    console.log()


  }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="enter UserName" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
      <input type="password" placeholder="enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleClick}>Submit</button>

    </div>
  );
};

export default Login;
