// components/sdk/Header.js
export function SDKHeader() {
    return (
      <section className="section-sdk_header">
        <div className="container">
          <div className="sdk_header-content">
            <div className="sdk_header-tag">
              <img src="/new_autonomys-logo-light-icon.svg" alt="" className="sdk_tag-img" />
              <div className="sdk_tag-text">Autonomys Developer Hub</div>
            </div>
            
            <h1 className="sdk_header-h1">Build more.<br/>Code less.</h1>
            <p className="sdk_header-p">
              Build AI-powered decentalized apps (<b>super dApps</b>) and on-chain agents (<b>Auto Agents</b>) with permanent distributed storage and compute, decentalized identities, payment handling, and more—all using TypeScript and JavaScript.
            </p>
  
            <div className="sdk_header-block-container">
              <a href="/application_examples/argu-mint" className="sdk_header-block">
                <h2 className="sdk_header-block-h2"><b>Example use cases</b></h2>
                <p className="sdk_header-block-p">Discover the power of Autonomys by exploring example applications.</p>
                <div className="sdk_header-block-btn">
                  <img src="/arrow-sdk.svg" alt="" className="sdk_header-block-icon" />
                </div>
              </a>
              <a href="/sdk" className="sdk_header-block">
                <h2 className="sdk_header-block-h2"><b>Start building with the Auto SDK</b></h2>
                <p className="sdk_header-block-p">A powerful toolkit that simplifies interacting with the Autonomys Network.</p>
                <div className="sdk_header-block-btn">
                  <img src="/arrow-sdk.svg" alt="" className="sdk_header-block-icon" />
                </div>
              </a>
  
              <a href="/evm/introduction" className="sdk_header-block">
                <h2 className="sdk_header-block-h2"><b>Start building with the Auto EVM</b></h2>
                <p className="sdk_header-block-p">An EVM-compatible environment on the Autonomys Network.</p>
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
      <section className="section-sdk_overview">
        <div className="container">
          <div className="sdk_overview-content-wrapper">
            <div className="sdk_overview-content">
              <div className="sdk_small-tag">Overview</div>
              <h2 className="sdk_overview-h2">What is the <br/>Auto SDK?</h2>
              <div className="sdk_what-block">
                <p className="sdk_overview-p first">
                  The <b>Auto SDK</b> is a development toolkit for building on the Autonomys Network, and your shortcut to AI3.0 innovation.
                  Streamline your super dApp and on-chain agent development with the Auto SDK's modular packages, high-level functions, and decentralized solutions—all powered by a secure, scalable blockchain.
                </p>
                <div className="sdk_overfiew-first-img"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section className="sdk_overview-content mt-4">
        <div className="sdk_small-tag">KEY FEATURES</div>
        <h2 className="sdk_overview-h2">Powerful. Accessible. Transparent.</h2>
        <div className="sdk_overview-card-grid">
          {features.map((feature, index) => (
            <div key={index} className="sdk_overview-card">
              <h3 className="sdk_overview-h3"><b>{feature.title}</b></h3>
              <p className="sdk_overview-card-p">{feature.description}</p>
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
      <section className="sdk_overview-content" id="support">
        <div className="sdk_small-tag">Resources</div>
        <h2 className="sdk_overview-h2">Tools & support<br/>with Autonomys SDK.</h2>
        <div className="sdk_overview-card-grid resources">
          {resources.map((resource, index) => (
            <a key={index} href={resource.link} target="_blank" className="sdk_overview-card">
              <h3 className="sdk_overview-h3"><b>{resource.title}</b></h3>
              <p className="sdk_overview-card-p">{resource.description}</p>
            </a>
          ))}
        </div>
      </section>
    )
  }
  
  // components/sdk/CTA.js
  export function SDKCTA() {
    return (
      <section className="section-sdk_cta">
        <div className="container">
          <div className="sdk_cta-content">
            <div className="sdk_small-tag">LEARNING</div>
            <h2 className="sdk_cta-h2">Explore the Autonomys Academy</h2>
            <div className="sdk_cta-btn-wrapper">
              <a href="https://academy.autonomys.xyz/" target="_blank" className="sdk_cta-btn">
                Explore
              </a>
              <a href="/documents/autonomys_whitepaper.pdf" target="_blank" className="sdk_cta-btn">
                Whitepaper
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
