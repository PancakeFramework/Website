import { Zap, Layers, GitMerge, Package } from 'lucide-react'

export default function IntroductionPage() {
  return (
    <div className="min-h-screen py-24">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pancake-dark to-pancake-darker" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-display text-6xl tracking-wider mb-4">
            框架<span className="gradient-text">介绍</span>
          </h1>
          <p className="text-xl text-pancake-light/70 max-w-2xl">
            Pancake 是一个全栈 Python 框架，核心理念是"零 import"——通过 embed.py 自动将所有装饰器、类和服务注入 builtins
          </p>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 bg-pancake-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl tracking-wider mb-8 flex items-center">
            <Layers className="w-8 h-8 mr-3 text-pancake-gold" />
            启动<span className="gradient-text">架构</span>
          </h2>
          
          <div className="bg-pancake-gray/20 rounded-xl p-8 border border-pancake-gray/30">
            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-pancake-gold/20 flex items-center justify-center text-pancake-gold font-bold">1</div>
                <span><code className="text-yellow-400">main.py</code> → <code className="text-purple-400">pancake.run()</code></span>
              </div>
              <div className="ml-10 text-pancake-light/50">↓</div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-pancake-gold/20 flex items-center justify-center text-pancake-gold font-bold">2</div>
                <span><code className="text-purple-400">init()</code>: 环境检查 → 加载 resource 配置</span>
              </div>
              <div className="ml-10 text-pancake-light/50">↓</div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-pancake-gold/20 flex items-center justify-center text-pancake-gold font-bold">3</div>
                <span><code className="text-purple-400">load_config</code>: 加载 YAML/JSON 配置到 settings</span>
              </div>
              <div className="ml-10 text-pancake-light/50">↓</div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-pancake-gold/20 flex items-center justify-center text-pancake-gold font-bold">4</div>
                <span><code className="text-purple-400">load_ovenware</code>: 自动发现并加载插件 (按 <code className="text-blue-400">init_order</code> 排序)</span>
              </div>
              <div className="ml-10 text-pancake-light/50">↓</div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-pancake-gold/20 flex items-center justify-center text-pancake-gold font-bold">5</div>
                <span><code className="text-purple-400">load_dish</code>: 扫描 src/ 用户代码 (按 <code className="text-blue-400">_load_priority</code> 排序)</span>
              </div>
              <div className="ml-10 text-pancake-light/50">↓</div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-pancake-gold/20 flex items-center justify-center text-pancake-gold font-bold">6</div>
                <span><code className="text-purple-400">build</code>: 实例化 Bean，调用生命周期方法</span>
              </div>
              <div className="ml-10 text-pancake-light/50">↓</div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">7</div>
                <span className="text-green-400"><code className="text-green-400">run_loop_methods</code>: 运行 loop_method ✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-pancake-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl tracking-wider mb-8 flex items-center">
            <Zap className="w-8 h-8 mr-3 text-pancake-gold" />
            技术<span className="gradient-text">栈</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Python 3.10+', desc: '现代化异步语法支持' },
              { name: 'Poetry', desc: '依赖管理与打包' },
              { name: 'databases + aiosqlite', desc: '异步 ORM 数据库' },
              { name: 'PyYAML + python-dotenv', desc: '配置管理' },
              { name: 'LangGraph', desc: 'AI 工作流编排 (可选)' },
              { name: 'OpenAI / Gemini', desc: '多模型 AI 支持 (可选)' },
            ].map((tech) => (
              <div key={tech.name} className="hover-card bg-pancake-gray/20 rounded-xl p-5 border border-pancake-gray/20">
                <h3 className="text-lg font-semibold text-pancake-gold mb-1">{tech.name}</h3>
                <p className="text-sm text-pancake-light/60">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plugin System */}
      <section className="py-16 bg-pancake-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl tracking-wider mb-8 flex items-center">
            <Package className="w-8 h-8 mr-3 text-pancake-gold" />
            插件<span className="gradient-text">系统</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <GitMerge className="w-5 h-5 mr-2 text-blue-400" />
                加载优先级
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <code className="bg-pancake-code-bg px-2 py-1 rounded text-sm text-yellow-400">init_order</code>
                  <span className="text-pancake-light/70">控制 ovenware 插件初始化顺序 (值小先加载)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <code className="bg-pancake-code-bg px-2 py-1 rounded text-sm text-yellow-400">_load_priority</code>
                  <span className="text-pancake-light/70">控制 src/ 用户代码加载顺序</span>
                </li>
                <li className="flex items-start space-x-3">
                  <code className="bg-pancake-code-bg px-2 py-1 rounded text-sm text-yellow-400">build_order</code>
                  <span className="text-pancake-light/70">控制 build 阶段执行顺序</span>
                </li>
              </ul>
            </div>

            <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
              <h3 className="text-xl font-semibold mb-4">全局注册表</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-pancake-gray/30">
                  <code className="text-blue-400">flour</code>
                  <span className="text-pancake-light/60">装饰器注册表</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-pancake-gray/30">
                  <code className="text-blue-400">water</code>
                  <span className="text-pancake-light/60">类注册表</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-pancake-gray/30">
                  <code className="text-blue-400">egg</code>
                  <span className="text-pancake-light/60">方法/构建器注册表</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <code className="text-blue-400">sugar</code>
                  <span className="text-pancake-light/60">运行时数据</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-16 bg-pancake-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl tracking-wider mb-8">
            设计<span className="gradient-text">理念</span>
          </h2>
          <blockquote className="text-2xl font-light italic text-pancake-light/70 border-l-4 border-pancake-gold pl-6 text-left">
            "零 import"——通过 embed.py 自动注入所有装饰器到 builtins，用户代码无需显式 import 即可使用框架功能。
          </blockquote>
          <p className="mt-6 text-pancake-light/60">
            让开发者专注于业务逻辑，而不是繁琐的配置和导入。
          </p>
        </div>
      </section>
    </div>
  )
}
