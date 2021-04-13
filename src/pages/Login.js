import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
  };

  return (
    <div className="text-center">
      <Navbar />
      <h3 className="p-3">Welcome</h3>
      <div className="container-sm rounded border p-3 shadow">
        <div>Masukan Username</div>
        <input
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <div>Masukan Password</div>
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <br />
        <br />

        <input onClick={handleSubmit} type="submit"></input>
      </div>
    </div>
  );
};

export default Login;
