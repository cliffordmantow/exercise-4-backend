import React from "react";

const index = ({ first_name, last_name, email }) => {
  return (
    <div className="card m-2 " style={{ width: "17rem" }}>
      <div className="card-body">
        <p className="card-text">
          <b>Nama:</b> {`${first_name} ${last_name}`}
        </p>
        <p className="card-text">
          <b>Email: </b>
          {email}
        </p>
      </div>
    </div>
  );
};

export default index;
