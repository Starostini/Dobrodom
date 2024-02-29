import React, { useEffect, useState } from "react";
import { getPetsList, sendNewPet } from "../services/Request.services";
import adminStyle from "./Admin.module.css";
import Modal from "../ui/Modal";
import plus from "../img/icon/plus.png";
import ok from "../img/icon/success.png";
import cancel from "../img/icon/error.png";
const AdminPets = () => {
  const [petList, setPetList] = useState({});
  const [loading, setLoading] = useState(true);
  const [addPetActive, setAddPatActive] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    async function getData() {
      try {
        const response = await getPetsList();
        if (response?.status === 200) {
          setLoading(false);
          setPetList(response.data);
          // debugger;
        }
      } catch (error) {
        setLoading(false);
        setMessage(error);
      }
    }
    getData();
  }, []);

  function addPet(e) {
    e.preventDefault();
    setAddPatActive(true);
  }
  const handleSendNewPet = async (e) => {
    e.preventDefault();
    const form = document.querySelector(".addPetForm");
    const formData = new FormData(form);
    try {
      const response = sendNewPet(formData);
      if (response.status === 200) {
        debugger;
      }
    } catch (error) {}
  };
  // debugger;
  return loading ? (
    <Modal active={loading} />
  ) : addPetActive ? (
    <>
      <div className={adminStyle.addPetContainer}>
        <h4 className={adminStyle.titleAddPet}>Добавить питомца</h4>
        <form
          encType="multipart/form-data"
          className="addPetForm"
          id="addPetForm"
          onSubmit={(e) => handleSendNewPet(e)}
        >
          <label htmlFor="pet_name">Имя:</label>
          <input name="pet_name" id="pet_name" type="text" />
          <label htmlFor="gender_select">Пол:</label>
          <select name="gender-select" id="gender-select">
            <option value="">--Выберите пол--</option>
            <option value="1">Мальчик</option>
            <option value="0">Девочка</option>
          </select>

          <label htmlFor="pet_age">Возвраст:</label>
          <input name="pet_age" id="pet_age" type="text" />
          <label htmlFor="status-select">Статус:</label>
          <select name="status-select" id="status-select">
            <option value="">--Выберите статус--</option>
            <option value="1">Да</option>
            <option value="0">Нет</option>
          </select>
          <label htmlFor="inhome-select">Дом найден?:</label>
          <select name="inhome-select" id="inhome-select">
            <option value="">--Выберите статус--</option>
            <option value="1">Дом найден!</option>
            <option value="0">Дом не найден</option>
          </select>
          <div className={adminStyle.addPetPhotoContaier}>
            <div>
              <label htmlFor="pet_photo_before">Фото до:</label>
              <input
                name="pet_photo_before"
                id="pet_photo_before"
                type="file"
              />
            </div>
            <div>
              <label htmlFor="pet_photo">Фото после:</label>
              <input name="pet_photo_after" id="pet_photo_after" type="file" />
            </div>
          </div>
          <label htmlFor="pet-story">История питомца:</label>
          <textarea name="pet-story" id="pet-story" />
          <div className={adminStyle.addPetBtnPanel}>
            <button
              className={adminStyle.addPetBtn}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setAddPatActive(false);
              }}
            >
              <img
                className={`${adminStyle.addPetImg} ${adminStyle.addPetImgNok}`}
                src={cancel}
              />
            </button>
            <button className={adminStyle.addPetBtn} type="submit">
              <img
                className={`${adminStyle.addPetImg} ${adminStyle.addPetImgOk}`}
                src={ok}
              />
            </button>
          </div>
        </form>
      </div>
    </>
  ) : (
    <>
      <div className={adminStyle.btnPanel}>
        <a href="#">
          <img
            className={adminStyle.plusImage}
            src={plus}
            onClick={(e) => {
              addPet(e);
            }}
          />
        </a>
      </div>
      <div className={adminStyle.petlist}>
        <table>
          <thead className="questionnaire__header-data">
            <tr>
              <th className="questionnaire__header-id">Имя:</th>
              <th className="questionnaire__header-name">Пол:</th>
              <th className="questionnaire__header-status">Возвраст:</th>
              <th className="questionnaire__header-status">Статус:</th>
              <th className="questionnaire__header-status">Дом найден?:</th>
            </tr>
          </thead>
          <tbody>
            {petList.map((pet) => {
              return (
                <tr key={pet.ID} className={adminStyle.currentpet}>
                  <td>{pet.NAME}</td>
                  <td>{pet.GENDER ? "Мальчик" : "Девочка"}</td>
                  <td>{pet.AGE}</td>
                  <td>{pet.STATUS}</td>
                  <td>{pet.INHOME ? "Нашел дом!" : "Не нашел дом!"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminPets;
