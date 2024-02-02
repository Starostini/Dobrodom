import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./registration.css";
import registration from "./Registration.module.css";
import validIconPng from "./icon/valid.png";
import invalidIconPng from "./icon/invalid.png";
// Validate user
const USER_REGEX = /^[a-zA-Z][a-zA-Z0]{3,23}$/;
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@./#$%&^*()-]).{8,24}$/;

async function changePass(credentials) {
  //   return fetch(`http://172.16.0.51${CHANGEPWD_URL}`, {
  //     method: "POST",
  //     body: JSON.stringify(credentials),
  //   }).then((data) => data.json());
}
const Registration = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [oldpwd, setOldPwd] = useState("");

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [sucess, setSucess] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid input");
      return;
    }
    try {
      const response = await changePass({
        login: user,
        oldPass: btoa(oldpwd),
        newPass: btoa(pwd),
      });
      if (response.status === "Success") {
        setSucess(true);
        setUser("");
        setOldPwd("");
        setPwd("");
      } else if (response.status === "Error 403") {
        // setErrMsg("Пароль не был изменен, проверьте введенные данные");
      } else if (response.status === "Error 404") {
        // setErrMsg("404 Пользователь не найден");
      } else if (response.status === "Error 415") {
        // setErrMsg("415 Логин или пароль указаны неверно");
      }

      // need to clear fields
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 415) {
        setErrMsg("415 Provide valid payload");
      } else if (err.response?.status === 404) {
        setErrMsg("404 User not found");
      }
    }
  };

  return (
    <>
      {sucess ? (
        <div className="success-msg">
          <h1>Успех!</h1>
          <div className={registration.div}>
            <Link className={registration.btn} to="/login">
              Sign In
            </Link>
          </div>
        </div>
      ) : (
        <div
          className="overflow"
          onClick={(e) => {
            e.stopPropagation();
            navigate(-1);
          }}
        >
          <div className={registration.changepass}>
            <p
              ref={errRef}
              className={errMsg ? registration.errmsg : registration.offscreen}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Сменить пароль</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username" className={registration.labels}>
                Пользователь:
                <span
                  className={validName ? registration.valid : registration.hide}
                >
                  <img
                    src={validIconPng}
                    className={registration.icon_validation}
                    alt="Valid"
                  />
                </span>
                <span
                  className={
                    validName || !user
                      ? registration.hide
                      : registration.invalid
                  }
                >
                  <img
                    src={invalidIconPng}
                    className={registration.icon_validation}
                    alt="Inalid"
                  />
                </span>
              </label>

              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  userFocus && user && !validName
                    ? registration.instruction
                    : registration.offscreen
                }
              >
                Имя пользователя должно содержать от 4 до 24 знаков.
                {/* Must begin with a letter.<br /> */}
                {/* Letters,numbers,undercors,hyphens allower. */}
              </p>

              <label htmlFor="password" className={registration.labels}>
                Новый пароль:
                <span
                  className={validPwd ? registration.valid : registration.hide}
                >
                  <img
                    src={validIconPng}
                    className="icon-validation"
                    alt="Valid"
                  />
                </span>
                <span
                  className={
                    validPwd || !user ? registration.hide : registration.invalid
                  }
                >
                  <img
                    src={invalidIconPng}
                    className={registration.icon_validation}
                    alt="Inalid"
                  />
                </span>
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <p
                id="pwdnote"
                className={
                  pwdFocus && !validPwd
                    ? registration.instruction
                    : registration.offscreen
                }
              >
                Пароль должен содержать от 8 до 24 знаков. Должен включать
                заглавные, строчные буквы, цифры и символы.
                <br />
              </p>
              <label htmlFor="confirm_pwd" className={registration.labels}>
                Подтверждение пароля:
                <span
                  className={
                    validMatch && validPwd
                      ? registration.valid
                      : registration.hide
                  }
                >
                  <img
                    src={validIconPng}
                    className={registration.icon_validation}
                    alt="Valid"
                  />
                </span>
                <span
                  className={
                    validMatch || !matchPwd
                      ? registration.hide
                      : registration.invalid
                  }
                >
                  <img
                    src={invalidIconPng}
                    className={registration.icon_validation}
                    alt="Inalid"
                  />
                </span>
              </label>

              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p
                id="pwdnote"
                className={
                  matchFocus && !validMatch
                    ? registration.instruction
                    : registration.offscreen
                }
              >
                Пароли должны совпадать
                <br />
              </p>
              <button
                disabled={!validName || !validPwd || !validMatch ? true : false}
              >
                Сменить пароль
              </button>
            </form>
            <div className={registration.div}>
              <Link className={registration.btn} to="/login">
                Войти
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Registration;
