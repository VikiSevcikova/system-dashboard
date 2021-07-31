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

  const loginHandler = (e) => {
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
    <div>
      <form onSubmit={loginHandler}>
        <h3>Login</h3>
        {error && <span>{error}</span>}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            required
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            tabIndex={1}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            required
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            tabIndex={2}
          />
        </div>

        <button type="submit" tabIndex={3}>
          Login
        </button>
        <span>
          Don't have account yet? <Link to="/register" tabIndex={4}>Register</Link >
        </span>
      </form>
    </div>
  );
};

export default Login;
