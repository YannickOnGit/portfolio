// CaseStudies.tsx
import { Link } from "react-router-dom";

// Import your images
import imageCase01 from "/src/assets/Thumb-Case01.png";
import imageCase02 from "/src/assets/Thumb-case02.png";
import imageCase03 from "/src/assets/Thumb-Case03.png";

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
    tag: "Product Case",
    title: "Interface Redesign",
    desc: "Multi-Panel Workspace for Sales Workflows",
    img: imageCase01,
    status: "Open",
    active: true,
    path: "Case01",
  },
  {
    id: 2,
    tag: "UX Case",
    title: "VPN Enrollment Flow",
    desc: "Self-Service Onboarding & MFA Authentication",
    img: imageCase02,
    status: "Open",
    active: true,
    path: "Case02",
  },
  {
    id: 3,
    tag: "Product Case",
    title: "Dynamic Prioritization",
    desc: "Flexible Query-Building for Sales Workflows",
    img: imageCase03,
    status: "Open",
    active: true,
    path: "Case03",
  },
  // { id: 4, tag: "Product Case", title: "Networks Provisioning", desc: "Zero-Touch Provisioning (ZTP) for Enterprise Scale", img: imageCase04, status: "Coming Soon", active: false },
];

export default function CaseStudies() {
  return (
    <section className="mb-16 max-w-screen-lg mx-auto px-6 xl:px-0">
      <h3>Case Studies</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-stone-800/50 rounded-1xl overflow-hidden hover:shadow-xl hover:bg-stone-800/60  transition-all duration-500 rounded-2xl hover:scale-104"
          >
            {/* Image */}
            <div className="relative aspect-6/4 overflow-hidden bg-stone-600">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-107"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* <span className="px-1.5 py-0.5 bg-stone-200 text-purple-800 font-semibold text-sm rounded-sm">
                {project.tag}
              </span> */}
              <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
              <p>{project.desc}</p>

              {/* Button with semantic link */}
              {project.active ? (
                <Link
                  to={`${project.path}`}
                  className="block w-full  text-center p-2 rounded-lg text-cyan-500 text-lg font-medium transition-all duration-500 bg-stone-950/80 border border-cyan-600 group-hover:bg-cyan-500 group-hover:text-black">
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
