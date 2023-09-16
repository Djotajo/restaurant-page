export default function loadDessert() {
  const desserts = document.querySelector(".currentTab");
  desserts.setAttribute("id", "foods");
  desserts.innerHTML = "";

  const dessertsArr = [
    {
      img: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Desserts</title><path d="M22,19L19,17L22,15V19M15,15L19,9L22,13L18,16L15,15M5,17L2,19V15L5,17M9,15L6,16L2,13L5,9L9,15M14,6L18,8L13,15H11L6,8L10,6H14Z" /></svg>
          `,
      title: "Lorem dessertum",
      description: `
            <p>
              Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
              Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
              condimentum quis enim ac ornare. Protein vitae egestas arcu.
            </p>`,
      price: "$10",
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Desserts</title><path d="M22,19L19,17L22,15V19M15,15L19,9L22,13L18,16L15,15M5,17L2,19V15L5,17M9,15L6,16L2,13L5,9L9,15M14,6L18,8L13,15H11L6,8L10,6H14Z" /></svg>
            `,
      title: "Lorem dessertum",
      description: `
              <p>
                Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
                Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
                condimentum quis enim ac ornare. Protein vitae egestas arcu.
              </p>`,
      price: "$10",
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Desserts</title><path d="M22,19L19,17L22,15V19M15,15L19,9L22,13L18,16L15,15M5,17L2,19V15L5,17M9,15L6,16L2,13L5,9L9,15M14,6L18,8L13,15H11L6,8L10,6H14Z" /></svg>
            `,
      title: "Lorem dessertum",
      description: `
              <p>
                Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
                Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
                condimentum quis enim ac ornare. Protein vitae egestas arcu.
              </p>`,
      price: "$10",
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Desserts</title><path d="M22,19L19,17L22,15V19M15,15L19,9L22,13L18,16L15,15M5,17L2,19V15L5,17M9,15L6,16L2,13L5,9L9,15M14,6L18,8L13,15H11L6,8L10,6H14Z" /></svg>
            `,
      title: "Lorem dessertum",
      description: `
              <p>
                Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
                Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
                condimentum quis enim ac ornare. Protein vitae egestas arcu.
              </p>`,
      price: "$10",
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Desserts</title><path d="M22,19L19,17L22,15V19M15,15L19,9L22,13L18,16L15,15M5,17L2,19V15L5,17M9,15L6,16L2,13L5,9L9,15M14,6L18,8L13,15H11L6,8L10,6H14Z" /></svg>
            `,
      title: "Lorem dessertum",
      description: `
              <p>
                Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
                Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
                condimentum quis enim ac ornare. Protein vitae egestas arcu.
              </p>`,
      price: "$10",
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Desserts</title><path d="M22,19L19,17L22,15V19M15,15L19,9L22,13L18,16L15,15M5,17L2,19V15L5,17M9,15L6,16L2,13L5,9L9,15M14,6L18,8L13,15H11L6,8L10,6H14Z" /></svg>
            `,
      title: "Lorem dessertum",
      description: `
              <p>
                Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
                Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
                condimentum quis enim ac ornare. Protein vitae egestas arcu.
              </p>`,
      price: "$10",
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Desserts</title><path d="M22,19L19,17L22,15V19M15,15L19,9L22,13L18,16L15,15M5,17L2,19V15L5,17M9,15L6,16L2,13L5,9L9,15M14,6L18,8L13,15H11L6,8L10,6H14Z" /></svg>
            `,
      title: "Lorem dessertum",
      description: `
              <p>
                Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
                Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
                condimentum quis enim ac ornare. Protein vitae egestas arcu.
              </p>`,
      price: "$10",
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Desserts</title><path d="M22,19L19,17L22,15V19M15,15L19,9L22,13L18,16L15,15M5,17L2,19V15L5,17M9,15L6,16L2,13L5,9L9,15M14,6L18,8L13,15H11L6,8L10,6H14Z" /></svg>
            `,
      title: "Lorem dessertum",
      description: `
              <p>
                Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
                Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
                condimentum quis enim ac ornare. Protein vitae egestas arcu.
              </p>`,
      price: "$10",
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Desserts</title><path d="M22,19L19,17L22,15V19M15,15L19,9L22,13L18,16L15,15M5,17L2,19V15L5,17M9,15L6,16L2,13L5,9L9,15M14,6L18,8L13,15H11L6,8L10,6H14Z" /></svg>
            `,
      title: "Lorem dessertum",
      description: `
              <p>
                Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
                Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
                condimentum quis enim ac ornare. Protein vitae egestas arcu.
              </p>`,
      price: "$10",
    },
  ];

  dessertsArr.forEach((element) => {
    const foodImg = document.createElement("div");
    const foodDescription = document.createElement("div");
    foodImg.innerHTML = element.img;
    foodDescription.innerHTML =
      element.title + element.description + element.price;
    desserts.appendChild(foodImg);
    desserts.appendChild(foodDescription);
  });
}
