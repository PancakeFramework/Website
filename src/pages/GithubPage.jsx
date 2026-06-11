import { Github, GitBranch, GitCommit, GitPullRequest, Star, Users, ArrowUpRight, Book } from 'lucide-react'

export default function GithubPage() {
  return (
    <div className="min-h-screen py-24">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pancake-dark to-pancake-darker" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-display text-6xl tracking-wider mb-4 flex items-center">
            <Github className="w-14 h-14 mr-4 text-pancake-gold" />
            <span>GitHub</span>
          </h1>
          <p className="text-xl text-pancake-light/70 max-w-2xl">
            开源协作，共建更好的 Pancake Framework
          </p>
        </div>
      </section>

      {/* Stats & Links */}
      <section className="py-8 bg-pancake-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a
              href="https://github.com/your-org/pancake-framework"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-card bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20 group"
            >
              <div className="flex items-center justify-between mb-4">
                <Star className="w-8 h-8 text-yellow-400" />
                <ArrowUpRight className="w-5 h-5 text-pancake-light/40 group-hover:text-pancake-gold transition-colors" />
              </div>
              <h3 className="text-3xl font-bold text-pancake-light">500+</h3>
              <p className="text-sm text-pancake-light/60">Stars</p>
            </a>

            <a
              href="https://github.com/your-org/pancake-framework/fork"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-card bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20 group"
            >
              <div className="flex items-center justify-between mb-4">
                <GitBranch className="w-8 h-8 text-blue-400" />
                <ArrowUpRight className="w-5 h-5 text-pancake-light/40 group-hover:text-pancake-gold transition-colors" />
              </div>
              <h3 className="text-3xl font-bold text-pancake-light">80+</h3>
              <p className="text-sm text-pancake-light/60">Forks</p>
            </a>

            <a
              href="https://github.com/your-org/pancake-framework/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-card bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20 group"
            >
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 text-green-400" />
                <ArrowUpRight className="w-5 h-5 text-pancake-light/40 group-hover:text-pancake-gold transition-colors" />
              </div>
              <h3 className="text-3xl font-bold text-pancake-light">30+</h3>
              <p className="text-sm text-pancake-light/60">贡献者</p>
            </a>
          </div>

          {/* GitHub Button */}
          <div className="text-center">
            <a
              href="https://github.com/your-org/pancake-framework"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-lg"
            >
              <Github className="w-6 h-6" />
              <span>前往 GitHub 仓库</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Branch Strategy */}
      <section className="py-16 bg-pancake-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl tracking-wider mb-8 flex items-center">
            <GitBranch className="w-8 h-8 mr-3 text-pancake-gold" />
            分支<span className="gradient-text">策略</span>
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-pancake-gray/30">
                  <th className="py-3 px-4 text-pancake-light/80">分支</th>
                  <th className="py-3 px-4 text-pancake-light/80">用途</th>
                  <th className="py-3 px-4 text-pancake-light/80">权限</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-pancake-gray/20">
                  <td className="py-3 px-4"><code className="text-blue-400 bg-pancake-code-bg px-2 py-1 rounded">main</code></td>
                  <td className="py-3 px-4 text-pancake-light/60">稳定分支</td>
                  <td className="py-3 px-4 text-red-400">禁止直接提交，只能通过 PR 合并</td>
                </tr>
                <tr className="border-b border-pancake-gray/20">
                  <td className="py-3 px-4"><code className="text-blue-400 bg-pancake-code-bg px-2 py-1 rounded">dev</code></td>
                  <td className="py-3 px-4 text-pancake-light/60">开发分支</td>
                  <td className="py-3 px-4 text-pancake-light/60">PR 合并</td>
                </tr>
                <tr className="border-b border-pancake-gray/20">
                  <td className="py-3 px-4"><code className="text-blue-400 bg-pancake-code-bg px-2 py-1 rounded">feat/xxx</code></td>
                  <td className="py-3 px-4 text-pancake-light/60">功能分支</td>
                  <td className="py-3 px-4 text-green-400">自由推送</td>
                </tr>
                <tr>
                  <td className="py-3 px-4"><code className="text-blue-400 bg-pancake-code-bg px-2 py-1 rounded">fix/xxx</code></td>
                  <td className="py-3 px-4 text-pancake-light/60">修复分支</td>
                  <td className="py-3 px-4 text-green-400">自由推送</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 bg-pancake-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl tracking-wider mb-8 flex items-center">
            <GitPullRequest className="w-8 h-8 mr-3 text-pancake-gold" />
            工作<span className="gradient-text">流程</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: '创建分支', desc: 'git checkout -b feat/xxx dev' },
              { step: '2', title: '开发并提交', desc: '完成开发后 git commit' },
              { step: '3', title: '推送并创建 PR', desc: 'git push origin feat/xxx' },
              { step: '4', title: 'CI 与 Review', desc: '等待 CI 通过 + Code Review' },
            ].map((item) => (
              <div key={item.step} className="bg-pancake-gray/20 rounded-xl p-5 border border-pancake-gray/20">
                <div className="w-10 h-10 rounded-full bg-pancake-gold/10 border border-pancake-gold/30 flex items-center justify-center mb-3">
                  <span className="font-display text-lg text-pancake-gold">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <code className="text-sm text-pancake-light/60 font-mono">{item.desc}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commit Convention */}
      <section className="py-16 bg-pancake-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl tracking-wider mb-8 flex items-center">
            <GitCommit className="w-8 h-8 mr-3 text-pancake-gold" />
            Commit<span className="gradient-text">规范</span>
          </h2>
          
          <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
            <h3 className="text-lg font-semibold mb-4">格式</h3>
            <code className="text-pancake-gold font-mono bg-pancake-code-bg px-3 py-1 rounded text-sm">
              &lt;类型&gt;: &lt;简要描述&gt;
            </code>
            
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { type: 'feat', desc: '新功能' },
                { type: 'fix', desc: 'Bug 修复' },
                { type: 'refactor', desc: '重构' },
                { type: 'docs', desc: '文档' },
                { type: 'test', desc: '测试' },
                { type: 'chore', desc: '构建/工具' },
              ].map((item) => (
                <div key={item.type} className="flex items-center space-x-3">
                  <code className="text-blue-400 bg-pancake-code-bg px-2 py-1 rounded text-sm font-mono min-w-[80px] text-center">{item.type}</code>
                  <span className="text-pancake-light/60 text-sm">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-pancake-darker">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl tracking-wider mb-6">
            开始<span className="gradient-text">贡献</span>
          </h2>
          <p className="text-pancake-light/60 mb-8">
            阅读贡献指南，成为 Pancake Framework 社区的一员
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/your-org/pancake-framework/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2"
            >
              <Book className="w-5 h-5" />
              <span>贡献指南</span>
            </a>
            <a
              href="https://github.com/your-org/pancake-framework/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              查看 Issues
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
