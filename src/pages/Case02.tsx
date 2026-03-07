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

const journeyData = [
  {
    stage: '1. Enrollment Invitation Sent',
    tenantAdminAction: 'Admin enters user’s name & email in Orchestrator',
    endUserAction: '—',
    systemResponse: 'System sends enrollment email with secure one-time link',
    tenantAdminThoughts: '“Great, one less account I have to create manually.”',
    endUserThoughts: '—',
    painPoints: 'Email may go to spam; unrecognized sender',
    opportunities: 'Use brand visuals, friendly sender name',
  },
  {
    stage: '2. User Clicks Enrollment Link',
    tenantAdminAction: '—',
    endUserAction: 'Clicks secure link in email',
    systemResponse: 'Auto-login to self-service portal',
    tenantAdminThoughts: '—',
    endUserThoughts: '“Nice, no need to type credentials yet.”',
    painPoints: 'Expired link frustrates users',
    opportunities: 'Display expiry in email, allow resend',
  },
  {
    stage: '3. Create Secure Password',
    tenantAdminAction: '—',
    endUserAction: 'Chooses & confirms strong password',
    systemResponse: 'Password saved',
    tenantAdminThoughts: '—',
    endUserThoughts: '“That was easy — I feel secure.”',
    painPoints: 'Overly strict rules may cause errors',
    opportunities: 'Real-time password strength feedback',
  },
  {
    stage: '4. MFA Setup Prompt',
    tenantAdminAction: '—',
    endUserAction: 'Asked to set up MFA if required',
    systemResponse: 'MFA options: App Code, SMS, Email',
    tenantAdminThoughts: '—',
    endUserThoughts: '“Hmm, which one’s best for me?”',
    painPoints: 'Confusion, app setup friction',
    opportunities: 'Quick comparison of options',
  },
  {
    stage: '5. MFA Enrollment',
    tenantAdminAction: '—',
    endUserAction: 'Completes MFA verification',
    systemResponse: 'MFA setup confirmed',
    tenantAdminThoughts: '—',
    endUserThoughts: '“I’m ready to use VPN now.”',
    painPoints: 'App download feels technical',
    opportunities: 'Alternate MFA path + help',
  },
  {
    stage: '6. Access Confirmation',
    tenantAdminAction: '—',
    endUserAction: '—',
    systemResponse: 'Redirect to dashboard with VPN client instructions',
    tenantAdminThoughts: '—',
    endUserThoughts: '“I know my next step.”',
    painPoints: 'No instructions causes stalls',
    opportunities: 'Quick start tips + visual guide',
  },
  {
    stage: 'Loop for Additional Users',
    tenantAdminAction: 'Admin repeats steps for each user',
    endUserAction: '—',
    systemResponse: '—',
    tenantAdminThoughts: '“This is tedious for large batches.”',
    endUserThoughts: '—',
    painPoints: 'Bulk onboarding fatigue',
    opportunities: 'Add CSV import feature',
  },
];

