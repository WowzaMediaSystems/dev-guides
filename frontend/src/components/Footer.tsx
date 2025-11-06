export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-16">
      <div className="container mx-auto px-6 max-w-7xl text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Wowza</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering developers with streaming for the cloud, on-prem, and at the edge. 
              <br /><br />
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Visit <a href="https://www.wowza.com" className="text-gray-300 hover:text-white transition-colors">wowza.com</a>.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://wowza.com/developer" className="text-gray-300 hover:text-white transition-colors">Developer Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wowza Streaming Engine Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Flowplayer Documentation</a></li>

            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.wowza.com/support" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="https://www.wowza.com/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
      
              <li><a href="https://www.wowza.com/blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Wowza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
