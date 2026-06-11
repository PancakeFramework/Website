import { useState } from 'react'
import { Search, Tag, Database, Brain, ChevronDown, ChevronUp } from 'lucide-react'
import { apiReference } from '../data/apiReference'
import CodeBlock from '../components/CodeBlock'

const categories = [
  { id: 'decorators', label: '装饰器', icon: Tag },
  { id: 'orm', label: 'ORM', icon: Database },
  { id: 'ai', label: 'AI 模块', icon: Brain },
]

export default function ApiPage() {
  const [activeCategory, setActiveCategory] = useState('decorators')
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedItems, setExpandedItems] = useState({})

  const currentData = apiReference[activeCategory] || []
  const IconComponent = categories.find(c => c.id === activeCategory)?.icon

  const filteredData = currentData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <div className="min-h-screen py-24">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pancake-dark to-pancake-darker" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-display text-6xl tracking-wider mb-4">
            API<span className="gradient-text">文档</span>
          </h1>
          <p className="text-xl text-pancake-light/70 max-w-2xl">
            完整的装饰器、ORM 和 AI 模块 API 参考
          </p>
        </div>
      </section>

      {/* Search & Category Tabs */}
      <section className="py-4 bg-pancake-darker sticky top-16 z-40 border-b border-pancake-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Category Tabs */}
            <div className="flex items-center space-x-2 bg-pancake-gray/20 rounded-lg p-1">
              {categories.map((cat) => {
                const CatIcon = cat.icon
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                      activeCategory === cat.id
                        ? 'bg-pancake-gold/10 text-pancake-gold'
                        : 'text-pancake-light/60 hover:text-pancake-gold'
                    }`}
                  >
                    <CatIcon className="w-4 h-4" />
                    <span className="text-sm">{cat.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pancake-light/40" />
              <input
                type="text"
                placeholder="搜索 API..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-pancake-gray/20 border border-pancake-gray/30 rounded-lg text-sm text-pancake-light placeholder:text-pancake-light/40 focus:outline-none focus:border-pancake-gold/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* API Content */}
      <section className="py-8 bg-pancake-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredData.length === 0 ? (
              <div className="text-center py-16 text-pancake-light/40">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>没有找到匹配的 API</p>
              </div>
            ) : (
              filteredData.map((item, index) => (
                <div
                  key={index}
                  className="bg-pancake-gray/20 rounded-xl border border-pancake-gray/20 overflow-hidden hover-card"
                >
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between"
                  >
                    <div>
                      <code className="text-pancake-gold font-mono font-semibold">{item.name}</code>
                      <p className="text-sm text-pancake-light/60 mt-1">{item.description}</p>
                    </div>
                    {expandedItems[index] ? (
                      <ChevronUp className="w-5 h-5 text-pancake-light/40 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-pancake-light/40 flex-shrink-0" />
                    )}
                  </button>

                  {expandedItems[index] && (
                    <div className="px-6 pb-4 space-y-3 border-t border-pancake-gray/30 pt-4">
                      {/* Parameters */}
                      {item.params && (
                        <div>
                          <h4 className="text-sm font-semibold text-pancake-light/80 mb-1">参数</h4>
                          <code className="text-xs text-blue-400 bg-pancake-code-bg px-2 py-1 rounded block">
                            {item.params}
                          </code>
                        </div>
                      )}
                      
                      {/* Returns */}
                      {item.returns && (
                        <div>
                          <h4 className="text-sm font-semibold text-pancake-light/80 mb-1">返回值</h4>
                          <code className="text-xs text-green-400 bg-pancake-code-bg px-2 py-1 rounded">
                            {item.returns}
                          </code>
                        </div>
                      )}

                      {/* Example */}
                      {item.example && (
                        <div>
                          <h4 className="text-sm font-semibold text-pancake-light/80 mb-2">示例</h4>
                          <CodeBlock code={item.example} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
