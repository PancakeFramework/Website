import { Github, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-pancake-darker border-t border-pancake-gray/30 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-pancake-light/60">
            <span className="text-sm">
              Made with
            </span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span className="text-sm">
              by Pancake Framework Team
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/your-org/pancake-framework"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-pancake-light/60 hover:text-pancake-gold transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-pancake-gray/20 text-center text-pancake-light/40 text-sm">
          <p>© {new Date().getFullYear()} Pancake Framework. Released under the MIT License.</p>
        </div>
      </div>
    </footer>
  )
}
