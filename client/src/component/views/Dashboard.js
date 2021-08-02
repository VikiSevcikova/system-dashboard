import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = ({ history }) => {
  const [error, setError] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
    }
    const fetchData = async () => {
      const config = {
        //headers not header!!
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/dashboard", config);
        console.log(data);
        setData(data.data);
      } catch (error) {
        console.log('error ');
        localStorage.removeItem("authToken");
        setError("You are not logged. Please log in.");
      }
    };

    fetchData();
  }, [history]);

  const logoutHandler = () => {
      localStorage.removeItem("authToken");
      history.push("/login");
  }
  return error ? (
    <span>{error}</span>
  ) : (
    <>
      <div style={{ background: "green", color: "white" }}>{data.message} - {data.platform}</div>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};

export default Dashboard;
