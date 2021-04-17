import React, { useState } from "react";
import Navbar from "../../components/molecules/Navbar";
import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";
import axios from "axios";

const AddUser = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    const data = {
      email: email,
      first_name: firstName,
      last_name: lastName,
    };

    axios.post("http://localhost:3004/users", data);
    alert("Data submited");
  };

  return (
    <div>
      <Navbar />
      <div className="custom-cont container-sm rounded border p-3 shadow mt-5 mb-5">
        <h3 className="mt-2 text-center">Add User</h3>

        <Input
          title="First Name"
          value={firstName}
          placeholder="Masukan first name"
          onChange={(e) => setFirstName(e.target.value)}
        />

        <Input
          title="Last Name"
          value={lastName}
          placeholder="Masukan last name"
          onChange={(e) => setLastName(e.target.value)}
        />

        <Input
          title="Email"
          placeholder="Masukan email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <div className="text-end">
          <Button onClick={handleSubmit} buttonText={"Save"} />
        </div>
      </div>
    </div>
  );
};

export default AddUser;
