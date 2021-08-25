export default [
  {
    name: "Manhattan",
    logo: "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/f4d2592b-12d2-45d0-99f5-79f468b9794c/202101232012_gIAs_.jpeg",
    payToConfirmOrder: true,
    menu: [
      {
        name: "Empire State Burger",
        price: 30,
        img: "https://static-images.ifood.com.br/image/upload/t_medium/pratos/f4d2592b-12d2-45d0-99f5-79f468b9794c/201810012250_empir.jpg",
        ingredients: ["Carne", "Pão", "Queijo"],
        description:
          "Nosso lanche mais popular, com 3 hamburgers e muito sabor",
      },
    ],
    location: {
      type: "Point",
      coordinates: [-23.4976459, -46.8504641],
    },
  },
  {
    name: "McDonalds",
    logo: "",
    payToConfirmOrder: false,
    menu: [
      {
        name: "BigMc",
        price: 15,
        img: "",
        ingredients: ["Carne", "Pão", "Queijo"],
        description:
          "O mais famoso lanche do mundo",
      },
    ],
    location: {
      type: "Point",
      coordinates: [-23.5047586,-46.8351727],
    },
  }
];
