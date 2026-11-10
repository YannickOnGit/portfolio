// CaseStudies.tsx
import { Link } from "react-router-dom";

// Import your images
import imagePort01 from "/src/assets/Thumb-Port01.png";
import imagePort02 from "/src/assets/Thumb-Port02.png";
import imagePort03 from "/src/assets/Thumb-Port03.png";
// import imagePort04 from "/src/assets/Thumb-Port04.png";
// import imagePort05 from "/src/assets/Thumb-Port05.png";
// import imagePort06 from "/src/assets/Thumb-Port06.png";

interface Project {
  id: number;
  tag: string;
  title: string;
  desc: string;
  img: string;
  status: string;
  active: boolean;
  path: string;
}

const projects: Project[] = [
  {
    id: 1,
    tag: "Portfolio",
    title: "Secure & Resilient",
    desc: "Zero-Touch Provisioning For Multi-tenacy",
    img: imagePort02,
    status: "Open",
    active: true,
    path: "Portfolio01",
  },
  {
    id: 2,
    tag: "Portfolio",
    title: "Hybrid Workforce",
    desc: "SD-WAN Remote Access for Distributed Teams",
    img: imagePort01,
    status: "Open",
    active: true,
    path: "Portfolio02",
  },
  {
    id: 3,
    tag: "Wireframe",
    title: "Debt Assessment Tool",
    desc: "Helping Physicians Manage debt smarter",
    img: imagePort03,
    status: "Open",
    active: true,
    path: "Portfolio03",
  },
  //{ id: 4, tag: "Portfolio", title: "Physicians Billing", desc: "Automated Provisioning for Enterprise Scale", img: imagePort04, status: "Open", active: true },
  //{ id: 5, tag: "Portfolio", title: "Micro Website Design", desc: "2017 Governor General’s Literary Awards", img: imagePort06, status: "Open", active: true },
];

export default function Portfolio() {
  return (
    <section className="mb-16 max-w-screen-lg mx-auto  px-6 xl:px-0">
      <h3>Portfolio</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-stone-800/50 rounded-1xl overflow-hidden hover:shadow-xl hover:bg-stone-800/60 transition-all duration-500 rounded-2xl hover:scale-104"
          >
            {/* Image */}
            <div className="relative aspect-6/4 overflow-hidden bg-stone-600">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover object-top  transition-all duration-500 group-hover:scale-107"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* <span className="px-1.5 py-0.5 bg-stone-200 text-purple-800 font-semibold text-sm rounded-sm">
                {project.tag}
              </span> */}
              <h4 className=" text-2xl font-semibold mb-1">{project.title}</h4>
              <p>{project.desc}</p>

              {/* Button with semantic link */}
              {project.active ? (
                <Link
                  to={`${project.path}`}
                  className="block w-full  text-center p-2 rounded-lg text-cyan-500 text-lg font-medium transition-all duration-500 bg-stone-950/80 border border-cyan-600 group-hover:bg-cyan-500 group-hover:text-black"
                >
                  {project.status}
                </Link>
              ) : (
                <button
                  disabled
                  className="w-full p-2 rounded-lg text-cyan-400 text-lg font-medium bg-stone-800/40 border border-transparent cursor-not-allowed"
                >
                  {project.status}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
