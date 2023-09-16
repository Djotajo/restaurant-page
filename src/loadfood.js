export default function loadFood() {
  const foods = document.querySelector(".currentTab");
  foods.setAttribute("id", "foods");
  foods.innerHTML = "";

  //contactTab.setAttribute("id", "contactTab");

  const foodImg = document.createElement("div");
  const foodDescription = document.createElement("div");
  const foodImg1 = document.createElement("div");
  const foodDescription1 = document.createElement("div");
  const foodImg2 = document.createElement("div");
  const foodDescription2 = document.createElement("div");

  //   contacts.setAttribute("id", "contacts");
  //   address.setAttribute("id", "address");

  foodImg.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Desserts</title><path d="M22,19L19,17L22,15V19M15,15L19,9L22,13L18,16L15,15M5,17L2,19V15L5,17M9,15L6,16L2,13L5,9L9,15M14,6L18,8L13,15H11L6,8L10,6H14Z" /></svg>
    `;

  foodDescription.innerHTML = `
    <p>Lorem steakum</p> <p>Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris. Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent condimentum quis enim ac ornare. Proin vitae egestas arcu.</p>
    <p>May contain traces of ipsum</p>
    `;

  foodImg1.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Desserts</title><path d="M22,19L19,17L22,15V19M15,15L19,9L22,13L18,16L15,15M5,17L2,19V15L5,17M9,15L6,16L2,13L5,9L9,15M14,6L18,8L13,15H11L6,8L10,6H14Z" /></svg>
    `;

  foodDescription1.innerHTML = `
    <p>Via email</p> <p>justrelax@taurant.com</p>
    <p>Via phone</p> <p>123-456-789</p> <p>Please call between 15:00-20:00</p>
    `;

  foodImg2.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Desserts</title><path d="M22,19L19,17L22,15V19M15,15L19,9L22,13L18,16L15,15M5,17L2,19V15L5,17M9,15L6,16L2,13L5,9L9,15M14,6L18,8L13,15H11L6,8L10,6H14Z" /></svg>
    `;

  foodDescription2.innerHTML = `
    <p>Via email</p> <p>justrelax@taurant.com</p>
    <p>Via phone</p> <p>123-456-789</p> <p>Please call between 15:00-20:00</p>
    `;

  foods.appendChild(foodImg);
  foods.appendChild(foodDescription);

  foods.appendChild(foodImg1);
  foods.appendChild(foodDescription1);

  foods.appendChild(foodImg2);
  foods.appendChild(foodDescription2);
}
