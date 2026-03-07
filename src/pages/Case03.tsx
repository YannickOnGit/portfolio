// import image001 from '/src/assets/VS-Old-CallerUI.png';
// import image002 from '/src/assets/VS-CallerUI-001.png';
import type { ReactNode } from 'react';

type SectionProps = {
  title: string;
  children: ReactNode;
};

const Section = ({ title, children }: SectionProps) => (
  <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-6">
      <div>
        <h2 className=" text-zinc-900 mb-4">{title}</h2>
      </div>
      <div className="pt-4 pb-9">{children}</div>
    </div>
  </div>
);

const journeyData = [
  {
    stage: "Login / Start Shift",
    tenantAdminAction: "Set up rules and priority levels (P1, P2, subgroups).",
    endUserAction: "Logs into VanillaSoft dashboard; sees queued leads based on priority and last result codes.",
    systemResponse: "Displays leads in queue order automatically based on rules and last result codes.",
    tenantAdminThoughts: "I hope the queue reflects our rules correctly.",
    endUserThoughts: "System already knows my top leads.",
    painPoints: "Initial skepticism about automated priorities.",
    opportunities: "Show a summary or visual cue explaining lead prioritization."
  },
  {
    stage: "Review Automated Queue",
    tenantAdminAction: "Monitor queue performance and adjust if needed.",
    endUserAction: "Reviews queued leads to decide which to contact first.",
    systemResponse: "Highlights high-priority leads visually (color coding, icons).",
    tenantAdminThoughts: "Are top leads really correct based on our rules?",
    endUserThoughts: "I can start with the highest-priority leads.",
    painPoints: "Complexity of priority rules may be unclear.",
    opportunities: "Visual indicators to explain priority and scheduling logic."
  },
  {
    stage: "Examine Lead Details",
    tenantAdminAction: "Ensure all necessary data points are available for agents.",
    endUserAction: "Opens lead profiles for context before outreach.",
    systemResponse: "Displays last result code, engagement score, and subgroup info.",
    tenantAdminThoughts: "Do agents have enough context?",
    endUserThoughts: "I have context on each lead’s last activity and priority.",
    painPoints: "Incomplete data can confuse agent decisions.",
    opportunities: "Inline summary of key metrics affecting prioritization."
  },
  {
    stage: "Outreach / Contact",
    tenantAdminAction: "Monitor engagement and follow-up metrics.",
    endUserAction: "Contacts lead via preferred channel (call, email, SMS).",
    systemResponse: "Automatically updates lead status and reschedules based on outcome.",
    tenantAdminThoughts: "Are agents contacting leads efficiently?",
    endUserThoughts: "I’m engaging the right leads at the right time.",
    painPoints: "Risk of missing leads if rules misunderstood.",
    opportunities: "Tooltip indicating why this lead was queued now."
  },
  {
    stage: "Record Outcome / Update Result Code",
    tenantAdminAction: "Adjust rules if patterns emerge.",
    endUserAction: "Logs call result or engagement outcome.",
    systemResponse: "Re-queues leads dynamically based on new result codes.",
    tenantAdminThoughts: "Rules need to adapt automatically.",
    endUserThoughts: "System adapts automatically; no manual sorting required.",
    painPoints: "High volume can be overwhelming without cues.",
    opportunities: "Dynamic preview of next lead to reduce uncertainty."
  },
  {
    stage: "Continuous Monitoring",
    tenantAdminAction: "Review metrics: call volume, conversions, engagement.",
    endUserAction: "Observes progress toward daily goals.",
    systemResponse: "Provides dashboard visualizations and insights.",
    tenantAdminThoughts: "Are rules achieving desired results?",
    endUserThoughts: "I can see how effective the queue is.",
    painPoints: "Interpreting raw data can be challenging.",
    opportunities: "Dashboards with clear KPIs and visual insights."
  },
  {
    stage: "Iteration / Optimization",
    tenantAdminAction: "Refine rules or subgroups (P1a, P1b) for better outcomes.",
    endUserAction: "—",
    systemResponse: "System applies new rules dynamically.",
    tenantAdminThoughts: "Optimization improves efficiency over time.",
    endUserThoughts: "—",
    painPoints: "Frequent changes can confuse agents.",
    opportunities: "Communicate updates clearly with notifications."
  }
];

