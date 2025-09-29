export default function Header() {
  return (
    <header className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/img/wowza-logo.png" 
              alt="Wowza Logo" 
              className="h-8 w-auto"
            />
            <h1 className="text-xl font-bold">Dev Guides</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Tutorials</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Community</a>
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
