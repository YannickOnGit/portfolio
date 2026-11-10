import ImageCarousel2 from "../components/ImageCarousel2";

import image001 from "/src/assets/Case 01/Case-001-Caller-UI.png";
import image002 from "/src/assets/Case 01/Case-001-User-Journey.png";
import image003 from "/src/assets/Case 01/Case-001-Diagram.png";
import image004 from "/src/assets/Case 01/Case-001-Screen-01.png";
import image005 from "/src/assets/Case 01/Case-001-Screen-02.png";
import image006 from "/src/assets/VS-Old-CallerUI.png";

export default function Case01() {
  const images = [
    {
      src: image001,
      alt: "Final multi-panel workspace integrating CRM, scripts, and communication tools.",
    },
 //   {
 //     src: image002,
 //     alt: "Caller UI workflow illustrating the end-to-end user journey.",
 //   },
 //   {
 //    src: image003,
 //    alt: "UI panel architecture defining layout, hierarchy, and interactions.",
 //   },
    {
      src: image004,
      alt: "Multi-panel workspace with integrated SMS communication.",
    },
    {
      src: image005,
      alt: "Multi-panel workspace with heads-up display (HUD) interface.",
    },
  ];

  return (
    <div>
      {/* Intro */}

      <div className="w-full px-6 xl:px-0">
        <div className="max-w-screen-lg mx-auto">
          <h1>Case 001 : VanillaSoft</h1>
          <h2 className="uppercase mb-12 font-light leading-none bg-stone-800/50">
          <span className="uppercase font-bold bg-red-stone/50 block">Interface Redesign </span>
            Multi-Panel Workspace for Sales Workflows
          </h2>
          <div className="lg:flex gap-6 py-6">
            <div className="flex-1/3 mb-6">
              <h4 className="text-cyan-300/90">
                Contributions
              </h4>
              <ul className="mt-4 space-y-1 text-lg">
                <li>Contextual & User Research</li>
                <li>Workflow & Task Analysis</li>
                <li>Market & Competitor Analysis</li>
                <li>Information Architecture</li>
                <li>Interaction Design</li>
                <li>Product Design & UI/UX</li>
              </ul>
            </div>
            <div className="flex-2/3">
              <h4 className="text-cyan-300/90">Assignment</h4>
              <p>
                The objective of this project was to redesign VanillaSoft’s core
                Caller UI to improve usability, scalability, and overall user
                satisfaction while modernizing its visual design and aligning it
                with contemporary interaction standards.
              </p>
              <p>
                The new interface was designed to support both novice and
                experienced users, streamline complex sales workflows, and
                accommodate a growing user base without compromising
                performance.
              </p>
              <p>
                The redesign focused on improving task efficiency, reducing
                cognitive load, and providing a flexible, responsive workspace
                across different devices and screen sizes.
                I was responsible for research, design, front-end integration,
                and QA throughout the project lifecycle.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project gallery */}

      <ImageCarousel2 images={images} />

      {/* Context */}

      <div className="w-full px-6 xl:px-0 py-12">
        <div className="max-w-screen-lg mx-auto">
          <div className="lg:flex">
            <div className="flex-1/4">
              <h3>Context</h3>
            </div>
            <div className="lg:flex  gap-6 flex-3/4">
              <div className="flex-1/2">
                <p>
                  VanillaSoft is a cloud-based sales management platform that integrates CRM, lead management, and telemarketing tools to streamline sales team workflows. It helps organizations manage outreach and customer relationships in a more structured and efficient way.
                </p>
              </div>
              <div className="flex-1/2">
                <p>
                  What sets VanillaSoft apart from competitors is its queue-based approach, which routes agents to the next best contact based on available data instead of a traditional list-based system. This prevents agents from cherry-picking contacts and promotes efficiency, enabling faster and more effective workflows.
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
              <blockquote className="border-l-4 border-teal-300/80 pl-6 italic text-stone-400">
                The Caller UI, a central part of the platform used during live
                calls, had become visually and technically outdated. As the
                product evolved, the interface became increasingly difficult to
                extend and maintain.
              </blockquote>
              <blockquote className="mt-6 border-l-4 border-teal-300/80 pl-6 italic text-stone-400">
                Our research revealed that agents relied heavily on the Caller
                UI to input data but frequently had to switch between multiple
                tools to access customer information, scripts, and reference
                documents. This increased cognitive load, slowed workflows, and reduced
                call quality.
              </blockquote>
              <blockquote className="mt-6 border-l-4 border-teal-300/80 pl-6 italic text-stone-400">
                Additionally, the interface architecture made it difficult to
                scale the UI as new features were added. The redesign needed
                to improve workflow efficiency while supporting the platform’s
                long-term evolution.
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
              <h3>Research</h3>
            </div>
            <div className="lg:flex gap-6 flex-3/4">
              <div className="flex-1/2">
                <p>
                  During the research phase, we studied telemarketer workflows and analyzed competitors.
                </p>
                <p>
                  A key insight came from photos collected by our CEO and sales representatives at customer call centers, which showed that most users rely heavily on external resources to complete their tasks.
                </p>
              </div>
              <div className="flex-1/2">
                <p>
                  This reliance creates inefficiencies through constant context switching and increases cognitive load, ultimately slowing down workflows and reducing overall focus during customer interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hypothesis */}

      <div className="w-full px-6 xl:px-0 py-12 bg-stone-800/20 border-stone-800">
        <div className="max-w-screen-lg mx-auto">
          <div className="lg:flex">
            <div className="flex-1/4">
              <h3>Hypothesis</h3>
            </div>
            <div className="flex-3/4">
              <blockquote className="mb-6 border-l-4 border-teal-300/80 pl-6 italic text-stone-400">
                If we integrate these external resources directly into the
                Caller UI, users will experience a more seamless workflow,
                reduce cognitive load, and complete tasks more efficiently.
              </blockquote>
              <blockquote className=" border-l-4 border-teal-300/80 pl-6 italic text-stone-400">
                Consolidating tools such as customer details, compliance
                documents, and other essential applications will also generate
                richer data for the platform’s queue-based routing system,
                improving overall performance and outcomes.
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
              <h3>Solution</h3>
            </div>
            <div className="lg:flex flex-3/4 gap-6">
              <div className="flex-1/2">
                <p>
                  The redesign introduced a flexible multi-panel layout to
                  optimize space and support dynamic workflows, which was
                  innovative at the time. The interface adapts to user tasks,
                  offering a personalized and responsive experience.
                </p>
                <p>
                  The grid layout, implemented using Kendo UI, ensured stability
                  and performance at scale. Additional information for each
                  contact was fetched asynchronously to minimize wait times.
                </p>
              </div>
              <div className="flex-1/2">
                <p>
                  Panels could be resized, reorganized, or removed, allowing the
                  workspace to adapt to user workflows. Inline editing including
                  undo functionality was available to most of the content
                  presented with customization options.
                </p>
                <p>
                  The redesign supported business growth, boosted user
                  retention, and acted as a differentiator in the competitive
                  CRM market, contributing to strong ROI and long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key features */}

      <div className="w-full px-6 xl:px-0 py-12 bg-stone-800/20 border-stone-800">
        <div className="max-w-screen-lg mx-auto">
          <div className="lg:flex">
            <div className="flex-1/4">
              <h3>Feature</h3>
            </div>
            <div className="flex-3/4">
              <h4 className="text-cyan-300/90">
                Modular Multi-Panel Layout
              </h4>
              <p>
                A flexible grid allowing users to resize, reorganize, or hide
                panels based on their specific campaign needs.
              </p>
              <h4 className="text-cyan-300/90">Technical Scalability</h4>
              <p>
                Implemented via Kendo UI for responsive, stable performance with
                asynchronous loading of contact details to maintain user flow.
              </p>
              <h4 className="text-cyan-300/90">Deep Integration</h4>
              <p>
                Embedded APIs for Email, SMS, and Payment tools directly into
                the workspace to eliminate the need for external applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Outcomes */}

      <div className="w-full px-6 xl:px-0 py-12">
        <div className="max-w-screen-lg mx-auto">
          <div className="lg:flex">
            <div className="flex-1/4">
              <h3>Outcomes</h3>
            </div>
            <div className="lg:flex flex-3/4 gap-6">
              <div className="flex-1/2">
                <p>
                  The redesigned Caller UI became a flagship feature of
                  VanillaSoft, improving workflows by consolidating tools and
                  reducing context-switching. An external study showed users
                  experienced a 30%-100% increase in productivity and completed
                  tasks with fewer errors.
                </p>
                <p>
                  The responsive, customizable interface allowed users to tailor
                  their workspace, increasing satisfaction and reducing
                  cognitive load. User feedback was positive, with VanillaSoft
                  earning 4.7 stars on Capterra and 4.6 stars on G2.
                </p>
              </div>
              <div className="flex-1/2">
                <p>
                  To maintain performance during calls, contact information
                  loads first while additional data is retrieved asynchronously
                  in the background.
                </p>
                <p>
                  Several integrations—including email, SMS, payment processing,
                  and other communication tools—were embedded directly into the
                  workspace, reducing reliance on external applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business impact */}

      <div className="w-full px-6 xl:px-0 py-12 bg-stone-800/20 border-stone-800">
        <div className="max-w-screen-lg mx-auto">
          <h3 className="mb-8">Results & Business Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h2 className="text-5xl mb-2 text-cyan-300/90 font-medium">
                30–100%
              </h2>
              <p className="text-lg">
                Increase in agent productivity across various sales workflows.
              </p>
            </div>
            <div>
              <h2 className="text-5xl mb-2 text-cyan-300/90 font-medium">
                4.7/5
              </h2>
              <p className="text-lg">
                Average user rating on Capterra, citing improved ease of use.
              </p>
            </div>
            <div>
              <h2 className="text-5xl mb-2 text-cyan-300/90">Reduction</h2>
              <p className="text-lg">
                Reduced cognitive load through workspace customization and
                workflow enhancement.
              </p>
            </div>
          </div>
          <small>Source: VanillaSoft</small>
        </div>
      </div>

      {/* Legacy comparison */}

      <div className="w-full py-12 opacity-50 hover:opacity-100 transition-opacity">
        <div className="max-w-screen-lg mx-auto px-6">
          <h3 className="text-stone-500 text-xl">
            Legacy Interface (For Context)
          </h3>
          <img src={image006} alt="Old VanillaSoft UI" />
        </div>
      </div>

      {/* Footer */}

      <p className="mt-24 text-center">
        © {new Date().getFullYear()} Yannick Boulanger. All rights reserved.
      </p>
    </div>
  );
}