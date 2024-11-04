import SectionTitle from "./SectionTitle";

const Experience = () => {
  return (
    <section className="py-20 align-element" id="experience">
      <SectionTitle text="Experience" />

      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <article className="experience">
          <h2 className="text-xl tracking-wide font-medium">
            Project Engineer, Nexien Inc
          </h2>
          <p>
            <strong className="text-emerald-500">August 2021 – Present</strong>
          </p>
          <ul className="mt-4 text-slate-700 leading-loose">
            <li>
              Provided maintenance, technical support, and troubleshooting for
              Faregate in the Washington D.C. Metro system
            </li>
            <li>Developed a file-sharing website for WMATA using Django</li>
            <li>
              Managed numerous reports with file automation in Python
              <ul>
                <li>Packages: openpyxl, shutil, os, and pandas</li>
              </ul>
            </li>
            <li>Developed import and export report program using Django</li>
            <li>
              Worked in a team-based environment, communicating effectively and
              respectfully with supervisors and management
            </li>
            <li>
              Sent an incident resolution report by email using the bulk-mail
              system developed by Django
            </li>
            <li>
              Installed and managed Docker images on station computers at each
              station
            </li>
          </ul>
        </article>
        <article className="experience">
          <h2 className="text-xl tracking-wide font-medium">
            IT Associate, Rhee Bros Inc
          </h2>
          <p>
            <strong className="text-emerald-500">
              November 2020 – August 2021
            </strong>
          </p>
          <ul className="mt-4 text-slate-700 leading-loose">
            <li>
              Retrieved and analyzed weekly and monthly sales and inventory data
              from the database, creating comprehensive reports for the
              purchasing team and sales staff. These reports enabled informed
              decision-making on stock levels, sales trends, and inventory
              optimization.
            </li>
            <li>
              Developed and maintained data pipelines within Microsoft Navision
              (NAV) and HandApps software to ensure accurate, up-to-date
              reporting for stakeholders.
            </li>
            <li>
              Utilized SQL queries and data processing techniques to streamline
              report generation, reducing time spent on manual data entry and
              enhancing data accuracy.
            </li>
            <li>
              Provided technical support and troubleshooting for desktop
              computers, printers, and telecommunication devices, ensuring
              minimal downtime and efficient technology use within the
              organization.
            </li>
            <li>
              Managed Active Directory for user account maintenance, access
              controls, and compliance.
            </li>
          </ul>
        </article>
        <article className="experience">
          <h2 className="text-xl tracking-wide font-medium">
            IT Staff, Korean-American Scientists and Engineers Association
            (KSEA)
          </h2>
          <p>
            <strong className="text-emerald-500">
              May 2013 – December 2018
            </strong>
          </p>
          <ul className="mt-4 text-slate-700 leading-loose">
            <li>
              Developed, coded, and tested web-based software using ASP.NET,
              HTML 5.0, PHP, JavaScript (jQuery), CSS, and CMS systems
              (WordPress or Drupal)
            </li>
            <li>
              Designed and deployed database architecture and systems
              infrastructure (MSSQL)
            </li>
            <li>
              Created strategies for performing repetitive tasks such as data
              acquisitions, migrations, data recoveries, and new database
              implementations
            </li>
            <li>
              Worked with a taskforce team to resolve issues resulting from
              pre-live testing
            </li>
            <li>
              Performed daily maintenance updates for existing sites and
              applications
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
export default Experience;
