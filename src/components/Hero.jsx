import heroImg from "../assets/Programming-amico.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">
            I'm Jongsung(Jason) Yoo
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Full-stack Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            I'm a full-stack developer with experience in building scalable,
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/jos8304?tab=repositories">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/jason-yoo-3575b1266/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
