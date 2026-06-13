import { Link } from 'react-router-dom'
import { ArrowRight, Terminal } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pancake-dark via-pancake-dark to-pancake-darker">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pancake-gold/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="font-display text-7xl sm:text-8xl lg:text-9xl tracking-wider mb-4">
              <span className="gradient-text">PANCAKE</span>
            </h1>
            <p className="text-xl sm:text-2xl text-pancake-light/70 mb-2 font-light">
              装饰器驱动的 Python 框架
            </p>
            <p className="text-base text-pancake-light/50 mb-8 max-w-2xl mx-auto">
              集成 IoC 容器、MyBatis Plus ORM 和 AI 工作流，零 import 即可使用
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <Link to="/tutorial" className="btn-primary flex items-center space-x-2">
              <Terminal className="w-5 h-5" />
              <span>快速开始</span>
            </Link>
            <Link to="/introduction" className="btn-secondary flex items-center space-x-2">
              <span>了解更多</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Quick Start Code */}
          <div 
            className="mt-16 max-w-xl mx-auto animate-fade-in-up" 
            style={{ animationDelay: '0.6s', opacity: 0 }}
          >
            <div className="bg-pancake-code-bg rounded-lg p-4 text-left border border-pancake-gray/30">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-pancake-light/40 ml-2">main.py</span>
              </div>
              <code className="font-mono text-sm text-pancake-light/80">
                <span className="text-purple-400">import</span> pancake{'\n\n'}
                pancake.run<span className="text-yellow-400">()</span>
              </code>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-24 bg-pancake-darker">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-5xl tracking-wider mb-6">
            准备好<span className="gradient-text">开始</span>了吗？
          </h2>
          <p className="text-pancake-light/60 mb-8">
            查看完整文档，深入了解 Pancake Framework 的强大功能
          </p>
          <div className="flex items-center justify-center">
            <Link to="/api" className="btn-primary">
              查看 API 文档
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
