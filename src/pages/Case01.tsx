import image001 from '/src/assets/VS-Old-CallerUI.png';
import image002 from '/src/assets/VS-CallerUI-001.png';
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

// Sample journeyData
const journeyData = [
  {
    stage: '1. Start of Shift / Log In',
    goals: 'Access Caller UI and start calling quickly',
    actions: 'Open VanillaSoft in browser, log in',
    painPoints: 'Slow setup; extra windows for tools',
    opportunities: 'Single login with integrated tools; persist user layout preferences',
  },
  {
    stage: '2. Reviewing Next Contact',
    goals: 'Understand contact details before call',
    actions: 'View queue-based contact info, check external tools',
    painPoints: 'Switching windows increases cognitive load',
    opportunities: 'Consolidate all customer details into one panel-based interface',
  },
  {
    stage: '3. During the Call',
    goals: 'Communicate, update CRM, manage compliance',
    actions: 'Take notes, access scripts, process payments, send SMS/email',
    painPoints: 'Switching tabs causes delays',
    opportunities: 'Multi-panel workspace with resizable panels for scripts, compliance docs, payment tools',
  },
  {
    stage: '4. Post-Call Actions',
    goals: 'Complete follow-up efficiently',
    actions: 'Update CRM, send confirmation, schedule follow-up',
    painPoints: 'Slow navigation, prone to errors',
    opportunities: 'Integrate post-call actions in Caller UI; fetch follow-up tools asynchronously',
  },
  {
    stage: '5. Loop: Route Next Contact',
    goals: 'Continue calling efficiently',
    actions: 'Automatic routing based on queue',
    painPoints: 'Manual switching causes delays',
    opportunities: 'Automate routing and update UI dynamically',
  },
  {
    stage: '6. End of Shift',
    goals: 'Log off and review performance',
    actions: 'Review call metrics, finalize tasks',
    painPoints: 'Data spread across systems; no quick overview',
    opportunities: 'Centralized dashboard summarizing calls, tasks, outcomes',
  },
];

