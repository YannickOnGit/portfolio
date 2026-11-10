import ImageCarousel2 from "../components/ImageCarousel2";
import image001 from "/src/assets/Case 03/Case-001-Main.png";
import image002 from "/src/assets/Case 03/Case-001-Wireframe-A.png";
import image003 from "/src/assets/Case 03/Case-001-Wireframe-B.png";
import image004 from "/src/assets/Case 03/Case-001-Wireframe-C.png";
import image005 from "/src/assets/Case 03/Case-001-Wireframe-D.png";

export default function Case01() {
  const images = [
    {
      src: image001,
      alt: "Complex Contact priorization query allowing to filter and triage contact to whom",
    },
    {
      src: image002,
      alt: "UI Compnenets exploded view",
    },
    {
      src: image003,
      alt: "Wireframes A",
    },
    {
      src: image004,
      alt: "Wireframes B",
    },
    {
      src: image005,
      alt: "Wireframes c",
    },
  ];

  return (
    <div className="text-white">
      {/* Intro Header */}
      <div className="w-full px-6 xl:px-0">
        <div className="max-w-screen-lg mx-auto">

          <h1>Case 003 : Intellective Routing</h1>
          <h2 className="uppercase mb-12 font-light leading-none bg-stone-800/50">
            <span className="uppercase font-bold">Dynamic Prioritization </span>
            Flexible Query-Building for Sales Workflows
          </h2>
          <div className="lg:flex gap-6 py-6">
            <div className="flex-1/3 mb-6">
              <h4 className="text-cyan-300/90">
                Contributions
              </h4>
              <ul className="mt-4 space-y-1 text-lg text-stone-300">
                <li>Contextual & User Research</li>
                <li>Workflow & Task Analysis</li>
                <li>Technical Research</li>
                <li>Feasibility Study</li>
                <li>Feature Architecture & </li>
                <li>Implementation Guidance</li>
              </ul>
            </div>

            <div className="flex-2/3">
              <h4 className="text-cyan-300/90">Assignment</h4>
              <p>
                The objective of this project was to design a flexible contact
                prioritization system within VanillaSoft that would allow sales
                teams to focus on the most relevant leads at the optimal time.
              </p>
              <p>
                The platform needed to support multiple levels of
                prioritization, such as P1 and P2, as well as more granular
                sub-levels like P1a or P1b. In addition to basic prioritization,
                users required the ability to define custom rules using
                different data points, including purchase history, engagement
                levels, and other behavioral indicators.
              </p>
              <p>
                <strong>My role</strong> was to research customer needs,
                evaluate technical constraints, and design an interface capable
                of managing complex prioritization logic without overwhelming
                users. The goal was to create a system that remained flexible
                for advanced use cases while still being approachable for
                everyday users.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ImageCarousel2 images={images} />

      {/* Problem & Goal Section */}

      {/* Overview */}

      <div className="w-full px-6 xl:px-0 py-12">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex">
            <div className="flex-1/4">
              <h3 className="">Overview</h3>
            </div>
            <div className="flex gap-6 flex-3/4">
              <div className=" flex-1/2">
                <p>
                  VanillaSoft is a cloud-based sales management platform that
                  integrates CRM, lead management, and telemarketing tools to
                  support high-volume sales workflows.{" "}
                </p>
                <p>
                  A key differentiator of the platform is its queue-based model,
                  which routes agents to the next best contact using available
                  data points rather than relying on static contact lists. This
                  approach improves operational efficiency by ensuring agents
                  engage with the most relevant leads at the appropriate moment.
                </p>
              </div>
              <div className=" flex-1/2">
                <p>
                  Introducing dynamic prioritization required extending this queue
                  logic so that organizations could better control how leads were
                  ranked and distributed to agents based on their own business
                  strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Observations */}

      <div className="w-full px-6 xl:px-0 py-12 bg-stone-800/20 border-stone-800">
        <div className="max-w-screen-lg mx-auto">
          <div className="lg:flex">
            <div className="flex-1/4">
              <h3>Observation</h3>
            </div>
            <div className="flex-3/4">
              <blockquote className="border-l-4 border-teal-300/80 pl-6">
                Several customers requested the ability to prioritize contacts
                using multiple levels of importance. Their goal was to focus
                sales efforts on leads that were more likely to convert while
                still maintaining visibility over the broader pipeline.
              </blockquote>
              <blockquote className="mt-6 border-l-4 border-teal-300/80 pl-6">
                At the time, the platform lacked the ability to support this
                type of dynamic prioritization. Contacts were processed through
                the queue, but users could not define layered rules based on
                different attributes or conditions.
              </blockquote>
              <blockquote className="mt-6 border-l-4 border-teal-300/80 pl-6">
                The challenge was not only technical but also conceptual.
                Customers needed the flexibility to combine many different data
                points and conditions, sometimes creating complex scenarios
                where contacts should be prioritized under certain circumstances
                and deprioritized under others. At the same time, the interface
                needed to remain understandable and manageable for sales teams
                who were not necessarily technical users.
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Research */}

      <div className="w-full px-6 xl:px-0 py-12">
        <div className="max-w-screen-lg mx-auto">
          <div className="lg:flex">
            <div className="flex-1/4">
              <h3 className="">Research</h3>
            </div>
            <div className="flex gap-6 flex-3/4">
              <div className=" flex-1/2">
                <p>
                  To understand the scope of the problem, we reviewed customer
                  requests and documented a wide range of prioritization
                  scenarios. These examples revealed that organizations often
                  wanted to combine multiple conditions when determining which
                  leads should be prioritized. In some cases, contacts might need
                  to be prioritized if they met several criteria but deprioritized
                  if another condition was present.
                </p>
              </div>
              <div className=" flex-1/2">
                <p>
                  Because the number of possible combinations was large, we
                  concluded that the safest approach would be to design a
                  framework capable of supporting a wide range of use cases from
                  the start. Restricting the system too early could lead to
                  limitations and future rework as new customer requirements
                  emerged.
                </p>
                <p>
                  Another important aspect of the research focused on the user
                  interface. The feature needed to present complex rule logic in a
                  way that remained accessible to users while still offering the
                  flexibility required by more advanced workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hypothesis */}

      <div className="w-full px-6 xl:px-0 py-16 bg-stone-800/20 border-stone-800">
        <div className="max-w-screen-lg mx-auto">
          <div className="lg:flex">
            <div className="flex-1/4">
              <h3 className=" mb-12">Hypothesis</h3>
            </div>
            <div className="flex-3/4">
              <blockquote className="mb-6 border-l-4 border-teal-300/80 pl-6">
                We hypothesized that introducing a flexible prioritization
                system would significantly improve how sales teams manage and
                engage with leads. By allowing users to define multiple priority
                levels and apply rules based on relevant data points, agents
                would be guided toward the most promising opportunities at the
                right time.
              </blockquote>
              <blockquote className="mb-6 border-l-4 border-teal-300/80 pl-6">
                This capability was expected to improve operational
                efficiency and potentially increase conversion rates by enabling
                more targeted sales strategies. At the same time, we recognized
                that a feature of this complexity could introduce usability
                challenges. Ensuring that the interface remained intuitive and
                navigable was therefore critical to preventing cognitive
                overload and encouraging adoption.
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Solution */}

      <div className="w-full px-6 xl:px-0 py-12">
        <div className="max-w-screen-lg mx-auto">
          <div className="lg:flex">
            <div className="flex-1/4">
              <h3 className="">Solution</h3>
            </div>
            <div className="flex gap-6 flex-3/4">
              <div className=" flex-1/2">
                <p>
                  To support dynamic prioritization, a query-building framework
                  was introduced that allowed users to define and manage complex
                  prioritization rules using different types of data.
                </p>
                <p>
                  The system supports multiple prioritization criteria and
                  enables users to combine conditions using logical operators
                  such as AND and OR. This makes it possible to create layered
                  rules that reflect the realities of sales workflows, where
                  decisions are often based on several data points rather than a
                  single attribute.
                </p>
              </div>
              <div className="flex-1/2">
                <p>
                  Users can also define priority levels such as P1 or P2 and
                  extend them with sub-levels when additional granularity is
                  required. This allows organizations to structure their lead
                  prioritization in a way that reflects their own business
                  processes.
                </p>
                <p>
                  A significant focus was placed on keeping the interface
                  approachable despite the flexibility of the system. Visual
                  guidance, tooltips, and a structured workflow help users build
                  prioritization rules step by step, reducing the risk of
                  confusion while still supporting advanced configurations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature */}

      <div className="w-full px-6 xl:px-0 py-16 bg-stone-800/20 border-stone-800">
        <div className="w-full px-6 xl:px-0">
          <div className="max-w-screen-lg mx-auto">
            <div className="lg:flex">
              <div className="flex-1/4">
                <h3 className="">Feature</h3>
              </div>
              <div className="flex-3/4">
                <h4 className="text-cyan-300/90">
                  Multi‑Criteria Prioritization
                </h4>
                <p>
                  Users can define rules based on numerous data attributes such as
                  engagement, behavior, and historical performance.
                </p>

                <h4 className="text-cyan-300/90">Flexible Rule Logic</h4>
                <p>
                  Support for logical operators and layered conditions allows the
                  construction of nuanced prioritization strategies without
                  coding.
                </p>

                <h4 className="text-cyan-300/90">Custom Priority Levels</h4>
                <p>
                  Priority groups and sub‑levels give organizations the
                  flexibility to represent their sales logic structurally.
                </p>

                <h4 className="text-cyan-300/90">Guided Rule Builder UI</h4>
                <p>
                  Visual cues and structured workflows make rule building
                  understandable and accessible, reducing cognitive overload.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Outcomes */}

      <div className="w-full px-6 xl:px-0 py-12">
        <div className="max-w-screen-lg mx-auto">

          <div className="lg:flex">
            <div className="flex-1/4">
              <h3 className="">Outcomes</h3>
            </div>
            <div className="flex gap-6 flex-3/4">
              <div className=" flex-1/2">
                <p>
                  The prioritization framework introduced a new level of
                  flexibility in how sales teams manage their lead queues.
                  Instead of relying on static prioritization rules,
                  organizations can now adapt their strategies based on the data
                  available in their CRM.
                </p>
              </div>
              <div className="flex-1/2">
                <p>
                  Initial feedback indicated that users appreciated the
                  increased visibility into prioritization logic and the ability
                  to refine how leads were distributed to agents. The system
                  also reduced the need for manual lead management, allowing
                  teams to focus more directly on sales activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results & Business Impact */}

      <div className="w-full bg-stone-800/20 py-20 border-stone-800">
        <div className="max-w-screen-lg mx-auto px-6 xl:px-0">
          <h3 className="mb-8">Results & Business Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h2 className="text-6xl mb-2 text-cyan-300/90">+20%</h2>
              <p>Increase in dials</p>
            </div>
            <div>
              <h2 className="text-6xl mb-2 text-cyan-300/90">+22%</h2>
              <p>Increase in conversions</p>
            </div>
            <div>
              <h2 className="text-6xl mb-2 text-cyan-300/90">-40%</h2>
              <p>Decrease in negative dispositions</p>
            </div>
            <div>
              <h2 className="text-6xl mb-2 text-cyan-300/90">+28%</h2>
              <p>Increase in sales</p>
            </div>
          </div>
          <small>Source: VanillaSoft</small>
        </div>
      </div>

      <p className=" mt-24 text-center">
        © {new Date().getFullYear()} Yannick Boulanger. All rights reserved.
      </p>
    </div>
  );
}
