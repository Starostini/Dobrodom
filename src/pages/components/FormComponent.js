import React, { useEffect, useState } from "react";
import { sendNewPet } from "../../services/Request.services";
import adminStyle from "../Admin.module.css";
import ok from "../../img/icon/success.png";
import cancel from "../../img/icon/error.png";
import Modal from "../../ui/Modal";
import Success from "./Success";
import ImageInput from "./ImageInput";
const FormComponent = ({ data, addPetActive, setAddPatActive }) => {
  const URLS = "http://89.111.152.183";
  const [message, setMessage] = useState("");
  const [titleMessage, setTitleMessage] = useState("");
  const [enableMessage, setEnableMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [files1, setFiles1] = useState([]);
  const [files2, setFiles2] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [inHome, setInHome] = useState("");
  const [photos, setPhotos] = useState([]);
  const [story, setStory] = useState("");
  debugger;
  const urls1 = files1.map((file) => URL.createObjectURL(file));
  const urls2 = files2.map((file) => URL.createObjectURL(file));

  useEffect(() => {
    setPhotos([]);
    if (data[0] !== undefined) {
      setName(data[0].NAME);
      setAge(data[0].AGE);
      setGender(data[0].GENDER);
      setStatus(data[0].STATUS);
      setInHome(data[0].INHOME);
      const pho = JSON.parse(data[0].IMG);
      setPhotos([...pho]);
      setFiles1([`${URLS}` + `${photos[0]}`]);
      setFiles2([`${URLS}` + `${photos[1]}`]);
      setStory(data[0].STORY);
      debugger;
    }
  }, [data]);
  const handleSendNewPet = async (e) => {
    e.preventDefault();
    const form = document.querySelector(".addPetForm");
    const formData = new FormData(form);
    try {
      const response = await sendNewPet(formData);
      setLoading(true);
      if (response.status === 200) {
        setLoading(false);
        setMessage(response.message);
        setTitleMessage(response.status);
        setEnableMessage(true);
        debugger;
      } else {
        setLoading(false);
        setMessage(response.message);
        setTitleMessage(response.status);
        setEnableMessage(true);
      }
    } catch (error) {}
  };
  console.log(photos);
  return loading ? (
    <Modal active={loading} />
  ) : enableMessage ? (
    <>
      <Success message={message} titlemsg={titleMessage} />
    </>
  ) : (
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
          <input
            key="pet_name"
            name="pet_name"
            id="pet_name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="gender_select">Пол:</label>
          <select
            name="gender-select"
            id="gender-select"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="">--Выберите пол--</option>
            <option value="1">Мальчик</option>
            <option value="0">Девочка</option>
          </select>

          <label htmlFor="pet_age">Возвраст:</label>
          <input
            name="pet_age"
            id="pet_age"
            type="text"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <label htmlFor="status-select">Статус:</label>
          <select
            name="status-select"
            id="status-select"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option value="">--Выберите статус--</option>
            <option value="1">Да</option>
            <option value="0">Нет</option>
          </select>
          <label htmlFor="inhome-select">Дом найден?:</label>
          <select
            name="inhome-select"
            id="inhome-select"
            value={inHome}
            onChange={(e) => {
              setInHome(e.target.value);
            }}
          >
            <option value="">--Выберите статус--</option>
            <option value="1">Дом найден!</option>
            <option value="0">Дом не найден</option>
          </select>
          <div className={adminStyle.addPetPhotoContaier}>
            <div>
              <label htmlFor="pet_photo_before">Фото до:</label>
              <ImageInput
                name="pet_photo_before"
                id="pet_photo_before"
                type="file"
                onFilesChange={(selectedFilies) => setFiles1(selectedFilies)}
              />
              {files1.map((file, i) => {
                return <p key={i}>{file.name}</p>;
              })}
              {urls1.map((url, i) => {
                const filename = files1[i].name; // image-1.jpg
                return (
                  <img
                    src={url}
                    height={300}
                    width={240}
                    key={i}
                    alt={filename}
                  />
                );
              })}
            </div>
            <div>
              <label htmlFor="pet_photo">Фото после:</label>
              <ImageInput
                name="pet_photo_after"
                id="pet_photo_after"
                type="file"
                onFilesChange={(selectedFilies) => setFiles2(selectedFilies)}
              />
              {files2.map((file, i) => {
                return <p key={i}>{file.name}</p>;
              })}
              {urls2.map((url, i) => {
                const filename = files2[i].name; // image-1.jpg
                return (
                  <img
                    src={url}
                    height={300}
                    width={240}
                    key={i}
                    alt={filename}
                  />
                );
              })}
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
                alt="cancel"
                className={`${adminStyle.addPetImg} ${adminStyle.addPetImgNok}`}
                src={cancel}
              />
            </button>
            <button className={adminStyle.addPetBtn} type="submit">
              <img
                alt="ok"
                className={`${adminStyle.addPetImg} ${adminStyle.addPetImgOk}`}
                src={ok}
              />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormComponent;
