import { Link } from 'react-router-dom'
import { ArrowRight, Code, Terminal, Zap, Database, Brain, Puzzle, Lightbulb } from 'lucide-react'
import { features } from '../data/features'

const iconMap = {
  DependencyInjection: Lightbulb,
  Database: Database,
  Brain: Brain,
  Puzzle: Puzzle
}

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

      {/* Features Section */}
      <section className="py-24 bg-pancake-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl tracking-wider mb-4">
              核心<span className="gradient-text">特性</span>
            </h2>
            <p className="text-pancake-light/60 max-w-2xl mx-auto">
              四大核心模块，覆盖现代后端开发的完整需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon]
              return (
                <div
                  key={feature.title}
                  className="hover-card bg-pancake-gray/30 rounded-xl p-6 border border-pancake-gray/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-pancake-light/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-24 bg-pancake-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pancake-gold/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl tracking-wider mb-4">
              快速<span className="gradient-text">开始</span>
            </h2>
            <p className="text-pancake-light/60">
              三行代码，启动你的第一个 Pancake 服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', icon: Code, title: '安装框架', desc: 'pip install pancake' },
              { step: '2', icon: Terminal, title: '初始化项目', desc: 'pancake init my-project' },
              { step: '3', icon: Zap, title: '运行服务', desc: 'python main.py' },
            ].map((item, index) => (
              <div key={item.step} className="text-center group">
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-pancake-gold/10 border-2 border-pancake-gold/30 mb-4 group-hover:animate-pulse-glow">
                  <span className="font-display text-2xl text-pancake-gold">{item.step}</span>
                  <item.icon className="absolute -top-2 -right-2 w-6 h-6 text-pancake-gold bg-pancake-dark rounded-full p-1" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <code className="text-sm text-pancake-light/60 font-mono bg-pancake-code-bg px-3 py-1 rounded">
                  {item.desc}
                </code>
              </div>
            ))}
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/api" className="btn-primary">
              查看 API 文档
            </Link>
            <a
              href="https://github.com/your-org/pancake-framework"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              前往 GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
