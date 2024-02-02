import React from "react";
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../utils/consts";
import Modal from "../ui/Modal";

const Auth = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [errMsgPop, setErrMsgPop] = useState([]);
  const [errorPersist, setErrorPersist] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };
  return loading ? (
    <Modal active={loading} />
  ) : (
    <div
      className="overflow"
      onClick={(e) => {
        e.stopPropagation();
        navigate(-1);
      }}
    >
      <div
        className="login-page"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1 className="login-title">Вход</h1>
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="username">Пользователь:</label>
          <input
            type="email"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <button className="login-btn">Войти</button>
        </form>
        <div className="login-registration">
          <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Auth;
