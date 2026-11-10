import image001 from "/src/assets/SDWAN-Dashboard.png";
import image002 from "/src/assets/SDWAN-Customer Inventory.png";
import image003 from "/src/assets/SDWAN-Add Site and Device Dialogs.png";
import image004 from "/src/assets/SDWAN-Sites and Devices Management.png";
import image005 from "/src/assets/SDWAN-Site Dashboard.png";
import image006 from "/src/assets/SDWAN-LAN Configuration.png";
import image007 from "/src/assets/SDWAN-Add SNAT and DNAT Dialogs.png";
import image008 from "/src/assets/SDWAN-Site Architecture.png";

const projectImages = [
  { src: image001, alt: "SD-WAN orchestrator dashboard" },
  { src: image002, alt: "Customer inventory in the SD-WAN orchestrator" },
  { src: image003, alt: "Dialogs for adding a site and network device" },
  { src: image004, alt: "Site and device management interface" },
  { src: image005, alt: "Dashboard for an individual customer site" },
  { src: image006, alt: "LAN configuration interface" },
  { src: image007, alt: "Dialogs for configuring SNAT and DNAT" },
  { src: image008, alt: "Architecture diagram for a customer site" },
];

export default function Portfolio01() {
  const establishedCapabilities = [
    {
      title: "Network-level management",
      description:
        "Organized the experience around customer networks rather than individual devices.",
    },
    {
      title: "End-to-end provisioning",
      description:
        "Connected provisioning activities across the customer deployment lifecycle.",
    },
    {
      title: "Asynchronous operations",
      description:
        "Supported deployment and configuration updates with status visibility.",
    },
    {
      title: "Automated configuration",
      description:
        "Supported automated provisioning of VPN user accounts and network policies.",
    },
    {
      title: "More accessible management",
      description:
        "Addressed the need to make routine network operations and troubleshooting easier to understand.",
    },
  ];

  return (
    <article className="text-white">
      <header className="w-full text-gray-200">
        <div className="mb-12 max-w-screen-lg mx-auto text-white px-6 xl:px-0">
          <h1 className="pb-8">Case Study 01 : SD-WAN Orchestrator</h1>
          <p className="mb-16 bg-stone-800/50 text-5xl font-light uppercase leading-none text-stone-100 sm:text-7xl">
            <span className="font-bold w-full block">Rethinking Secure Provisioning</span>
            for Multi-Tenant SD-WAN
          </p>
          <div className="lg:flex gap-6">
            <div className="mb-6 min-w-0 lg:flex-1/4">
                          <div className="border-l border-cyan-300/50 pl-4">

                              <dl className="space-y-5">
                <div>
                  <dt className="mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-500 pb-2">
                    Industry
                  </dt>
                  <dd>
                    <ul className="flex list-none flex-col items-start gap-2 p-0">
                      <li className="rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100">
                        <span className="whitespace-nowrap inline-block">Networking</span>
                      </li>
                      <li className="rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100">
                        Retail
                      </li>
                      <li className="rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100">
                        Hospitality
                      </li>
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-500 pt-2 pb-2">
                    Contributions
                  </dt>
                  <dd>
                    <ul className="flex list-none flex-wrap gap-2 p-0">
                      <li className="rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100">
                        Design Leadership
                      </li>
                      <li className="rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100">
                        Research &amp; Discovery
                      </li>
                      <li className="rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100">
                        Product Ownership
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
              </div>

            </div>

            <div className="flex-3/4">
              <p className="text-2xl">
                Adaptiv Networks was redesigning its SD-WAN orchestrator to
                support increasingly complex, multi-tenant network operations.
              </p>
              <div className="">
                <h2
                  id="challenge-heading"
                  className="text-4xl leading-snug text-cyan-300/90"
                >
                  Assignement
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <p className="mb-0">
                    The platform brought together networking and security
                    capabilities, including SD-WAN, Zero Trust Network Access
                    (ZTNA), Firewall as a Service (FWaaS), and Secure Web
                    Gateway (SWG). As the product evolved, its orchestration
                    experience needed to support more than individual device
                    configuration. 
                  </p>
                  <p className="mb-0">
                    Tenants needed a practical way to provision,
                    manage, and troubleshoot customer networks across the
                    deployment lifecycle.
                    The challenge was to make these complex operations easier
                    to manage without losing the visibility, security, and
                    control required in an enterprise networking environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Research */}

      <section
        aria-labelledby="research-heading"
        className="w-full border-stone-800 bg-stone-800/20 px-6 py-12 xl:px-0"
      >
        <div className="max-w-screen-lg mx-auto">
          <div className="lg:flex gap-6">
            <div className="flex-1/4">
              <div className="border-l border-cyan-300/50 pl-4">
                <span className="mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-500">
                  01
                </span>
                <h2 id="research-heading" className="text-4xl leading-snug">
                  Research
                </h2>
              </div>
            </div>
            <div className="gap-6 flex-3/4 pt-6">
              <div>
                <p className="text-2xl" >
                  I approached the redesign by examining the existing product and workflows, gathering user feedback, and collaborating with stakeholders to understand operational needs and product constraints.
                </p>
                <h3 className="text-cyan-300/90 text-2xl">Understanding the Real Problem</h3>
              </div>
              <div className="lg:flex gap-6">
                <div className="flex-1/2">
                  <p>
                    The existing orchestrator was primarily organized around individual devices. Meanwhile, user feedback revealed a broader need: tenants wanted to manage the entire customer provisioning lifecycle, from device ordering and delivery to the customer premises through configuration, security policy management, and deployment.
                  </p>
                  <p>
                    This changed the focus from improving individual provisioning tasks to considering how the overall experience could better support customer network management.
                  </p>
                </div>
                <div className="flex-1/2">
                  <p>

                    Workflow analysis revealed two additional needs. Deployment operations needed to work asynchronously so users could continue managing their networks without waiting for every operation to finish. And users with limited networking expertise needed to manage and troubleshoot customer networks without depending on deep technical knowledge for routine tasks.
                  </p>
                  <p>
                    Together, these findings pointed toward a more cohesive and accessible approach to network orchestration.                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key features */}

      <section
        aria-labelledby="experience-heading"
        className="w-full px-6 py-12 xl:px-0"
      >
        <div className="max-w-screen-lg mx-auto">
          <div className="lg:flex gap-6">
            <div className="flex-1/4">
              <div className="border-l border-cyan-300/50 pl-4">
                <span className="mb-2 block text-xs font-semibold tracking-[0.2em]  text-stone-500">
                  02
                </span>
                <h2 id="experience-heading" className="text-4xl leading-snug">
                  Rethinking the Experience
                </h2>
              </div>
            </div>
            <div className="flex-3/4 pt-6">
              <p className="text-2xl">
                The redesign focused on connecting the different parts of
                network management into a more coherent operational experience.
              </p>
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl text-cyan-300/90">
                    From Individual Devices to Customer Networks
                  </h3>
                  <p>
                    The existing device-centric model limited visibility across
                    customer networks. Restructuring the information
                    architecture around customer networks provided a more
                    appropriate foundation for organizing devices and
                    network-level operations.
                  </p>
                  <p>
                    This shifted the emphasis from managing isolated components
                    to managing the networks those components supported.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl text-cyan-300/90">
                    From Disconnected Tasks to End-to-End Provisioning
                  </h3>
                  <p>
                    Tenants wanted greater control over customer deployments,
                    from ordering devices through to bringing networks online.
                  </p>
                  <p>
                    The provisioning experience was structured around this
                    broader lifecycle, connecting configuration and deployment
                    steps into a more continuous workflow.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl text-cyan-300/90">
                    From Blocking Operations to Asynchronous Deployment
                  </h3>
                  <p>
                    Network deployment and configuration did not always need
                    to finish before users could continue with other tasks.
                  </p>
                  <p>
                    Asynchronous deployment and updates supported a more
                    flexible operational model, with status information to
                    help users follow progress and investigate issues.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl text-cyan-300/90">
                    From Technical Complexity to More Accessible Operations
                  </h3>
                  <p>
                    Users had different levels of networking expertise, yet
                    they needed to manage and troubleshoot customer networks.
                  </p>
                  <p>
                    The design emphasized clearer workflows and operational
                    visibility to make routine network administration more
                    approachable.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl text-cyan-300/90">
                    Reducing Repetitive Configuration
                  </h3>
                  <p>
                    Routine setup also presented opportunities for automation.
                    Provisioning workflows for VPN user accounts and network
                    policies were designed to reduce repetitive manual
                    configuration and support more scalable operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="redesign-established-heading"
        className="w-full border-stone-800 bg-stone-800/20 px-6 py-16 xl:px-0"
      >
        <div className="max-w-screen-lg mx-auto lg:flex  gap-6">
          <div className="flex-1/4">
            <div className="border-l border-cyan-300/50 pl-4">
              <span className="mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-500">
                03
              </span>
              <h2
                id="redesign-established-heading"
                className="text-4xl leading-snug"
              >
                What the Redesign Established
              </h2>
            </div>
          </div>
          <div className="flex-3/4 pt-6">
            <p className="mb-0 text-2xl font-light">
              The redesign established a more network-centric approach to
              SD-WAN orchestration, addressing the need for greater tenant
              autonomy and a more cohesive provisioning experience.
            </p>

            <div className="mb-12 mt-8 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
              {establishedCapabilities.map((capability, index) => (
                <div
                  key={capability.title}
                  className="border-l border-stone-700 pl-5"
                >
                  <div className="mb-1 flex items-baseline gap-3">
                    {/* <span
                      aria-hidden="true"
                      className="text-xs font-semibold tracking-widest text-stone-500"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span> */}
                    <h3 className="mb-0 text-cyan-300/90 text-2xl">
                      {capability.title}
                    </h3>
                  </div>
                  <p className="mb-0 text-lg">{capability.description}</p>
                </div>
              ))}
            </div>

            <p>
              Together, these capabilities provided a foundation for more
              autonomous and scalable network management.
            </p>
            <p>
              Quantitative improvements in provisioning time, configuration
              errors, or support effort were not available to establish the
              magnitude of the impact.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="reflection-heading"
        className="w-full px-6 py-16 xl:px-0"
      >
        <div className="max-w-screen-lg mx-auto lg:flex gap-6">
          <div className="flex-1/4">
            <div className="border-l border-cyan-300/50 pl-4">
              <span className="mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-500">
                04
              </span>
              <h2 id="reflection-heading" className="text-4xl leading-snug">
                Reflection
              </h2>
            </div>
          </div>
          <div className="flex-3/4 pt-6">
            <p className="text-2xl" >
              This project required looking beyond individual interface
              problems to understand how network management, provisioning,
              security configuration, and user expertise interacted across a
              complex product.
            </p>
            <p className="text-2xl" >
              By combining user feedback, workflow analysis, and
              cross-functional collaboration, I helped shape a more coherent
              orchestration experience—one organized around how tenants needed
              to manage customer networks rather than simply configure
              individual devices.
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Project interface screenshots">
        {projectImages.map((image, index) => (
          <div
            key={image.src}
            className={`text-gray-200 ${index % 2 === 0 ? "bg-zinc-900/50" : ""
              }`}
          >
            <figure className="mx-auto max-w-screen-xl px-6 py-16 xl:px-0">
              <img
                src={image.src}
                className="border border-zinc-700 shadow-2xl"
                alt={image.alt}
              />
            </figure>
          </div>
        ))}
      </section>

      <footer>
        <p className="mt-24 text-center">
          © {new Date().getFullYear()} Yannick Boulanger. All rights reserved.
        </p>
      </footer>
    </article>
  );
}
