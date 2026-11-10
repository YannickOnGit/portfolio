import image001 from "/src/assets/AN-MyConnect-01.png";
import image002 from "/src/assets/AN-MyConnect-02.png";
import image003 from "/src/assets/AN-MyConnect-03.png";
import image004 from "/src/assets/AN-MyConnect-04.png";

export default function Portfolio02() {
  return (
    <div className="text-white">
      {/* Intro Header */}
      <div className="w-full text-gray-200">
        <div className="mb-16 max-w-screen-lg mx-auto text-white  px-6 xl:px-0">
          <h1>Project 002 : My Connect - Adaptiv Networks</h1>
          <h2 className="uppercase mb-12 font-light leading-none bg-stone-800/50">
          <span className="uppercase font-bold w-full block">Hybrid Workforce </span>
            SD-WAN Remote Access for Distributed Teams
          </h2>
          <div className="md:flex gap-6">
            <div className="flex-1/3  mb-6">
              <h4 className="text-cyan-300/90 font-normal">Contributions</h4>
              <ul className="mt-4 space-y-1 text-lg text-zinc-300">
                <li>Visual Design</li>
                <li>UI/UX Design</li>
                <li>Authentication</li>
                <li>Observability</li>
              </ul>
            </div>

            <div className="flex-2/3">
              <h4 className="text-cyan-300/90 font-normal">Assignment</h4>
              <p>
                Visual redesign of the My Connect client app to improve
                usability and clarity while enabling secure remote access for
                distributed teams. Covered the full access lifecycle, including
                enrollment, authentication, and session continuity, with
                integrated observability to track user flows and system
                performance. The client supported multiple platforms, including
                mobile and desktop.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Image Feature */}
      <div className="text-gray-200 border-y border-zinc-800 bg-zinc-900/50">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto py-16 px-6 xl:px-0">
            <img
              src={image001}
              className="border-zinc-700 border shadow-2xl"
              alt=""
            />
            <p className="mt-4 italic text-center"></p>
          </div>
        </div>
      </div>
      <div className="text-gray-200 border-y border-zinc-800">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto py-16 px-6 xl:px-0">
            <img
              src={image002}
              className="border-zinc-700 border shadow-2xl"
              alt=""
            />
            <p className="mt-4 italic text-center"></p>
          </div>
        </div>
      </div>
      <div className="text-gray-200 border-y border-zinc-800 bg-zinc-900/50">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto py-16 px-6 xl:px-0">
            <img
              src={image003}
              className="border-zinc-700 border shadow-2xl"
              alt=""
            />
            <p className="mt-4 italic text-center"></p>
          </div>
        </div>
      </div>
      <div className="text-gray-200 border-y border-zinc-800 ">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto py-16 px-6 xl:px-0">
            <img
              src={image004}
              className="border-zinc-700 border shadow-2xl"
              alt=""
            />
            <p className="mt-4 italic text-center"></p>
          </div>
        </div>
      </div>
      <p className=" mt-24 text-center">
        © {new Date().getFullYear()} Yannick Boulanger. All rights reserved.
      </p>
    </div>
  );
}
