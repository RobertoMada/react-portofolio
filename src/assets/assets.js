import tomatoapp from "./tomatoapp.png";
import countryapp from "./countryapp.png";

export const skillsIcons = [
  {
    img: "https://skillicons.dev/icons?i=html",
    label: "HTML",
    id: 1,
  },
  {
    img: "https://skillicons.dev/icons?i=css",
    label: "CSS",
    id: 2,
  },
  {
    img: "https://skillicons.dev/icons?i=js",
    label: "Javascript",
    id: 3,
  },
  {
    img: "https://skillicons.dev/icons?i=react",
    label: "React",
    id: 4,
  },
];

export const projects = [
  {
    id: 1,
    src: "https://tomatofood-app.netlify.app/",
    img: tomatoapp,
    name: "Tomato",
    skills: [skillsIcons[3], skillsIcons[1]],
    text: "Developed a user-friendly online food store website featuring a variety of food products with detailed descriptions and images. The site includes filter options by categories, a shopping cart for easy order management, a login/sign-in form for user accounts and a delivery form for convenient order fulfillment..",
  },
  {
    id: 2,
    src: "https://dainty-panda-a9e369.netlify.app/",
    img: countryapp,
    name: "Country Flags",
    skills: [skillsIcons[3], skillsIcons[1]],
    text: "Website that displays flags and detailed information about various countries. Users can search for a specific country or filter countries by continent. Each country listing can be clicked to reveal more in-depth information about that country. The website is designed to be user-friendly and informative, providing a comprehensive resource for learning about different countries around the world.",
  },
];
