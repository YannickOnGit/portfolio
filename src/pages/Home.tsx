export default function Home() {
  return (
    <>
      <div className="w-full py-12">

        {/* Hero Section */}

        <div className="mb-24 max-w-screen-lg mx-auto text-white">

          <h2 className="mt-12 text-4xl text-teal-300 pb-2">Yannick Boulanger</h2>
          <h1 className="uppercase font-bold text-7xl">Product Designer</h1>
          <h1 className="mb-16 uppercase font-light text-7xl">Building for Complex <br />Human Application</h1>
          <div className="flex flex-wrap gap-12">
            <div className="flex-1">
              <h3 className="">Enterprise SaaS Delivery</h3>
              <p className="mt-4 text-xl text-gray-400 max-w-5xl">I envision complex SaaS products from discovery through delivery and ground product strategy in user research and real-world workflows.</p>
              <h3 className="mt-6">Cross-Functional Collaboration</h3>
              <p className="mt-4 text-xl text-gray-400 max-w-5xl">I collaborate with Product and Engineering to align product vision and implementation, enabling the simplification of complex systems into scalable, intuitive experiences.</p>
            </div>
            <div className="flex-1">
              <h3 className="">Structured, Usable Systems</h3>
              <p className="mt-4 text-xl text-gray-400 max-w-5xl">I prioritize information architecture, consistency, and usability over visual polish, ensuring highly technical environments remain accessible, secure, and reliable.</p>
              <h3 className="mt-6">Evidence-Based Practice</h3>
              <p className="mt-4 text-xl text-gray-400 max-w-5xl">I take an iterative, evidence-based approach, guiding design decisions with data and measuring impact through meaningful user and business outcomes.</p>
            </div>
          </div>

        </div>

        {/* UX Case Studies */}
        <div className="mb-24 max-w-screen-lg mx-auto">
          <h3 className="text-white text-3xl font-light uppercase mb-6"><strong>UX Case Studies</strong></h3>
          <div className="flex flex-wrap gap-6">
            <div className="bg-zinc-900 flex-1 min-w-[220px] rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <div className="w-full aspect-square bg-zinc-800 flex items-center justify-center text-gray-500 text-sm">
                Image
              </div>
              <div className="p-6 bg-teal-800">
                <h4 className="text-white pb-2">SD-WAN Orchestrator</h4>
                <p className="text-gray-300 text-sm">Streamlining multi-tenant workflows for an SD-WAN platform</p>
              </div>
            </div>
            <div className="bg-zinc-900 flex-1 min-w-[220px] rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <div className="bg-[url('/src/assets/VS-CallerUI-001.png')] bg-cover bg-center w-full aspect-square bg-zinc-800 flex items-center justify-center text-gray-500 text-sm">
                Image
              </div>
              <div className="p-6 bg-indigo-800">
                <h4 className="text-white pb-2">CRM Caller UI</h4>
                <p className="text-gray-300 text-sm">Redesigned CRM caller UI → boosted efficiency & 30% YoY growth</p>
              </div>
            </div>
            <div className="bg-zinc-900 flex-1 min-w-[220px] rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <div className="w-full aspect-square bg-zinc-800 flex items-center justify-center text-gray-500 text-sm">
                Image
              </div>
              <div className="p-6 bg-rose-800">
                <h4 className="text-white pb-2">SaaS Design System</h4>
                <p className="text-gray-300 text-sm">Built a scalable design system powering SaaS product growth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}

        <div className="text-white max-w-screen-lg mx-auto flex flex-wrap gap-6 mb-24">
          <h3 className="text-white text-3xl font-light uppercase"><strong>Summary</strong></h3>

          <p className="text-xl text-gray-400 max-w-5xl">Senior Product Designer with 15+ years of experience leading complex B2B SaaS and enterprise platforms from
            concept to delivery. I combine strategic thinking, technical depth, and creative problem-solving to simplify complex
            systems, including cloud-native SD-WAN and scalable sales engagement CRM platforms.</p>
          <p className="text-xl text-gray-400 max-w-5xl mb-4">I’ve led large-scale UX
            redesigns that drive measurable revenue growth, operational efficiency, and platform scalability. I align business
            vision, system architecture, and human-centred design to deliver secure, intuitive, and resilient product experiences.</p>

          <div className="flex flex-wrap space-x-0.5 max-w-screen-lg mx-auto text-white w-full">
            <div className="flex-1 p-6 bg-zinc-900  rounded-bl-lg rounded-tl-xl">
              <dl>
                <dt className="text-2xl pb-2">Product Design</dt>
                <dd>Strategy, Vision & Agile Delivery</dd>
              </dl>
            </div>
            <div className="flex-1 p-6 bg-zinc-900">
              <dl>
                <dt className="text-2xl pb-2">UI/UX</dt>
                <dd>Workflow & Interaction Architecture</dd>
              </dl>
            </div>
            <div className="flex-1 p-6 bg-zinc-900">
              <dl>
                <dt className="text-2xl pb-2">SaaS/B2B</dt>
                <dd>Scalable Enterprise Platforms</dd>
              </dl>
            </div>
            <div className="flex-1 p-6 bg-zinc-900 rounded-br-lg rounded-tr-xl">
              <dl>
                <dt className="text-2xl pb-2">Front-End</dt>
                <dd>Implementation, Code & Accessibility</dd>
              </dl>
            </div>
          </div>
        </div>

        <div className="text-white max-w-screen-lg mx-auto flex flex-wrap gap-6 mb-24">
          <div className="flex-1 min-w-[250px rounded-lg shadow">
            <h3 className='text-white mb-6 uppercase'><strong>Experience</strong></h3>
            <ul className="list-none mb-6 text-gray-400">
              <li className="mb-2"><em className="w-27 h-10 float-left font-bold text-gray-500">2021 - 2025</em> <strong>Adaptiv Networks</strong><br /> Senior Product Designer</li>
              <li className="mb-2"><em className="w-27 h-10 float-left font-bold text-gray-500">2013 - 2021</em> <strong>VanillaSoft</strong><br /> Product Designer</li>
              <li className="mb-2"><em className="w-27 h-10 float-left font-bold text-gray-500">2010 - 2012</em> <strong>MD Financial Management</strong><br />UX Designer</li>
            </ul>
            <h3 className='text-white mt-24 uppercase'><strong>Language</strong></h3>
            <ul className="list-none mt-4 text-gray-400">
              <li className="mb-2"><strong>English</strong> <em>(Fluent)</em></li>
              <li className="mb-2"><strong>French</strong> <em>(Fluent)</em></li>
            </ul>
          </div>
          <div className="flex-1 min-w-[250px] rounded-lg shadow">
            <h3 className='text-white uppercase'><strong>Certification</strong></h3>
            <ul className="list-none mt-4  text-gray-400">
              <li className="mb-2"><em className="w-14 float-left font-bold  text-gray-500">2010</em> <strong>User-Centred Design</strong></li>
              <li className="mb-2"><em className="w-14 float-left font-bold  text-gray-500">2019</em> <strong>Professional Scrum Master I</strong> (PSM I)</li>
              <li className="mb-2"><em className="w-14 float-left font-bold  text-gray-500">2021</em> <strong>Professional Scrum Master with UX</strong> (PSU)</li>
              <li className="mb-2"><em className="w-14 float-left font-bold  text-gray-500">2025</em> <strong>Enterprise Design Thinking Co-Creator</strong>, IBM</li>
              <li className="mb-2"><em className="w-14 float-left font-bold  text-gray-500">2025</em> <strong>Enterprise Design Thinking Practitioner</strong>, IBM</li>
              <li className="mb-2"><em className="w-14 float-left font-bold  text-gray-500">2025</em> <strong>Artificial Intelligence Fundamentals</strong>, IBM</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}