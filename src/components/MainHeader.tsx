import { Link } from "react-router-dom";
import Icon from "./Icon";

const MainHeader = ({
  toggleMenu,
  menuOpen,
}: {
  toggleMenu: () => void;
  menuOpen: boolean;
}) => {
  return (
    <header className="relative z-50 p-2 bg-stone-800/50 text-white h-14 flex justify-between px-4 w-full">
      {/* Left: Hamburger + Logo */}
      <div className="flex flex-1 items-center align-middle h-full">
        <button
          type="button"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          className="md:hidden"
        >
          <Icon
            name="mobile-menu"
            size={18}
            className=" items-center align-middle"
          />
        </button>
        <Link to="/" aria-label="Go to homepage" className="flex rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            width="40"
            height="40"
          className=" aspect-square h-10 my-auto p-2"
          >
            <circle cx="20" cy="20" r="18" fill="#FFFFFF" />
            <path
              d="M13 11 L18.5 20.5 V29 H21.5 V20.5 L27 11 H23.5 L20 17 L16.5 11 H13 Z"
              fill="#1A1D21"
            />
          </svg>
          <span className="text-stone-200/80 text-lg my-auto leading-normal centered pt-0.5 pr-2">
            Product Portfolio
          </span>
        </Link>
      </div>

      {/* Right: LinkedIn */}
      <div className="flex space-x-2 justify-end">
        <a
          href="https://www.linkedin.com/in/yannick-boulanger/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Yannick Boulanger on LinkedIn"
          className="p-1 rounded-lg items-center border border-gray-600 justify-center transition-all duration-500 hover:border-blue-400 hover:bg-blue-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 72 72"
            fill="none"
          >
            <path
              d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
              fill="#fff"
            ></path>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default MainHeader;
