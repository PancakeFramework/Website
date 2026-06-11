export const tutorials = [
  {
    id: 'quick-start',
    title: '快速开始',
    steps: [
      {
        title: '1. 安装 Pancake',
        description: '使用 Poetry 安装 Pancake 框架',
        code: `# 安装 Poetry
pip install poetry

# 创建项目
poetry init
poetry add pancake`
      },
      {
        title: '2. 初始化项目',
        description: '使用 CLI 工具初始化项目结构',
        code: `# 初始化 Pancake 项目
pancake init my-project

# 进入项目目录
cd my-project`
      },
      {
        title: '3. 运行服务',
        description: '启动你的第一个 Pancake 服务',
        code: `# 运行项目
python main.py

# 服务默认运行在 http://127.0.0.1:8080`
      }
    ]
  },
  {
    id: 'mapper',
    title: 'MyBatis Plus Mapper',
    steps: [
      {
        title: '定义 Mapper',
        description: '使用 @Mapper 装饰器定义数据访问层',
        code: `@Mapper
class UserMapper(BaseMapper):
    @dataclass
    class User:
        id: int = None
        name: str = None
        email: str = None

    _entity_class = User
    _table_name = "users"

    @Select("SELECT * FROM users WHERE name = #{name}")
    async def find_by_name(self, name: str) -> list[User]: ...`
      },
      {
        title: '链式查询',
        description: '使用 QueryWrapper 进行链式查询',
        code: `# 链式查询示例
users = await qw() \\
    .eq("name", "Alice") \\
    .ge("age", 18) \\
    .order_by_desc("age") \\
    .limit(50) \\
    .list()`
      }
    ]
  },
  {
    id: 'ioc',
    title: 'IoC 容器',
    steps: [
      {
        title: '注册与解析',
        description: '使用 IoC 容器管理依赖',
        code: `# 注册服务
container.register(UserService, UserService, Scope.SINGLETON)

# 解析服务
service = container.resolve(UserService)`
      },
      {
        title: '自动注入',
        description: '使用 @auto_inject 装饰器自动注入依赖',
        code: `@auto_inject()
def get_config(service_title: str, service_port: int):
    return {"title": service_title, "port": service_port}`
      }
    ]
  },
  {
    id: 'ai',
    title: 'AI 模块',
    steps: [
      {
        title: '对话模型',
        description: '配置 ai.yaml 后直接使用 chat_model',
        code: `# 简单对话
response = await chat_model.chat([
    {"role": "user", "content": "你好"}
])

# 指定模型
response = await chat_model.chat([...], model="gemini")

# 流式输出
async for chunk in chat_model.chat_stream([...]):
    print(chunk, end="")`
      },
      {
        title: '记忆系统',
        description: '短期记忆和长期记忆管理',
        code: `# 短期记忆（对话上下文）
short_term_memory.add("user", "我叫小明")
messages = short_term_memory.get_messages()

# 长期记忆（持久化）
await long_term_memory.remember("user_name", "小明")
name = await long_term_memory.recall("user_name")`
      },
      {
        title: 'RAG 向量检索',
        description: '文档向量化与问答检索',
        code: `# 添加文档
await rag.add_document("Pancake 是一个 Python 框架...")

# 问答检索
answer = await rag.ask("什么是 Pancake？")`
      }
    ]
  }
]
