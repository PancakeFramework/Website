export const tutorials = [
  {
    id: 'quick-start',
    title: '快速开始',
    steps: [
      {
        title: '1. 安装框架',
        description: '使用 pip 安装 Pancake 框架',
        code: `pip install pancake_framework`
      },
      {
        title: '2. 初始化项目',
        description: '使用 CLI 工具初始化项目结构',
        code: `# 在当前目录初始化
pancake init

# 或在子目录创建新项目
pancake create my-project
cd my-project`
      },
      {
        title: '3. 运行服务',
        description: '启动你的第一个 Pancake 服务',
        code: `# 运行项目
pancake run

# 或直接运行
python main.py

# 服务默认运行在 http://127.0.0.1:8080`
      },
      {
        title: '4. 项目检查',
        description: '检查项目结构和环境是否正确',
        code: `pancake check`
      },
      {
        title: '5. 安装依赖',
        description: '安装缺失的项目依赖',
        code: `pancake install`
      }
    ]
  },
  {
    id: 'mybatis-mapper',
    title: 'MyBatis Plus ORM',
    steps: [
      {
        title: '定义实体类',
        description: '使用 dataclass 定义数据库实体',
        code: `from dataclasses import dataclass

@dataclass
class User:
    id: int = None
    name: str = None
    age: int = None`
      },
      {
        title: '定义 Mapper',
        description: '使用 @Mapper 装饰器定义数据访问层',
        code: `@Mapper
class UserMapper(BaseMapper):
    _entity_class = User
    _table_name = "users"

    @Select("SELECT * FROM users WHERE name = #{name}")
    async def find_by_name(self, name: str) -> list[User]: ...

    @SelectOne("SELECT * FROM users WHERE id = #{id}")
    async def find_by_id(self, id: int) -> User: ...

    @Insert("INSERT INTO users (name, age) VALUES (#{name}, #{age})")
    async def add_user(self, name: str, age: int) -> int: ...

    @Update("UPDATE users SET name = #{name} WHERE id = #{id}")
    async def rename(self, id: int, name: str) -> int: ...

    @Delete("DELETE FROM users WHERE id = #{id}")
    async def remove(self, id: int) -> int: ...`
      },
      {
        title: '内置 CRUD',
        description: 'BaseMapper 自动提供常用数据库操作',
        code: `# 按主键查询
user = await mapper.select_by_id(1)

# 条件列表查询
users = await mapper.select_list(status="active")

# 查询单条记录
user = await mapper.select_one(name="Alice")

# 统计记录数
count = await mapper.select_count(status="active")

# 插入记录
await mapper.insert(name="Bob", age=25)

# 批量插入
await mapper.insert_batch([user1, user2, user3])

# 按主键更新
await mapper.update_by_id(1, name="Alice Updated")

# 按主键删除
await mapper.delete_by_id(1)`
      },
      {
        title: '链式查询',
        description: '使用 QueryWrapper 进行链式查询',
        code: `from pancake import qw, uw

# 查询
users = await mapper.select(
    qw().ge("age", 18)
        .like("name", "%Ali%")
        .order_by_desc("age")
        .limit(50)
)

# 更新
await mapper.update(uw().set("name", "Bob").eq("id", 1))

# 删除
await mapper.delete(qw().lt("age", 18))`
      },
      {
        title: '动态 SQL',
        description: '使用动态 SQL 标签处理条件查询',
        code: `@Select("""
    SELECT * FROM users
    <where>
        <if test="name">AND name = #{name}</if>
        <if test="age">AND age = #{age}</if>
    </where>
    <choose>
        <when test="order == 'age'">ORDER BY age</when>
        <otherwise>ORDER BY id</otherwise>
    </choose>
""")
async def search(self, name: str = None, age: int = None, order: str = None): ...`
      },
      {
        title: '数据库配置',
        description: '在 YAML 中配置数据库连接',
        code: `# src/resource/yaml/mybatis.yaml
mybatis:
  database:
    url: sqlite:///resource/db/app.db
    min_size: 1
    max_size: 5

# 支持的数据库：
# SQLite: sqlite:///path/to/db
# PostgreSQL: postgresql://user:pass@host:port/db
# MySQL: mysql://user:pass@host:port/db`
      }
    ]
  },
  {
    id: 'ioc-container',
    title: 'IoC 容器与依赖注入',
    steps: [
      {
        title: '@auto_inject 装饰器',
        description: '自动从配置或容器解析函数参数',
        code: `@auto_inject()
def get_config(service_title: str, service_port: int):
    return {"title": service_title, "port": service_port}

# 参数类型决定数据来源：
# str/int/float/bool → YAML 配置（下划线映射为点）
# dict/list → JSON 配置
# 其他类型 → IoC 容器实例

# 参数名映射示例：
# service_title → service.title
# mybatis_database_url → mybatis.database.url`
      },
      {
        title: '注册与解析',
        description: '使用 IoC 容器管理依赖',
        code: `# 注册服务
container.register(UserService, UserService, Scope.SINGLETON)
container.register(EmailService, EmailService, Scope.TRANSIENT)

# 工厂注册
container.register(DbConnection, 
    factory=lambda: create_connection(), 
    scope=Scope.SINGLETON)

# 快捷注册
container.register_singleton(UserService, UserService)
container.register_transient(EmailService, EmailService)
container.register_scoped(RequestHandler, RequestHandler)

# 解析服务
service = container.resolve(UserService)`
      },
      {
        title: '自动构造函数注入',
        description: '容器自动解析构造函数依赖',
        code: `class UserService:
    def __init__(self, db: Database, cache: CacheService):
        self.db = db
        self.cache = cache

container.register(Database, Database, Scope.SINGLETON)
container.register(CacheService, CacheService, Scope.SINGLETON)
container.register(UserService, UserService, Scope.SINGLETON)

# UserService 自动注入 Database 和 CacheService
service = container.resolve(UserService)`
      },
      {
        title: '@inject 装饰器',
        description: '从 IoC 容器注入依赖到函数参数',
        code: `@inject
def process(user_service: UserService, email_service: EmailService):
    # user_service 和 email_service 自动从容器解析
    ...

# 命名依赖
@inject(primary_db=Database, cache=RedisClient)
def setup(primary_db, cache):
    ...`
      },
      {
        title: '作用域说明',
        description: '三种作用域管理对象生命周期',
        code: `Scope.SINGLETON   # 全局单例
Scope.TRANSIENT   # 每次创建新实例
Scope.SCOPED      # 同一作用域内单例`
      }
    ]
  },
  {
    id: 'web-module',
    title: 'Web 模块',
    steps: [
      {
        title: '路由控制器',
        description: '使用路由装饰器创建 REST API',
        code: `@get_controller("/users")
async def list_users():
    return await UserMapper().select_list()

@post_controller("/users")
async def create_user(name: str, age: int):
    return {"id": await UserMapper().insert(name=name, age=age)}

@put_controller("/users/{user_id}")
async def update_user(user_id: int, name: str):
    await UserMapper().update_by_id(id=user_id, name=name)

@delete_controller("/users/{user_id}")
async def delete_user(user_id: int):
    await UserMapper().delete_by_id(user_id)`
      },
      {
        title: '页面控制器',
        description: '渲染 HTML 模板页面',
        code: `@page_controller("/home", template="home.html")
async def home():
    return {"title": "首页", "message": "你好"}

# 模板默认从 src/templates/ 加载`
      },
      {
        title: '过滤器链',
        description: '类似 Spring Security 的过滤器链',
        code: `# 函数风格
@filter(order=10)
async def auth_filter(request: Request, call_next):
    token = request.headers.get("Authorization")
    if not token and request.url.path.startswith("/api"):
        return JSONResponse(status_code=401, content={"detail": "未授权"})
    return await call_next(request)

# 类风格
class AuthFilter(Filter):
    order = 10

    async def do_filter(self, request, call_next):
        if not request.headers.get("Authorization"):
            return JSONResponse(status_code=401)
        return await call_next(request)`
      },
      {
        title: '认证与授权',
        description: '内置认证系统',
        code: `@set_auth_handler
async def authenticate(request, token):
    user = await verify_token(token)
    if not user:
        raise HTTPException(status_code=401)
    return user

@get_controller("/profile")
@auth_required
async def get_profile(current_user):
    return {"user": current_user}

@delete_controller("/admin/users/{user_id}")
@role_required("admin")
async def delete_user(user_id: int):
    await UserMapper().delete_by_id(user_id)`
      },
      {
        title: '中间件与限流',
        description: '自定义中间件与请求限流',
        code: `# 中间件
@middleware(order=1)
async def log_request(request, call_next):
    start = time.time()
    response = await call_next(request)
    logger.info(f"{request.method} {request.url.path} {time.time()-start:.3f}s")
    return response

# 限流
@get_controller("/api/data")
@rate_limit(times=100, seconds=60)
async def get_data():
    return {"data": "..."}`
      },
      {
        title: '事务与参数校验',
        description: '数据库事务与参数验证',
        code: `# 事务
@post_controller("/transfer")
@transaction
async def transfer(from_id: int, to_id: int, amount: float):
    # 该函数内的所有数据库操作在同一事务中
    ...

# 参数校验
@post_controller("/users")
@validate(age=lambda v: 0 < v < 200, name=lambda v: len(v) > 0)
async def create_user(name: str, age: int):
    ...`
      },
      {
        title: 'WebSocket',
        description: '实时通信支持',
        code: `@websocket_controller("/ws/chat")
async def chat(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Echo: {data}")`
      }
    ]
  },
  {
    id: 'ai-module',
    title: 'AI 模块',
    steps: [
      {
        title: '配置 AI 提供商',
        description: '在 YAML 中配置 AI 模型',
        code: `# src/resource/yaml/ai.yaml
ai:
  default_model: deepseek
  providers:
    deepseek:
      type: openai
      base_url: https://api.deepseek.com
      api_key: \${DEEPSEEK_API_KEY}
      model: deepseek-chat
      max_tokens: 4096
      temperature: 0.7
      timeout: 60
      retry: 3
    gemini:
      type: google
      api_key: \${GOOGLE_API_KEY}
      model: gemini-2.0-flash`
      },
      {
        title: '基本对话',
        description: '使用 chat_model 进行对话',
        code: `# 基本对话
response = await chat_model.chat([
    {"role": "user", "content": "你好"}
])

# 指定模型
response = await chat_model.chat([...], model="gemini")

# 流式输出
async for chunk in chat_model.chat_stream([...]):
    print(chunk, end="")

# 生成嵌入向量
vector = await chat_model.embed("一些文本")`
      },
      {
        title: '记忆系统',
        description: '短期记忆和长期记忆管理',
        code: `# 短期记忆（对话上下文）
await short_term_memory.add("session_001", "user", "我叫小明")
await short_term_memory.add("session_001", "assistant", "你好小明！")
messages = await short_term_memory.get_messages("session_001")

# 长期记忆（持久化）
await long_term_memory.remember("user_name", "小明")
name = await long_term_memory.recall("user_name")
await long_term_memory.forget("user_name")`
      },
      {
        title: 'RAG 向量检索',
        description: '文档向量化与问答检索',
        code: `# 添加文档
await rag.add_document("Pancake 是一个 Python 框架...")
await rag.add_documents(["文档1内容", "文档2内容"])

# 问答检索
answer = await rag.ask("什么是 Pancake？")

# 向量检索
results = await rag.search("框架", top_k=5)`
      }
    ]
  },
  {
    id: 'redis-cache',
    title: 'Redis 缓存',
    steps: [
      {
        title: '基础操作',
        description: 'Redis 基础键值操作',
        code: `client = redis_client()

await client.set("key", "value", ttl=300)
value = await client.get("key")
await client.delete("key")
exists = await client.exists("key")
await client.expire("key", 60)
await client.incr("counter")
await client.decr("counter")`
      },
      {
        title: 'JSON 与 Hash',
        description: 'JSON 存储和 Hash 数据结构',
        code: `# JSON 存储
await client.set_json("user:1", {"name": "小明", "age": 30}, ttl=600)
data = await client.get_json("user:1")

# Hash 操作
await client.hset("user:1", mapping={"name": "小明", "age": "30"})
name = await client.hget("user:1", "name")
all_fields = await client.hgetall("user:1")
await client.hdel("user:1", "age")
await client.hincrby("user:1", "visits", 1)`
      },
      {
        title: 'List 与 Set',
        description: 'List 和 Set 数据结构',
        code: `# List 操作
await client.lpush("queue", "task1", "task2")
await client.rpush("queue", "task3")
item = await client.lpop("queue")
items = await client.lrange("queue", 0, -1)
length = await client.llen("queue")

# Set 操作
await client.sadd("tags", "python", "web")
await client.srem("tags", "web")
members = await client.smembers("tags")
is_member = await client.sismember("tags", "python")`
      },
      {
        title: '分布式锁',
        description: '使用 Redis 分布式锁',
        code: `# 手动锁
lock = await client.lock("my_lock", timeout=10)
if lock:
    try:
        # 临界区
        ...
    finally:
        await lock.release()

# 上下文管理器
async with await client.lock("my_lock") as lock:
    # 临界区
    ...`
      },
      {
        title: '缓存防护与 @cached',
        description: '三层缓存防护和缓存装饰器',
        code: `# CacheGuard 三层防护
guard = CacheGuard(client)
result = await guard.get_or_load(
    "user:123",
    loader=lambda: db.query(123),
    ttl=600,
    null_ttl=30,
    jitter=60,
    protect_breakdown=True
)

# @cached 装饰器
@cached(ttl=300)
async def get_user(user_id: int):
    return await db.query(user_id)

@cached(key="user:{user_id}", ttl=600, jitter=60)
async def get_user_detail(user_id: int):
    return await db.query_detail(user_id)`
      }
    ]
  },
  {
    id: 'config-management',
    title: '配置管理',
    steps: [
      {
        title: 'YAML 配置',
        description: '使用 YAML 文件配置服务',
        code: `# src/resource/yaml/service.yaml
service:
  title: 我的应用
  version: 1.0.0
  host: 127.0.0.1
  port: 8080

# src/resource/yaml/mybatis.yaml
mybatis:
  database:
    url: sqlite:///resource/db/app.db
    min_size: 1
    max_size: 5

# 环境变量引用
mybatis:
  database:
    url: \${DATABASE_URL}

redis:
  password: \${REDIS_PASSWORD}`
      },
      {
        title: 'XML 配置',
        description: 'pancake.xml 全局配置',
        code: `<?xml version="1.0" encoding="UTF-8"?>
<pancake>
    <global>
        <service.title>我的应用</service.title>
        <service.version>1.0.0</service.version>
        <service.host>127.0.0.1</service.host>
        <service.port>8080</service.port>
    </global>
    <plugins>
        <plugin name="embed" init-order="0"/>
        <plugin name="mybatis" init-order="1"/>
        <plugin name="web" init-order="2"/>
    </plugins>
</pancake>`
      },
      {
        title: '编程访问配置',
        description: '通过 settings API 访问配置',
        code: `from pancake import settings

# 获取配置值
title = settings.get("service.title", "默认标题")
port = settings.get("service.port", 8080)

# 获取路径配置（返回绝对路径）
yaml_dir = settings.get_path("yaml_dir")
mapper_dir = settings.get_path("mapper_dir")

# 按前缀获取所有配置
service_config = settings.get_all("service.")

# 手动设置配置
settings.set("custom.key", "value")`
      },
      {
        title: '环境变量',
        description: '使用 .env 文件管理环境变量',
        code: `# .env（根目录）
DATABASE_URL=sqlite:///resource/db/app.db
SECRET_KEY=my-secret

# 项目根目录的 .env 文件通过 python-dotenv 自动加载

# 配置优先级：
# XML 全局配置 > YAML 配置 > 默认值`
      }
    ]
  },
  {
    id: 'security',
    title: '安全模块',
    steps: [
      {
        title: '密码哈希',
        description: '安全的密码存储',
        code: `# 哈希密码
hashed = hash_password("my-secret")

# 验证密码
is_valid = verify_password("my-secret", hashed)

# 自动检测最佳库：bcrypt > argon2 > hashlib（回退）
# 验证时自动检测哈希格式：\$2b\$... (bcrypt)、\$argon2\$...、\$sha256\$salt\$hash`
      },
      {
        title: 'API Key 认证',
        description: '使用 API Key 保护端点',
        code: `@get_controller("/api/data")
@api_key_required(keys=["secret-key-123"])
async def get_data():
    return {"data": "..."}

# 自定义验证器
async def validate_api_key(key: str) -> bool:
    return await db.exists("api_keys", key=key)

@api_key_required(validator=validate_api_key)
async def get_data():
    ...

# 自定义 Header
@api_key_required(header="Authorization", keys=["Bearer my-key"])
async def get_data():
    ...`
      },
      {
        title: 'CSRF 防护',
        description: '防止跨站请求伪造攻击',
        code: `# 生成令牌
token = generate_csrf_token()

# 通过表单提交
<input type="hidden" name="csrf_token" value="{{ csrf_token }}">

# 或通过 header
fetch("/api/data", {
    method: "POST",
    headers: { "X-CSRF-Token": csrfToken }
});

# 配置
service:
  csrf:
    enabled: true
    exempt_paths:
      - "/api/"
      - "/webhook/"`
      },
      {
        title: 'OAuth2 服务器',
        description: '完整的 OAuth2 授权服务器',
        code: `# 注册客户端
server = OAuth2Server()
server.register_client(
    client_id="myapp",
    client_secret="secret",
    redirect_uris=["http://localhost:8080/callback"],
    scopes=["read", "write"],
    grant_types=["authorization_code", "client_credentials", "refresh_token"]
)

# 注册路由
from pancake.ovenware.web.security import register_oauth2_routes
register_oauth2_routes(app)

# 保护路由
@get_controller("/api/resource")
@oauth2_required(scopes=["read"])
async def get_resource(oauth_claims: dict):
    return {"user": oauth_claims.get("sub")}`
      }
    ]
  },
  {
    id: 'lifecycle',
    title: '生命周期管理',
    steps: [
      {
        title: 'Lifecycle 基类',
        description: '通过钩子管理组件生命周期',
        code: `class MyService(Lifecycle):
    async def on_init(self):
        """创建时调用"""
        self.cache = {}
        await self.load_config()

    async def on_start(self):
        """开始处理前调用"""
        await self.connect_db()

    async def on_stop(self):
        """停止时调用"""
        await self.close_connections()

    async def on_error(self, error: Exception):
        """发生错误时调用"""
        logger.error(f"错误: {error}")

    async def on_complete(self, result=None):
        """处理完成后调用"""
        logger.info(f"完成: {result}")

    async def process(self, state=None):
        """主处理方法（必须实现）"""
        return {"status": "ok"}`
      },
      {
        title: '@lifecycle_node',
        description: '自动管理 langgraph 节点生命周期',
        code: `@lifecycle_node("worker")
class WorkerNode(Lifecycle):
    async def on_init(self):
        self.db = await connect_db()

    async def process(self, state):
        return await self.db.query(...)

# 装饰器行为：
# 1. 创建单个实例（跨调用复用）
# 2. 首次调用时执行 on_init() 和 on_start()
# 3. 每次请求执行 process()
# 4. 处理完成后执行 on_complete()`
      },
      {
        title: 'LifecycleManager',
        description: '编程方式管理多个生命周期实例',
        code: `manager = LifecycleManager()

# 注册实例
await manager.register("worker", WorkerNode())

# 初始化全部
await manager.initialize()

# 启动全部
await manager.start()

# 停止指定实例
await manager.stop("worker")

# 关闭所有
await manager.shutdown_all()`
      }
    ]
  },
  {
    id: 'cli',
    title: 'CLI 工具',
    steps: [
      {
        title: '常用命令',
        description: 'Pancake CLI 常用命令一览',
        code: `pancake version          # 显示框架版本
pancake init             # 在当前目录初始化项目
pancake create <name>    # 在子目录创建新项目
pancake run              # 运行项目
pancake check            # 检查项目结构和环境
pancake build            # 打包项目为 wheel
pancake install          # 安装缺失依赖
pancake update           # 更新 pancake_framework 包`
      },
      {
        title: '插件管理',
        description: '使用 CLI 管理插件',
        code: `# 列出所有插件
pancake plugin list

# 添加插件到 pancake.xml
pancake plugin add redis_cache`
      },
      {
        title: '配置查看与代码审核',
        description: '查看配置与代码质量审核',
        code: `# 显示当前配置（敏感值脱敏）
pancake config show

# 审核 src/ 代码质量
pancake audit`
      }
    ]
  }
]