export default function Case01() {
  return (
    <div>

      {/* Intro Header */}
      <div className="bg-zinc-950 w-full text-gray-200">
        <div className="max-w-screen-lg mx-auto flex flex-nowrap space-x-1 px-6 pt-20 pb-12 mb-12 ">
          <div className="basis-6/8">
            <h4 className="text-indigo-400 pb-4">
              Product case 01: Scalable, Multi-Panel Workspace for High-Volume Sales Workflows
            </h4>
            <h1 className="text-white">VanillaSoft Caller UI Redesign</h1>
            <h4 className="pt-4">
              Redesigned the Caller UI of VanillaSoft’s sales platform to modernize its look, improve usability, and solve scalability challenges for a growing user base.
            </h4>
          </div>
        </div>
      </div>

      {/* Role & Contribution */}
      <Section title="Role & Contribution">
        <ul className="list-disc list-inside space-y-1">
          <li>Led end-to-end redesign: UX research, user flows, wireframes, high-fidelity design</li>
          <li>Wrote functional requirements and collaborated with developers during implementation</li>
          <li>Conducted usability testing, gathered feedback, iterated designs</li>
          <li>Contributed to front-end development and QA/regression testing</li>
        </ul>
      </Section>

      {/* Context */}
      <Section title="Context">
        <p className="pb-4">
          VanillaSoft is a cloud-based sales management platform integrating CRM, lead management, and telemarketing tools. Its queue-based approach routes agents to the next best contact, preventing cherry-picking and promoting efficiency.
        </p>
        <p className="pb-2 font-semibold">Problem:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Outdated UI reduced engagement and adoption</li>
          <li>Agents needed multiple browser windows for external tools, increasing cognitive load</li>
          <li>Scalability, responsiveness, and accessibility were limited</li>
        </ul>
      </Section>

      {/* Image */}
      <div className="bg-white w-full text-gray-200 mb-9 border-y-1 border-zinc-400">
        <div className="w-full">
          <div className="max-w-screen-lg mx-auto flex flex-nowrap py-6 ">
            <img className='mx-6 border-zinc-600 border-1' src={image001} alt="VanillaSoft UI overview" />
          </div>
        </div>
      </div>

      {/* Business Goal */}
      <Section title="Business Goal">
        <ul className="list-disc list-inside space-y-1">
          <li>Modernize UI for usability and visual appeal</li>
          <li>Consolidate tools into a unified interface to reduce cognitive load</li>
          <li>Build a scalable, flexible UI supporting future growth</li>
          <li>Ensure WCAG 2.0 accessibility compliance</li>
          <li>Enable smooth integration with backend systems</li>
        </ul>
      </Section>

      {/* Research & Insights */}
      <Section title="Research & Insights">
        <p className="pb-2 font-semibold">Methods:</p>
        <p className="pb-4">Proto-personas, market analysis, workstation photos, colleague feedback</p>
        <p className="pb-2 font-semibold">Key Findings:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Agents used multiple windows for VanillaSoft + external tools</li>
          <li>Context-switching slowed workflows and increased errors</li>
        </ul>
        <p className="pt-4 font-semibold">Opportunity:</p>
        <p>Consolidate critical tools and information into a single workspace</p>
      </Section>

      {/* Caller UI User Journey */}
      <div className="w-full text-gray-800 py-6 mb-12 border-y-1 border-zinc-800 text-sm">
        <div className="max-w-screen-xl mx-auto">
        <h3 className="text-indigo-800 text-2xl pb-4">User Journey: Caller UI Workflow</h3>
        </div>
        <div className="max-w-screen-xl mx-auto border-zinc-600 border-1">
          

          {/* Desktop Table */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-6 gap-4 border-b border-gray-700 py-4 font-semibold text-zinc-800">
            <div className='pl-4'>Stage</div>
            <div>User Goals</div>
            <div>Actions</div>
            <div>Pain Points</div>
            <div className="col-span-2">Opportunities / Solutions</div>
          </div>

          {/* Desktop Rows */}
          <div className="hidden md:block">
            {journeyData.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-6 gap-4 py-2 border-b border-gray-400 ${i % 2 === 0 ? 'bg-zinc-100' : 'bg-zinc-200' }`}
              >
                <div className="pl-4 py-2">{row.stage}</div>
                <div className=" py-2">{row.goals}</div>
                <div className=" py-2">{row.actions}</div>
                <div className=" py-2">{row.painPoints}</div>
                <div className="col-span-2 py-2">{row.opportunities}</div>
              </div>
            ))}
          </div>

          {/* Mobile Collapsible Cards */}
          <div className="md:hidden space-y-4">
            {journeyData.map((row, i) => (
              <details key={i} className="bg-zinc-800 rounded-lg p-4">
                <summary className="font-semibold text-white cursor-pointer">
                  {row.stage}
                </summary>
                <div className="mt-2 space-y-2 text-gray-200">
                  <p>
                    <strong>User Goals:</strong> {row.goals}
                  </p>
                  <p>
                    <strong>Actions:</strong> {row.actions}
                  </p>
                  <p>
                    <strong>Pain Points:</strong> {row.painPoints}
                  </p>
                  <p>
                    <strong>Opportunities / Solutions:</strong> {row.opportunities}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Hypothesis */}
      <Section title="Hypothesis">
        <p className="italic pb-4">
          By creating a unified, flexible interface that brings together key tools—CRM, compliance, payments, and SMS/email—users will:
        </p>
        <ul className="list-disc list-inside space-y-2 pb-4">
          <li>
            <strong>Work faster</strong> with fewer interruptions
          </li>
          <li>
            <strong>Make fewer errors</strong> thanks to streamlined workflows
          </li>
          <li>
            <strong>Experience less cognitive load</strong>, staying focused on high-value tasks
          </li>
        </ul>
        <p>
          This approach transforms the Caller UI from a fragmented set of windows into a{' '}
          <strong>centralized, efficient workspace</strong> that supports users’ natural workflow and
          enhances overall productivity.
        </p>
      </Section>

      {/* Design Solution */}
      <Section title="Design Solution">
        <ul className="list-disc list-inside space-y-1">
          <li>Flexible Multi-Panel Layout: Resizable, rearrangeable panels adapting to workflows</li>
          <li>Asynchronous Data Loading: Fetch contact info in the background to reduce wait times</li>
          <li>Integrated Tools: APIs for SMS, payment, and email embedded, eliminating context-switching</li>
          <li>Accessibility & Responsiveness: WCAG 2.0 compliance, keyboard navigation, high-contrast design</li>
          <li>Grid Layout Implementation: Kendo UI for stability, responsiveness, and performance</li>
        </ul>
      </Section>

      {/* Design System Contributions */}
      <Section title="Design System Contributions">
        <ul className="list-disc list-inside space-y-1">
          <li>Consolidated legacy UI elements into modular, reusable components</li>
          <li>Improved information architecture, microcopy, and inline editing components</li>
          <li>Documented layout specifications and interaction patterns for smooth developer handoff</li>
          <li>Collaborated with frontend team on .NET framework integration</li>
        </ul>
      </Section>

      {/* Challenges & Lessons Learned */}
      <Section title="Challenges & Lessons Learned">
        <ul className="list-disc list-inside space-y-1">
          <li>Balancing simplicity with feature richness</li>
          <li>Migrating legacy UI without disrupting workflows</li>
          <li>Coordinating cross-functional teams (design, development, QA)</li>
          <li>Embedding accessibility from the start</li>
          <li>Continuous user feedback ensures effective design</li>
        </ul>
      </Section>

      {/* Results / Impact */}
      <Section title="Results / Impact">
        <ul className="list-disc list-inside space-y-1">
          <li>
            Productivity increase: <strong>30%–100%</strong> reported by users
          </li>
          <li>
            Cognitive load reduction: Consolidated multiple tools into one interface
          </li>
          <li>
            User satisfaction: <strong>4.7-star</strong> rating on Capterra, <strong>4.6</strong> on G2
          </li>
          <li>Scalability: Design system supports future growth</li>
          <li>Accessibility: WCAG 2.0 compliance achieved</li>
        </ul>
      </Section>

      {/* Caller UI Image */}
      <div className=" text-gray-200 border-y-1 border-zinc-800">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto   px-12 py-6  flex flex-nowrap">
            <img src={image002} className='border-zinc-600 border-1' alt="VanillaSoft Caller UI overview" />
          </div>
        </div>
      </div>
    </div>
  );
}
