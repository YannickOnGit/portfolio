import type { ReactNode } from "react";
// import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface ScrollLinkProps {
  to: string; // e.g. "/#Top", "/#Case01"
  offset?: number; // adjust for fixed header
  children: ReactNode;
  className?: string;
}

const ScrollLink = ({
  to,
  offset = 0,
  children,
  className,
}: ScrollLinkProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const [pathname, hash] = to.split("#");

    if ((pathname === "" || pathname === location.pathname) && hash) {
      // Scroll on same page
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      // Navigate to another page
      e.preventDefault();
      navigate(to);
      // Optional: scroll after navigation (useEffect in target page can handle)
    }
  };

  return (
    <Link to={to} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

export default ScrollLink;
