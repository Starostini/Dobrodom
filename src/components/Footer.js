import React from "react";
import email from "../img/icon/mail.png";
import telegram from "../img/icon/telegram.png";
import whatsap from "../img/icon/whatsap.png";
import insta from "../img/icon/inst.png";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer-footer">
          <div className="footer-footer__titles">
            <h2 className="footer-footer__title">Контакты</h2>
            <p className="footer-footer__text">
              На случай если тебя заинтересовал наш проект, наши подопечные, или
              ты просто хочешь познакомиться с нами поближе!
            </p>
          </div>
          <div className="footer-footer__inner">
            <div className="footer-footer__icons">
              <img src={email} className="footer-footer__icons-img" />
              <img src={telegram} className="footer-footer__icons-img" />
              <img src={whatsap} className="footer-footer__icons-img" />
              <img src={insta} className="footer-footer__icons-img" />
            </div>
          </div>
          {/* <div className="footer-footer__carousel">
      <div className="footer-footer__carousel-nav">
        <div className="arrow__inner">
          <a href="#" className="arrow-left"></a>
          <a href="#" className="arrow-right"></a>
        </div>
        <a href="#" className="footer-footer__carousel-lookall">
          СМОТРЕТЬ ВСЕ
        </a>
      </div>
    </div> */}
        </div>
      </section>
    </>
  );
};

export default Footer;
