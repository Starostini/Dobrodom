export async function authUser(credentials) {
  return fetch(`http://89.111.152.183/api/login.php`, {
    method: "POST",
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export async function getAuth(credentials) {
  return fetch(`http://89.111.152.183/api/validate_token.php`, {
    method: "POST",
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export async function getPetsList() {
  return fetch(`http://89.111.152.183/api/getPetsList.php`, {
    method: "GET",
  }).then((data) => data.json());
}

export async function sendNewPet(data) {
  return fetch(`http://89.111.152.183/api/addNewPet.php`, {
    method: "POST",
    body: data,
  }).then((resp) => resp.json());
}
