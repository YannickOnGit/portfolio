import image001 from '/src/assets/VS-Old-CallerUI.png';
import image002 from '/src/assets/VS-CallerUI-001.png';

export default function Case01() {
  return (
    <>
      <div className="bg-zinc-950 w-full">

        <div className="max-w-screen-lg text-white mx-auto flex flex-nowrap space-x-1 pt-20 pb-12">
          <div className='basis-4/7 '>
            <h1 className="text-indigo-400 pb-4">Product case 01: Scalable, Multi-Panel Workspace for High-Volume Sales Workflows</h1>
            <h2 className="">Caller UI for VanillaSoft – Supporting Efficiency and Scalability</h2>
            <h3 className="basis-1/3 pt-4">This case study examines the redesign of VanillaSoft’s Caller UI to address usability and scalability limitations. Research revealed that users frequently relied on multiple external tools, highlighting a need for workflow consolidation. The resulting unified interface not only streamlined user tasks and reduced cognitive load but also amplified the effectiveness of VanillaSoft’s queue-based routing model—its core functional differentiator within the CRM space.</h3>
          </div>
          <div></div>
        </div>

        <div className="text-white max-w-screen-lg mx-auto flex flex-nowrap space-x-1">
          <div className="basis-1/7 p-6">
          </div>
          <div className="basis-2/7 bg-zinc-900 p-6">
            <h4 className='pb-3 text-indigo-400'>Role & Contribution</h4>
            <p>Redesign leadership</p> 
            <p>UX strategy</p>
            <p>User research</p>
            <p>Scalable implementation</p>
          </div>
          <div className="basis-2/7 bg-zinc-900 p-6">
            <h4 className='pb-3 text-indigo-400'>Design Challenge</h4>
            <p>Legacy UI constraints</p>
            <p>Context switching</p>
            <p>Workflow diversity</p>
            <p>Scalability</p>
          </div>
          <div className="basis-2/7 bg-zinc-900 p-6">

            <h4 className='pb-3 text-indigo-400'>Outcome</h4>
            <p>+30–100% efficiency </p>
            <p>+30% YoY revenue</p>
            <p>4.7★ Capterra</p>
            <p>4.6★ G2</p>
          </div>
        </div>

      </div >

      { /* Intro */}
      <div className="w-full">
        <div className="max-w-screen-lg mx-auto py-12 flex flex-nowrap space-x-3">    
          <div className="basis-2/7">
            <h3>Overview</h3>
          </div>
          <div className="basis-5/7">
            <p>VanillaSoft is a cloud-based sales management platform integrating customer relationship management (CRM), lead management, and telemarketing tools to streamline sales team workflows. What sets VanillaSoft apart from competitors is its queue-based approach, which routes agents to the next best contact based on available data rather than relying on a traditional list-based system. This prevents agents from cherry-picking contacts and promotes efficiency, enabling faster and more effective workflows.</p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-screen-lg mx-auto pb-12 flex flex-nowrap3">
          <img src={image001} alt="Description" />
        </div>
      </div>

      { /* Business Problem */}
      <div className="w-full">
        <div className="max-w-screen-lg mx-auto pb-12 flex flex-nowrap space-x-3">
          <div className="basis-2/7">
            <h3>Business Problem</h3>
          </div>
          <div className="basis-5/7">
            <p className="pb-4">The Caller UI, a critical part of VanillaSoft’s platform, was both visually and technically outdated, hindering user engagement and scalability. The design’s lack of modern aesthetics made it feel cumbersome and unappealing, creating a poor first impression for users. Additionally, while the UI was quick to load, scaling it became difficult as the user base grew and more complex needs emerged.</p>
            <p>This outdated design limited user adoption and failed to scale with VanillaSoft’s growth. A comprehensive redesign was needed to improve both the user experience and scalability to accommodate future demands and sustain business expansion.</p>
          </div>
        </div>
      </div>

      { /* Business Goal */}
      <div className="w-full">
        <div className="max-w-screen-lg mx-auto pb-12 flex flex-nowrap space-x-3">
          <div className="basis-2/7">
            <h3>Business Goal</h3>
          </div>
          <div className="basis-5/7">
            <p className="pb-4">The goal was to modernize the Caller UI, improving both its visual appeal and usability while aligning it with current design trends. Although aesthetics were important, the redesign needed to address critical scalability issues that arose as VanillaSoft’s user base grew. The objective was to create a more flexible user experience, resolve performance bottlenecks, and differentiate VanillaSoft from its competitors, making it scalable for the long term.</p>
            <p>This presented a significant opportunity to redefine the platform's user experience, ensuring it could scale efficiently and meet future demands. It was a crucial responsibility that would impact both user satisfaction and long-term business success.</p>          </div>
        </div>
      </div>

      { /* Research and Insights */}
      <div className="w-full">
        <div className="max-w-screen-lg mx-auto pb-12 flex flex-nowrap space-x-3">
          <div className="basis-2/7">
            <h3>Research and Insights</h3>
          </div>
          <div className="basis-5/7">
            <p className="pb-4">To understand the challenges of telemarketing agents, I began by researching the field and gathering insights through proto-personas and market comparisons. While no groundbreaking insights emerged initially, I discovered valuable context and patterns. Our user base spanned from experienced sales representatives to telemarketers and even inmates, offering a diverse set of needs.</p>
            <p className="pb-4">Given logistical constraints, in-person surveys at call centers weren’t feasible at the time. Instead, I leveraged business trips to gather photos of agent workstations and asked colleagues to collect feedback on my behalf. Upon reviewing the photos, a common pattern emerged: many agents were using two browser windows simultaneously—one for VanillaSoft and another for external tools like spreadsheets and websites.</p>
            <p className="">This insight revealed a critical need for consolidation. The practice of multitasking across windows not only created inefficiencies but also increased cognitive load, raised the risk of errors and slowed agents' overall performance. This discovery led to the decision to create a more unified interface, integrating these disparate tools into a single workspace to minimize context-switching and streamline workflows.</p>
          </div>
        </div>
      </div>

      { /* Hypothesis */}
      <div className="w-full">
        <div className="max-w-screen-lg mx-auto pb-12 flex flex-nowrap space-x-3">
          <div className="basis-2/7">
            <h3>Hypothesis</h3>
          </div>
          <div className="basis-5/7">
            <p className="pb-4">If we create a unified interface within VanillaSoft that consolidates key tasks and tools—such as customer details, compliance documents, and other essential applications—users will experience a more seamless workflow. This will reduce the need for multiple browser windows, minimize cognitive load, and increase task efficiency. The integration will help users make fewer errors and complete tasks more quickly, improving overall user satisfaction.</p>
            <p className="">Additionally, by streamlining the interface, we would be able to leverage more user data to enhance the platform’s queue-based routing model, further optimizing performance and outcomes.</p>
          </div>
        </div>
      </div>

      { /* Solution */}
      <div className="w-full">
        <div className="max-w-screen-lg mx-auto pb-12 flex flex-nowrap space-x-3">
          <div className="basis-2/7">
            <h3>Solution</h3>
          </div>
          <div className="basis-5/7">
            <p className="pb-4">The solution evolved into a flexible, multi-panel layout designed with a minimalist approach to optimize space utilization. This design allowed the interface to adapt dynamically to user tasks, offering a personalized experience. The grid layout was implemented using Kendo UI, providing a responsive and stable experience without compromising performance.</p>
            <p className="pb-4">To enhance the experience further, once a contact was loaded, additional information was fetched asynchronously in the background. This minimized wait times, keeping users in the flow without interruption. One of the key principles of the redesign was giving users control over their workspace. They could resize, reorganize, or remove panels based on their preferences, allowing the interface to adapt to their specific workflows.</p>
            <p className="">Several integrations, such as API, payment systems, SMS, and email, were also incorporated directly into the platform, consolidating essential tools in one place. This integration eliminated the need for agents to juggle multiple applications or browser windows, ultimately improving the user experience.</p>
          </div>
        </div>
      </div>

      { /* Business Outcomes */}
      <div className="w-full">
        <div className="max-w-screen-lg mx-auto pb-12 flex flex-nowrap space-x-3">
          <div className="basis-2/7">
            <h3>Business Outcomes</h3>
          </div>
          <div className="basis-5/7">
            <p className="pb-4">The redesigned Caller UI has become a flagship feature of VanillaSoft, setting a new benchmark for both user experience and functionality. The unified interface significantly improved user workflows by consolidating tools and reducing context-switching. As a result, users experienced a 30%-100% increase in productivity and completed tasks more efficiently with fewer errors.</p>
            <p className="pb-4">The customizable, responsive design empowered users to tailor their workspace, increasing satisfaction while reducing cognitive strain. User feedback was overwhelmingly positive, with VanillaSoft earning a 4.7-star rating on Capterra and a 4.6-star rating on G2.</p>
            <p className=" ">From a business perspective, the redesign played a crucial role in VanillaSoft’s continued growth. It not only helped in enhancing user satisfaction but also acted as a key differentiator in the competitive CRM market, leading to strong ROI and sustained success in the long run.</p>
          </div>
        </div>
      </div>

      { /* Caller UI */}
      <div className="w-full">
        <div className="max-w-screen-xl mx-auto pb-12 flex flex-nowrap3">
          <img src={image002} alt="Description" />
        </div>
      </div>
    </>
  );
}