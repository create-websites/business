export default function FranchiseLandingPage() {
  const offerings = [
    "AI-powered websites",
    "Chatbots and AI assistants",
    "Mobile apps",
    "LLM-powered apps",
    "Sales and lead automation",
    "Ongoing AI strategy and support",
  ];

  const idealFor = [
    "Web agencies that want recurring AI revenue",
    "Consultants adding AI services without building everything from scratch",
    "Digital studios expanding into websites, bots, and automation",
    "Entrepreneurs who want a ready-to-run AI agency model",
  ];

  const whyUs = [
    {
      title: "Proven service stack",
      text: "Launch with a practical portfolio: websites, chatbots, AI assistants, mobile apps, and LLM applications your clients already want.",
    },
    {
      title: "Faster delivery",
      text: "Use KreateWebsites and KreateBots tools, templates, and workflows to reduce build time and start closing projects sooner.",
    },
    {
      title: "Recurring revenue model",
      text: "Move beyond one-time website projects with retainers for AI assistants, support, content updates, automation, and optimization.",
    },
    {
      title: "Built for agencies",
      text: "Package, price, and deliver modern AI solutions under your local franchise presence while leveraging a centralized platform.",
    },
  ];

  const steps = [
    { step: "1", title: "Join the franchise", text: "Get access to the platform, positioning, launch materials, and delivery model." },
    { step: "2", title: "Pick your market", text: "Build your local AI agency presence for businesses that need websites, bots, apps, and automation." },
    { step: "3", title: "Sell with confidence", text: "Use ready-made offers, demos, and proven use cases to close clients faster." },
    { step: "4", title: "Deliver and scale", text: "Deploy projects using our AI tools and expand into ongoing support and upsells." },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-sm text-cyan-700">
                Franchise opportunity for AI-first agencies
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Launch your own <span className="text-cyan-600">AI agency franchise</span> with KreateWebsites + KreateBots
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Build a modern local agency that helps businesses create websites, chatbots, AI assistants, mobile apps, and LLM-powered solutions — using a proven platform instead of starting from zero.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#apply" className="rounded-2xl bg-cyan-600 px-6 py-3 text-center text-sm font-medium text-white shadow hover:bg-cyan-700">
                  Apply for a Franchise
                </a>
                <a href="#how-it-works" className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-medium text-slate-700 hover:bg-slate-50">
                  See How It Works
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {offerings.slice(0, 4).map((item) => (
                  <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <div className="text-sm text-slate-500">Primary audience</div>
                    <div className="mt-2 text-lg font-medium">Web & AI agencies</div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <div className="text-sm text-slate-500">Core model</div>
                    <div className="mt-2 text-lg font-medium">Services + recurring revenue</div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:col-span-2">
                    <div className="text-sm text-slate-500">What franchisees can deliver</div>
                    <div className="mt-3 flex flex-wrap gap-2 text-sm">
                      {offerings.map((item) => (
                        <span key={item} className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-cyan-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-600">The opportunity</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Own a franchise built for the next wave of agency growth</h2>
            <p className="mt-5 max-w-3xl text-slate-600">
              Businesses want more than a brochure website. They want lead generation, automation, customer support bots, AI assistants, smarter internal workflows, and mobile experiences. KreateWebsites and KreateBots help franchise partners deliver all of it through one modern service business.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-700">Ideal franchise partner</p>
            <div className="mt-5 space-y-4">
              {idealFor.map((item) => (
                <div key={item} className="rounded-xl border border-cyan-200 bg-white px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.18em] text-cyan-600">Core Platform</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Powered by the Kreate AI product stack</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Franchise partners get access to a full AI platform that lets agencies rapidly build, customize, and deploy solutions for their clients.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-cyan-600">KreateWebsites</h3>
            <p className="mt-3 text-sm text-slate-600 leading-7">
              AI website builder to generate and deploy modern websites quickly with customization for each client.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-cyan-600">KreateBots</h3>
            <p className="mt-3 text-sm text-slate-600 leading-7">
              Platform for chatbots, AI assistants, and LLM-powered applications for support, sales, and internal automation.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-cyan-600">AI Webmaster Agent</h3>
            <p className="mt-3 text-sm text-slate-600 leading-7">
              AI agent that manages website updates, optimization, and automation to deliver ongoing value.
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <p className="text-sm uppercase tracking-[0.18em] text-cyan-600">How it works</p>
        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">From franchise launch to client delivery</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {steps.map((item) => (
            <div key={item.step} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-600 text-white font-semibold">
                {item.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="apply" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-10 text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-cyan-700">Become a franchise partner</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Start your AI agency with a ready-made platform</h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Join the KreateWebsites + KreateBots franchise and help businesses build the next generation of digital experiences with AI.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="mailto:hello@kreatebots.com" className="rounded-xl bg-cyan-600 px-6 py-3 text-white font-medium hover:bg-cyan-700">
              Request Franchise Details
            </a>
            <a href="#" className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium hover:bg-slate-50">
              Book a Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
