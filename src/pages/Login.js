import React, { useState } from "react";
import Navbar from "../components/molecules/Navbar";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";

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
    <div>
      <Navbar />
      <div className="container-sm rounded border p-3 shadow mt-5 mb-5">
        <h3 className="mt-2 text-center">Login</h3>
        <Input
          title="Username"
          placeholder="Masukan username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          title="Password"
          value={password}
          placeholder="Masukan password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button onClick={handleSubmit} buttonText={"Submit"} />
      </div>
    </div>
  );
};

export default Login;
