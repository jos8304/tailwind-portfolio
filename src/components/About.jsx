import aboutSvg from "../assets/IMG_2270.jpg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-auto h-auto" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            IT Professional Developer Experienced IT professional with a solid
            background in web development, database management, and technical
            support. Proficient in various programming languages and
            technologies including HTML, PHP, JavaScript, CSS, React, NEXT.js,
            Python, and Django. Demonstrated expertise in developing web-based
            software, automating tasks, and providing technical support in both
            team-oriented and individual capacities. Proven ability to
            troubleshoot and resolve technical issues efficiently, with strong
            communication skills to effectively interact with team members,
            supervisors, and clients.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
