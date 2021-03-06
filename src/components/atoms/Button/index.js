import React from "react";

const index = ({ buttonText, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type="submit"
        className="btn btn-primary mt-2 mb-2"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default index;
