import ImageCarousel2 from "../components/ImageCarousel2";
import image001 from "/src/assets/Case 02/Case-001-Screen-Onboarding-Email.png";
import image002 from "/src/assets/Case 02/Case-001-Journey-Map.png";
import image003 from "/src/assets/Case 02/Case-001-Flow-Chart.png";
import image004 from "/src/assets/Case 02/Case-001-User-Activation.png";

export default function Case02Version2() {
  const images = [
    {
      src: image001,
      alt: "Onboarding email with account creation link and essential information.",
    },
    {
      src: image002,
      alt: "Journey map illustrating self-service account provisioning.",
    },
    {
      src: image003,
      alt: "Authentication flow diagram showing access and validation steps.",
    },
    {
      src: image004,
      alt: "Account activation and password setup screen.",
    },
  ];

  return (
    <div className="text-white  ">
      {/* Intro Header */}
      <div className="w-full px-6 xl:px-0">
        <div className="max-w-screen-lg mx-auto">
          <h1>Case 002 : Efficient Account Provisioning</h1>
          <h2 className="uppercase mb-12 font-light leading-none bg-stone-800/50">
          <span className="uppercase font-bold">VPN Enrollment Flow </span>
            Self-Service Onboarding & MFA Authentication
          </h2>
          <div className="lg:flex gap-6 py-6">
            <div className="flex-1/3 mb-6">
              <h4 className="text-cyan-300/90">
                Contributions
              </h4>
              <ul className="space-y-1">
                <li>Contextual & User Research</li>
                <li>Workflow & Task Analysis</li>
                <li>Identity & Access Management (IAM) Strategy</li>
                <li>Interaction Design & UI/UX</li>
                <li>Front-End Integration</li>
              </ul>
            </div>
            <div className="flex-2/3">
              <h4 className="text-cyan-300/90">Assignment</h4>
              <p>
                The objective of this project was to streamline the MyConnect
                VPN user onboarding process for partners and tenants, enabling
                self-service account creation while enhancing security with
                Multi-Factor Authentication (MFA).
              </p>
              <p>
                The project aimed to reduce friction, minimize manual IT
                involvement, and provide a scalable onboarding process.
                Additionally, it sought to integrate security best practices
                without compromising usability, creating a flexible experience
                for both novice and experienced users.
              </p>
              <p>
                The role encompassed research, workflow analysis, solution
                architecture, and the implementation of the enrollment flow
                using Auth0.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Image Feature */}

      <ImageCarousel2 images={images} />

      {/* Problem & Goal Section */}

      <div className="w-full px-6 xl:px-0 py-12">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex">
            <div className="flex-1/4">
              <h3 className="">Context</h3>
            </div>
            <div className="flex gap-6 flex-3/4">
              <div className=" flex-1/2">
                <p>
                  Adaptiv Networks is a multi-tenant company providing
                  cloud-managed SD-WAN and secure VPN solutions for businesses.
                </p>
              </div>
              <div className=" flex-1/2">
                <p>
                  Its VPN service ensures secure connectivity for remote employees
                  as part of a larger self-service portal, allowing businesses to
                  manage network users independently while supporting flexibility,
                  scalability, and security.
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
              <blockquote className="border-l-4 border-teal-300/80 pl-6 italic text-stone-400 text-2xl">
                <p>
                  The existing MyConnect user creation process was manual, which
                  was sufficient for initial testing but became time-consuming and
                  resource-intensive as adoption grew.
                </p>
              </blockquote>
              <blockquote className="mt-6 border-l-4 border-teal-300/80 pl-6 italic text-stone-400 text-2xl">
                <p>
                  Partners and tenants were unable to independently onboard users,
                  limiting enthusiasm and adoption. The lack of self-service
                  created bottlenecks for IT teams and hindered operational
                  efficiency.
                </p>
              </blockquote>
              <blockquote className="mt-6 border-l-4 border-teal-300/80 pl-6 italic text-stone-400 text-2xl">
                <p>
                  Additionally, Multi-Factor Authentication (MFA) was critical for
                  meeting security and compliance standards but was not yet
                  implemented. The current enrollment process risked being
                  perceived as incomplete or insecure by security-conscious
                  customers.
                </p>
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
                  We mapped key user flows, including enrollment, login, password
                  reset, and MFA setup, to identify friction points. Auth0 was
                  selected as the Identity and Access Management (IAM) platform.
                </p>
              </div>
              <div className=" flex-1/2">
                <p>
                  I conducted a deep dive into its documentation to
                  understand its framework, evaluate potential challenges, and
                  identify opportunities to streamline the user experience while
                  supporting secure authentication workflows.
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
              <blockquote className="mb-6 border-l-4 border-cyan-200/80 pl-6 italic text-stone-400">
                <p>
                  <strong className="">Streamlined Enrollment with Auth0:</strong>{" "}
                  Leveraging Auth0’s functionality would simplify the enrollment
                  process, reduce friction, and improve user satisfaction.
                </p>
              </blockquote>
              <blockquote className="mb-6 border-l-4 border-cyan-200/80 pl-6 italic text-stone-400">
                <p>
                  <strong className="">
                    Clear Exit Paths and Issue Resolution:
                  </strong>{" "}
                  Anticipating and resolving enrollment issues early would prevent
                  users from getting stuck, ensuring smoother completion.
                </p>
              </blockquote>
              <blockquote className="mb-6 border-l-4 border-cyan-200/80 pl-6 italic text-stone-400">
                <p>
                  <strong className="">Optional MFA Implementation:</strong>{" "}
                  Offering MFA as a configurable feature would meet varying
                  security requirements, providing both flexibility and enhanced
                  protection.
                </p>
              </blockquote>
              <blockquote className="border-l-4 border-cyan-200/80 pl-6 italic text-stone-400">
                <p>
                  <strong className="">Recognized risk:</strong> MFA introduces
                  additional steps that may frustrate some users.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-6 xl:px-0 py-12">
        <div className="max-w-screen-lg mx-auto">

          <div className="lg:flex">
            <div className="flex-1/4">
              <h3 className="">Solution</h3>
            </div>
            <div className="flex gap-6 flex-3/4">
              <div className=" flex-1/2">
                <p>
                  Partners and tenants can create a new MyConnect user by
                  submitting the user’s first name, last name, and email. Once
                  the license is deployed, users receive a one-time password via
                  email—eliminating insecure credential delivery.
                </p>
              </div>
              <div className="flex-1/2">
                <p>
                  Users click a link to log into the self-service portal, create
                  a secure password, and, if MFA is enabled, complete the
                  additional authentication steps. MFA options include One-Time
                  Code (app-based), Text (SMS), and Email, offering flexibility
                  and accommodating varying security preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Strategy */}

      <div className="w-full px-6 xl:px-0 py-16 bg-stone-800/20 border-stone-800">


        <div className="w-full px-6 xl:px-0">
          <div className="max-w-screen-lg mx-auto">
            <div className="lg:flex">
              <div className="flex-1/4">
                <h3 className="">Feature</h3>
              </div>
              <div className="flex-3/4">
                <h4 className="text-cyan-300/90">
                  Simplified Self-Service Enrollment
                </h4>
                <p className="mb-6">
                  Enables partners and tenants to onboard users independently,
                  reducing IT tickets.
                </p>

                <h4 className="text-cyan-300/90">Flexible MFA Options</h4>
                <p className="mb-6">
                  Offers SMS, Email, and Authenticator App options to balance
                  security and user convenience.
                </p>

                <h4 className="text-cyan-300/90">Secure Credential Delivery</h4>
                <p>
                  Automated one-time password (OTP) delivery via email to
                  eliminate insecure manual credential sharing.
                </p>

                <h4 className="text-cyan-300/90">Auth0 Integration</h4>
                <p>Streamlined IAM workflows and scalable identity management.</p>
              </div>
            </div>
          </div>
        </div>


      </div>



      <div className="w-full px-6 xl:px-0 py-12">
        <div className="max-w-screen-lg mx-auto">

          <div className="lg:flex">
            <div className="flex-1/4">
              <h3 className="">Outcomes</h3>
            </div>
            <div className="flex gap-6 flex-3/4">
              <div className=" flex-1/2">
              <p>
                Initial user testing provided valuable insights into the MFA
                implementation. App-based one-time codes were the most
                frustrating due to device dependency and QR code setup,
                occasionally leading to lockouts.
              </p>
              <p>
                SMS-based authentication was smooth and intuitive, with
                minimal complaints, while email verification was convenient
                and easy to use, though slightly less secure than SMS.
              </p>
            </div>
            <div className="flex-1/2">
              <p>
                These findings highlighted important trade-offs between
                security and usability.
              </p>
              <p>
                Default Auth0 settings did not fully address organizational
                security requirements, suggesting that future improvements
                should include penetration testing and a more tailored MFA
                strategy to optimize both security and user experience.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>



      {/* Results Section */}
      <div className="w-full px-6 xl:px-0 py-16 bg-stone-800/20 border-stone-800">
        <div className="max-w-screen-lg mx-auto">
          <h3 className="mb-8">Results & Business Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-cyan-300/90">Seamless Onboarding</h4>
              <p>
                The new self-service enrollment flow reduces reliance on IT
                teams, removing manual bottlenecks and enabling faster account
                creation for partners and tenants.
              </p>
            </div>
            <div>
              <h4 className="text-cyan-300/90">Flexible & Secure MFA</h4>
              <p>
                Optional MFA provides flexible security and compliance
                adherence.
              </p>
            </div>
            <div>
              <h4 className="text-cyan-300/90">Scalable Architecture</h4>
              <p>
                The Auth0-based solution provides a foundation that can grow
                with user adoption, supporting additional tenants and partners
                without major workflow redesigns.{" "}
              </p>
            </div>
            <div>
              <h4 className="text-cyan-300/90">Improved User Confidence</h4>
              <p>
                By standardizing credential delivery and providing clear, guided
                enrollment steps, users experience fewer errors and confusion
                during onboarding.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className=" mt-24 text-center">
        © {new Date().getFullYear()} Yannick Boulanger. All rights reserved.
      </p>
    </div>
  );
}
