import { Code, Terminal, Zap, Layers, GitMerge, Package, Database, Brain, Puzzle, Lightbulb, Settings, Clock, Globe, Server, Shield, MessageSquare, Link } from 'lucide-react'
import { features } from '../data/features'
import CodeBlock from '../components/CodeBlock'

const iconMap = {
  DependencyInjection: Lightbulb,
  Database: Database,
  Brain: Brain,
  Puzzle: Puzzle
}

export default function IntroductionPage() {
  return (
    <div className="min-h-screen">
      {/* Features Section (移植自首页) */}
      <section className="py-24 bg-pancake-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-5xl tracking-wider mb-4">
              核心<span className="gradient-text">特性</span>
            </h2>
            <p className="text-pancake-light/60">
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

      {/* Quick Start Section (移植自首页) */}
      <section className="py-24 bg-pancake-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pancake-gold/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-5xl tracking-wider mb-4">
              快速<span className="gradient-text">开始</span>
            </h2>
            <p className="text-pancake-light/60">
              三行代码，启动你的第一个 Pancake 服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            {[
              { step: '1', icon: Code, title: '安装框架', desc: 'pip install pancake' },
              { step: '2', icon: Terminal, title: '初始化项目', desc: 'pancake init my-project' },
              { step: '3', icon: Zap, title: '运行服务', desc: 'python main.py' },
            ].map((item, index) => (
              <div key={item.step} className="text-left group">
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

      {/* Header */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-pancake-dark to-pancake-darker" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-6xl tracking-wider mb-4">
            框架<span className="gradient-text">介绍</span>
          </h1>
          <p className="text-xl text-pancake-light/70 max-w-2xl">
            Pancake 是一个全栈 Python 框架，核心理念是"零 import"——通过 embed.py 自动将所有装饰器、类和服务注入 builtins
          </p>
        </div>
      </section>

      {/* IoC 与依赖注入 */}
      <section className="py-16 bg-pancake-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl tracking-wider mb-8 flex items-center">
            <Lightbulb className="w-8 h-8 mr-3 text-pancake-gold" />
            IoC 与<span className="gradient-text">依赖注入</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-2">@auto_inject</h3>
                <p className="text-pancake-light/60 mb-4">自动从 YAML/JSON 配置或注册实例解析函数参数</p>
                <CodeBlock code={`from pancake import run

@auto_inject
def my_service(db: Database, cache: Redis):
    """自动注入 db 和 cache 实例"""
    data = db.query("SELECT * FROM users")
    cache.set("users", data)
    return data

run()
`} language="python" />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-2">IoC 容器</h3>
                <p className="text-pancake-light/60 mb-4">三种作用域管理对象依赖</p>

                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-pancake-gray/30">
                        <th className="text-left py-2 px-3 text-pancake-gold">Scope</th>
                        <th className="text-left py-2 px-3 text-pancake-light/70">说明</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-pancake-gray/20">
                        <td className="py-2 px-3"><code className="text-blue-400">SINGLETON</code></td>
                        <td className="py-2 px-3 text-pancake-light/60">全局单例</td>
                      </tr>
                      <tr className="border-b border-pancake-gray/20">
                        <td className="py-2 px-3"><code className="text-blue-400">TRANSIENT</code></td>
                        <td className="py-2 px-3 text-pancake-light/60">每次创建新实例</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3"><code className="text-blue-400">SCOPED</code></td>
                        <td className="py-2 px-3 text-pancake-light/60">同一作用域内单例</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <CodeBlock code={`# 注册服务
ioc.register(Database, scope=Scope.SINGLETON)
ioc.register(Redis, scope=Scope.SINGLETON)

# 解析依赖
db = ioc.resolve(Database)
cache = ioc.resolve(Redis)
`} language="python" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 配置管理 */}
      <section className="py-16 bg-pancake-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl tracking-wider mb-8 flex items-center">
            <Settings className="w-8 h-8 mr-3 text-pancake-gold" />
            配置<span className="gradient-text">管理</span>
          </h2>

          <p className="text-pancake-light/70 mb-8">
            Pancake 提供分层配置系统，支持多源配置合并与优先级覆盖。配置加载顺序为：环境变量 (.env) → YAML 配置 → XML 配置 → 框架默认值，高优先级配置自动覆盖低优先级。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* YAML Config */}
            <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
              <h3 className="text-lg font-semibold mb-3 text-pancake-gold">YAML 配置</h3>
              <CodeBlock code={`# service.yaml
server:
  host: "0.0.0.0"
  port: 8000

# mybatis.yaml
database:
  url: "sqlite+aiosqlite:///./app.db"
  pool_size: 5
`} language="yaml" />
            </div>

            {/* XML Config */}
            <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
              <h3 className="text-lg font-semibold mb-3 text-pancake-gold">XML 配置</h3>
              <CodeBlock code={`<!-- pancake.xml -->
<pancake>
  <server host="0.0.0.0" port="8000" />
  <database 
    driver="sqlite" 
    url="./app.db" 
    pool_size="5" 
  />
  <plugins>
    <plugin name="redis" />
    <plugin name="auth" />
  </plugins>
</pancake>
`} language="xml" />
            </div>

            {/* .env Config */}
            <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
              <h3 className="text-lg font-semibold mb-3 text-pancake-gold">.env 环境变量</h3>
              <CodeBlock code={`# .env
DATABASE_URL=postgresql://localhost/mydb
REDIS_URL=redis://localhost:6379
SECRET_KEY=your-secret-key
LOG_LEVEL=DEBUG
OPENAI_API_KEY=sk-xxx
`} language="bash" />
            </div>
          </div>
        </div>
      </section>

      {/* 生命周期管理 */}
      <section className="py-16 bg-pancake-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl tracking-wider mb-8 flex items-center">
            <Clock className="w-8 h-8 mr-3 text-pancake-gold" />
            生命周期<span className="gradient-text">管理</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">Lifecycle 基类</h3>
                <CodeBlock code={`class MyNode(Lifecycle):
    async def on_init(self):
        """初始化：加载配置、建立连接"""
        pass

    async def on_start(self):
        """启动：开始处理任务"""
        pass

    async def on_stop(self):
        """停止：清理资源、关闭连接"""
        pass

    async def on_error(self, error):
        """错误处理"""
        pass

    async def on_complete(self):
        """完成：任务执行完毕"""
        pass

    async def process(self, data):
        """核心处理逻辑"""
        return data
`} language="python" />
              </div>

              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">@lifecycle_node</h3>
                <p className="text-pancake-light/60 mb-3">将普通函数包装为生命周期节点</p>
                <CodeBlock code={`@lifecycle_node(name="data_processor")
async def process_data(ctx, data):
    """自动注册为生命周期节点"""
    result = await transform(data)
    return result
`} language="python" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">LifecycleManager 使用</h3>
                <CodeBlock code={`manager = LifecycleManager()

# 注册节点
manager.register(MyNode())
manager.register(process_data)

# 启动生命周期
await manager.init()
await manager.start()

# 停止生命周期
await manager.stop()
`} language="python" />
              </div>

              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">状态流转</h3>
                <div className="flex items-center space-x-3 text-sm font-mono text-pancake-light/70 flex-wrap gap-y-2">
                  <span className="px-3 py-1 rounded bg-gray-600/30">已创建</span>
                  <span className="text-pancake-gold">→</span>
                  <span className="px-3 py-1 rounded bg-blue-600/30">已初始化</span>
                  <span className="text-pancake-gold">→</span>
                  <span className="px-3 py-1 rounded bg-green-600/30">已启动</span>
                  <span className="text-pancake-gold">→</span>
                  <span className="px-3 py-1 rounded bg-yellow-600/30">(处理中)</span>
                  <span className="text-pancake-gold">→</span>
                  <span className="px-3 py-1 rounded bg-red-600/30">已停止</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web 模块 */}
      <section className="py-16 bg-pancake-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl tracking-wider mb-8 flex items-center">
            <Globe className="w-8 h-8 mr-3 text-pancake-gold" />
            Web<span className="gradient-text">模块</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">Controllers</h3>
                <p className="text-pancake-light/60 mb-3">支持 get / post / put / delete / page / websocket 路由装饰器</p>
                <CodeBlock code={`@get("/api/users")
async def list_users():
    return await User.all()

@post("/api/users")
async def create_user(name: str, email: str):
    user = await User.create(name=name, email=email)
    return {"id": user.id}

@page("/dashboard", template="dashboard.html")
async def dashboard():
    return {"title": "Dashboard"}
`} language="python" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">Filter Chain</h3>
                <p className="text-pancake-light/60 mb-3">函数式与类式过滤器链</p>
                <CodeBlock code={`# 函数式
@filter
async def log_filter(req, next_fn):
    print(f"[LOG] {req.path}")
    return await next_fn(req)

# 类式
class AuthFilter:
    async def __call__(self, req, next_fn):
        if not req.session.get("user"):
            return JSONResponse({"error": "Unauthorized"}, 401)
        return await next_fn(req)
`} language="python" />
              </div>

              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">认证与 WebSocket</h3>
                <CodeBlock code={`@auth_required
@role_required("admin")
@get("/api/admin")
async def admin_panel():
    return {"role": "admin"}

@websocket("/ws/chat")
async def chat_ws(ws):
    await ws.accept()
    while True:
        msg = await ws.receive_text()
        await ws.send_text(f"Echo: {msg}")
`} language="python" />
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Middleware', 'Rate Limiting', 'Transaction', 'Validation'].map(item => (
              <div key={item} className="bg-pancake-gray/20 rounded-lg p-4 border border-pancake-gray/20 text-center">
                <span className="text-pancake-gold font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI 模块 */}
      <section className="py-16 bg-pancake-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl tracking-wider mb-8 flex items-center">
            <Brain className="w-8 h-8 mr-3 text-pancake-gold" />
            AI<span className="gradient-text">模块</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">ChatModel 基本用法</h3>
                <CodeBlock code={`# 基础对话
response = await chat_model.chat("Hello, who are you?")

# 流式输出
async for chunk in chat_model.chat_stream("Write a poem"):
    print(chunk, end="", flush=True)

# 文本向量化
vectors = await chat_model.embed(["text1", "text2"])
`} language="python" />
              </div>

              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">支持的模型提供商</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-pancake-gray/30">
                        <th className="text-left py-2 px-3 text-pancake-gold">Provider</th>
                        <th className="text-left py-2 px-3 text-pancake-light/70">类型</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['DeepSeek', 'LLM'],
                        ['OpenAI', 'LLM / Embedding'],
                        ['Gemini', 'LLM / Embedding'],
                        ['Ollama', '本地 LLM'],
                        ['Claude', 'LLM'],
                        ['通义千问', 'LLM'],
                      ].map(([name, type]) => (
                        <tr key={name} className="border-b border-pancake-gray/20">
                          <td className="py-2 px-3 text-pancake-light/80">{name}</td>
                          <td className="py-2 px-3 text-pancake-light/60">{type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">短期记忆</h3>
                <p className="text-pancake-light/60 mb-3">对话上下文的自动维护</p>
                <CodeBlock code={`memory = ShortTermMemory(max_turns=10)
memory.add("user", "What is Python?")
memory.add("assistant", "Python is a high-level...")

# 自动裁剪超出窗口历史
context = memory.get_context()
`} language="python" />
              </div>

              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">长期记忆</h3>
                <p className="text-pancake-light/60 mb-3">基于向量存储的持久化记忆</p>
                <CodeBlock code={`memory = LongTermMemory(
    store="sqlite",
    embedding_model=chat_model
)
await memory.remember("User likes Python")
facts = await memory.recall("programming preferences")
`} language="python" />
              </div>

              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">RAG 检索增强生成</h3>
                <CodeBlock code={`rag = RAG(
    retriever=VectorStoreRetriever(index="docs"),
    llm=chat_model
)
answer = await rag.query("How to configure database?")
`} language="python" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redis 缓存 */}
      <section className="py-16 bg-pancake-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl tracking-wider mb-8 flex items-center">
            <Server className="w-8 h-8 mr-3 text-pancake-gold" />
            Redis<span className="gradient-text">缓存</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">基础操作</h3>
                <CodeBlock code={`await redis.set("key", "value", expire=3600)
value = await redis.get("key")
exists = await redis.exists("key")
await redis.delete("key")
await redis.expire("key", 60)
await redis.incr("counter")
await redis.decr("counter")
`} language="python" />
              </div>

              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">JSON 与 Hash 操作</h3>
                <CodeBlock code={`# JSON 存储
await redis.json_set("user:1", "$", {"name": "Alice", "age": 30})
user = await redis.json_get("user:1")

# Hash 操作
await redis.hset("user:1", mapping={"name": "Alice", "age": "30"})
name = await redis.hget("user:1", "name")
all_fields = await redis.hgetall("user:1")
`} language="python" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">List 与 Set 操作</h3>
                <CodeBlock code={`# List
await redis.lpush("queue", "task1", "task2")
task = await redis.rpop("queue")

# Set
await redis.sadd("tags", "python", "web")
members = await redis.smembers("tags")
`} language="python" />
              </div>

              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">分布式锁</h3>
                <CodeBlock code={`async with redis.lock("order:123", timeout=30) as lock:
    # 临界区操作
    await process_order(123)
`} language="python" />
              </div>

              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">CacheGuard 三层防护</h3>
                <p className="text-pancake-light/60 mb-3">@cached 装饰器自动处理</p>
                <CodeBlock code={`# 缓存守卫：防击穿 / 防穿透 / 防雪崩
@cached(expire=300, fallback=get_from_db)
async def get_user(user_id):
    return await db.query(User, user_id)
`} language="python" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 安全模块 */}
      <section className="py-16 bg-pancake-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl tracking-wider mb-8 flex items-center">
            <Shield className="w-8 h-8 mr-3 text-pancake-gold" />
            安全<span className="gradient-text">模块</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">密码哈希</h3>
                <CodeBlock code={`hashed = hash_password("my_secret_password")
is_valid = verify_password("my_secret_password", hashed)
`} language="python" />
              </div>

              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">API Key 认证</h3>
                <CodeBlock code={`@get("/api/data")
@apikey_required
async def get_data(api_key):
    return {"data": "secure"}
`} language="python" />
              </div>

              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">安全响应头</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-pancake-gray/30">
                        <th className="text-left py-2 px-3 text-pancake-gold">Header</th>
                        <th className="text-left py-2 px-3 text-pancake-light/70">值</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['X-Content-Type-Options', 'nosniff'],
                        ['X-Frame-Options', 'DENY'],
                        ['X-XSS-Protection', '1; mode=block'],
                        ['Strict-Transport-Security', 'max-age=31536000'],
                        ['Content-Security-Policy', "default-src 'self'"],
                      ].map(([name, value]) => (
                        <tr key={name} className="border-b border-pancake-gray/20">
                          <td className="py-2 px-3 font-mono text-xs text-blue-400">{name}</td>
                          <td className="py-2 px-3 text-pancake-light/60">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">CSRF 保护</h3>
                <CodeBlock code={`@post("/api/submit")
@csrf_protected
async def submit_form(data: dict):
    return {"status": "ok"}
`} language="python" />
              </div>

              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">IP 过滤</h3>
                <CodeBlock code={`# 白名单
@ip_whitelist(["192.168.1.100", "10.0.0.0/8"])
@get("/admin/internal")
async def internal_api():
    return {"status": "internal"}

# 黑名单
@ip_blacklist(["1.2.3.4"])
@get("/api/public")
async def public_api():
    return {"status": "ok"}
`} language="python" />
              </div>

              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">Session 管理</h3>
                <CodeBlock code={`req.session["user_id"] = 123
req.session["role"] = "admin"
# 自动序列化到 Redis / Cookie
`} language="python" />
              </div>

              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">OAuth2 服务器</h3>
                <CodeBlock code={`# 注册 OAuth2 客户端
oauth.register_client("my_app", redirect_uri="...")

# 授权类型
@oauth.authorize(scopes=["read", "write"])
async def auth_endpoint():
    pass

# 受保护路由
@oauth.protected()
@get("/api/resource")
async def protected_resource():
    return {"data": "secret"}
`} language="python" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 消息队列 */}
      <section className="py-16 bg-pancake-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl tracking-wider mb-8 flex items-center">
            <MessageSquare className="w-8 h-8 mr-3 text-pancake-gold" />
            消息<span className="gradient-text">队列</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">@event_node 与 @on_event</h3>
                <CodeBlock code={`# 定义事件节点
@event_node(name="order_created")
async def handle_order_created(event):
    print(f"Order {event.order_id} created")

# 订阅事件
@on_event("order_created")
async def send_notification(event):
    await send_email(event.user_email, "Order Created")

@on_event("order_created")
async def update_inventory(event):
    await reduce_stock(event.product_id)
`} language="python" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">Broker 对比</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-pancake-gray/30">
                        <th className="text-left py-2 px-3 text-pancake-gold">特性</th>
                        <th className="text-left py-2 px-3 text-blue-400">SimpleBroker</th>
                        <th className="text-left py-2 px-3 text-green-400">RedisBroker</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['持久化', '内存', 'Redis AOF'],
                        ['分布式', '否', '是'],
                        ['适用场景', '开发/测试', '生产环境'],
                        ['消息可靠性', '进程内', '跨进程'],
                      ].map(([feature, simple, redis]) => (
                        <tr key={feature} className="border-b border-pancake-gray/20">
                          <td className="py-2 px-3 text-pancake-light/70">{feature}</td>
                          <td className="py-2 px-3 text-pancake-light/60">{simple}</td>
                          <td className="py-2 px-3 text-pancake-light/60">{redis}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">编程式使用</h3>
                <CodeBlock code={`# 订阅
broker.subscribe("order.*", handler)

# 发布
await broker.publish("order.created", {
    "order_id": 123,
    "user_id": 456
})
`} language="python" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 远程调用 */}
      <section className="py-16 bg-pancake-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl tracking-wider mb-8 flex items-center">
            <Link className="w-8 h-8 mr-3 text-pancake-gold" />
            远程<span className="gradient-text">调用</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">@remote_node 装饰器</h3>
                <p className="text-pancake-light/60 mb-3">将本地方法暴露为远程可调用端点</p>
                <CodeBlock code={`@remote_node(path="/rpc/calculate")
async def calculate(a: int, b: int, op: str) -> int:
    """远程可调用的计算服务"""
    if op == "add":
        return a + b
    elif op == "mul":
        return a * b
`} language="python" />
              </div>

              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">HTTP 远程客户端</h3>
                <CodeBlock code={`client = HTTPRemoteClient(
    base_url="http://remote-server:8000"
)

# 调用远程方法
result = await client.call("/rpc/calculate", {
    "a": 10, "b": 20, "op": "add"
})
print(result)  # 30
`} language="python" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">gRPC 远程客户端</h3>
                <CodeBlock code={`client = GRPCRemoteClient(
    target="remote-server:50051"
)

# 调用 gRPC 远程方法
result = await client.call("CalculateService/Calculate", {
    "a": 10, "b": 20, "op": "mul"
})
print(result)  # 200
`} language="python" />
              </div>

              <div className="bg-pancake-gray/20 rounded-xl p-6 border border-pancake-gray/20">
                <h3 className="text-xl font-semibold mb-3">RemoteProxy 管理器</h3>
                <CodeBlock code={`proxy = RemoteProxy()

# 注册远程服务
proxy.register("calc", HTTPRemoteClient("http://calc:8000"))
proxy.register("auth", GRPCRemoteClient("auth:50051"))

# 统一调用
result = await proxy.call("calc", "/rpc/calculate", data)
token = await proxy.call("auth", "AuthService/Verify", data)
`} language="python" />
              </div>
            </div>
          </div>
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