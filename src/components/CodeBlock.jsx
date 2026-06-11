import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check } from 'lucide-react'

export default function CodeBlock({ code, language = 'python' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group rounded-lg overflow-hidden border border-pancake-gray/30">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-pancake-gray/50 border-b border-pancake-gray/30">
        <span className="text-xs text-pancake-light/50 font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1 text-xs text-pancake-light/50 hover:text-pancake-gold transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span>已复制</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>复制</span>
            </>
          )}
        </button>
      </div>
      
      {/* Code */}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1rem',
          background: '#0f0f1a',
          fontSize: '0.875rem',
        }}
        wrapLines
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
