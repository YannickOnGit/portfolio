import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";

const Menu1 = () => {
  const location = useLocation();
  const [openCases, setOpenCases] = useState(false);
  const [openPortfolio, setOpenPortfolio] = useState(false);

  // Update state based on current route
  
  useEffect(() => {
    setOpenCases(location.pathname.startsWith("/Case"));
    setOpenPortfolio(location.pathname.startsWith("/Portfolio"));
  }, [location.pathname]);

  const navItemClasses =
    "text-md text-stone-100 flex flex-row px-0 py-2 pl-6 pr-4  hover:bg-stone-800 active:bg-sky-700 items-center justify-center justify-start";

  const isActive = (path: string): string =>
    location.pathname === path ? "is-active" : "";

  return (
    <div className="grow border-r border-zinc-800 pt-4">
      <nav aria-label="Primary Navigation">
        <ul className="list-none mt-4">
          {/* Home */}
          <li>
            <Link
              to="/"
              aria-label="Go to Home"
              className={`${navItemClasses} ${isActive("/")}`}
            >
              <Icon name="home" size={16} className="mr-2 stroke-gray-600" />
              <span >Hero</span>
            </Link>
          </li>

          {/* Cases Section */}
          <li>
            <button
              onClick={() => setOpenCases((prev) => !prev)}
              aria-expanded={openCases}
              aria-controls="cases-menu"
              type="button"
              className={`${navItemClasses} font-medium group w-full`}
            >
              <Icon name="cases" size={16} className="mr-2 stroke-gray-600" />
              <span >Cases</span>
              <Icon
                name="chevron-down"
                size={16}
                className={`ml-auto stroke-gray-600 transform transition-transform duration-300 ${
                  openCases ? "rotate-180" : ""
                }`}
              />
            </button>
            {openCases && (
              <ul id="cases-menu" className="ml-4 mt-1 space-y-1 list-none">
                {["Case01", "Case02", "Case03"].map((caseId) => (
                  <li key={caseId}>
                    <Link
                      to={`/${caseId}`}
                      className={`${navItemClasses} ${isActive(`/${caseId}`)}`}
                      aria-label={`Go to ${caseId}`}
                    >
                      <span >{caseId.replace("Case", "Case ")}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Portfolio Section 
          <li>
            <button
              onClick={() => setOpenPortfolio((prev) => !prev)}
              aria-expanded={openPortfolio}
              aria-controls="portfolio-menu"
              type="button"
              className={`${navItemClasses} font-medium group w-full`}
            >
              <Icon name="portfolio" size={16} className="mr-2 stroke-gray-600" />
              <span >Portfolio</span>
              <Icon
                name="chevron-down"
                size={16}
                className={`ml-auto stroke-gray-600 transform transition-transform duration-300 ${
                  openPortfolio ? "rotate-180" : ""
                }`}
              />
            </button>
            {openPortfolio && (
              <ul id="portfolio-menu" className="ml-4 mt-1 space-y-1 list-none">
                {Array.from({ length: 6 }).map((_, i) => {
                  const index = i + 1;
                  const path = `/Portfolio0${index}`;
                  return (
                    <li key={path}>
                      <Link
                        to={path}
                        className={`${navItemClasses} ${isActive(path)}`}
                      >
                        <span >Project {index}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
          */}

          {/* Resume */}
          <li>
            <Link
              to="/Resume"
              className={`${navItemClasses} ${isActive("/Resume")}`}
              aria-label="Go to Resume"
            >
              <Icon name="resume" size={16} className="mr-2 stroke-gray-600" />
              <span >Summary</span>
            </Link>
          </li>

          {/* Certification */}
          <li>
            <Link
              to="/Certification"
              className={`${navItemClasses} ${isActive("/Certification")}`}
              aria-label="Go to Certifications"
            >
              <Icon
                name="certification"
                size={16}
                className="mr-2 stroke-gray-600"
              />
              <span >Certification</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu1;