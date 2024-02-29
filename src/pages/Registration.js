import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./registration.css";
import Modal from "../ui/Modal";
import registration from "./Registration.module.css";
import validIconPng from "./icon/valid.png";
import invalidIconPng from "./icon/invalid.png";
import Success from "./components/Success";
// Validate user
const USER_REGEX = /^[А-Я][а-яА-Я0]{2,23}$/;
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@./#$%&^*()-]).{8,24}$/;

const EMAIL_REGEX = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/;

async function regUser(credentials) {
  return fetch(`http://89.111.152.183/api/create_user.php`, {
    method: "POST",
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
const Registration = () => {
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [firstname, setFirstname] = useState("");
  const [validName, setValidName] = useState(false);
  const [firstFocus, setFirstFocus] = useState(false);

  const [lastname, setLastname] = useState("");
  const [validSurname, setValidSurname] = useState(false);
  const [secondFocus, setSecondFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [sucess, setSucess] = useState(false);
  const [msg, setMsg] = useState("");
  const [titleMsg, setTitleMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    const result = USER_REGEX.test(firstname);
    setValidName(result);
  }, [firstname]);

  useEffect(() => {
    const result = USER_REGEX.test(lastname);
    setValidSurname(result);
  }, [lastname]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = USER_REGEX.test(firstname);
    const v4 = USER_REGEX.test(lastname);
    if (!v1 || !v2 || !v3 || !v4) {
      setErrMsg("Введены некоррентные данные");
      return;
    }
    setLoading(true);
    try {
      const response = await regUser({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: pwd,
      });
      console.log(response.status);
      if (response?.status === "200") {
        setLoading(false);
        setMsg(response.message);
        setTitleMsg("Успех!");
        setSucess(true);
        setEmail("");
        setPwd("");
        setFirstname("");
        setLastname("");
        setMatchPwd("");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else if (response.status === "400") {
        setMsg(response.message);
        setTitleMsg("Ошибка!");
        setSucess(true);
        //alert(`${response.message}`);
        // setErrMsg("Пароль не был изменен, проверьте введенные данные");
      } else if (response.status === "Error 404") {
        setMsg(response.message);
        setTitleMsg("Ошибка!");
        // setErrMsg("404 Пользователь не найден");
      } else if (response.status === "Error 415") {
        setMsg(response.message);
        setTitleMsg("Ошибка!");
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

  return loading ? (
    <Modal active={loading} />
  ) : (
    <>
      {sucess ? (
        <Success message={msg} titlemsg={titleMsg} />
      ) : (
        // <div
        //   className="overflow"
        //   onClick={(e) => {
        //     e.stopPropagation();
        //     navigate("/");
        //   }}
        // >
        //   <div className="success-msg">
        //     <h1>Успех!</h1>
        //     <div className={registration.div}>
        //       Теперь вы можете авторизоваться на портале!
        //     </div>
        //   </div>
        // </div>
        <div
          className="overflow"
          onClick={(e) => {
            e.stopPropagation();
            navigate("/");
          }}
        >
          <div
            className="registration-page"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <p
              ref={errRef}
              className={errMsg ? registration.errmsg : registration.offscreen}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="lastname" className={registration.labels}>
                Фамилия:
                <span
                  className={
                    validSurname ? registration.valid : registration.hide
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
                    validSurname || !lastname
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
                id="lastname"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setLastname(e.target.value)}
                required
                aria-invalid={validSurname ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setSecondFocus(true)}
                onBlur={() => setSecondFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  secondFocus && lastname && !validSurname
                    ? registration.instruction
                    : registration.offscreen
                }
              >
                Errorrrr
                {/* Must begin with a letter.<br /> */}
                {/* Letters,numbers,undercors,hyphens allower. */}
              </p>
              <label htmlFor="firstname" className={registration.labels}>
                Имя:
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
                    validName || !firstname
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
                id="firstname"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setFirstname(e.target.value)}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setFirstFocus(true)}
                onBlur={() => setFirstFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  firstFocus && firstname && !validName
                    ? registration.instruction
                    : registration.offscreen
                }
              >
                Errorrrr
                {/* Must begin with a letter.<br /> */}
                {/* Letters,numbers,undercors,hyphens allower. */}
              </p>
              <label htmlFor="email" className={registration.labels}>
                Почта:
                <span
                  className={
                    validEmail ? registration.valid : registration.hide
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
                    validEmail || !email
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
                type="email"
                id="email"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  emailFocus && email && !validEmail
                    ? registration.instruction
                    : registration.offscreen
                }
              >
                Введен невалидный адресс электронной почты
                {/* Must begin with a letter.<br /> */}
                {/* Letters,numbers,undercors,hyphens allower. */}
              </p>

              <label htmlFor="password" className={registration.labels}>
                Пароль:
                <span
                  className={validPwd ? registration.valid : registration.hide}
                >
                  <img
                    src={validIconPng}
                    className={registration.icon_validation}
                    alt="Valid"
                  />
                </span>
                <span
                  className={
                    validPwd || !email
                      ? registration.hide
                      : registration.invalid
                  }
                >
                  <img
                    src={invalidIconPng}
                    className={registration.icon_validation}
                    alt="Invalid"
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
                className="registration-btn"
                disabled={
                  !validEmail || !validPwd || !validMatch ? true : false
                }
              >
                Зарегистрироваться
              </button>
            </form>
            <div className={registration.div}>
              <Link className="login-signin" to="/login">
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
