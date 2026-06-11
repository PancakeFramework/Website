import { useState } from 'react'
import { BookOpen, ChevronRight } from 'lucide-react'
import { tutorials } from '../data/tutorials'
import CodeBlock from '../components/CodeBlock'

export default function TutorialPage() {
  const [activeTutorial, setActiveTutorial] = useState(0)
  const [activeStep, setActiveStep] = useState(0)

  const currentTutorial = tutorials[activeTutorial]

  return (
    <div className="min-h-screen py-24">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pancake-dark to-pancake-darker" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-display text-6xl tracking-wider mb-4">
            使用<span className="gradient-text">教程</span>
          </h1>
          <p className="text-xl text-pancake-light/70 max-w-2xl">
            从零开始，快速掌握 Pancake Framework 的核心功能
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 bg-pancake-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24 bg-pancake-gray/20 rounded-xl p-4 border border-pancake-gray/20">
                <h3 className="font-semibold mb-4 flex items-center text-pancake-gold">
                  <BookOpen className="w-5 h-5 mr-2" />
                  教程目录
                </h3>
                <nav className="space-y-1">
                  {tutorials.map((tutorial, index) => (
                    <button
                      key={tutorial.id}
                      onClick={() => {
                        setActiveTutorial(index)
                        setActiveStep(0)
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center ${
                        index === activeTutorial
                          ? 'bg-pancake-gold/10 text-pancake-gold'
                          : 'text-pancake-light/60 hover:text-pancake-gold hover:bg-pancake-gray/50'
                      }`}
                    >
                      <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm truncate">{tutorial.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <h2 className="text-3xl font-display tracking-wider mb-6">
                {currentTutorial.title}
              </h2>

              <div className="space-y-8">
                {currentTutorial.steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`bg-pancake-gray/20 rounded-xl border border-pancake-gray/20 overflow-hidden ${
                      index === activeStep ? 'border-pancake-gold/30' : ''
                    }`}
                  >
                    {/* Step Header */}
                    <button
                      onClick={() => setActiveStep(index)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-pancake-gray/30 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          index <= activeStep 
                            ? 'bg-pancake-gold text-pancake-dark' 
                            : 'bg-pancake-gray text-pancake-light/50'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold">{step.title}</h3>
                          <p className="text-sm text-pancake-light/60">{step.description}</p>
                        </div>
                      </div>
                      <ChevronRight 
                        className={`w-5 h-5 transition-transform duration-200 ${
                          index === activeStep ? 'rotate-90' : ''
                        }`}
                      />
                    </button>

                    {/* Step Content */}
                    {index === activeStep && (
                      <div className="px-6 pb-4">
                        <CodeBlock code={step.code} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-pancake-gray/30">
                <button
                  onClick={() => {
                    if (activeTutorial > 0) {
                      setActiveTutorial(activeTutorial - 1)
                      setActiveStep(0)
                    }
                  }}
                  disabled={activeTutorial === 0}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTutorial === 0
                      ? 'text-pancake-light/30 cursor-not-allowed'
                      : 'text-pancake-light/60 hover:text-pancake-gold hover:bg-pancake-gray/50'
                  }`}
                >
                  ← 上一个教程
                </button>
                <button
                  onClick={() => {
                    if (activeTutorial < tutorials.length - 1) {
                      setActiveTutorial(activeTutorial + 1)
                      setActiveStep(0)
                    }
                  }}
                  disabled={activeTutorial === tutorials.length - 1}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTutorial === tutorials.length - 1
                      ? 'text-pancake-light/30 cursor-not-allowed'
                      : 'text-pancake-light/60 hover:text-pancake-gold hover:bg-pancake-gray/50'
                  }`}
                >
                  下一个教程 →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
