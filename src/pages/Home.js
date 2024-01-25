import React from "react";
import vladik_before from "../img/vladik/after1.jpeg";
import tarelka from "../img/charity/tarelka.png";
import food from "../img/charity/food.png";
import projectTitle from "../img/projects/project-title.png";
import dog1 from "../img/graduates/dog1.jpg";
import dog2 from "../img/graduates/dog2.jpg";
import dog3 from "../img/graduates/dog3.webp";
import dog4 from "../img/graduates/dog4.webp";
import title_photo from "../img/about/title_photo.jpeg";

import info from "../img/icon/info.png";
const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home-pets">
          <div className="home-pets__titles">
            <h2 className="home-pets__title">Подопечные</h2>
            <p className="home-pets__text">
              Если вам понравился кто-то из подопечных, но вы не готовы взять
              его домой. Вы можете стать его опекуном.{" "}
              <a href="#" className="link-in-text">
                Что такое опекун?
              </a>
            </p>
          </div>
          <div className="home-pets__inner">
            <div className="home-pets__content">
              <div>
                <img src={vladik_before} className="home-pets__content-img" />
              </div>
              <div className="home-pets__content-info">
                <div className="look-for-home">Ищу дом!</div>
                <div className="pet-data">
                  <div className="pet-data__name">ВЛАДИК</div>
                  <div className="pet-data__age">(4 года)</div>
                </div>
                <p className="pet-data__story">
                  Однажды приехав к своим друзьям на кормёжку, мы увидели, что у
                  одного песика беда с лапой...
                </p>
                <div className="guardian-info">
                  <a href="#" className="guardian-info__link">
                    <p className="guardian-info__link-text">Стать опекуном!</p>
                    <img src={info} className="guardian-info__link-img" />
                  </a>
                </div>
              </div>
            </div>
            <div className="home-pets__content">
              <div>
                <img src={vladik_before} className="home-pets__content-img" />
              </div>
              <div className="home-pets__content-info">
                <div className="look-for-home">Ищу дом!</div>
                <div className="pet-data">
                  <div className="pet-data__name">ВЛАДИК</div>
                  <div className="pet-data__age">(4 года)</div>
                </div>
                <p className="pet-data__story">
                  Однажды приехав к своим друзьям на кормёжку, мы увидели, что у
                  одного песика беда с лапой...
                </p>
                <div className="guardian-info">
                  <a href="#" className="guardian-info__link">
                    <p className="guardian-info__link-text">Стать опекуном!</p>
                    <img src={info} className="guardian-info__link-img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="home-pets__carousel">
            <div className="home-pets__carousel-content">
              <div className="home-pets__carousel-img">
                <img src={vladik_before} alt="Vladik" />
                <div className="home-pets__carousel-text">ВЛАДИК</div>
                <div className="home-pets__carousel-lfh">Ищу дом!</div>
              </div>{" "}
              <div className="home-pets__carousel-img">
                <img src={vladik_before} alt="Vladik" />
                <div className="home-pets__carousel-text">ВЛАДИК</div>
                <div className="home-pets__carousel-lfh">Ищу дом!</div>
              </div>
              <div className="home-pets__carousel-img">
                <img src={vladik_before} alt="Vladik" />
                <div className="home-pets__carousel-text">ВЛАДИК</div>
                <div className="home-pets__carousel-lfh">Ищу дом!</div>
              </div>
              <div className="home-pets__carousel-img">
                <img src={vladik_before} alt="Vladik" />
                <div className="home-pets__carousel-text">ВЛАДИК</div>
                <div className="home-pets__carousel-lfh">Ищу дом!</div>
              </div>
              <div className="home-pets__carousel-img">
                <img src={vladik_before} alt="Vladik" />
                <div className="home-pets__carousel-text">ВЛАДИК</div>
                <div className="home-pets__carousel-lfh">Ищу дом!</div>
              </div>
              <div className="home-pets__carousel-img">
                <img src={vladik_before} alt="Vladik" />
                <div className="home-pets__carousel-text">ВЛАДИК</div>
                <div className="home-pets__carousel-lfh">Ищу дом!</div>
              </div>
            </div>
            <div className="home-pets__carousel-nav">
              <div className="arrow__inner">
                <a href="#" className="arrow-left"></a>
                <a href="#" className="arrow-right"></a>
              </div>
              <a href="#" className="home-pets__carousel-lookall">
                СМОТРЕТЬ ВСЕ
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="home">
        <div className="home-charity">
          <div className="home-charity__titles">
            <h2 className="home-charity__title">Благотворительность</h2>
            <p className="home-charity__text">
              Это не способ получить ваши деньги, а способ помочь нуждающимся
              животным, которым это помощь необходима. <br /> <br />
              Если вы хотите помочь, но не знаете как это сделать - мы поможем
              разобраться! <br />
              <br />
              Один вариантов например совершить покупку вещей первой
              необходимости, и отправить нам, или оформить заказ в интернет
              магазинах, подробности вы можете узнать кликнув на один из
              продуктов.
            </p>
          </div>
          <div className="home-charity__inner">
            <div className="home-charity__content">
              <div className="home-charity__content-text">Миска</div>
              <div>
                <img src={tarelka} className="home-charity__content-img" />
              </div>
            </div>
            <div className="home-charity__content">
              <div className="home-charity__content-title">
                <p className="home-charity__content-text">Корм</p>
              </div>
              <div>
                <img src={food} className="home-charity__content-img" />
              </div>
            </div>
            <div className="home-charity__content">
              <div className="home-charity__content-title">
                <p className="home-charity__content-text">Миска</p>
              </div>
              <div>
                <img src={tarelka} className="home-charity__content-img" />
              </div>
            </div>
          </div>
          <div className="home-charity__carousel">
            <div className="home-charity__carousel-nav">
              <div className="arrow__inner">
                <a href="#" className="arrow-left"></a>
                <a href="#" className="arrow-right"></a>
              </div>
              <a href="#" className="home-charity__carousel-lookall">
                СМОТРЕТЬ ВСЕ
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="home">
        <div className="home-projects">
          <div className="home-projects__titles">
            <h2 className="home-projects__title">ПРОЕКТЫ</h2>
            <p className="home-projects__text">
              В нашей стране сложилось так, что слово "приют" в основном
              навеевает грусть, обреченнность, безнадегу и так далее. Сотни
              лающих собак, которые сквозь вольеры тянут лапы к людям,
              заглядывают в глаза, ждут ласкового слова. Наша цель - создать
              такое место, в котором каждый питомец не останется незамеченным, и
              у людей будет желание возвращаться снова
            </p>
          </div>
          <div className="home-projects__inner">
            <div className="home-projects__content">
              <img src={projectTitle} className="home-projects__content-img" />
            </div>
          </div>
          <div className="home-projects__carousel">
            <div className="home-projects__carousel-nav">
              <div className="arrow__inner">
                <a href="#" className="arrow-left"></a>
                <a href="#" className="arrow-right"></a>
              </div>
              <a href="#" className="home-projects__carousel-lookall">
                СМОТРЕТЬ ВСЕ
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="home">
        <div className="home-graduates">
          <div className="home-graduates__titles">
            <h2 className="home-graduates__title">Выпускники</h2>
            <p className="home-graduates__text">
              Самый лучший показатель нашей деятельности, это животные которые
              обрели дом и родного человека.
            </p>
          </div>
          <div className="home-graduates__inner">
            <div className="home-graduates__content">
              <div className="home-graduates__content-title">
                История Макса и Кати
              </div>
              <div className="home-graduates__content-photos">
                <div className="home-graduates__content-photo">
                  <img src={dog1} className="home-graduates__content-img" />
                </div>
                <div className="home-graduates__content-photo">
                  <img src={dog2} className="home-graduates__content-img" />
                </div>
              </div>
            </div>
            <div className="home-graduates__content">
              <div className="home-graduates__content-title">
                История Макса и Кати
              </div>
              <div className="home-graduates__content-photos">
                <div className="home-graduates__content-photo">
                  <img src={dog3} className="home-graduates__content-img" />
                </div>
                <div className="home-graduates__content-photo">
                  <img src={dog4} className="home-graduates__content-img" />
                </div>
              </div>
            </div>
          </div>
          <div className="home-graduates__carousel">
            <div className="home-graduates__carousel-nav">
              <div className="arrow__inner">
                <a href="#" className="arrow-left"></a>
                <a href="#" className="arrow-right"></a>
              </div>
              <a href="#" className="home-graduates__carousel-lookall">
                СМОТРЕТЬ ВСЕ
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="home">
        <div className="home-advice">
          <div className="home-advice__titles">
            <h2 className="home-advice__title">Полезные советы</h2>
            <p className="home-advice__text">
              Короткие советы по уходу и содержанию питомцев
            </p>
          </div>
          <div className="home-advice__inner">
            <div className="home-advice__content">
              <div className="home-advice__content-title">Полезный совет 1</div>
              <div className="home-advice__content-text">
                Здесь должен быть текст полезного совета
              </div>
              <div className="home-advice__content-comments">
                Комментарии: 4
              </div>
            </div>
            <div className="home-advice__content">
              <div className="home-advice__content-title">Полезный совет 1</div>
              <div className="home-advice__content-text">
                Здесь должен быть текст полезного совета
              </div>
              <div className="home-advice__content-comments">
                Комментарии: 4
              </div>
            </div>
            <div className="home-advice__content">
              <div className="home-advice__content-title">Полезный совет 1</div>
              <div className="home-advice__content-text">
                Здесь должен быть текст полезного совета
              </div>
              <div className="home-advice__content-comments">
                Комментарии: 4
              </div>
            </div>
            <div className="home-advice__content">
              <div className="home-advice__content-title">Полезный совет 1</div>
              <div className="home-advice__content-text">
                Здесь должен быть текст полезного совета
              </div>
              <div className="home-advice__content-comments">
                Комментарии: 4
              </div>
            </div>
          </div>
          <div className="home-advice__carousel">
            <div className="home-advice__carousel-nav">
              <div className="arrow__inner">
                <a href="#" className="arrow-left"></a>
                <a href="#" className="arrow-right"></a>
              </div>
              <a href="#" className="home-advice__carousel-lookall">
                СМОТРЕТЬ ВСЕ
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="home">
        <div className="home-about">
          <div className="home-about__titles">
            <h2 className="home-about__title">О нас</h2>
            <p className="home-about__text">
              Привет! Нас зовут Катя и Сергей, и мы занимаемся Добродомом уже
              более 5 лет!
            </p>
          </div>
          <div className="home-about__inner">
            <div className="home-about__content">
              <div className="home-about__content-title">
                <img src={title_photo} className="home-about__content-img" />
              </div>
            </div>
          </div>
          {/* <div className="home-about__carousel">
            <div className="home-about__carousel-nav">
              <div className="arrow__inner">
                <a href="#" className="arrow-left"></a>
                <a href="#" className="arrow-right"></a>
              </div>
              <a href="#" className="home-about__carousel-lookall">
                СМОТРЕТЬ ВСЕ
              </a>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Home;
