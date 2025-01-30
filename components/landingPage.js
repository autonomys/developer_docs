// components/sdk/Header.js
export function SDKHeader() {
  return (
    <section className="section-sdk_header pt-8 md:pt-24">
      <div className="container px-4 md:px-6">
        <div className="sdk_header-content p-4 md:p-16">
          <div className="sdk_header-tag">
            <img src="/new_autonomys-logo-light-icon.svg" alt="" className="sdk_tag-img w-6 md:w-8" />
            <div className="sdk_tag-text text-lg md:text-2xl">Autonomys Developer Hub</div>
          </div>
          
          <h1 className="sdk_header-h1 text-3xl md:text-7xl mt-4 md:mt-10 mb-6 md:mb-10">
            Build more.<br/>Code less.
          </h1>
          <p className="sdk_header-p w-full md:w-[46%] text-sm md:text-base mb-8 md:mb-16">
            Build AI-powered decentalized apps (<b>super dApps</b>) and on-chain agents (<b>Auto Agents</b>) with permanent distributed storage and compute, decentalized identities, payment handling, and more—all using TypeScript and JavaScript.
          </p>

          <div className="sdk_header-block-container flex-col md:flex-row gap-4 md:gap-10 w-full">
            <a href="/application_examples/argu-mint" className="sdk_header-block w-full md:w-1/3 p-6 md:p-8">
              <h2 className="sdk_header-block-h3 text-xl md:text-2xl"><b>Example use cases</b></h2>
              <div className="mt-4"></div>
              <p className="sdk_header-block-p text-sm md:text-base">Discover the power of Autonomys by exploring example applications.</p>
              <div className="sdk_header-block-btn">
                <img src="/arrow-sdk.svg" alt="" className="sdk_header-block-icon" />
              </div>
            </a>

            <a href="/sdk" className="sdk_header-block w-full md:w-1/3 p-6 md:p-8">
              <h2 className="sdk_header-block-h3 text-xl md:text-2xl"><b>Start building with the Auto SDK</b></h2>
              <p className="sdk_header-block-p text-sm md:text-base">A powerful toolkit that simplifies interacting with the Autonomys Network.</p>
              <div className="sdk_header-block-btn">
                <img src="/arrow-sdk.svg" alt="" className="sdk_header-block-icon" />
              </div>
            </a>

            <a href="/evm/introduction" className="sdk_header-block w-full md:w-1/3 p-6 md:p-8">
              <h2 className="sdk_header-block-h3 text-xl md:text-2xl"><b>Start building with the Auto EVM</b></h2>
              <p className="sdk_header-block-p text-sm md:text-base">An EVM-compatible environment on the Autonomys Network.</p>
              <div className="sdk_header-block-btn">
                <img src="/arrow-sdk.svg" alt="" className="sdk_header-block-icon" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
  
  // components/sdk/Overview.js
  export function SDKOverview() {
    return (
      <div className="container px-4 md:px-6 mt-8 md:mt-16">
        <div className="sdk_overview-content-wrapper">
          <div className="sdk_overview-content">
            <div className="sdk_small-tag text-base md:text-xl">Overview</div>
            <h2 className="sdk_overview-h2 text-3xl md:text-5xl mt-4 mb-6">What is the Auto SDK?</h2>
            <div className="sdk_what-block">
              <p className="sdk_overview-p first text-sm md:text-base p-6 md:p-8">
                The <b>Auto SDK</b> is a development toolkit for building on the Autonomys Network, and your shortcut to AI3.0 innovation.
                Streamline your super dApp and on-chain agent development with the Auto SDK's modular packages, high-level functions, and decentralized solutions—all powered by a secure, scalable blockchain.
              </p>
              <div className="sdk_overfiew-first-img"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  // components/sdk/Features.js
  export function SDKFeatures() {
    const features = [
      {
        title: "Modular",
        description: "Use only the packages you need."
      },
      {
        title: "Easy to use",
        description: "Simplifies blockchain operations with high-level functions."
      },
      {
        title: "Flexible",
        description: "Suitable for both beginners and experienced blockchain developers."
      },
      {
        title: "Open source",
        description: "Built by and for the community."
      }
    ]
  
    return (
      <section className="sdk_overview-content mt-8 md:mt-16 px-4 md:px-6">
        <div className="sdk_small-tag text-base md:text-xl">KEY FEATURES</div>
        <h2 className="sdk_overview-h2 text-3xl md:text-5xl mt-4 mb-6">Powerful. Accessible. Transparent.</h2>
        <div className="sdk_overview-card-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="sdk_overview-card p-6 md:p-8">
              <h3 className="sdk_overview-h3 text-xl md:text-2xl"><b>{feature.title}</b></h3>
              <p className="sdk_overview-card-p text-sm md:text-base mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  // components/sdk/Resources.js
  export function SDKResources() {
    const resources = [
      {
        title: "Docs",
        description: "Explore our comprehensive guides and technical documentation.",
        link: "/sdk"
      },
      {
        title: "GitHub",
        description: "Access the Auto SDK codebase.",
        link: "https://github.com/autonomys/auto-sdk"
      },
      {
        title: "Support",
        description: "Contact our team for onboarding and assistance.",
        link: "https://autonomys.xyz/discord"
      }
    ]
  
    return (
      <section className="sdk_overview-content mt-8 md:mt-16 px-4 md:px-6" id="support">
        <div className="sdk_small-tag text-base md:text-xl">Resources</div>
        <h2 className="sdk_overview-h2 text-3xl md:text-5xl mt-4 mb-6">Tools & Support</h2>
        <div className="sdk_overview-card-grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {resources.map((resource, index) => (
            <a key={index} href={resource.link} target="_blank" className="sdk_overview-card p-6 md:p-8">
              <h3 className="sdk_overview-h3 text-xl md:text-2xl"><b>{resource.title}</b></h3>
              <p className="sdk_overview-card-p text-sm md:text-base mt-2">{resource.description}</p>
            </a>
          ))}
        </div>
      </section>
    )
  }
  
  export function SDKCTA() {
    return (
      <section className="section-sdk_cta mt-8 md:mt-20 pb-8 md:pb-20">
        <div className="container px-4 md:px-6">
          <div className="sdk_cta-content p-6 md:p-16">
            <div className="sdk_small-tag text-base md:text-xl">LEARNING</div>
            <h2 className="sdk_cta-h2 text-3xl md:text-6xl mt-4 mb-6 md:mb-10">Explore the Autonomys Academy</h2>
            <div className="sdk_cta-btn-wrapper flex-col md:flex-row gap-4 md:gap-8">
              <a href="https://academy.autonomys.xyz/" target="_blank" className="sdk_cta-btn text-center">
                Explore
              </a>
              <a href="https://cdn.prod.website-files.com/66d7181179fbc331d39e9df0/6734a4bf4a74c3c5c6b01d34_autonomys_whitepaper.pdf" target="_blank" className="sdk_cta-btn text-center">
                Whitepaper
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
