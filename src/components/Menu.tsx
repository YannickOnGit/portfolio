import { useEffect, useState, type FocusEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";

type MenuItem = {
  label: string;
  path: string;
};

type MenuGroup = {
  key: string;
  label: string;
  icon: "cases" | "portfolio";
  id: string;
  items: MenuItem[];
};

const menuGroups: MenuGroup[] = [
  {
    key: "cases",
    label: "Cases",
    icon: "cases",
    id: "cases-menu",
    items: [
      { label: "Case 01", path: "/case01" },
      { label: "Case 02", path: "/case02" },
      { label: "Case 03", path: "/case03" },
    ],
  },
  {
    key: "portfolio",
    label: "Portfolio",
    icon: "portfolio",
    id: "portfolio-menu",
    items: [
      { label: "Project 001", path: "/portfolio01" },
      { label: "Project 002", path: "/portfolio02" },
      { label: "Project 003", path: "/portfolio03" },
    ],
  },
];

const Menu = () => {
  const location = useLocation();
  const activePageGroupKey =
    menuGroups.find((group) =>
      group.items.some(
        (item) => item.path.toLowerCase() === location.pathname.toLowerCase()
      )
    )?.key ?? null;
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [collapsedActiveGroup, setCollapsedActiveGroup] = useState<string | null>(
    null
  );

  useEffect(() => {
    setOpenGroup(activePageGroupKey);
    setCollapsedActiveGroup(null);
  }, [activePageGroupKey, location.pathname]);

  const hoverClasses = "hover:bg-stone-800/50 hover:text-stone-200";
  const activeClasses = "bg-stone-800/50 text-white";

  const baseClasses =
    "text-md text-stone-400 flex flex-row px-0 py-2 pl-6 pr-4 items-center justify-start transition-all duration-300 ease-out";

  const navItemClasses = `${baseClasses} ${hoverClasses} active:bg-purple-700/50`;

  const isCurrentPage = (path: string) =>
    location.pathname.toLowerCase() === path.toLowerCase();
  const isActive = (path: string): string =>
    isCurrentPage(path) ? activeClasses : "";

  const handleGroupBlur = (
    groupKey: string,
    event: FocusEvent<HTMLLIElement>
  ) => {
    const nextFocused = event.relatedTarget as Node | null;
    if (
      nextFocused &&
      (event.currentTarget.contains(nextFocused) ||
        (nextFocused instanceof Element &&
          nextFocused.hasAttribute("data-menu-group-toggle")))
    ) {
      return;
    }

    if (activePageGroupKey !== groupKey) {
      setOpenGroup((current) => (current === groupKey ? null : current));
    }
  };

  return (
    <div className="w-full min-w-0 grow border-r-2 border-stone-800 background-red-500/50">
      <nav
        id="primary-navigation"
        aria-label="Primary navigation"
        className="w-full h-full min-w-0"
      >

        <div className="flex flex-col h-full">
          <div className="grow-0">
            <ul className="list-none mt-16 space-y-0">
              <li className=" mb-1">
                <Link
                  to="/"
                  aria-current={isCurrentPage("/") ? "page" : undefined}
                  className={`${navItemClasses} ${isActive("/")}`}
                >
                  <Icon name="home" size={18} className="mr-2 -mt-1 text-white" />
                  <span className="text-lg font-normal">Home</span>
                </Link>
              </li>

              {menuGroups.map((group) => {
                const isActiveGroup = activePageGroupKey === group.key;
                const isOpen =
                  (isActiveGroup && collapsedActiveGroup !== group.key) ||
                  openGroup === group.key;

                return (
                  <li
                    key={group.key}
                    className=""
                    onBlur={(event) => handleGroupBlur(group.key, event)}
                  >
                    <button
                      type="button"
                      data-menu-group-toggle
                      onClick={() => {
                        if (isActiveGroup) {
                          setCollapsedActiveGroup((current) =>
                            current === group.key ? null : group.key
                          );
                          return;
                        }

                        setOpenGroup((current) =>
                          current === group.key ? null : group.key
                        );
                      }}
                      aria-expanded={isOpen}
                      aria-controls={group.id}
                      className={`${navItemClasses} w-full`}
                    >
                      <Icon name={group.icon} size={18} className="mr-2 -mt-1 text-white" />
                      <span className="text-lg font-normal">{group.label}</span>
                      <Icon
                        name="chevron-down"
                        size={18}
                        className={`ml-auto transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <ul
                      id={group.id}
                      inert={!isOpen}
                      className={`ml-0 mt-1 pl-0 space-y-1 empty:hidden list-none overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      {group.items.map((item) => (
                        <li key={item.path} className="">
                          <Link
                            to={item.path}
                            aria-current={isCurrentPage(item.path) ? "page" : undefined}
                            className={`${navItemClasses} ${isActive(item.path)} ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                              }`}
                          >
                            <span className="pl-12 text-lg font-normal">{item.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mb-6 p-6 grow content-end">
            <div className="flex items-start space-x-1 mx-auto">
              <i className="mr-1">
                <svg width="24" height="24" viewBox="0 2 24 24" fill="orange">
                  <path d="M12 2.5L14.9 8.6L21.5 9.4L16.75 13.9L18.1 20.5L12 17.2L5.9 20.5L7.25 13.9L2.5 9.4L9.1 8.6L12 2.5Z" />
                </svg>
              </i>
              <p className="leading-snug">Open to New Opportunities</p>
            </div>
            <a
              href="https://www.linkedin.com/in/yannick-boulanger/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-800/50 block text-center w-full p-1.5 pb-2 px-3 rounded-lg border border-gray-600 transition-all duration-500 hover:border-purple-300/80 hover:bg-purple-900 text-white"
            >
              Get in touch!
            </a>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default Menu;
