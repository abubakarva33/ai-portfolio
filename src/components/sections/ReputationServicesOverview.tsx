import Link from 'next/link';
import { Bot, Code2, Zap, Globe, ArrowRight, Workflow, BrainCircuit, LayoutTemplate } from 'lucide-react';

export function ReputationServicesOverview() {
  return (
    <div id="services" className="mt-10 md:mt-20 space-y-20">
      <div className="relative">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-4 h-4" /> What I Do Best
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Expert Services in{' '}
            <span className="font-hero-serif font-normal italic text-violet-600">AI & Web</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I specialize in intelligent automation systems and modern web applications that save time, scale businesses, and deliver real results.
          </p>
        </div>

        {/* Sticky Stacked Cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {[
            {
              title: "AI Automation with n8n, Make & Zapier",
              category: "AI Automation",
              summary: "I design and build powerful automation workflows using n8n, Make.com, and Zapier. From lead management to complex multi-step AI pipelines — I automate the repetitive so you can focus on growth.",
              stats: [
                { label: "Tools Mastered", value: "4+" },
                { label: "Workflows Built", value: "200+" }
              ],
              slug: "#services",
              icon: <Bot className="w-4 h-4" />,
              bgColor: "bg-gradient-to-br from-violet-100 to-indigo-100",
              innerBg: "bg-violet-200",
              top: "top-20",
              features: ['n8n Custom Nodes & Workflows', 'Make.com Scenario Design', 'Zapier Multi-step Automations', 'AI Agent Integration']
            },
            {
              title: "GoHighLevel (GHL) Automation & AI Chatbots",
              category: "GHL Specialist",
              summary: "As a GoHighLevel expert, I build complete CRM automations, AI chatbots, pipelines, funnels, and contact forms. GHL becomes your ultimate growth machine with my automation setups.",
              stats: [
                { label: "GHL Projects", value: "40+" },
                { label: "Chatbots Deployed", value: "25+" }
              ],
              slug: "#services",
              icon: <BrainCircuit className="w-4 h-4" />,
              bgColor: "bg-gradient-to-br from-cyan-100 to-sky-100",
              innerBg: "bg-cyan-200",
              top: "top-36",
              features: ['AI Chatbot with GHL', 'GHL Contact Forms & Funnels', 'Pipeline & Workflow Automation', 'CRM + Email/SMS Automation']
            },
            {
              title: "Full Stack Web Development",
              category: "Web Development",
              summary: "I build premium, high-performance web applications using React.js, Next.js, Node.js, and the full MERN stack. Clean code, great UX, and scalable architecture — every time.",
              stats: [
                { label: "Apps Delivered", value: "80+" },
                { label: "Stack Expertise", value: "MERN" }
              ],
              slug: "#services",
              icon: <Code2 className="w-4 h-4" />,
              bgColor: "bg-gradient-to-br from-emerald-100 to-teal-100",
              innerBg: "bg-emerald-200",
              top: "top-52",
              features: ['React.js & Next.js Apps', 'Node.js & Express APIs', 'MongoDB Database Design', 'REST API Integration']
            }
          ].map((srv, idx) => (
            <div
              key={idx}
              className={`sticky ${srv.top} flex flex-col lg:flex-row gap-6 lg:gap-8 ${srv.bgColor} rounded-[2rem] px-6 pb-6 pt-4 md:px-8 md:pb-8 md:pt-5 shadow-xl border border-black/5 overflow-hidden transition-all duration-500 mb-6 lg:mb-8`}
              style={{ zIndex: 10 + idx }}
            >
              <div className="flex-1 flex flex-col justify-between max-w-xl">
                <div>
                  <div className="flex items-center gap-2 mb-4 text-black">
                    <span className="font-serif italic font-bold text-xl md:text-2xl">{srv.category}</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 tracking-tight leading-tight">{srv.title}</h4>
                  <p className="text-base text-gray-800 leading-relaxed max-w-md">{srv.summary}</p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mt-5 mb-4">
                    {srv.features.map((f, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-black/8 text-black text-xs font-semibold border border-black/10">
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-10 mt-4 mb-8">
                    {srv.stats.map((stat, i) => (
                      <div key={i}>
                        <p className="text-xs font-medium text-gray-700 mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold text-black">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-between w-full max-w-sm rounded-xl p-3 ${srv.innerBg} transition-all hover:opacity-90`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-black">
                        {srv.icon}
                      </div>
                      <div className="text-left text-black">
                        <p className="text-sm font-bold">Get a Free Quote</p>
                        <p className="text-xs opacity-80">Let&apos;s discuss your project</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-black mr-2" />
                  </Link>
                </div>
              </div>

              {/* Visual side */}
              <div className={`flex-1 relative w-full min-h-[300px] lg:min-h-[400px] rounded-2xl overflow-hidden ${srv.innerBg} flex items-center justify-center p-6 md:p-10 shadow-inner`}>
                {/* Stripe pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply" style={{ backgroundImage: "repeating-linear-gradient(to right, transparent, transparent 40px, #000 40px, #000 80px)" }}></div>

                {/* Mockup card */}
                <div className="w-full max-w-md aspect-[4/3] border-[8px] border-black rounded-3xl bg-white shadow-2xl relative flex flex-col overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="border-b border-gray-100 p-3 flex items-center justify-between bg-white z-10">
                    <div className="flex items-center gap-2 text-black">
                      {srv.icon} <span className="font-bold text-[10px] uppercase tracking-wider">{srv.category}</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-50 p-6 relative">
                    <div className={`absolute top-0 left-0 w-full h-32 ${srv.bgColor} opacity-50`}></div>
                    <div className="relative z-10">
                      <h5 className="text-lg font-bold text-black mb-4 leading-snug max-w-[80%]">{srv.title}</h5>
                      <div className="space-y-3">
                        {srv.features.slice(0, 3).map((f, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-gray-300 flex-shrink-0" />
                            <div className="h-2 bg-gray-200 rounded-full flex-1" />
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 flex gap-3">
                        <div className="w-16 h-16 rounded-xl bg-white shadow-sm border border-gray-100"></div>
                        <div className="w-16 h-16 rounded-xl bg-white shadow-sm border border-gray-100"></div>
                        <div className="w-16 h-16 rounded-xl bg-white shadow-sm border border-gray-100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
