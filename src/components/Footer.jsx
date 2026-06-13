import { Github, Heart, Users } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-pancake-darker border-t border-pancake-gray/30 mt-auto">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-pancake-light/70">
            <Users className="w-8 h-8 text-pancake-gold" />
            <div>
              <h3 className="text-lg font-semibold text-pancake-light">
                加入 Pancake Framework 社区
              </h3>
              <p className="text-sm text-pancake-light/60">
                我们欢迎每一位开发者参与贡献，无论是提交 Bug 报告、修复问题还是添加新功能，你的每一份努力都会让这个项目变得更好
              </p>
            </div>
          </div>

          <a
            href="https://github.com/PancakeFramework/PancakeFramework/blob/master/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center space-x-2 whitespace-nowrap"
          >
            <Heart className="w-4 h-4" />
            <span>查看贡献指南</span>
          </a>
        </div>
      </div>

      {/* Original Footer Content */}
      <div className="border-t border-pancake-gray/20 py-8">
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

            <a
              href="https://github.com/PancakeFramework/PancakeFramework"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>

          <div className="mt-4 pt-4 border-t border-pancake-gray/20 text-center text-pancake-light/40 text-sm">
            <p>© {new Date().getFullYear()} Pancake Framework. Released under the MIT License.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
