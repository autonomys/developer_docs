// components/sdk/Header.js
export function SDKHeader() {
    return (
      <section className="section-sdk_header">
        <div className="container">
          <div className="sdk_header-content">
            <div className="sdk_header-tag">
              <img src="/new_autonomys-logo-light-icon.svg" alt="" className="sdk_tag-img" />
              <div className="sdk_tag-text">Autonomys Network Developer Hub</div>
            </div>
            
            <h1 className="sdk_header-h1">Do More,<br/>Code Less</h1>
            <p className="sdk_header-p">
              Build decentralized apps with ease: leverage permanent storage, manage identities, create AI agents, and handle payments—all using your familiar languages: TypeScript and JavaScript.
            </p>
  
            <div className="sdk_header-block-container">
              <a href="/application_examples/argu-mint" className="sdk_header-block">
                <h2 className="sdk_header-block-h2">View Application Examples</h2>
                <p className="sdk_header-block-p">Learn about the power of Autonomys Network by looking at application examples.</p>
                <div className="sdk_header-block-btn">
                  <img src="/arrow-sdk.svg" alt="" className="sdk_header-block-icon" />
                </div>
              </a>
              <a href="/sdk" className="sdk_header-block">
                <h2 className="sdk_header-block-h2">Start Building using Auto SDK</h2>
                <p className="sdk_header-block-p">A powerful toolkit designed to empower developers to seamlessly integrate with the Autonomys Network.</p>
                <div className="sdk_header-block-btn">
                  <img src="/arrow-sdk.svg" alt="" className="sdk_header-block-icon" />
                </div>
              </a>
  
              <a href="/evm/introduction" className="sdk_header-block">
                <h2 className="sdk_header-block-h2">Start Building using Auto EVM</h2>
                <p className="sdk_header-block-p">EVM-compatible environment on Autonomys Network.</p>
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
              <h2 className="sdk_overview-h2">What is <br/>Autonomys SDK?</h2>
              <div className="sdk_what-block">
                <p className="sdk_overview-p first">
                  Autonomys Auto SDK: Your gateway to building on the Autonomys Network. 
                  Streamline dApp development with modular packages, high-level functions, and decentralized solutions— powered by secure and scalable blockchain.
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
        title: "Modular Architecture",
        description: "Use only the packages you need."
      },
      {
        title: "Ease of Use",
        description: "Simplifies blockchain operations with high-level functions."
      },
      {
        title: "Flexibility",
        description: "Suitable for both beginners and experienced blockchain developers."
      },
      {
        title: "Community-Driven and Open-Source",
        description: "Built by and for the community."
      }
    ]
  
    return (
      <section className="sdk_overview-content mt-4">
        <div className="sdk_small-tag">KEY FEATURES</div>
        <h2 className="sdk_overview-h2">Powerful. Simple. Transparent.</h2>
        <div className="sdk_overview-card-grid">
          {features.map((feature, index) => (
            <div key={index} className="sdk_overview-card">
              <h3 className="sdk_overview-h3">{feature.title}</h3>
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
        title: "Technical Documentation",
        description: "Start building with comprehensive guides.",
        link: "/sdk"
      },
      {
        title: "GitHub",
        description: "Access the Autonomys SDK codebase.",
        link: "https://github.com/autonomys/auto-sdk"
      },
      {
        title: "Support",
        description: "Contact our team for assistance and onboarding.",
        link: "https://autonomys.xyz/discord"
      }
    ]
  
    return (
      <section className="sdk_overview-content" id="support">
        <div className="sdk_small-tag">Resources</div>
        <h2 className="sdk_overview-h2">Tools to Help You Build<br/>with Autonomys SDK.</h2>
        <div className="sdk_overview-card-grid resources">
          {resources.map((resource, index) => (
            <a key={index} href={resource.link} target="_blank" className="sdk_overview-card">
              <h3 className="sdk_overview-h3">{resource.title}</h3>
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