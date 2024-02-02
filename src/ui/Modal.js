import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./modal.css";
import Cat_gif from "./icon/cat-loading.gif";
const Modal = ({ active }) => {
  const [freeze, setFreeze] = useState(false);

  setTimeout(() => {
    setFreeze(true);
  }, 10000);

  return (
    <div className={active ? "modal active" : "modal"}>
      <div className="modal__content">
        <img src={Cat_gif} alt="Cat" className="cat-in-work" />
        <div className={freeze ? "show-message" : "hidden"}>
          Зависло?
          <Link className="button" to="/">
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
