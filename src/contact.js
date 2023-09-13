export default function loadContact() {
  const contactTab = document.querySelector(".currentTab");
  contactTab.innerHTML = "";

  contactTab.setAttribute("id", "contactTab");

  const contacts = document.createElement("div");
  const address = document.createElement("div");
  const location = document.createElement("div");

  location.setAttribute("id", "location");
  contacts.setAttribute("id", "contacts");

  contacts.innerHTML = `
  <div>
      <h1>Opening hours</h1>
      <div><p>MON-FRI</p>  <p>9:00 - 23:00</p>
      <p>SAT</p>  <p>9:00 - 24:00</p>
      <p>SUN</p> <p>12:00 - 21:00</p></div>
  </div>
  <div>
      <h1>Location</h1>
      <p>VGW5+783, Vjal Nelson</p>
      <p>Il-Belt Valletta, Malta</p>
  </div>
  `;

  location.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6463.962982399942!2d14.507747618818424!3d35.89846898060367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e45281d8647c5%3A0x745ad38ee242c917!2sValletta%2C%20Malta!5e0!3m2!1sbs!2sba!4v1694621337918!5m2!1sbs!2sba" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  contactTab.appendChild(contacts);
  contactTab.appendChild(address);
  contactTab.appendChild(location);

  console.log("contact speaking");
}
