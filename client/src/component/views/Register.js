import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Register = ({history}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(()=>{
    if(localStorage.getItem("authToken")) history.push("/");
  },[history]);

  const registerHandler = (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json"
      }
    }

    if(password !== confirmPassword){
      setPassword("");
      setConfirmPassword("");
      setTimeout(()=>{
        setError("")
      }, 5000);
      return setError("Passwords do not match.");
    }

    try{
      const { data } = await axios.post("/auth/register", { username, email, password }, config);

      localStorage.setItem("authToken", data.token);

      history.push("/");
    }catch(error){
      setError(error.response.data.error);
      setTimeout(()=>{
        setError("");
      }, 5000);
    }
  }

  return (
   <div>
    <form onSubmit={registerHandler}>
      <h3>Register</h3>
      {error && <span>{error}</span>}
      <div>
        <label htmlFor="name">
          Username:
        </label>
        <input type="text" required id="name" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)} tabIndex={1}/>
      </div>

      <div>
        <label htmlFor="email">
          Email:
        </label>
        <input type="text" required id="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} tabIndex={2}/>
      </div>

      <div>
        <label htmlFor="password">
          Password:
        </label>
        <input type="text" required id="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} tabIndex={3}/>
      </div>

      <div>
        <label htmlFor="confirmPassword">
          Confirm Password:
        </label>
        <input type="text" required id="confirmPassword" placeholder="Confirm password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} tabIndex={4}/>
      </div>
      <button type="submit" tabIndex={5}>
        Register
      </button>
      <span>Already have an account? <Link to="/login" tabIndex={6}>Login</Link></span>
    </form>
   </div>
  );
}

export default Register;