import React from "react";
import { useEffect, useState, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../utils/consts";
import useAuth from "../hooks/useAuth";
import Modal from "../ui/Modal";
import Success from "./components/Success";
import { authUser } from "../services/Request.services";
const Auth = () => {
  const userRef = useRef();
  const errRef = useRef();
  const { auth, setAuth } = useAuth();
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [errMsgPop, setErrMsgPop] = useState([]);
  const [errorPersist, setErrorPersist] = useState(false);
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");
  const [titleMsg, setTitleMsg] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [login, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await authUser({
        email: login,
        password: pwd,
      });

      if (response?.status === "200") {
        const { firstname, lastname, email, jwt, roles } = response.data;
        const isAuth = true;
        setLoading(false);
        setMsg(response.message);
        setTitleMsg("Успех!");
        setSuccess(true);
        setAuth({
          firstname,
          lastname,
          email,
          jwt,
          isAuth,
          roles,
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else if (response?.status === "401") {
        setMsg(response.message);
        setTitleMsg("Ошибка!");
        setSuccess(true);
      }
    } catch (error) {
      setMsg(error);
      setTitleMsg("Ошибка!");
      setSuccess(true);
    }
  };
  return loading ? (
    <Modal active={loading} />
  ) : success ? (
    <Success message={msg} titlemsg={titleMsg} />
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
          <label htmlFor="username">Почта:</label>
          <input
            type="email"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setLogin(e.target.value)}
            value={login}
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
