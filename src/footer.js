export default function footer() {
  const footer = document.createElement("footer");

  footer.innerHTML = `<p>Created by Djotajo</p>
    <a href="https://github.com/Djotajo">
      <img id="githubLogo" src="../assets/github-mark-white.png" />
    </a>`;

  return footer;
}
