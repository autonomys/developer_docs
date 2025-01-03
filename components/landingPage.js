import React from 'react';
import { ArrowRight, Code, Book, Blocks, Terminal, Workflow } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, link }) => (
  <a
    href={link}
    className="group flex flex-col p-6 rounded-xl border border-slate-200 
               bg-gradient-to-br from-white to-slate-50
               hover:shadow-lg transition-all duration-200 relative overflow-hidden"
  >
    <div className="mb-4">
      <Icon className="h-8 w-8 text-blue-500" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-slate-600 mb-4 flex-grow">{description}</p>
    <div className="flex items-center text-blue-500 group-hover:text-blue-600">
      Learn more
      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </div>
  </a>
);

const ResourceCard = ({ title, description, link }) => (
  <a
    href={link}
    className="block p-4 rounded-lg border border-slate-200 
               hover:border-blue-500 transition-all duration-200"
  >
    <h4 className="font-medium mb-1">{title}</h4>
    <p className="text-sm text-slate-500">{description}</p>
  </a>
);

export function LandingPage() {
  const features = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the fundamentals and start building with Autonomys Network.",
      link: "/docs/getting-started"
    },
    {
      icon: Blocks,
      title: "Core Concepts",
      description: "Understand the architecture and key components of the network.",
      link: "/docs/concepts"
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Detailed documentation of APIs, methods, and parameters.",
      link: "/docs/api"
    },
    {
      icon: Terminal,
      title: "CLI Tools",
      description: "Command-line tools for developers and node operators.",
      link: "/docs/tools"
    },
    {
      icon: Workflow,
      title: "Tutorials",
      description: "Step-by-step guides for common development scenarios.",
      link: "/docs/tutorials"
    }
  ];

  const resources = [
    {
      title: "Network Parameters",
      description: "Essential network configuration and parameters",
      link: "/docs/network-params"
    },
    {
      title: "Examples",
      description: "Code examples and sample applications",
      link: "/docs/examples"
    },
    {
      title: "FAQ",
      description: "Frequently asked questions and answers",
      link: "/docs/faq"
    },
    {
      title: "Troubleshooting",
      description: "Common issues and how to resolve them",
      link: "/docs/troubleshooting"
    }
  ];

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 
                       bg-clip-text text-transparent">
          Autonomys Network Documentation
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Comprehensive documentation and guides for developers building on Autonomys Network.
          Learn, build, and scale your applications.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      {/* Resources Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>

      {/* Community Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Join the Community</h2>
        <p className="text-slate-600 mb-6">
          Get help, share ideas, and collaborate with other developers
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="https://discord.gg/your-server" 
            className="px-6 py-2 rounded-lg bg-blue-500 text-white 
                     hover:bg-blue-600 transition-colors"
          >
            Discord
          </a>
          <a 
            href="https://github.com/your-org" 
            className="px-6 py-2 rounded-lg border border-slate-200 
                     hover:border-blue-500 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}