export default function Case03() {
  return (
    <>


      <div className="bg-zinc-950 w-full text-gray-200">
        <div className="max-w-screen-lg mx-auto flex flex-nowrap space-x-1 px-6 pt-20 pb-12 mb-12 ">
          <div className="basis-6/8">
            <h4 className="text-indigo-400">Dynamic, Multi-Level Contact Prioritization for Sales Efficiency</h4>
            <h1 className="">UX Case 03: Intellective Routing</h1>
            <h4 className="basis-1/3 pt-6">Designed a multi-level contact prioritization framework for VanillaSoft that lets sales teams create custom rules to focus on high-value leads. The solution improved workflow efficiency, boosted conversion rates, and enhanced user satisfaction by balancing powerful features with a simple, intuitive design.</h4>
          </div>
        </div>
      </div>

      { /* Role & Contribution */}
      <Section title="Role & Contribution">
        <ul className="list-disc list-inside space-y-1">
          <li>Led end-to-end feature design: research, user flows, wireframes, high-fidelity UI design.</li>
          <li>Defined functional requirements and collaborated with developers during implementation.</li>
          <li>Conducted usability testing and iterated designs based on agent feedback.</li>
          <li>Designed a visual query-building interface to simplify complex prioritization logic.</li>
          <li>Customers also needed flexibility to use any data type and create subgroups (e.g., P1a, P1b), increasing complexity.</li>
        </ul>
      </Section >

      { /* Context */}
      <Section title="Context">
        <p className="pb-4">VanillaSoft is a cloud-based sales management platform integrating CRM, lead management, and telemarketing tools. It uses a queue-based approach to guide agents to the next best contact, based on data points such as renewal dates, rather than static lists. This ensures sales teams focus on the most relevant leads at the optimal time.</p>
      </Section >

      { /* Business Problem */}
      <Section title="Business Problem">
        <ul className="list-disc list-inside space-y-1">
          <li>Customers requested the ability to implement multiple levels of prioritization (P1, P2, etc.) to better target high-value leads.</li>
          <li>Current platform lacked dynamic prioritization, limiting workflow efficiency.</li>
          <li>Customers also needed flexibility to use any data type and create subgroups (e.g., P1a, P1b), increasing complexity.</li>
        </ul>
      </Section >

      { /* Business Goal */}
      <Section title="Business Goal">
        <ul className="list-disc list-inside space-y-1">
          <li>Improve sales team efficiency and conversion rates by directing agents to the most promising leads.</li>
          <li>Provide flexibility to define rules across diverse data types and multiple levels of prioritization.</li>
          <li>Ensure the system remains intuitive and accessible to prevent cognitive overload.</li>
        </ul>
      </Section >

      { /* Research and Insights */}
      <Section title="Research and Insights">
        <p className="pb-4"><strong>Methods:</strong> Customer feedback analysis, scenario mapping, edge case exploration.</p>
        <p className="pb-4"><strong>Findings:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Customers required complex inclusion/exclusion rules (e.g., prioritize A, C, F unless B = X).</li>
          <li>Early limitations risked extensive rework later. Supporting broad flexibility from the start was safer.</li>
          <li>Designing for both power users and non-technical users was essential.</li>
        </ul>
      </Section >

      {/* User Journey Map */}
      <div className="w-full text-gray-200 text-sm">
        <div className="max-w-screen-xl mx-auto">
          <h3 className="text-indigo-400 text-2xl pb-8">User Journey</h3>
        </div>

        <div className="w-full bg-zinc-900 text-gray-200 pt-6 mb-18">
          <div className="max-w-screen-xl mx-auto px-4">

            {/* Desktop Table */}
            <div className="hidden md:grid grid-cols-8 gap-4 border-b border-gray-700 pb-4 font-semibold text-white">
              <div>Stage</div>
              <div>Tenant/Admin Action</div>
              <div>End-User Action</div>
              <div>System Response</div>
              <div>Tenant/Admin Thoughts</div>
              <div>End-User Thoughts</div>
              <div>Pain Points / Risks</div>
              <div>Opportunities / Improvement</div>
            </div>

            {/* Desktop Rows */}
            <div className="hidden md:block">
              {journeyData.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-8 gap-4 py-4 border-b border-gray-800 ${i % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800'}`}
                >
                  <div className="px-2 py-1">{row.stage}</div>
                  <div className="px-2 py-1">{row.tenantAdminAction}</div>
                  <div className="px-2 py-1">{row.endUserAction}</div>
                  <div className="px-2 py-1">{row.systemResponse}</div>
                  <div className="px-2 py-1">{row.tenantAdminThoughts}</div>
                  <div className="px-2 py-1">{row.endUserThoughts}</div>
                  <div className="px-2 py-1">{row.painPoints}</div>
                  <div className="px-2 py-1">{row.opportunities}</div>
                </div>
              ))}
            </div>

            {/* Mobile Collapsible Cards */}
            <div className="md:hidden space-y-4">
              {journeyData.map((row, i) => (
                <details
                  key={i}
                  className="bg-zinc-800 rounded-lg p-4"
                >
                  <summary className="font-semibold text-white cursor-pointer">
                    {row.stage}
                  </summary>
                  <div className="mt-2 space-y-2 text-gray-200">
                    <p><strong>Tenant/Admin Action:</strong> {row.tenantAdminAction}</p>
                    <p><strong>End-User Action:</strong> {row.endUserAction}</p>
                    <p><strong>System Response:</strong> {row.systemResponse}</p>
                    <p><strong>Tenant/Admin Thoughts:</strong> {row.tenantAdminThoughts}</p>
                    <p><strong>End-User Thoughts:</strong> {row.endUserThoughts}</p>
                    <p><strong>Pain Points / Risks:</strong> {row.painPoints}</p>
                    <p><strong>Opportunities / Improvement:</strong> {row.opportunities}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      { /* Hypothesis */}
      <Section title="Hypothesis">
        <p className="pb-4">By implementing a customizable prioritization framework, users will:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Focus on the most relevant leads at the right time.</li>
          <li>Improve efficiency and shorten sales cycles.</li>
          <li>Adapt workflows without vendor or IT support.</li>
        </ul>
        <p className="pt-4">However, without a clear and intuitive UI, the complexity could overwhelm users. Simplicity in interaction design would be critical to adoption.</p>
      </Section>

      { /* Design Solution */}
      <Section title="Design Solution">
        <p className="pb-4">Query-Building Framework for Prioritization</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Enhanced Lead Prioritization: Implemented real-time, customizable routing filters that dynamically rank leads based on various criteria, ensuring agents always engage with the most relevant prospects.</li>
          <li>Streamlined Workflow: Introduced a queue-based routing system that automates lead assignment, reducing decision fatigue and allowing agents to focus on high-value interactions.</li>
          <li>Continuous Optimization: Developed an intuitive interface for administrators to adjust routing filters and criteria in real-time, enabling ongoing refinement of lead prioritization strategies without disrupting agent productivity.</li>
        </ul>
      </Section>

      { /* Challenges & Lessons Learned */}
      <Section title="Challenges & Lessons Learned">
        <ul className="list-disc list-inside space-y-1">
          <li>Balancing flexibility with simplicity in the user interface.</li>
          <li>Designing a rules builder that communicates complex conditions clearly.</li>
          <li>Ensuring adaptability to future scenarios without costly rework.</li>
        </ul>
      </Section>

      { /* Results / Impact */}
      <Section title="Results / Impact">
        <ul>
          <li>Achieved a 500% increase in call volume without additional operational overhead, as reported by One of a Kind Sales.</li>
          <li>Streamlined lead management processes, reducing manual intervention and administrative overhead, as experienced by SalesRoads.</li>
          <li>Enhanced lead prioritization and routing, leading to improved sales efficiency and conversion rates.</li>
        </ul>
      </Section>

    </>
  );
}