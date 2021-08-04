import { useState, useEffect } from "react";
import axios from "axios";
import {Container, Row, Col} from "react-bootstrap"

import MemoryChart from "../MemoryChart";
import Uptime from "../Uptime";
import NetworkInterfaces from "../NetworkInterfaces";
import SystemLoad from "../SystemLoad";

const Dashboard = ({ history }) => {
  const [error, setError] = useState("");
  const [os, setOs] = useState("");

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
        setOs(data.data.os);
      } catch (error) {
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
    os &&
    <Container fluid height={"100vh"}>

      <div className="row-card p-0 mx-1 my-4">
        <p className="py-3 m-0">You got private access to your system informations.</p>
        <p className="py-3 m-0"> Hostname: {os.hostname}</p>
      </div>
        <div className="row-card mx-1 py-3">
        <Row >
          <Col>Type: {os.type}</Col>

          <Col>Architecture: {os.architecture}</Col>

          <Col>Release: {os.release}</Col>
        </Row>
        </div>
      <Row className="justify-content-between mx-2">
        <Col md={{ span: 4}} className="card chart-height">
          <MemoryChart freeMem={os.freeMem} totalMem={os.totalMem} />
        </Col>
        <Col md={{ span: 4}}  className="card">
          <Uptime uptime={os.uptime}/>
        </Col>
        <Col md={{ span: 4}} className="card">
          <h5>
            Cpus {os.cpus[0].model}
          </h5>
          <div className="card-text">
            <p>{os?.cpus.length} cpus </p>
            <p className="small-text">{os.cpus[0].model} - {os.cpus[0].speed}MHz</p>
          </div>
        </Col>
      </Row>
      <Row className="table-card mx-2 my-3 mb-5">
        <h5>
            Network Interfaces
        </h5>
        <NetworkInterfaces ni={os.networkInterfaces}/>
      </Row>

      <Row className="row-card m-2">
        <SystemLoad loadAvg={os.loadAvg} />
      </Row>
      <div className="me-5"></div>
      <button className="btn-fixed m-5" onClick={logoutHandler}>Logout</button>
    </Container>
  );
};

export default Dashboard;
