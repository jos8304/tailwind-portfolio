import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaDatabase,
  FaTools,
  FaPython,
  FaPhp,
  FaJs,
  FaReact,
} from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#experience", text: "Experience" },
  { id: nanoid(), href: "#education", text: "education" },
];

export const skills = [
  {
    id: nanoid(),
    title: "Web Programming Languages",
    icon: [
      <FaHtml5 className="h-16 w-16 text-emerald-500" />,
      // <FaPython className="h-16 w-16 text-emerald-500" />,
      // <FaPhp className="h-16 w-16 text-emerald-500" />,
      // <FaJs className="h-16 w-16 text-emerald-500" />,
      // <FaReact className="h-16 w-16 text-emerald-500" />,
    ],
    text: "Python, Django, PHP, JavaScript, HTML, React,NEXT.js",
  },
  {
    id: nanoid(),
    title: "Database",
    icon: <FaDatabase className="h-16 w-16 text-emerald-500" />,
    text: "MySQL, MSSQL, MongoDB",
  },
  {
    id: nanoid(),
    title: "Development tools and server",
    icon: <FaTools className="h-16 w-16 text-emerald-500" />,
    text: "Visual Studio ,PyCharm,Windows server 2008 R2, GitHub, Docker.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "./assets/coplate.jpg",
    url: "https://jyou8304.pythonanywhere.com/",
    github: "https://github.com/jos8304/django_coplate2",
    title: "first project",
    text: "Implemented login, sign-up, review, and member following functions.",
    Languages: "Python 3.7, Django 2.2",
  },
  {
    id: nanoid(),
    img: "./assets/codeitmall.jpg",
    url: "https://codeitmall-azure.vercel.app/",
    github: "https://github.com/jos8304/codeitmall",
    title: "second project",
    text: "Developed an e-commerce site.",
    Languages: "React, JavaScript",
  },
  {
    id: nanoid(),
    img: "./assets/shortit.jpg",
    url: "https://shortit-azure.vercel.app/",
    github: "https://github.com/jos8304/shortit",
    title: "third project",
    text: "Developed a site that converts long URLs to short URLs.",
    Languages: "NEXT.js,MongoDB",
  },
];
