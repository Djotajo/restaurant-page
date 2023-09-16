export default function loadNoodles() {
  const noodles = document.querySelector(".currentTab");
  noodles.setAttribute("id", "foods");
  noodles.innerHTML = "";

  const noodlesArr = [
    {
      img: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Noodles</title><path d="M22 3L10 4.41V6H22V7H10V12H22C22 13.81 21.43 15.46 20.32 16.95S17.77 19.53 16 20.25V22H8V20.25C6.24 19.53 4.79 18.43 3.68 16.95S2 13.81 2 12H5V4L22 2V3M6 4.88V6H7V4.78L6 4.88M6 7V12H7V7H6M9 12V7H8V12H9M9 6V4.55L8 4.64V6H9Z" /></svg>
        `,
      title: "Lorem noodlums for hoodlums",
      description: `
          <p>
            Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
            Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
            condimentum quis enim ac ornare. Protein vitae egestas arcu.
          </p>`,
      price: "$15",
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Noodles</title><path d="M22 3L10 4.41V6H22V7H10V12H22C22 13.81 21.43 15.46 20.32 16.95S17.77 19.53 16 20.25V22H8V20.25C6.24 19.53 4.79 18.43 3.68 16.95S2 13.81 2 12H5V4L22 2V3M6 4.88V6H7V4.78L6 4.88M6 7V12H7V7H6M9 12V7H8V12H9M9 6V4.55L8 4.64V6H9Z" /></svg>
          `,
      title: "Lorem noodlums for hoodlums",
      description: `
            <p>
              Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
              Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
              condimentum quis enim ac ornare. Protein vitae egestas arcu.
            </p>`,
      price: "$15",
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Noodles</title><path d="M22 3L10 4.41V6H22V7H10V12H22C22 13.81 21.43 15.46 20.32 16.95S17.77 19.53 16 20.25V22H8V20.25C6.24 19.53 4.79 18.43 3.68 16.95S2 13.81 2 12H5V4L22 2V3M6 4.88V6H7V4.78L6 4.88M6 7V12H7V7H6M9 12V7H8V12H9M9 6V4.55L8 4.64V6H9Z" /></svg>
          `,
      title: "Lorem noodlums for hoodlums",
      description: `
            <p>
              Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
              Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
              condimentum quis enim ac ornare. Protein vitae egestas arcu.
            </p>`,
      price: "$15",
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Noodles</title><path d="M22 3L10 4.41V6H22V7H10V12H22C22 13.81 21.43 15.46 20.32 16.95S17.77 19.53 16 20.25V22H8V20.25C6.24 19.53 4.79 18.43 3.68 16.95S2 13.81 2 12H5V4L22 2V3M6 4.88V6H7V4.78L6 4.88M6 7V12H7V7H6M9 12V7H8V12H9M9 6V4.55L8 4.64V6H9Z" /></svg>
          `,
      title: "Lorem noodlums for hoodlums",
      description: `
            <p>
              Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
              Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
              condimentum quis enim ac ornare. Protein vitae egestas arcu.
            </p>`,
      price: "$15",
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Noodles</title><path d="M22 3L10 4.41V6H22V7H10V12H22C22 13.81 21.43 15.46 20.32 16.95S17.77 19.53 16 20.25V22H8V20.25C6.24 19.53 4.79 18.43 3.68 16.95S2 13.81 2 12H5V4L22 2V3M6 4.88V6H7V4.78L6 4.88M6 7V12H7V7H6M9 12V7H8V12H9M9 6V4.55L8 4.64V6H9Z" /></svg>
          `,
      title: "Lorem noodlums for hoodlums",
      description: `
            <p>
              Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
              Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
              condimentum quis enim ac ornare. Protein vitae egestas arcu.
            </p>`,
      price: "$15",
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Noodles</title><path d="M22 3L10 4.41V6H22V7H10V12H22C22 13.81 21.43 15.46 20.32 16.95S17.77 19.53 16 20.25V22H8V20.25C6.24 19.53 4.79 18.43 3.68 16.95S2 13.81 2 12H5V4L22 2V3M6 4.88V6H7V4.78L6 4.88M6 7V12H7V7H6M9 12V7H8V12H9M9 6V4.55L8 4.64V6H9Z" /></svg>
          `,
      title: "Lorem noodlums for hoodlums",
      description: `
            <p>
              Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
              Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
              condimentum quis enim ac ornare. Protein vitae egestas arcu.
            </p>`,
      price: "$15",
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Noodles</title><path d="M22 3L10 4.41V6H22V7H10V12H22C22 13.81 21.43 15.46 20.32 16.95S17.77 19.53 16 20.25V22H8V20.25C6.24 19.53 4.79 18.43 3.68 16.95S2 13.81 2 12H5V4L22 2V3M6 4.88V6H7V4.78L6 4.88M6 7V12H7V7H6M9 12V7H8V12H9M9 6V4.55L8 4.64V6H9Z" /></svg>
          `,
      title: "Lorem noodlums for hoodlums",
      description: `
            <p>
              Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
              Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
              condimentum quis enim ac ornare. Protein vitae egestas arcu.
            </p>`,
      price: "$15",
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Noodles</title><path d="M22 3L10 4.41V6H22V7H10V12H22C22 13.81 21.43 15.46 20.32 16.95S17.77 19.53 16 20.25V22H8V20.25C6.24 19.53 4.79 18.43 3.68 16.95S2 13.81 2 12H5V4L22 2V3M6 4.88V6H7V4.78L6 4.88M6 7V12H7V7H6M9 12V7H8V12H9M9 6V4.55L8 4.64V6H9Z" /></svg>
          `,
      title: "Lorem noodlums for hoodlums",
      description: `
            <p>
              Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
              Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
              condimentum quis enim ac ornare. Protein vitae egestas arcu.
            </p>`,
      price: "$15",
    },
    {
      img: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Noodles</title><path d="M22 3L10 4.41V6H22V7H10V12H22C22 13.81 21.43 15.46 20.32 16.95S17.77 19.53 16 20.25V22H8V20.25C6.24 19.53 4.79 18.43 3.68 16.95S2 13.81 2 12H5V4L22 2V3M6 4.88V6H7V4.78L6 4.88M6 7V12H7V7H6M9 12V7H8V12H9M9 6V4.55L8 4.64V6H9Z" /></svg>
          `,
      title: "Lorem noodlums for hoodlums",
      description: `
            <p>
              Phasellus orci nulla, lobortis id mollis vitae, ornare id mauris.
              Integer odio ex, hendrerit nec leo vel, aliquam aliquet elit. Praesent
              condimentum quis enim ac ornare. Protein vitae egestas arcu.
            </p>`,
      price: "$15",
    },
  ];

  noodlesArr.forEach((element) => {
    const foodImg = document.createElement("div");
    const foodDescription = document.createElement("div");
    foodImg.innerHTML = element.img;
    foodDescription.innerHTML =
      element.title + element.description + element.price;
    noodles.appendChild(foodImg);
    noodles.appendChild(foodDescription);
  });
}
