import React from "react";
import logo from "../img/logo.png";
import NavBar from "./NavBar";
const HeaderTitle = () => {
  return (
    <>
      <div className="header-section">
        <div className="header-section__content">
          <div className="header-section__titles">
            <h1 className="header-section__title">Добродом</h1>
            <p className="header-section__subtitle">
              Рады всех приветствовать!
            </p>
            <p className="header-section__text">
              Давайте знакомиться. Мы автономная некоммерческая организация
              многофункциональный центр помощи бездомным животным «ДоброДом
              Оренбург.
            </p>
          </div>
          <div className="header-section__logo">
            <img src={logo} className="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTitle;
