import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Register = () => {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullname, setFullName] = useState("");

  const handleSubmit = () => {
    const data = {
      email: email,
      address: address,
      username: username,
      phoneNumber: phoneNumber,
      fullname: fullname,
    };
    console.log(data);
  };
  return (
    <div>
      <Navbar />
      <div className="text-center">
        <h3 className="p-3">Register</h3>
        <div className="container-sm rounded border p-3 shadow">
          <div>Full Name</div>
          <input
            placeholder="Fullname"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          ></input>
          <div>Username</div>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <div>Email</div>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <div>Phone Number</div>
          <input
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></input>
          <div>Address</div>
          <input
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>

          <br />
          <br />

          <input type="submit" value="Register" onClick={handleSubmit}></input>
        </div>
      </div>
    </div>
  );
};

export default Register;
