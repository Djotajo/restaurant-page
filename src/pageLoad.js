import header from "./header";
import navbar from "./navbar";
import footer from "./footer";

export default function pageLoad() {
  const content = document.querySelector("#content");
  const description = document.createElement("div");

  description.classList.add("description");
  description.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  content.appendChild(header());
  content.appendChild(navbar());
  content.appendChild(description);
  content.appendChild(footer());
}
