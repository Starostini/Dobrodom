import React, { useEffect, useState } from "react";
import { getPetDetail, getPetsList } from "../services/Request.services";
import adminStyle from "./Admin.module.css";
import Modal from "../ui/Modal";
import plus from "../img/icon/plus.png";
import FormComponent from "./components/FormComponent.js";
import Success from "./components/Success";

const AdminPets = () => {
  const [petList, setPetList] = useState({});
  const [loading, setLoading] = useState(true);
  const [addPetActive, setAddPatActive] = useState(false);
  const [message, setMessage] = useState("");
  const [titleMessage, setTitleMessage] = useState("");
  const [enableMessage, setEnableMessage] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    async function getData() {
      try {
        const response = await getPetsList();
        if (response?.status === 200) {
          setLoading(false);
          response.data === null ? setPetList([]) : setPetList(response.data);

          // debugger;
        } else {
          setLoading(false);
          setMessage(response.message);
          setTitleMessage(response.status);
          setEnableMessage(true);
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
  const handleGetPetDetail = async (e) => {
    const pet_id = e.target.parentNode.dataset.id;
    try {
      const response = await getPetDetail({
        id: pet_id,
      });

      if (response.status === 200) {
        setData(response.data);
        setAddPatActive(true);
      }
    } catch (error) {}
  };
  // debugger;
  return loading ? (
    <Modal active={loading} />
  ) : addPetActive ? (
    <FormComponent
      data={data}
      addPetActive={addPetActive}
      setAddPatActive={setAddPatActive}
    />
  ) : enableMessage ? (
    <>
      <Success message={message} titlemsg={titleMessage} />
    </>
  ) : (
    <>
      <div className={adminStyle.btnPanel}>
        <a href="#">
          <img
            className={adminStyle.plusImage}
            src={plus}
            onClick={(e) => {
              setData({});
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
                <tr
                  key={pet.ID}
                  className={adminStyle.currentpet}
                  data-id={pet.ID}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGetPetDetail(e);
                  }}
                >
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
