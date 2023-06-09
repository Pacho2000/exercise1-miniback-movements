const URL_API = "https://miniback-movimientos-production.up.railway.app/movimientos";

const getMovimientos = async () => {
  try {
    const { data } = await axios.get(URL_API); //Solo me importa lo que hay dentro de data
    return data; //Desestructuración de la propiedad que referimos con axios
  } catch (error) {
    console.log(error);
    return [];
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const movimientos = await getMovimientos();
  const tableBody = document.querySelector("#movimientos-table tbody");

  movimientos.forEach((movimiento) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${movimiento.id}</td>
      <td>${movimiento.description}</td>
      <td>${movimiento.price}</td>
      <td>${movimiento.type}</td>
    `;
    tableBody.appendChild(row);
  });

  console.log(movimientos);
});
