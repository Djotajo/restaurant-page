export default function pageLoad() {
  const content = document.querySelector("#content");
  const headline = document.createElement("div");
  const navbar = document.createElement("div");
  const description = document.createElement("div");
  const footer = document.createElement("footer");

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

  description.classList.add("description");
  headline.classList.add("header");
  headline.innerHTML = "Relaxtaurant";
  description.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  footer.innerHTML = `<p>Created by Djotajo</p>
  <a href="https://github.com/Djotajo">
    <img id="githubLogo" src="../assets/github-mark-white.png" />
  </a>`;

  content.appendChild(headline);
  content.appendChild(navbar);
  content.appendChild(description);
  content.appendChild(footer);
}
