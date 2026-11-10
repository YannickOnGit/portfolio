import image001 from "/src/assets/DAT-Step 01.png";
import image002 from "/src/assets/DAT-Step 02.png";
import image003 from "/src/assets/DAT-Step 03.png";

export default function Portfolio03() {
  return (
    <div>
      {/* Intro Header */}
      <div className="w-full">
        <div className="mb-16 max-w-screen-lg mx-auto text-white px-6 xl:px-0">
          <h1>Project 003 : MD Physicians</h1>
          <h2 className="uppercase mb-12 font-light leading-none bg-stone-800/50">
          <span className="uppercase font-bold w-full block">Debt Assessment Tool </span>
            Helping Physicians Manage debt smarter
          </h2>
          <div className="md:flex gap-6">
            <div className="flex-1/3 mb-6">
              <h4 className="text-cyan-300/90">Contributions</h4>
              <ul className="mt-4 space-y-1 text-lg">
                <li>Information Architecture</li>
                <li>UX Strategy</li>
                <li>Interaction Logic</li>
                <li>Marketing</li>
                <li>Lead Generation</li>
              </ul>
            </div>

            <div className="flex-2/3">
              <h4 className="text-cyan-300/90">Assignment</h4>
              <p>
                Designed and implemented a multi-vector financial modeling
                engine for MD Financial. The tool translates complex user
                requirements—including diverse income streams, asset portfolios,
                and debt obligations—into a unified cash flow analysis. This
                approach enables physicians to simulate multiple financial
                scenarios and visualize their long-term effects on liquidity and
                retirement readiness.{" "}
              </p>{" "}
            </div>
          </div>
        </div>
      </div>

      {/* Main Image Feature */}
      <div className="text-gray-200 border-y border-zinc-800 bg-stone-900/50">
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

      {/* Main Image Feature */}
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

      {/* Main Image Feature */}
      <div className="text-gray-200 border-y border-zinc-800 bg-stone-900/50">
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
      <p className=" mt-24 text-center">
        © {new Date().getFullYear()} Yannick Boulanger. All rights reserved.
      </p>
    </div>
  );
}
