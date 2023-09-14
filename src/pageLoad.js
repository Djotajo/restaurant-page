import header from "./header";
import navbar from "./navbar";
import footer from "./footer";
import loadHome from "./home";

export default function pageLoad() {
  const content = document.querySelector("#content");
  const currentTab = document.createElement("div");

  currentTab.classList.add("currentTab");
  currentTab.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  content.appendChild(header());
  content.appendChild(navbar());
  content.appendChild(currentTab);
  content.appendChild(footer());

  loadHome();
}
