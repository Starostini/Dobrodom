import React from "react";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import adminStyle from "./Admin.module.css";
import { PETS } from "../utils/consts";
import AdminPets from "./AdminPets";
import AdminNav from "../components/AdminNav";
const AdminPanel = () => {
  const navigate = useNavigate();
  return (
    <div
      className="overflow"
      onClick={(e) => {
        e.stopPropagation();
        navigate("/");
      }}
    >
      <div
        className={adminStyle.container}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={adminStyle.title_container}>
          <h3>Панель администратора</h3>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            exit
          </a>
        </div>
        <AdminNav />
        <div>
          <Routes>
            <Route path="admin/configpets" element={<AdminPets />} />
            {/* <Route path="admin/configgrad" element={<AdminGraduates />} />
            <Route path="admin/configgrad" element={<AdminGraduates />} />
            <Route path="admin/configgrad" element={<AdminGraduates />} />
            <Route path="admin/configgrad" element={<AdminGraduates />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
