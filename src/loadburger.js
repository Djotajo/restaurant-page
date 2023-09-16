export default function loadBurger() {
  const burgers = document.querySelector(".currentTab");
  burgers.setAttribute("id", "foods");
  burgers.innerHTML = "";

  const burgersArr = [
    {
      img: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>Burgers</title>
          <path d="M22 13C22 14.11 21.11 15 20 15H4C2.9 15 2 14.11 2 13S2.9 11 4 11H13L15.5 13L18 11H20C21.11 11 22 11.9 22 13M12 3C3 3 3 9 3 9H21C21 9 21 3 12 3M3 18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V17H3V18Z" />
        </svg>
        `,
      title: "Lorem burgerum",
      description: `
          <p>
            Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
            Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
            condimentum quis enim ac ornare. Protein vitae egestas arcu.
          </p>`,
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>Burgers</title>
            <path d="M22 13C22 14.11 21.11 15 20 15H4C2.9 15 2 14.11 2 13S2.9 11 4 11H13L15.5 13L18 11H20C21.11 11 22 11.9 22 13M12 3C3 3 3 9 3 9H21C21 9 21 3 12 3M3 18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V17H3V18Z" />
          </svg>
          `,
      title: "Lorem burgerum",
      description: `
            <p>
              Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
              Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
              condimentum quis enim ac ornare. Protein vitae egestas arcu.
            </p>`,
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>Burgers</title>
            <path d="M22 13C22 14.11 21.11 15 20 15H4C2.9 15 2 14.11 2 13S2.9 11 4 11H13L15.5 13L18 11H20C21.11 11 22 11.9 22 13M12 3C3 3 3 9 3 9H21C21 9 21 3 12 3M3 18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V17H3V18Z" />
          </svg>
          `,
      title: "Lorem burgerum",
      description: `
            <p>
              Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
              Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
              condimentum quis enim ac ornare. Protein vitae egestas arcu.
            </p>`,
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>Burgers</title>
            <path d="M22 13C22 14.11 21.11 15 20 15H4C2.9 15 2 14.11 2 13S2.9 11 4 11H13L15.5 13L18 11H20C21.11 11 22 11.9 22 13M12 3C3 3 3 9 3 9H21C21 9 21 3 12 3M3 18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V17H3V18Z" />
          </svg>
          `,
      title: "Lorem burgerum",
      description: `
            <p>
              Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
              Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
              condimentum quis enim ac ornare. Protein vitae egestas arcu.
            </p>`,
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>Burgers</title>
            <path d="M22 13C22 14.11 21.11 15 20 15H4C2.9 15 2 14.11 2 13S2.9 11 4 11H13L15.5 13L18 11H20C21.11 11 22 11.9 22 13M12 3C3 3 3 9 3 9H21C21 9 21 3 12 3M3 18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V17H3V18Z" />
          </svg>
          `,
      title: "Lorem burgerum",
      description: `
            <p>
              Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
              Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
              condimentum quis enim ac ornare. Protein vitae egestas arcu.
            </p>`,
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>Burgers</title>
            <path d="M22 13C22 14.11 21.11 15 20 15H4C2.9 15 2 14.11 2 13S2.9 11 4 11H13L15.5 13L18 11H20C21.11 11 22 11.9 22 13M12 3C3 3 3 9 3 9H21C21 9 21 3 12 3M3 18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V17H3V18Z" />
          </svg>
          `,
      title: "Lorem burgerum",
      description: `
            <p>
              Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
              Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
              condimentum quis enim ac ornare. Protein vitae egestas arcu.
            </p>`,
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>Burgers</title>
            <path d="M22 13C22 14.11 21.11 15 20 15H4C2.9 15 2 14.11 2 13S2.9 11 4 11H13L15.5 13L18 11H20C21.11 11 22 11.9 22 13M12 3C3 3 3 9 3 9H21C21 9 21 3 12 3M3 18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V17H3V18Z" />
          </svg>
          `,
      title: "Lorem burgerum",
      description: `
            <p>
              Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
              Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
              condimentum quis enim ac ornare. Protein vitae egestas arcu.
            </p>`,
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>Burgers</title>
            <path d="M22 13C22 14.11 21.11 15 20 15H4C2.9 15 2 14.11 2 13S2.9 11 4 11H13L15.5 13L18 11H20C21.11 11 22 11.9 22 13M12 3C3 3 3 9 3 9H21C21 9 21 3 12 3M3 18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V17H3V18Z" />
          </svg>
          `,
      title: "Lorem burgerum",
      description: `
            <p>
              Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
              Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
              condimentum quis enim ac ornare. Protein vitae egestas arcu.
            </p>`,
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>Burgers</title>
            <path d="M22 13C22 14.11 21.11 15 20 15H4C2.9 15 2 14.11 2 13S2.9 11 4 11H13L15.5 13L18 11H20C21.11 11 22 11.9 22 13M12 3C3 3 3 9 3 9H21C21 9 21 3 12 3M3 18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V17H3V18Z" />
          </svg>
          `,
      title: "Lorem burgerum",
      description: `
            <p>
              Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
              Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
              condimentum quis enim ac ornare. Protein vitae egestas arcu.
            </p>`,
    },
  ];

  burgersArr.forEach((element) => {
    const foodImg = document.createElement("div");
    const foodDescription = document.createElement("div");
    foodImg.innerHTML = element.img;
    foodDescription.innerHTML = element.title + element.description;
    burgers.appendChild(foodImg);
    burgers.appendChild(foodDescription);
  });
}