export default function Case02Version2() {
  return (
    <div>
      <div className="bg-zinc-950 w-full text-gray-200">
        <div className="max-w-screen-lg mx-auto flex flex-nowrap space-x-1 px-6 pt-20 pb-12 mb-12 ">
          <div className="basis-6/8">
            <h4 className="text-indigo-400 pb-4">
              UX Case 02: Adaptiv Networks MyConnect VPN Enrollment Flow
            </h4>
            <h1 className="text-white">Self-Service Onboarding & Multi-Factor Authentication</h1>
            <h4 className="pt-4">
              Designed the self-service enrollment and authentication for Adaptiv Networks’ MyConnect VPN, enabling independent onboarding, secure credential setup, and MFA. Delivered a scalable, intuitive solution that balances usability with enterprise security and reduces IT support reliance for hybrid workforce management.
            </h4>
          </div>
        </div>
      </div>

      {/* Context */}
      <Section title="Context">
        <p className="pb-4">
          Adaptiv Networks is a multi-tenant provider of cloud-managed networking solutions, specializing in Software-Defined Wide Area Network (SD-WAN) technology. Their platform enables businesses to optimize network performance, reliability, and security while simplifying management and reducing operational costs.
        </p>
        <p className="pb-4">
          To support hybrid and remote workforces, Adaptiv Networks offers MyConnect VPN, a secure remote access solution that integrates with their SD-WAN infrastructure. Efficient onboarding and authentication for remote employees, partners, and tenants is critical to ensure seamless connectivity, protect sensitive data, and maintain enterprise-grade security.
        </p>
      </Section>

      {/* Business Problem */}
      <Section title="Business Problem">
        <ul className="list-disc list-outside space-y-1 pl-4">
          <li>
            <strong>Manual onboarding is resource-intensive and does not scale:</strong>
            <p>IT teams must create accounts individually, slowing adoption for partners, tenants, and new employees.</p>
          </li>
          <li>
            <strong>Limited self-service capabilities restrict user independence:</strong>
            <p>Customers cannot independently onboard or manage users, increasing operational overhead.</p>
          </li>
          <li>
            <strong>Security and compliance are paramount:</strong>
            <p>Multi-Factor Authentication (MFA) is required to meet industry standards, but default workflows can be confusing or inconsistent for end users.</p>
          </li>
          <li>
            <strong>High reliance on IT support reduces efficiency:</strong>
            <p>Without an intuitive self-service experience, organizations face higher support costs and slower user adoption.</p>
          </li>
        </ul>
      </Section>

      {/* Business Goal */}
      <Section title="Business Goal">
        <ul className="list-disc list-outside space-y-1 pl-4">
          <li>
            <strong>Streamline Onboarding & Self-Management:</strong>
            Deliver an automated, user-friendly enrollment flow that reduces IT dependency and accelerates adoption.
          </li>
          <li>
            <strong>Enhance Security & Compliance:</strong>
            Implement flexible MFA options to protect sensitive data and meet enterprise security requirements.
          </li>
          <li>
            <strong>Enable Scalable Operations:</strong>
            Provide a multi-tenant, self-service solution that supports partners and tenants independently, with potential premium features for recurring revenue.
          </li>
        </ul>
      </Section>

      {/* Research */}
      <Section title="Research">
        <p className="pb-4">
          Mapped user flows: enrollment, login, password reset, and MFA. Identified pain points to ensure a smooth user journey. Auth0 was selected as the IAM vendor; documentation was reviewed to understand framework capabilities and optimize experience.
        </p>
      </Section>

      {/* User Journey Map */}
      <div className="w-full text-gray-800 py-6 mb-12 border-y-1 border-zinc-800 text-sm">
        <div className="max-w-screen-xl mx-auto">
          <h3 className="text-indigo-800 text-2xl pb-8">User Journey: Caller UI Workflow</h3>

          {/* Desktop Table */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-6 gap-4 border-b border-gray-700 pb-4 font-semibold text-zinc-800">
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
                className={`grid grid-cols-1 md:grid-cols-6 gap-4 py-2 border-b border-gray-400 ${i % 2 === 0 ? 'bg-zinc-200' : 'bg-zinc-300'}`}
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

      {/* Hypothesis */}
      <Section title="Hypothesis">
        <p className="italic pb-4">
          By designing a self-service VPN enrollment flow with integrated MFA guidance, users will:
        </p>
        <ul className="list-disc list-outside space-y-2 ml-4 pb-4">
          <li><strong>Onboard faster</strong> without relying on IT support</li>
          <li><strong>Complete security steps confidently</strong> with clear MFA instructions and options</li>
          <li><strong>Manage multiple accounts efficiently</strong> in a multi-tenant environment</li>
        </ul>
        <p>
          This approach transforms VPN onboarding from a technical, error-prone process into a <strong>streamlined, user-friendly experience</strong> that balances security, usability, and scalability.
        </p>
      </Section>

      {/* Solution */}
      <Section title="Solution">
        <p className="pb-4">
          Partners/Tenants submit first name, last name, and email. Users receive a one-time password via email. Clicking the link auto-logs the user into the self-service portal. Users set a secure password, then complete MFA if purchased, adding a layer of security.
        </p>
      </Section>





      {/* User Outcomes */}
      <Section title="User Outcomes">
        <ul className="list-disc list-outside space-y-1 pl-4">
          <li><strong>One-Time Code (App-based):</strong> Most frustrating; app download, QR code scan, backup code required.</li>
          <li><strong>Text (SMS):</strong> Minimal complaints; quick and familiar for users.</li>
          <li><strong>Email:</strong> Convenient; longer code lifespan; easy to copy/paste, though slightly less secure than SMS.</li>
        </ul>
      </Section>

      {/* Observations */}
      <Section title="Observations">
        <p className="pb-4">
          MFA implementation highlighted weaknesses in default Auth0 options and a lack of tailored security guidance. Users/developers may assume full protection without understanding trade-offs. Clear guidance and penetration testing are recommended to select MFA strategies that align with organizational security needs.
        </p>
      </Section>

      {/* MFA Options Image */}

    </div>
  );
}
