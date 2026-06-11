import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, CookingPot } from 'lucide-react'

const navItems = [
  { path: '/', label: '主页' },
  { path: '/introduction', label: '介绍' },
  { path: '/tutorial', label: '教程' },
  { path: '/api', label: 'API 文档' },
  { path: '/github', label: 'GitHub' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-pancake-dark/95 backdrop-blur-sm shadow-lg shadow-pancake-dark/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <CookingPot 
              className="w-8 h-8 text-pancake-gold transition-transform duration-300 group-hover:rotate-12" 
              strokeWidth={1.5}
            />
            <span className="font-display text-2xl tracking-wider text-white">
              PANCAKE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-pancake-gold/10 text-pancake-gold'
                    : 'text-pancake-light/70 hover:text-pancake-gold hover:bg-pancake-gray/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-pancake-light/70 hover:text-pancake-gold hover:bg-pancake-gray/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1 bg-pancake-dark/95 backdrop-blur-sm border-t border-pancake-gray">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                location.pathname === item.path
                  ? 'bg-pancake-gold/10 text-pancake-gold'
                  : 'text-pancake-light/70 hover:text-pancake-gold hover:bg-pancake-gray/50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
