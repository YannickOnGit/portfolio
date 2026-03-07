import Icon from "./Icon";

const MainHeader = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <header className="p-2 border-b border-zinc-800 text-white h-14 flex justify-between px-4 w-full" aria-label="Main navigation">
      {/* Left: Hamburger + Logo */}
      <div className="flex flex-1 items-center">
        <div className="flex items-center space-x-2">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="md:hidden">
            <Icon name="mobile-menu" size={16} className="stroke-gray-600" />
          </button>
          <h5>Yannick Boulanger / Product Design</h5>
        </div>
      </div>

      {/* Right: User Avatar / Profile */}
      <div className="flex flex-1">
        <div className="flex items-center space-x-2 mx-auto">
          <i className="">
            <svg
              width="24"
              height="24"
              viewBox="0 2 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="orange"
            >
              <path d="M12 2.5L14.9 8.6L21.5 9.4L16.75 13.9L18.1 20.5L12 17.2L5.9 20.5L7.25 13.9L2.5 9.4L9.1 8.6L12 2.5Z" />
            </svg>
          </i>
          <p>
            Open to New Opportunities
          </p>
          <button className=" p-1.5 pb-1 px-3 ml-3 rounded-lg border border-gray-600 transition-all duration-500 hover:border-purple-400 hover:bg-purple-900 hover:text-white">Get in touch!</button>
        </div>
      </div>

      {/* Right: User Avatar / Profile */}
      <div className="flex flex-1 space-x-2 justify-end">
          <a href="javascript:;" className="p-1 rounded-lg items-center border border-gray-600 justify-center transition-all duration-500  hover:border-blue-400 hover:bg-blue-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
              <path d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z" fill="#fff"></path>
            </svg>
          </a>
      </div>
    </header>
  );
};

export default MainHeader;
