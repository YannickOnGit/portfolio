import image001 from "/src/assets/FN-App-Home Page.png";
import image002 from "/src/assets/FN-App-Physician Submission Summary.png";
import image003 from "/src/assets/FN-App-Gasconguette.png";
import image004 from "/src/assets/FN-App-Select Diagnosis.png";
import image005 from "/src/assets/FN-App-Select Act.png";
import image006 from "/src/assets/FN-App-Collective Act.png";

export default function Portfolio04() {
  return (
    <div className="text-white">
      {/* Intro Header */}
      <div className="w-full text-gray-200">
        <div className="mb-16 max-w-screen-lg mx-auto text-white">
          <h2 className="text-3xl pb-12 ">Portfolio 004 : Facturation.Net</h2>
          <h1 className="uppercase  font-light text-7xl leading-none text-purple-400/80">
            Web App Wireframes
          </h1>
          <h1 className="uppercase mb-16 font-light leading-none   text-white  bg-stone-800/50">
            Billing Solutions for Québec Physicians
          </h1>
          <div className="flex gap-6">
            <div className="flex-1/3">
              <h3>Contributions</h3>
              <ul className="mt-4 space-y-1 text-lg text-zinc-300">
                <li>Visual Design</li>
                <li>Account Provisioning</li>
                <li>User Onboarding</li>
                <li>Observability</li>
              </ul>
            </div>

            <div className="flex-2/3">
              <h3>Assignment</h3>
              <p>
                Revise the My Connect client app to improve usability and visual
                clarity while enabling secure remote access. Focused on the full
                access lifecycle—enrollment, authentication, and session
                continuity—with built-in observability to monitor user flows and
                system performance.
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

      {/* Main Image Feature */}
      <div className="text-gray-200 border-y border-zinc-800 bg-zinc-900/50">
        <div className="w-full">
          <div className="max-w-screen-lg mx-auto px-0 py-16">
            <img
              src={image002}
              className="border-zinc-700 border shadow-2xl"
              alt=""
            />
            <p className="mt-4 italic text-center">Caption</p>
          </div>
        </div>
      </div>

      {/* Main Image Feature */}
      <div className="text-gray-200 border-y border-zinc-800 bg-zinc-900/50">
        <div className="w-full">
          <div className="max-w-screen-lg mx-auto px-0 py-16">
            <img
              src={image003}
              className="border-zinc-700 border shadow-2xl"
              alt=""
            />
            <p className="mt-4 italic text-center">Caption</p>
          </div>
        </div>
      </div>

      {/* Main Image Feature */}
      <div className="text-gray-200 border-y border-zinc-800 bg-zinc-900/50">
        <div className="w-full">
          <div className="max-w-screen-lg mx-auto px-0 py-16">
            <img
              src={image004}
              className="border-zinc-700 border shadow-2xl"
              alt=""
            />
            <p className="mt-4 italic text-center">Caption</p>
          </div>
        </div>
      </div>

      {/* Main Image Feature */}
      <div className="text-gray-200 border-y border-zinc-800 bg-zinc-900/50">
        <div className="w-full">
          <div className="max-w-screen-lg mx-auto px-0 py-16">
            <img
              src={image005}
              className="border-zinc-700 border shadow-2xl"
              alt=""
            />
            <p className="mt-4 italic text-center">Caption</p>
          </div>
        </div>
      </div>

      {/* Main Image Feature */}
      <div className="text-gray-200 border-y border-zinc-800 bg-zinc-900/50">
        <div className="w-full">
          <div className="max-w-screen-lg mx-auto px-0 py-16">
            <img
              src={image006}
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
