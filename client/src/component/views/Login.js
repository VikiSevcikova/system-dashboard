import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) history.push("/");
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/auth/login",
        { email, password },
        config
      );
      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="container">
      <form onSubmit={loginHandler} className="form">
        <h2 className="form-title">Login</h2>
        {error && <span>{error}</span>}
        <div class="input-group">
          <label class="input-underlined">
            <input
              required
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              tabIndex={1}
            />
            <span class="input-label">Email</span>
          </label>
        </div>
       
        <div class="input-group">
          <label class="input-underlined">
            <input
              required
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              tabIndex={2}
            />
            <span class="input-label">Password</span>
          </label>
        </div>

        <button className="btn" type="submit" tabIndex={3}>
          Login
        </button>
        <span className="form-text">
          Don't have account yet?
          <Link className="form-link" to="/register" tabIndex={4}>
            Register
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
