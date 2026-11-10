import image001 from "/src/assets/livregg-Contest Result Page.png";

export default function Portfolio06() {
  return (
    <div className="text-white">
      {/* Intro Header */}
      <div className="w-full text-gray-200">
        <div className="mb-16 max-w-screen-lg mx-auto text-white">
          <h2 className="text-3xl pb-12 ">
            Portfolio 006 : Conseil des Arts du Canada
          </h2>
          <h1 className="uppercase  font-light text-7xl leading-none text-purple-400/80">
            Micro Website Design
          </h1>
          <h1 className="uppercase mb-16 font-light leading-none   text-white  bg-stone-800/50">
            Prix littéraires du Gouverneur général
          </h1>
          <div className="flex gap-6">
            <div className="flex-1/3">
              <h3>Contributions</h3>
              <ul className="mt-4 space-y-1 text-lg text-zinc-300">
                <li>Website Design</li>
                <li>Typography</li>
                <li>Accessibility</li>
                <li>Marketing</li>
              </ul>
            </div>

            <div className="flex-2/3">
              <h3>Assignment</h3>
              <p>
                Design a dedicated page for the 2017 Governor General’s Literary
                Awards showcasing nominees and winners. Focus on clear visual
                hierarchy, accessible navigation, and responsive layout to
                highlight books across multiple categories, while supporting
                discoverability and user engagement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Image Feature */}
      <div className="text-gray-200 border-y border-zinc-800 bg-zinc-900/50">
        <div className="w-full">
          <div className="max-w-screen-lg mx-auto px-0 py-16">
            <img
              src={image001}
              className="border-zinc-700 border shadow-2xl"
              alt=""
            />
            <p className="mt-4 italic text-center">Caption</p>
          </div>
        </div>
      </div>
    </div>
  );
}
