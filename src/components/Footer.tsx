const Footer = () => {
  return (
    <>
      <footer className=" text-white border-t border-t-stone-800 h-12 flex flex-row w-full" aria-label="Main navigation">

        {/* Logo Mark */}
        <div className="flex-none content-center">
          <a href="#" className=" px-0 md:px-4 flex flex-row  justify-center md:justify-start" aria-label="Go to homepage">
            <h1 className="pl-2 text-xs font-light content-center hidden md:inline-block">
              Copyright 2025 Yannick Boulanger
            </h1>
          </a>
        </div>

      </footer>
    </>
  );
};

export default Footer;
