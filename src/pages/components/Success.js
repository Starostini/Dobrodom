import React from "react";
import { useNavigate } from "react-router-dom";
import registration from "../Registration.module.css";
const Success = ({ message, titlemsg }) => {
  const navigate = useNavigate();
  return (
    <div
      className="overflow"
      onClick={(e) => {
        e.stopPropagation();
        navigate("/");
      }}
    >
      <div className="success-msg">
        <h1>{titlemsg}</h1>
        <div className={registration.div}>{message}</div>
      </div>
    </div>
  );
};

export default Success;
