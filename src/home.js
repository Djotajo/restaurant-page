export default function loadHome() {
  const homeTab = document.querySelector(".currentTab");
  homeTab.innerHTML = "";

  homeTab.setAttribute("id", "homeTab");

  const description = document.createElement("div");
  const homeImg = document.createElement("div");

  homeImg.setAttribute("id", "homeImg");

  description.innerHTML = `<h1>Welcome</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci
  nulla, lobortis id mollis vitae, ornare id mauris. Integer odio ex,
  hendrerit nec leo vel, aliquam aliquet elit. Praesent condimentum quis
  enim ac ornare. Proin vitae egestas arcu. Praesent a tellus pulvinar
  lectus volutpat vehicula sed eu nulla. Maecenas purus nisl, sollicitudin
  quis nulla a, eleifend efficitur elit. Sed ultrices hendrerit justo, nec
  sollicitudin neque commodo et. Integer ut sem a sem laoreet posuere quis
  id ex. Sed non gravida nisl. Donec in magna at nisi sodales vulputate
  non eu lacus. Phasellus volutpat risus vitae turpis maximus, et mattis
  dui porta. Morbi imperdiet, lorem et interdum hendrerit, elit ipsum
  efficitur est, sed commodo dui velit eu mauris. Fusce varius laoreet
  odio, id aliquam velit. Lorem ipsum dolor sit amet, consectetur
  adipiscing elit.</p>`;

  homeTab.appendChild(description);
  homeTab.appendChild(homeImg);
}
