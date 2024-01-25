import { makeAutoObservable } from "mobx";
export default class PetStore {
  constructor() {
    this._types = [
      { id: 1, name: "Сухой корм" },
      { id: 2, name: "Влажный корм" },
    ];
    this._brands = [
      { id: 1, name: "Purina" },
      { id: 2, name: "ProPlan" },
    ];
    this._pet = [
      {
        id: 1,
        name: "Куська",
        age: 10,
        gender: true,
        status: true,
        inhome: true,
        img: "https://placedog.net/640/480?random",
      },
      {
        id: 2,
        name: "Леля",
        age: 4,
        gender: false,
        status: true,
        inhome: false,
        img: "https://placedog.net/640/480?random",
      },
      {
        id: 3,
        name: "Грег",
        age: 7,
        gender: true,
        status: true,
        inhome: false,
        img: "https://placedog.net/640/480?random",
      },
      {
        id: 4,
        name: "Стефа",
        age: 12,
        gender: false,
        status: false,
        inhome: false,
        img: "https://placedog.net/640/480?random",
      },
    ];
    makeAutoObservable(this);
  }
  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setPet(pet) {
    this._pet = pet;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get pet() {
    return this._pet;
  }
}
