/*
 * This code and all components (c) Copyright 2025, Wowza Media Systems, LLC. All rights reserved.
 * This code is licensed pursuant to the Wowza Public License version 1.0, available at https://github.com/WowzaMediaSystems/dev-guides/blob/main/LICENSE.txt.
 */

export default function Header() {
  return (
    <header className="bg-black text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/img/wowza-logo.png" 
              alt="Wowza Logo" 
              className="h-8 w-auto"
            />
            <h1 className="text-xl font-bold">Developer Demos</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/livestream" className="text-gray-300 hover:text-white transition-colors">Livestream</a>
            <a href="/ai-transcription" className="text-gray-300 hover:text-white transition-colors">AI Transcription</a>
            <a href="/ai-object-detection" className="text-gray-300 hover:text-white transition-colors">AI Object Detection</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/WowzaMediaSystems" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              <img src="/img/github-mark.svg" alt="GitHub Logo" className="h-6 w-6" />
              GitHub Samples
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
