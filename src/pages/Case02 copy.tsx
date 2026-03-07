// import image001 from '/src/assets/VS-Old-CallerUI.png';
// import image002 from '/src/assets/VS-CallerUI-001.png';

export default function Case02() {
  return (
    <>
      <div className="bg-zinc-950 w-full">

        <div className="max-w-screen-lg text-white mx-auto flex flex-nowrap space-x-1 pt-20 pb-12">
          <div className='basis-5/7 '>
            <h1 className="text-indigo-400">Secure Enrollment Flow for Scalable VPN User Onboarding</h1>
            <h2 className="">Designing Adaptiv Networks’ MyConnect User Enrollment</h2>
            <h3 className="basis-1/3 pt-6">Adaptiv Networks needed to replace a manual, resource-intensive user onboarding process with a seamless, automated enrollment flow integrated into their VPN self-service portal. The legacy approach limited scalability and adoption among partners and tenants, especially with growing security requirements like Multi-Factor Authentication (MFA).</h3>
          </div>
          <div></div>
        </div>

        <div className="text-white max-w-screen-lg mx-auto flex flex-nowrap space-x-1">
          <div className="basis-1/7 p-6">
          </div>
          <div className="basis-2/7 bg-zinc-900 p-6">
            <h4 className='pb-3 text-indigo-400'>Role & Contribution</h4>
            <p>UX strategy</p>
            <p>User interactions</p>
            <p>User testing</p>
            <p>Cross-team collaboration</p>
          </div>
          <div className="basis-2/7 bg-zinc-900 p-6">
            <h4 className='pb-3 text-indigo-400'>Design Challenge</h4>
            <p>Automation</p>
            <p>Security (MFA)</p>
            <p>Friction reduction</p>
            <p>Self-service</p>
          </div>
          <div className="basis-2/7 bg-zinc-900 p-6">

            <h4 className='pb-3 text-indigo-400'>Outcome</h4>
            <p>Streamlined onboarding</p>
            <p>Enhanced security</p>
            <p>Increased Adoption </p>
            <p>Positive feedback</p>
          </div>
        </div>

      </div >

      { /* Intro */}
      <div className="w-full">
        <div className="max-w-screen-lg mx-auto py-12 flex flex-nowrap space-x-3">
          <div className="basis-2/7">
            <h3>Context</h3>
          </div>
          <div className="basis-5/7">
            <p className="pb-4">Adaptiv Networks is a multi-tenant company specializing in cloud-managed network connectivity solutions for businesses. Their core technology, Software-Defined Wide Area Network (SD-WAN), enables organizations to improve network performance, reliability, and security, while simplifying network management and reducing costs. Adaptiv Networks' solutions empower businesses to optimize their network infrastructure while supporting flexibility and scalability.</p>
            <p className="pb-4">In addition to SD-WAN, Adaptiv Networks offers a secure VPN service tailored to the needs of today’s hybrid workforce. The VPN ensures seamless, secure connectivity for remote employees, regardless of their physical location, making it an ideal solution for businesses embracing remote work. As part of a larger user journey, the VPN enrollment process is integrated into a self-service portal, where users can download and install the VPN client with minimal effort.</p>
            <p>This process is designed to not only provide the secure connectivity that businesses require but also to streamline the onboarding of employees and partners. Adaptiv Networks aims to provide an intuitive experience that minimizes friction and empowers businesses to independently manage their network users.</p>
          </div>
        </div>
      </div>

      { /* Business Problem */}
      <div className="w-full">
        <div className="max-w-screen-lg mx-auto pb-12 flex flex-nowrap space-x-3">
          <div className="basis-2/7">
            <h3>Business Problem</h3>
          </div>
          <div className="basis-5/7">
            <p className="pb-4">The Network Engineering team recently completed the Adaptive MyConnect VPN Clients, a solution designed to enhance secure connectivity for remote workers. However, the current user creation process is still manual—a method that works for initial testing but is time-consuming and resource-intensive when scaling for customer onboarding. As businesses begin adopting the solution, the need for an automated, self-service approach to user management has become evident.</p>
            <p className="pb-4">While partners and tenants have expressed interest in the solution during demonstrations, their enthusiasm remains limited until they can independently onboard and manage MyConnect users. A self-service model is crucial for scaling and increasing adoption, as partners and tenants require autonomy to efficiently manage user access and reduce their reliance on internal support.</p>
            <p className="pb-4">Furthermore, Multi-Factor Authentication (MFA) is a critical requirement for securing the Identity and Access Management (IAM) system. As cybersecurity concerns continue to rise, implementing MFA not only meets regulatory standards but also addresses the growing demand for robust security in enterprise environments. Without it, the solution will be perceived as incomplete, particularly by customers who prioritize security and compliance.</p>
          </div>
        </div >
      </div >

      { /* Business Goal */}
      < div className="w-full" >
        <div className="max-w-screen-lg mx-auto pb-12 flex flex-nowrap space-x-3">
          <div className="basis-2/7">
            <h3>Business Goal</h3>
          </div>
          <div className="basis-5/7">
            <p className="pb-4">Streamline User Onboarding & Self-Management: Enable partners and tenants to independently onboard new users and manage their accounts through an automated and user-friendly process. The goal is to reduce the time for onboarding and allow users to complete the process without requiring IT support, enhancing operational efficiency and user satisfaction.</p>
            <p className="pb-4">Enhance Security with Multi-Factor Authentication (MFA): Implement Multi-Factor Authentication (MFA) as part of the Identity and Access Management (IAM) system to meet industry-standard security requirements and enhance user account protection. This will ensure compliance with data security regulations and provide an extra layer of protection for remote workers and sensitive business data.</p>
            <p>Generate Recurring Revenue: Improve the onboarding process and offer MFA as a premium feature, creating new recurring revenue opportunities through subscription or usage-based models. The target is to achieve increased recurring revenue from MFA subscriptions within the first 12 months, helping drive business growth.</p>
          </div>
        </div>
      </div >

      { /* Research and Insights */}
      < div className="w-full" >
        <div className="max-w-screen-lg mx-auto pb-12 flex flex-nowrap space-x-3">
          <div className="basis-2/7">
            <h3>Research and Insights</h3>
          </div>
          <div className="basis-5/7">
            <p className="pb-4">We began by mapping out all essential user flows—such as enrollment, login, password reset, and multi-factor authentication (MFA)—while identifying potential pain points in each process. Our primary goal was to ensure a smooth and intuitive user journey for both partners and tenants.</p>
            <p>After a strategic decision from upper management, Auth0 was selected as our Identity and Access Management (IAM) vendor. With this direction in place, I dove into the Auth0 documentation to fully understand its framework and capabilities. This deep dive allowed me to assess how best to leverage its features, address challenges around enrollment, and optimize the user experience for future improvements.</p>
          </div>
        </div>
      </div >

      { /* Hypothesis */}
      < div className="w-full" >
        <div className="max-w-screen-lg mx-auto pb-12 flex flex-nowrap space-x-3">
          <div className="basis-2/7">
            <h3>Hypothesis</h3>
          </div>
          <div className="basis-5/7">
            <p className="pb-4">Streamlining Enrollment with Auth0 Will Create a Smoother Process We hypothesize that by utilizing Auth0’s existing functionality to streamline the enrollment process, we will achieve a more efficient and user-friendly experience, reducing friction and improving the overall flow.</p>
            <p className="pb-4">Addressing Common Issues and Providing Exit Paths Will Prevent Enrollment Interruptions We believe that by identifying and resolving potential issues early in the enrollment process, and offering clear exit paths when necessary, we can prevent users from getting stuck, ensuring they can complete the enrollment smoothly.</p>
            <p className="pb-4">MFA as an Optional Feature Will Support a Flexible Security Model We hypothesize that implementing Multi-Factor Authentication (MFA) as a configurable feature—where it can be enabled or disabled based on user preferences—will provide flexibility and meet varying security requirements across different partners and tenants.</p>
            <p className="pb-4">Since MFA introduces additional steps to both the enrollment and login process, we anticipate that some users may find this extra step inconvenient or frustrating.</p>
          </div>
        </div>
      </div >

      { /* Solution */}
      < div className="w-full" >
        <div className="max-w-screen-lg mx-auto pb-12 flex flex-nowrap space-x-3">
          <div className="basis-2/7">
            <h3>Solution</h3>
          </div>
          <div className="basis-5/7">
            <p className="pb-4">To create a new MyConnect user, Partners and Tenants only need to submit the user's first name, last name, and email address to the Adaptive Networks Orchestrator. Once the user license is deployed to the customer’s network, the user will automatically receive a one-time password via email. This approach eliminates the need to send credentials in the email body and prevents the user from having to copy-paste them.</p>
            <p>Upon clicking the link, the user will be redirected and automatically logged into the self-service portal. At this point, they will be prompted to create a secure password for future access. If the customer has purchased Multi-Factor Authentication (MFA), the user will then be required to complete the MFA steps after setting their new password, adding a layer of security.</p>
          </div>
        </div>
      </div >

      { /* User Outcomes */}
      < div className="w-full" >
        <div className="max-w-screen-lg mx-auto pb-12 flex flex-nowrap space-x-3">
          <div className="basis-2/7">
            <h3>User Outcomes</h3>
          </div>
          <div className="basis-5/7">
            <p className="pb-4">The users involved in testing—primarily company employees—provided valuable feedback at each iteration, which helped refine the process. For the initial release, we integrated three Multi-Factor Authentication (MFA) methods: One-Time Code, Email, and Text. Below are the results based on user feedback:</p>
            <p className="pb-4">One-Time Code (App-based): Users found this method the most frustrating. It required downloading an app, scanning a QR code, and saving a backup code in case of device loss. Many users reported feeling locked out if they didn’t follow these additional steps. We later discovered that by copying and pasting the QR code into a webpage, users were able to emulate the authentication app. This demonstrated a weakness in the authentication method, as it relied heavily on device-based authentication, which, while adding a layer of security, created friction for users.</p>
            <p className="pb-4">Text (SMS): This method received minimal complaints. Users are generally accustomed to receiving text-based authentication codes, making it quick and easy to use. It was perceived as the most seamless option.</p>
            <p>Email: This option was highly convenient, as users could easily copy and paste the code from their inbox. Additionally, the code’s lifespan was significantly longer than that of the one-time code, adding another layer of convenience. Users found this method to be the least disruptive and most intuitive. But not as secure as SMS text.</p>
          </div>
        </div>
      </div >

      { /* Observation */}
      < div className="w-full" >
        <div className="max-w-screen-lg mx-auto pb-12 flex flex-nowrap space-x-3">
          <div className="basis-2/7">
            <h3>Observation</h3>
          </div>
          <div className="basis-5/7">
            <p className="pb-4">This exercise raised concerns about Multi-Factor Authentication (MFA) techniques that may create a false sense of security. During the implementation, it became apparent that the approach was largely based on default Auth0 product features, rather than a tailored assessment of the specific security requirements of our environment. The documentation provided by Auth0 lacked detailed best practice guidance and did not clearly outline the level of protection offered by each MFA method.</p>
            <p className="pb-4">This lack of clarity can lead both users and developers to believe they are fully protected by simply enabling MFA, without fully understanding the limitations or vulnerabilities associated with certain methods. To address this, it would be valuable to provide clear guidance on the strengths and weaknesses of each MFA option, and to evaluate them based on the organization’s unique security context and threat model.</p>
            <p className="pb-4">Modern hacking and spoofing techniques can easily bypass weaker forms of MFA, making it critical to select authentication methods deliberately and with a full understanding of their trade-offs. I would be interested in exploring alternative authentication strategies and incorporating penetration testing as part of our security assessment process to better understand current threats and identify best practices for secure access control.</p>
          </div>
        </div>
      </div >

      { /* Caller UI */}

    </>
  );
}