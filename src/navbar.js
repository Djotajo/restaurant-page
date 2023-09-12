export default function navbar() {
  const navbar = document.createElement("div");

  const home = document.createElement("button");
  const menu = document.createElement("button");
  const contact = document.createElement("button");

  home.innerHTML = "Home";
  menu.innerHTML = "Menu";
  contact.innerHTML = "Contact";

  navbar.classList.add("navbar");

  navbar.appendChild(home);
  navbar.appendChild(menu);
  navbar.appendChild(contact);

  return navbar;
}
