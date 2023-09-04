import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  favei,
  consu,
  bio,
  comprised,
  threejs,
  uwmedicine,
  shirt,
  carHub,
  myeyedr,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title:"Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "PHP Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "UI/UX Developer",
    company_name: "FAVEI C.A",
    icon: favei,
    iconBg: "#383E56",
    date: "December 2019 - February 2020",
    points: [
      "Development and deployment of an administrative application in charge of the wholesale and retail food marketing.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility using Java SceneBulder (JavaFX).",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Frontend/Backend Developer",
    company_name: "CONSUEFRAIMCA C.A",
    icon: consu,
    iconBg: "#383E56",
    date: "December 2020 - April 2021",
    points: [
      "Development of a login system to a web application for the Marketing and distribution of cleaning products.",
      "Implementation and use of the PHP programming language, and MySql database management.",
      "Staff training for the manageability of the new systems developed.",
      "Preventive maintenance of the platforms and/or systems to guarantee their proper functioning.",
    ],
  },

  {
    title: "Frontend/Backend Developer",
    company_name: "BIOMEDICAL C.A",
    icon: bio,
    iconBg: "#383E56",
    date: "August 2021 - December 2021",
    points: [
      "Functional creation of a web environment for administration and wholesale marketing of pharmaceutical products.",
      "Development of a functional administrative panel using Admin lte based on BootStrap Library.",
      "System for sending automatic email to users with the use of the library based on PHPMailer (SMTP protocol).",
      "Use of the PayPal API for the management of payments of the products for sale.",
    ],
  },

  {
    title: "Backend Developer",
    company_name: "Comprised LLC SAS",
    icon: comprised,
    iconBg: "#383E56",
    date: "April 2022 - Present",
    points: [
      "Development and implementation of backend solutions in CMS Drupal based on PHP and Mysql language.",
      "Implementation of process automation techniques aimed at industrial machines responsible for the production of structural building blocks, using electronic components such as sensors, and Arduino reprogrammable boards.",
      "Monitoring and maintenance of websites for the correction of problems at the backend level in different development environments through technologies such as Acquia, Acquia Site Studio, Drush, Lando.",
      "Tester of work environments and web applications on different operating systems (Linux, Windows, MacOS).",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ThreeJS Shirt Customization",
    description:
      "Design a one-of-a-kind shirt that speaks volumes about your individuality using our cutting-edge 3D customization tool. Give free rein to your creativity and craft a shirt that is as distinctive as you are.",
    tags: [
      {
        name: "ThreeJS",
        color: "white-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind-CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
    ],
    image: shirt,
    source_code_link: "https://3-d-shirt-one.vercel.app/",
  },

  {
    name: "Car Hub",
    description:
      "A small application based on React and NextJS that generates a list of vehicles using filters, implementation of API Cars by API-Ninjas and ImaginZ API. Using features such as server-side rendering and the app router. ",
    tags: [
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "NextJS",
        color: "white-text-gradient",
      },
      {
        name: "Tailwind-CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "white-text-gradient",
      },
    ],
    image: carHub,
    source_code_link: "https://car-showcase-roan-one.vercel.app/",
  },

  {
    name: "UW Medicine",
    description:
      "The UW Medicine healthcare system includes UW Medical Center, rated the #1 hospital in Washington by the U.S. The UW Medicine healthcare system encompasses a wide range of world-class medical facilities and services.",
    tags: [
      {
        name: "Drupal",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "orange-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Acquia",
        color: "blue-text-gradient",
      },
      
    ],
    image: uwmedicine,
    source_code_link: "https://www.uwmedicine.org/",
  },
  {
    name: "MyEyeDr",
    description:
      "Provides exceptional eye care for patients of all ages through our local community of doctors you can trust. Meet our Doctors.",
    tags: [
      {
        name: "Drupal",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "orange-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Acquia",
        color: "blue-text-gradient",
      },
      {
        name: "Digital-Ocean",
        color: "blue-text-gradient",
      },
      
    ],
    image: myeyedr,
    source_code_link: "https://www.myeyedr.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: uwmedicine,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };