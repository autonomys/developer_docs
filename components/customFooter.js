// components/CustomFooter.js
import React from 'react';

export function CustomFooter() {
    const links = [
        {
          name: 'Website',
          href: 'https://www.autonomys.xyz/',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <g transform="scale(0.012, -0.012) translate(0, -2000)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="100" d="M663 1970 c-306 -109 -559 -388 -638 -704 -21 -83 -25 -122 -25 -246
                  0 -135 14 -260 29 -260 6 0 11 7 106 175 34 61 151 265 260 455 323 563 344
                  600 332 599 -7 0 -35 -9 -64 -19z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="100" d="M1281 1968 c14 -26 50 -90 309 -543 162 -284 300 -525 365 -638 l22
                  -38 12 45 c6 25 11 123 11 223 0 210 -14 282 -85 431 -112 236 -318 426 -564
                  518 -78 30 -85 30 -70 2z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="100" d="M961 1503 c-24 -43 -67 -118 -96 -168 -139 -239 -335 -588 -332 -591
                  2 -3 216 -3 475 -2 l472 3 -53 90 c-48 81 -391 684 -414 728 -7 14 -16 4 -52
                  -60z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="100" d="M320 269 c135 -117 277 -193 436 -235 83 -23 121 -27 239 -27 154 -1
                  238 13 359 60 128 49 222 106 311 187 l50 45 -715 0 -715 0 35 -30z"/>
              </g>
            </svg>
          )
        },
        {
          name: 'Farming Docs',
          href: 'https://docs.autonomys.xyz/learn/intro',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          )
        },
        {
          name: 'Forum',
          href: 'https://forum.autonomys.xyz/',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8zM7 2h9a2 2 0 012 2v4H7a2 2 0 00-2 2v3H4a2 2 0 01-2-2V4a2 2 0 012-2z" />
            </svg>
          )
        },
        {
          name: 'Space Acres',
          href: 'https://docs.autonomys.xyz/farming/space-acres/install',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          name: 'GitHub',
          href: 'https://github.com/autonomys',
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          )
        },
        {
          name: 'Discord',
          href: 'https://autonomys.xyz/discord',
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028z"/>
            </svg>
          )
        },
        {
          name: 'Telegram',
          href: 'https://t.me/subspace_network',
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          )
        },
        {
          name: 'YouTube',
          href: 'https://www.youtube.com/@AutonomysNetwork',
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          )
        },
        {
          name: 'X',
          href: 'https://x.com/AutonomysNet',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          )
        },
        {
          name: 'Medium',
          href: 'https://medium.com/subspace-network',
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
          )
        }
      ];
  
  return (
    <footer className="border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Social Links Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4 mb-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 text-gray-600 hover:text-indigo-500 transition-colors group"
                title={link.name}
              >
                <div className="w-8 h-8 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <span className="text-xs text-center">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Autonomys Network. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}