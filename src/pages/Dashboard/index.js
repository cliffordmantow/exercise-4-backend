import React, { useEffect, useState } from "react";
import Navbar from "../../components/molecules/Navbar";
import Card from "../../components/molecules/Card";
import Axios from "axios";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3004/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="text-center mt-3">
        <div className="container">
          <h3>Dashboard</h3>
          <hr />
          <div className="row align-items-start justify-content-center">
            {users.map((user) => (
              <Card
                first_name={user.first_name}
                email={user.email}
                last_name={user.last_name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
