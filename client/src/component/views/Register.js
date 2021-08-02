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

  const registerHandler = async (e) => {
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
   <div className="container">
    <form className="form" onSubmit={registerHandler}>
      <h2 className="form-title">Register</h2>
      {error && <span className="error">{error}</span>}
      <div className="input-group">
          <label className="input-underlined">
            <input
              required
              type="text"
              id="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              tabIndex={1}
            />
            <span className="input-label">Username</span>
          </label>
        </div>

      <div className="input-group">
          <label className="input-underlined">
            <input
              required
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              tabIndex={2}
            />
            <span className="input-label">Email</span>
          </label>
        </div>

        <div className="input-group">
          <label className="input-underlined">
            <input
              required
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              tabIndex={3}
            />
            <span className="input-label">Password</span>
          </label>
        </div>

        <div className="input-group">
          <label className="input-underlined">
            <input
              required
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              tabIndex={4}
            />
            <span className="input-label">Confirm Password</span>
          </label>
        </div>
     
      <button className="btn" type="submit" tabIndex={5}>
        Register
      </button>
      <span className="form-text">Already have an account? <Link className="form-link" to="/login" tabIndex={6}>Login</Link></span>
    </form>
   </div>
  );
}

export default Register;