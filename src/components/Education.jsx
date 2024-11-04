import SectionTitle from "./SectionTitle";

const Education = () => {
  return (
    <section className="py-20 align-element" id="education">
      <SectionTitle text="education" />
      <div>
        <p className="text-lg">
          <strong className="text-emerald-500">MS, Towson University</strong> -
          Towson, MD
          <p className="education-date">May 2013</p>
          <em>Computer Science and Engineering</em>
        </p>
      </div>
    </section>
  );
};
export default Education;
