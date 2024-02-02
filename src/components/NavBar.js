import React, { useContext } from "react";
import { Context } from "..";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import {
  ABOUT_ROUTE,
  ADMIN_ROUTE,
  CHARITY_ROUTE,
  CONTACTS_ROUTE,
  GRADUATES_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PETS_ROUTE,
  PROJECTS_ROUTE,
} from "../utils/consts";

import HeaderTitle from "./HeaderTitle";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <nav className="navigation">
            <NavLink className={"nav_btn"} to={HOME_ROUTE}>
              Главная
            </NavLink>
            <NavLink className={"nav_btn"} to={PETS_ROUTE}>
              Подопечные
            </NavLink>
            <NavLink className={"nav_btn"} to={GRADUATES_ROUTE}>
              Выпускники Добродома
            </NavLink>
            <NavLink className={"nav_btn"} to={PROJECTS_ROUTE}>
              Проекты
            </NavLink>
            <NavLink className={"nav_btn"} to={CHARITY_ROUTE}>
              Благотворительность
            </NavLink>
            <NavLink className={"nav_btn"} to={CONTACTS_ROUTE}>
              Контакты
            </NavLink>
            <NavLink className={"nav_btn"} to={ABOUT_ROUTE}>
              О нас
            </NavLink>

            {user.isAuth ? (
              <>
                <NavLink className={"nav_btn"} to={ADMIN_ROUTE}>
                  Admin
                </NavLink>
                <NavLink
                  className={"nav_btn"}
                  onClick={() => user.setIsAuth(false)}
                >
                  Выход
                </NavLink>
              </>
            ) : (
              <NavLink className={"nav_btn"} to={LOGIN_ROUTE}>
                Войти
              </NavLink>
            )}
          </nav>
        </div>
        <HeaderTitle />
        {/* <div className="header-section">
          <div className="header-section__content">
            <div className="header-section__titles">
              <h1 className="header-section__title">Добродом</h1>
              <p className="header-section__subtitle">
                Рады всех приветствовать!
              </p>
              <p className="header-section--text">
                Давайте знакомиться. Мы автономная некоммерческая организация
                многофункциональный центр помощи бездомным животным «ДоброДом
                Оренбург.
              </p>
            </div>
            <div className="header-section__logo">
              <img src={logo} className="logo" />
            </div>
          </div>
        </div> */}
      </header>
    </>
  );
});

export default NavBar;
