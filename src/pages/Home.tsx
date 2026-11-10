import CaseStudies from "../components/CaseStudies";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <div className="w-full text-stone-100">
      <section
        id="top"
        aria-labelledby="home-heading"
        className="mb-16 max-w-screen-lg mx-auto px-6 xl:px-0"
      >
        <h1 id="home-heading">Yannick Boulanger</h1>
        <h2 className="uppercase font-light bg-stone-800/50">
          <span className="uppercase font-bold">Product Designer </span>
          Solutions for Complex Human Applications
        </h2>
        <div className="lg:flex flex-wrap gap-12 mt-24">
          <div className="flex-1">
            <h3 className="text-cyan-300/90">Enterprise SaaS Delivery</h3>
            <p>
              I conceptualize complex SaaS products from discovery through
              delivery and ground product strategy in user research and
              real-world workflows.
            </p>
            <h3 className="text-cyan-300/90">Cross-Functional Collaboration</h3>
            <p>
              I collaborate with Product, Engineering, and stakeholders to
              turn vision into execution, delivering maximum value while making
              complex systems scalable and user-friendly.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-cyan-300/90">Structured, Usable Systems</h3>
            <p>
              I prioritize information architecture, consistency, and
              usability over visual polish, ensuring highly technical
              environments remain accessible, secure, and reliable.
            </p>
            <h3 className="text-cyan-300/90">Evidence-Based Practice</h3>
            <p>
              I take an iterative, evidence-based approach, guiding design
              decisions with data and measuring impact through meaningful user
              and business outcomes.
            </p>
          </div>
        </div>
      </section>

      <CaseStudies />
      <Portfolio />

      <section
        id="summary"
        aria-labelledby="summary-heading"
        className="text-white max-w-screen-lg mx-auto lg:flex flex-wrap mb-12 px-6 xl:px-0"
      >
        <h2 id="summary-heading">Summary</h2>
        <div className="lg:flex gap-6">
          <div className="flex-1">
            <p>
              Senior Product Designer with 15+ years of experience leading
              complex B2B SaaS and enterprise platforms from concept through
              delivery.
            </p>
            <p>
              I combine systems thinking, technical depth, and product
              strategy to simplify complex environments, from SD-WAN platforms
              to scalable CRM systems.
            </p>
          </div>
          <div className="flex-1">
            <p>
              I’ve led large-scale UX initiatives that improved revenue
              performance, increased operational efficiency, and enabled
              platform scalability.
            </p>
            <p>
              I align business goals, architecture, and user needs to deliver
              secure, intuitive, and resilient product experiences at scale
              across complex enterprise ecosystems.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="capabilities-heading"
        className="w-full bg-stone-800/20 mb-12 py-12 border-stone-800"
      >
        <div className="max-w-screen-lg mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 px-6 xl:px-0">
          <h2 id="capabilities-heading" className="sr-only">
            Core capabilities
          </h2>
          <div className="flex-1">
            <dl>
              <dt className="pb-2 text-cyan-300/90 text-3xl">Product</dt>
              <dd className="text-lg text-white">
                Vision, Strategy <br />& Agile Delivery
              </dd>
            </dl>
          </div>
          <div className="flex-1">
            <dl>
              <dt className="pb-2 text-cyan-300/90 text-3xl">UI/UX</dt>
              <dd className="text-lg text-white">
                Visual, Workflow & Interaction Design
              </dd>
            </dl>
          </div>
          <div className="flex-1">
            <dl>
              <dt className="pb-2 text-cyan-300/90 text-3xl">SaaS/B2B</dt>
              <dd className="text-lg text-white">
                Scalable Enterprise <br />
                Platforms
              </dd>
            </dl>
          </div>
          <div className="flex-1 rounded-br-lg">
            <dl>
              <dt className="pb-2 text-cyan-300/90 text-3xl">Front-End</dt>
              <dd className="text-lg text-white">
                Implementation & Accessibility
              </dd>
            </dl>
          </div>
        </div>
      </section>

      <p className="mt-24 text-center">
        © {new Date().getFullYear()} Yannick Boulanger. All rights reserved.
      </p>
    </div>
  );
}