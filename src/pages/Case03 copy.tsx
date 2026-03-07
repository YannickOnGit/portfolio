// import image001 from '/src/assets/VS-Old-CallerUI.png';
// import image002 from '/src/assets/VS-CallerUI-001.png';

export default function Case03() {
  return (
    <>
      <div className="bg-zinc-950 w-full">

        <div className="max-w-screen-lg text-white mx-auto flex flex-nowrap space-x-1 pt-20 pb-12">
          <div className='basis-5/7 '>
            <h1 className="text-indigo-400">Secure Enrollment Flow for Scalable VPN User Onboarding</h1>
            <h2 className="">Intellective Routing</h2>
            <h3 className="basis-1/3 pt-6">Adaptiv Networks needed to replace a manual, resource-intensive user onboarding process with a seamless, automated enrollment flow integrated into their VPN self-service portal. The legacy approach limited scalability and adoption among partners and tenants, especially with growing security requirements like Multi-Factor Authentication (MFA).</h3>
          </div>
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
            <p className="pb-4">VanillaSoft is a cloud-based sales management platform that integrates customer relationship management (CRM), lead management, and telemarketing tools to enhance sales team workflows.</p>
            <p>The platform utilizes a queue-based approach to guide agents to the next best contact based on key data points—such as mortgage renewal dates—rather than following a traditional list-based system. This data-driven methodology aims to improve operational efficiency by ensuring agents engage with the most relevant leads at the optimal time.</p>
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
            <p className="pb-4">Several customers have expressed a need for the ability to implement multiple levels of contact prioritization (e.g., P1, P2, etc.) within the platform. The objective is to categorize contacts based on their likelihood to convert, prioritizing certain contacts according to specific data points in their information.</p>
            <p>At present, the platform lacks functionality to support this dynamic prioritization. A thorough investigation is required to explore potential solutions that would integrate this functionality while ensuring compatibility with the existing system and meeting user requirements.</p>
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
            <p className="pb-4">The primary business goal of implementing a contact prioritization system is to improve sales team efficiency and enhance conversion rates by ensuring that agents focus on the most promising leads first. By incorporating multiple levels of prioritization (e.g., P1, P2), the platform would enable users to utilize key data points—such as purchase history and engagement levels—to make more informed decisions and potentially shorten sales cycles.</p>
            <p>A significant challenge lies in the fact that customers require the flexibility to utilize any available data type and to create multiple subgroups within priority levels (e.g., P1a, P1b). This necessitates the development of a more customizable and dynamic prioritization system, one that allows users to refine contact categorization based on various factors and supports diverse sales strategies.</p>
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
            <p className="pb-4">To ensure the contact prioritization feature met the diverse needs of our users, we began by reviewing customer feedback and documenting all the proposed prioritization scenarios. For example, some customers requested the ability to prioritize contacts based on specific criteria—such as criterion A, C, and F—but deprioritize them if criterion B met a certain value.</p>
            <p className="pb-4">Given the complexity and variety of these scenarios, we concluded that it would be safer to assume we should accommodate all possible use cases from the start. Limiting functionality early on could risk needing extensive rework later due to unforeseen edge cases. This approach also ensures that the prioritization system remains flexible and adaptable to the various ways users may wish to define and adjust their rules.</p>
            <p>Another key challenge was designing a UI that would be both simple enough to clearly convey complex information, and flexible enough to meet the diverse needs of users. Balancing simplicity with flexibility was critical to creating an intuitive and efficient experience for sales teams.</p>
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
            <p className="pb-4">Implementing a flexible and dynamic contact prioritization system within VanillaSoft, which allows users to define multiple levels of prioritization (e.g., P1, P2) and customize rules based on various data points (such as purchase history, engagement levels, and other relevant criteria), is expected to enhance sales team efficiency and improve conversion rates. By ensuring that agents focus on the most relevant leads at the appropriate time, this system is anticipated to support a more adaptable approach to sales strategies while reducing the need for extensive rework.</p>
            <p>However, it is hypothesized that the complexity of such a feature may overwhelm users. Therefore, the design of an intuitive and easily navigable user interface will be crucial to prevent cognitive overload and ensure that the system remains accessible and effective for all users.</p>
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
            <p className="pb-4">To address the need for dynamic, multi-level contact prioritization, a query-building framework was developed to provide users with the ability to define and manage complex prioritization rules based on various data points. This framework allows for the customization of prioritization criteria to ensure that agents are directed to the most relevant leads according to the specified rules.</p>
            <p className="pb-4">Key features of the solution include:</p>
            <ul>
              <li>Support for Multiple Criteria: Users are able to define multiple prioritization criteria simultaneously. This flexibility allows prioritization based on diverse data points such as engagement levels, purchase history, and customer behaviour.</li>
              <li>Flexible Operators and Logical Statements: The framework accommodates a broad range of operators (e.g., equals, greater than, contains) that work with different data types, including numerical, textual, and date values. Additionally, users can create complex queries using AND and OR logical conditions, facilitating the development of layered prioritization rules.</li>
              <li>Customizable Priority Levels: The system supports the definition of basic priority levels (e.g., P1, P2) as well as the creation of sub-levels within each group (e.g., P1a, P1b). This enables further granularity in lead prioritization, tailored to varying business requirements.</li>
              <li>User-Friendly Interface: Despite the feature's flexibility, the user interface was designed to maintain simplicity. It allows users, irrespective of their technical proficiency, to construct and manage complex prioritization rules. Visual aids, tooltips, and an intuitive workflow were integrated to guide users, ensuring that the process remains accessible and manageable.</li>
            </ul>
            <p>This solution provides a flexible framework for defining and managing contact prioritization rules, allowing sales teams to implement customized strategies based on relevant business data.</p>
          </div>
        </div>
      </div >

      { /* Caller UI */}

    </>
  );
}