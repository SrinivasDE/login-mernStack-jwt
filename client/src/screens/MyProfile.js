import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { store } from "../App";
import './register.css'

const MyProfile = () => {
  const [token, setToken] = useContext(store);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5002/myprofile", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <div className="myprofile">{data && <center>Welcome {data.username} <br /><button className="btn" onClick={() => setToken(null)}>Logout</button></center>}</div>;
};

export default MyProfile;
