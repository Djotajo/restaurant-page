import loadFood from "./loadfood";
import loadBurger from "./loadburger";
import loadSteak from "./loadsteak";
import loadChicken from "./loadchicken";
import loadDessert from "./loaddessert";
import loadNoodles from "./loadnoodles";
import loadHotdog from "./loadhotdog";

export default function loadMenu() {
  const menuTab = document.querySelector(".currentTab");
  menuTab.innerHTML = "";

  const items = {
    steak: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>Steaks</title>
        <path d="M11.9 2C8 2 4.9 5.4 5 9.3C5.1 11.9 6.6 14.1 8.7 15.2C10.1 15.9 11 17.3 11 18.8V19C11 20.7 12.3 22 14 22C18 22 19 17 19 9C19 9 19 2 11.9 2M14 20C13.4 20 13 19.6 13 19V18.8C13 16.6 11.7 14.5 9.7 13.4C8.1 12.6 7.1 11 7 9.2C7 7.9 7.5 6.5 8.4 5.5C9.3 4.5 10.6 4 11.8 4C16.7 4 17 8.2 17 9C17 18.9 15.3 20 14 20M15.8 7.6L8.3 10.3C8.1 10 8 9.6 8 9.1C8 8.4 8.2 7.8 8.5 7.1L13.7 5.2C14.9 5.8 15.5 6.7 15.8 7.6M12.9 15.1L15.7 14.1C15.6 15.6 15.3 16.7 15.1 17.4L13.8 17.9C13.8 16.9 13.5 16 12.9 15.1M16 9.2C16 10.4 16 11.5 15.9 12.4L11.9 13.9C11.4 13.4 10.8 12.9 10.1 12.6C9.7 12.4 9.3 12.1 9 11.8L16 9.2Z" />
      </svg>
      `,
    burger: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>Burgers</title>
        <path d="M22 13C22 14.11 21.11 15 20 15H4C2.9 15 2 14.11 2 13S2.9 11 4 11H13L15.5 13L18 11H20C21.11 11 22 11.9 22 13M12 3C3 3 3 9 3 9H21C21 9 21 3 12 3M3 18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V17H3V18Z" />
      </svg>
      `,
    chicken: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Chicken</title><path d="M20.16 12.73C22.93 9.96 22.57 5.26 19.09 3C17.08 1.67 14.39 1.66 12.36 2.97C10.6 4.1 9.63 5.86 9.46 7.68C9.33 9 8.83 10.23 7.91 11.15L7.88 11.18C6.72 12.34 6.72 14.11 7.81 15.19L8.8 16.18C9.89 17.27 11.66 17.27 12.75 16.18C13.72 15.21 15 14.68 16.39 14.53C17.76 14.38 19.1 13.78 20.16 12.73M6.26 19.86C6.53 20.42 6.44 21.1 5.97 21.56C5.39 22.15 4.44 22.15 3.85 21.56C3.58 21.29 3.44 20.94 3.42 20.58C3.06 20.56 2.71 20.42 2.44 20.15C1.85 19.56 1.85 18.61 2.44 18.03C2.9 17.57 3.59 17.47 4.14 17.74L6.62 15.31C6.76 15.5 6.92 15.72 7.1 15.9L8.09 16.89C8.3 17.09 8.5 17.26 8.76 17.41L6.26 19.86Z" /></svg>
    `,
    noodles: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Noodles</title><path d="M22 3L10 4.41V6H22V7H10V12H22C22 13.81 21.43 15.46 20.32 16.95S17.77 19.53 16 20.25V22H8V20.25C6.24 19.53 4.79 18.43 3.68 16.95S2 13.81 2 12H5V4L22 2V3M6 4.88V6H7V4.78L6 4.88M6 7V12H7V7H6M9 12V7H8V12H9M9 6V4.55L8 4.64V6H9Z" /></svg>
    `,
    hotdog: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Hot-Dogs</title><path d="M21 5.77C20.85 5.65 20.72 5.55 20.59 5.45L20.62 5.41C21.4 4.63 21.4 3.37 20.62 2.59C19.84 1.81 18.58 1.81 17.79 2.59L17.05 3.33C15.68 2.3 13.74 2.4 12.5 3.65L3.65 12.5C2.4 13.74 2.3 15.68 3.33 17.05L2.59 17.79C1.8 18.58 1.8 19.84 2.59 20.62C3.37 21.4 4.63 21.4 5.41 20.62L5.45 20.59C5.55 20.72 5.65 20.85 5.77 21C7.13 22.34 9.35 22.34 10.72 21L20.97 10.72C22.34 9.35 22.34 7.14 21 5.77M4.77 15.61C4.5 15.05 4.6 14.36 5.06 13.9L13.9 5.06C14.36 4.6 15.05 4.5 15.61 4.77L4.77 15.61M19.56 9.3L9.3 19.56C8.72 20.15 7.77 20.15 7.18 19.56C6.6 19 6.6 18 7.18 17.44L17.44 7.18C18 6.6 19 6.6 19.56 7.18C20.15 7.77 20.15 8.72 19.56 9.3Z" /></svg>
      `,
    dessert: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Desserts</title><path d="M22,19L19,17L22,15V19M15,15L19,9L22,13L18,16L15,15M5,17L2,19V15L5,17M9,15L6,16L2,13L5,9L9,15M14,6L18,8L13,15H11L6,8L10,6H14Z" /></svg>
      `,
  };

  menuTab.setAttribute("id", "menuTab");

  for (const item in items) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menuItem");
    menuItem.innerHTML = `${items[item]}`;
    if (item === "steak") {
      menuItem.addEventListener("click", loadSteak);
    } else if (item === "burger") {
      menuItem.addEventListener("click", loadBurger);
    } else if (item === "chicken") {
      menuItem.addEventListener("click", loadChicken);
    } else if (item === "noodles") {
      menuItem.addEventListener("click", loadNoodles);
    } else if (item === "hotdog") {
      menuItem.addEventListener("click", loadHotdog);
    } else if (item === "dessert") {
      menuItem.addEventListener("click", loadDessert);
    }
    menuTab.appendChild(menuItem);
  }
}
