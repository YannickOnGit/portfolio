import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white border-t border-t-stone-800 h-12 flex flex-row w-full">
      <div className="flex-none content-center">
        <Link
          to="/"
          className="px-0 md:px-4 flex flex-row justify-center md:justify-start text-inherit hover:text-stone-200 transition-colors"
          aria-label="Go to homepage"
        >
          <span className="pl-2 text-xs font-light content-center hidden md:inline-block underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 rounded-sm">
            Copyright 2026 Yannick Boulanger
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
