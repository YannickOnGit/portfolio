import image001 from "/src/assets/SDWAN-Dashboard.png";
import image002 from "/src/assets/SDWAN-Customer Inventory.png";
import image003 from "/src/assets/SDWAN-Add Site and Device Dialogs.png";
import image004 from "/src/assets/SDWAN-Sites and Devices Management.png";
import image005 from "/src/assets/SDWAN-Site Dashboard.png";
import image006 from "/src/assets/SDWAN-LAN Configuration.png";
import image007 from "/src/assets/SDWAN-Add SNAT and DNAT Dialogs.png";
import image008 from "/src/assets/SDWAN-Site Architecture.png";

export default function Portfolio01() {
  return (
    <div className="text-white">
      {/* Intro Header */}
      <div className="w-full text-gray-200">
        <div className="mb-16 max-w-screen-lg mx-auto text-white px-6 xl:px-0">
          <h1>Project 001 : SD-WAN Orchestrator</h1>
          <h2 className="uppercase mb-12 font-light leading-none bg-stone-800/50">
          <span className="uppercase font-bold w-full block">Secure & Resilient </span>
            Zero-Touch Provisioning For Multi-tenacy
          </h2>
          <div className="lg:flex gap-6">
            <div className="flex-1/3  mb-6">
              <h4 className="text-cyan-300/90">Contributions</h4>
              <ul className="mt-4 space-y-1 text-lg text-zinc-300">
                <li>Information Architecture</li>
                <li>Systems Thinking</li>
                <li>Product Design</li>
                <li>Design System</li>
                <li>Data Visualization</li>
              </ul>
            </div>

            <div className="flex-2/3">
              <h4 className="text-cyan-300/90">Assignment</h4>
              <p>
                Design and enhance a multi-tenant SD-WAN Orchestrator to provide
                secure, scalable, and intuitive network management. Focus on
                end-to-end workflows including zero-touch provisioning, device
                onboarding, policy configuration, and monitoring. Ensure the
                platform supports advanced features like SD-WAN, Zero Trust
                Network Access (ZTNA), Firewall as a Service (FWaaS), and Secure
                Web Gateway (SWG), while maintaining usability, system
                observability, and seamless session continuity for enterprise
                users.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Image Feature */}
      <div className="text-gray-200  bg-zinc-900/50">
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
      <div className="text-gray-200 ">
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
      <div className="text-gray-200  bg-zinc-900/50">
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

      {/* Main Image Feature */}
      <div className="text-gray-200 ">
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

      {/* Main Image Feature */}
      <div className="text-gray-200  bg-zinc-900/50">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto py-16 px-6 xl:px-0">
            <img
              src={image005}
              className="border-zinc-700 border shadow-2xl"
              alt=""
            />
            <p className="mt-4 italic text-center"></p>
          </div>
        </div>
      </div>

      {/* Main Image Feature */}
      <div className="text-gray-200 ">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto py-16 px-6 xl:px-0">
            <img
              src={image006}
              className="border-zinc-700 border shadow-2xl"
              alt=""
            />
            <p className="mt-4 italic text-center"></p>
          </div>
        </div>
      </div>

      {/* Main Image Feature */}
      <div className="text-gray-200  bg-zinc-900/50">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto py-16 px-6 xl:px-0">
            <img
              src={image007}
              className="border-zinc-700 border shadow-2xl"
              alt=""
            />
            <p className="mt-4 italic text-center"></p>
          </div>
        </div>
      </div>

      {/* Main Image Feature */}
      <div className="text-gray-200 ">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto py-16 px-6 xl:px-0">
            <img
              src={image008}
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
