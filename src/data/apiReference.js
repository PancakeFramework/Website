export const apiReference = {
  decorators: [
    {
      name: '@Mapper',
      description: '标记类为 MyBatis Plus Mapper，自动注册到容器',
      params: '无参数',
      example: `@Mapper
class UserMapper(BaseMapper):
    _entity_class = User
    _table_name = "users"`
    },
    {
      name: '@Select',
      description: '定义 SELECT SQL 查询方法',
      params: 'sql: str - SQL 语句，支持 #{param} 参数化',
      example: `@Select("SELECT * FROM users WHERE id = #{id}")
async def find_by_id(self, id: int) -> User: ...`
    },
    {
      name: '@SelectOne',
      description: '定义 SELECT 查询返回单条记录',
      params: 'sql: str',
      example: `@SelectOne("SELECT * FROM users WHERE id = #{id}")
async def find_by_id(self, id: int) -> User: ...`
    },
    {
      name: '@Insert',
      description: '定义 INSERT SQL 语句',
      params: 'sql: str',
      example: `@Insert("INSERT INTO users (name, age) VALUES (#{name}, #{age})")
async def insert_user(self, name: str, age: int): ...`
    },
    {
      name: '@Update',
      description: '定义 UPDATE SQL 语句',
      params: 'sql: str',
      example: `@Update("UPDATE users SET age = #{age} WHERE id = #{id}")
async def update_user(self, id: int, age: int): ...`
    },
    {
      name: '@Delete',
      description: '定义 DELETE SQL 语句',
      params: 'sql: str',
      example: `@Delete("DELETE FROM users WHERE id = #{id}")
async def delete_user(self, id: int): ...`
    },
    {
      name: '@auto_inject',
      description: '自动从 YAML/JSON 配置或注册实例解析函数参数',
      params: '无参数',
      example: `@auto_inject
def create_user(user_service: UserService, config: dict):
    return user_service.create(config)`
    },
    {
      name: '@inject',
      description: '从 IoC 容器注入依赖到函数参数',
      params: '无参数',
      example: `@inject
def process_order(order_service: OrderService, id: int):
    return order_service.get(id)`
    },
    {
      name: '@event_node',
      description: '函数完成时发布事件',
      params: 'name: str, event: str',
      example: `@event_node(name="send_email", event="email_sent")
async def send_email(to: str, body: str):
    await mailer.send(to, body)`
    },
    {
      name: '@on_event',
      description: '订阅事件',
      params: 'event: str',
      example: `@on_event("email_sent")
async def log_email_sent(event_data: dict):
    print(f"Email sent: {event_data}")`
    },
    {
      name: '@remote_node',
      description: '统一远程调用接口',
      params: 'name, protocol, url, endpoint, timeout',
      example: `@remote_node(name="user_service", protocol="http", url="http://api.example.com")
async def get_user(id: int): ...`
    },
    {
      name: '@lifecycle_node',
      description: '自动管理 langgraph 节点生命周期',
      params: 'node_name: str',
      example: `@lifecycle_node(node_name="process_input")
async def process_input(state: dict) -> dict:
    return {"processed": True}`
    },
    {
      name: '@cached',
      description: '缓存装饰器',
      params: 'ttl: int, key?: string, jitter?: int',
      example: `@cached(ttl=3600, key="user:{id}")
async def get_user(id: int):
    return await db.find_by_id(id)`
    },
    {
      name: '@get_controller',
      description: 'GET 路由控制器',
      params: 'path: str',
      example: `@get_controller("/api/users/{id}")
async def get_user(id: int):
    return await user_service.get(id)`
    },
    {
      name: '@post_controller',
      description: 'POST 路由控制器',
      params: 'path: str',
      example: `@post_controller("/api/users")
async def create_user(data: dict):
    return await user_service.create(data)`
    },
    {
      name: '@put_controller',
      description: 'PUT 路由控制器',
      params: 'path: str',
      example: `@put_controller("/api/users/{id}")
async def update_user(id: int, data: dict):
    return await user_service.update(id, data)`
    },
    {
      name: '@delete_controller',
      description: 'DELETE 路由控制器',
      params: 'path: str',
      example: `@delete_controller("/api/users/{id}")
async def delete_user(id: int):
    return await user_service.delete(id)`
    },
    {
      name: '@page_controller',
      description: '页面模板渲染控制器',
      params: 'path: str, template: str',
      example: `@page_controller("/home", template="index.html")
async def home(request):
    return {"title": "首页"}`
    },
    {
      name: '@websocket_controller',
      description: 'WebSocket 控制器',
      params: 'path: str',
      example: `@websocket_controller("/ws/chat")
async def chat_ws(ws):
    async for msg in ws:
        await ws.send(f"Echo: {msg}")`
    },
    {
      name: '@filter',
      description: '过滤器链',
      params: 'order: int',
      example: `@filter(order=1)
async def log_filter(request, next_fn):
    print(f"Request: {request.path}")
    return await next_fn(request)`
    },
    {
      name: '@middleware',
      description: '中间件',
      params: 'order: int',
      example: `@middleware(order=0)
async def cors_middleware(request, next_fn):
    response = await next_fn(request)
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response`
    },
    {
      name: '@set_auth_handler',
      description: '设置认证处理器',
      params: '无参数',
      example: `@set_auth_handler
async def auth_handler(token: str):
    user = await verify_token(token)
    return user`
    },
    {
      name: '@auth_required',
      description: '需要认证的端点',
      params: '无参数',
      example: `@get_controller("/api/profile")
@auth_required
async def get_profile(request):
    return request.user`
    },
    {
      name: '@role_required',
      description: '需要角色权限的端点',
      params: 'role: str',
      example: `@get_controller("/api/admin/users")
@role_required("admin")
async def list_users():
    return await user_service.list()`
    },
    {
      name: '@rate_limit',
      description: '请求限流',
      params: 'times: int, seconds: int',
      example: `@get_controller("/api/search")
@rate_limit(times=10, seconds=60)
async def search(query: str):
    return await search_service.search(query)`
    },
    {
      name: '@transaction',
      description: '事务装饰器',
      params: '无参数',
      example: `@transaction
async def transfer(from_id: int, to_id: int, amount: float):
    await account.debit(from_id, amount)
    await account.credit(to_id, amount)`
    },
    {
      name: '@validate',
      description: '参数校验',
      params: '校验规则对象',
      example: `@post_controller("/api/users")
@validate({"name": str, "age": int})
async def create_user(name: str, age: int):
    return await user_service.create(name, age)`
    },
    {
      name: '@api_key_required',
      description: 'API Key 认证',
      params: 'keys?: string[], validator?: Function, header?: string',
      example: `@get_controller("/api/data")
@api_key_required(keys=["key1", "key2"])
async def get_data():
    return {"data": "secret"}`
    },
    {
      name: '@oauth2_required',
      description: 'OAuth2 令牌验证',
      params: 'scopes?: string[]',
      example: `@get_controller("/api/protected")
@oauth2_required(scopes=["read:profile"])
async def get_protected(request):
    return request.user`
    }
  ],
  orm: [
    {
      name: 'qw()',
      description: '创建 QueryWrapper 实例，用于链式查询',
      example: `qw().eq("name", "Alice").list()`
    },
    {
      name: 'uw()',
      description: '创建 UpdateWrapper 实例，用于链式更新',
      example: `uw().eq("name", "Alice").set("status", "active").update()`
    },
    {
      name: '.eq(col, val)',
      description: '等于条件',
      params: 'col: str, val: Any',
      example: `qw().eq("name", "Alice")`
    },
    {
      name: '.ne(col, val)',
      description: '不等于条件',
      params: 'col: str, val: Any',
      example: `qw().ne("status", "deleted")`
    },
    {
      name: '.gt(col, val)',
      description: '大于条件',
      params: 'col: str, val: Any',
      example: `qw().gt("age", 18)`
    },
    {
      name: '.ge(col, val)',
      description: '大于等于条件',
      params: 'col: str, val: Any',
      example: `qw().ge("age", 18)`
    },
    {
      name: '.lt(col, val)',
      description: '小于条件',
      params: 'col: str, val: Any',
      example: `qw().lt("age", 60)`
    },
    {
      name: '.le(col, val)',
      description: '小于等于条件',
      params: 'col: str, val: Any',
      example: `qw().le("age", 60)`
    },
    {
      name: '.like(col, val)',
      description: 'LIKE 模糊查询',
      params: 'col: str, val: str',
      example: `qw().like("name", "%张%")`
    },
    {
      name: '.in(col, values)',
      description: 'IN 条件',
      params: 'col: str, values: list',
      example: `qw().in_("id", [1, 2, 3])`
    },
    {
      name: '.between(col, a, b)',
      description: 'BETWEEN 条件',
      params: 'col: str, a: Any, b: Any',
      example: `qw().between("age", 18, 60)`
    },
    {
      name: '.is_null(col)',
      description: 'IS NULL 条件',
      params: 'col: str',
      example: `qw().is_null("deleted_at")`
    },
    {
      name: '.is_not_null(col)',
      description: 'IS NOT NULL 条件',
      params: 'col: str',
      example: `qw().is_not_null("email")`
    },
    {
      name: '.order_by_asc(col)',
      description: '升序排序',
      params: 'col: str',
      example: `qw().order_by_asc("age")`
    },
    {
      name: '.order_by_desc(col)',
      description: '降序排序',
      params: 'col: str',
      example: `qw().order_by_desc("age")`
    },
    {
      name: '.limit(n)',
      description: '限制返回数量',
      params: 'n: int',
      example: `qw().limit(50)`
    },
    {
      name: '.offset(n)',
      description: '偏移数量',
      params: 'n: int',
      example: `qw().offset(10).limit(20)`
    },
    {
      name: '.select_by_id(id)',
      description: 'BaseMapper: 按主键查询',
      params: 'id: Any',
      returns: 'Entity | None',
      example: `user = await mapper.select_by_id(1)`
    },
    {
      name: '.select_list(**kwargs)',
      description: 'BaseMapper: 条件列表查询',
      params: '**kwargs: 查询条件',
      returns: 'list[Entity]',
      example: `users = await mapper.select_list(status="active")`
    },
    {
      name: '.select_one(**kwargs)',
      description: 'BaseMapper: 查询单条记录',
      params: '**kwargs: 查询条件',
      returns: 'Entity | None',
      example: `user = await mapper.select_one(name="Alice")`
    },
    {
      name: '.select_count(**kwargs)',
      description: 'BaseMapper: 统计记录数',
      params: '**kwargs: 查询条件',
      returns: 'int',
      example: `count = await mapper.select_count(status="active")`
    },
    {
      name: '.insert(**kwargs)',
      description: 'BaseMapper: 插入记录',
      params: '**kwargs: 字段值',
      returns: 'Entity',
      example: `user = await mapper.insert(name="Bob", age=25)`
    },
    {
      name: '.insert_batch(entities)',
      description: 'BaseMapper: 批量插入',
      params: 'entities: list[Entity]',
      example: `await mapper.insert_batch([user1, user2, user3])`
    },
    {
      name: '.update_by_id(id, **kwargs)',
      description: 'BaseMapper: 按主键更新',
      params: 'id: Any, **kwargs: 更新字段',
      example: `await mapper.update_by_id(1, name="Alice Updated")`
    },
    {
      name: '.delete_by_id(id)',
      description: 'BaseMapper: 按主键删除',
      params: 'id: Any',
      example: `await mapper.delete_by_id(1)`
    }
  ],
  ai: [
    {
      name: 'chat_model.chat(messages, **kwargs)',
      description: '发送对话请求',
      params: 'messages: list[dict], **kwargs',
      example: `response = await chat_model.chat([
    {"role": "user", "content": "你好"}
])`
    },
    {
      name: 'chat_model.chat_stream(messages, **kwargs)',
      description: '流式对话',
      params: 'messages: list[dict], **kwargs',
      example: `async for chunk in chat_model.chat_stream([...]):
    print(chunk, end="")`
    },
    {
      name: 'chat_model.embed(text)',
      description: '生成嵌入向量',
      params: 'text: str',
      returns: 'list[float]',
      example: `vector = await chat_model.embed("hello world")`
    },
    {
      name: 'short_term_memory.add(session_id, role, content)',
      description: '添加短期记忆',
      params: 'session_id: str, role: str, content: str',
      example: `short_term_memory.add("session_1", "user", "我叫小明")`
    },
    {
      name: 'short_term_memory.get_messages(session_id)',
      description: '获取对话历史',
      params: 'session_id: str',
      returns: 'list[dict]',
      example: `messages = short_term_memory.get_messages("session_1")`
    },
    {
      name: 'long_term_memory.remember(key, value)',
      description: '存储长期记忆',
      params: 'key: str, value: str',
      example: `await long_term_memory.remember("user_name", "小明")`
    },
    {
      name: 'long_term_memory.recall(key)',
      description: '召回长期记忆',
      params: 'key: str',
      returns: 'str | None',
      example: `name = await long_term_memory.recall("user_name")`
    },
    {
      name: 'long_term_memory.forget(key)',
      description: '删除长期记忆',
      params: 'key: str',
      example: `await long_term_memory.forget("user_name")`
    },
    {
      name: 'rag.add_document(text)',
      description: '添加文档到 RAG 向量库',
      params: 'text: str',
      example: `await rag.add_document("Pancake 是一个 Python 框架...")`
    },
    {
      name: 'rag.add_documents(texts)',
      description: '批量添加文档',
      params: 'texts: list[str]',
      example: `await rag.add_documents(["doc1", "doc2", "doc3"])`
    },
    {
      name: 'rag.ask(question)',
      description: '基于检索的回答',
      params: 'question: str',
      returns: 'str',
      example: `answer = await rag.ask("什么是 Pancake？")`
    },
    {
      name: 'rag.search(query, top_k)',
      description: '向量检索',
      params: 'query: str, top_k: int',
      returns: 'list[dict]',
      example: `results = await rag.search("Python 框架", top_k=5)`
    }
  ],
  web: [
    {
      name: '@get_controller',
      description: 'GET 路由控制器',
      params: 'path: str',
      example: `@get_controller("/api/users")
async def get_users():
    return await user_service.list()`
    },
    {
      name: '@post_controller',
      description: 'POST 路由控制器',
      params: 'path: str',
      example: `@post_controller("/api/users")
async def create_user(data: dict):
    return await user_service.create(data)`
    },
    {
      name: '@put_controller',
      description: 'PUT 路由控制器',
      params: 'path: str',
      example: `@put_controller("/api/users/{id}")
async def update_user(id: int, data: dict):
    return await user_service.update(id, data)`
    },
    {
      name: '@delete_controller',
      description: 'DELETE 路由控制器',
      params: 'path: str',
      example: `@delete_controller("/api/users/{id}")
async def delete_user(id: int):
    return await user_service.delete(id)`
    },
    {
      name: '@page_controller',
      description: '页面模板渲染',
      params: 'path: str, template: str',
      example: `@page_controller("/home", template="index.html")
async def home(request):
    return {"title": "首页"}`
    },
    {
      name: '@websocket_controller',
      description: 'WebSocket 控制器',
      params: 'path: str',
      example: `@websocket_controller("/ws/chat")
async def chat_ws(ws):
    async for msg in ws:
        await ws.send(f"Echo: {msg}")`
    },
    {
      name: '@filter',
      description: '过滤器（函数风格）',
      params: 'order: int',
      example: `@filter(order=1)
async def log_filter(request, next_fn):
    print(f"Request: {request.path}")
    return await next_fn(request)`
    },
    {
      name: 'Filter 类',
      description: '过滤器（类风格）',
      example: `class AuthFilter(Filter):
    async def do_filter(self, request, next_fn):
        if not request.token:
            return Response(401)
        return await next_fn(request)`
    },
    {
      name: '@middleware',
      description: '中间件',
      params: 'order: int',
      example: `@middleware(order=0)
async def cors_middleware(request, next_fn):
    response = await next_fn(request)
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response`
    },
    {
      name: '@set_auth_handler',
      description: '认证处理器',
      params: '无参数',
      example: `@set_auth_handler
async def auth_handler(token: str):
    return await verify_token(token)`
    },
    {
      name: '@auth_required',
      description: '需要认证',
      params: '无参数',
      example: `@get_controller("/api/profile")
@auth_required
async def get_profile(request):
    return request.user`
    },
    {
      name: '@role_required',
      description: '需要角色',
      params: 'role: str',
      example: `@get_controller("/api/admin")
@role_required("admin")
async def admin_panel():
    return {"msg": "admin only"}`
    },
    {
      name: '@rate_limit',
      description: '限流',
      params: 'times: int, seconds: int',
      example: `@get_controller("/api/search")
@rate_limit(times=10, seconds=60)
async def search(query: str):
    return await search_service.search(query)`
    },
    {
      name: '@transaction',
      description: '事务',
      params: '无参数',
      example: `@transaction
async def transfer(from_id: int, to_id: int, amount: float):
    await account.debit(from_id, amount)
    await account.credit(to_id, amount)`
    },
    {
      name: '@validate',
      description: '参数校验',
      params: '校验规则对象',
      example: `@post_controller("/api/users")
@validate({"name": str, "age": int})
async def create_user(name: str, age: int):
    return await user_service.create(name, age)`
    },
    {
      name: '@api_key_required',
      description: 'API Key 认证',
      params: 'keys?: string[], validator?: Function, header?: string',
      example: `@get_controller("/api/data")
@api_key_required(keys=["key1", "key2"])
async def get_data():
    return {"data": "secret"}`
    },
    {
      name: '@oauth2_required',
      description: 'OAuth2 验证',
      params: 'scopes?: string[]',
      example: `@get_controller("/api/protected")
@oauth2_required(scopes=["read:profile"])
async def get_protected(request):
    return request.user`
    },
    {
      name: 'generate_csrf_token()',
      description: '生成 CSRF 令牌',
      returns: 'str',
      example: `token = generate_csrf_token()`
    },
    {
      name: 'get_session(request)',
      description: '获取会话数据',
      params: 'request: Request',
      returns: 'dict',
      example: `session = get_session(request)`
    },
    {
      name: 'SessionManager',
      description: '会话管理器',
      example: `manager = SessionManager()
manager.set(request, "user_id", 123)`
    }
  ],
  redis: [
    {
      name: 'redis_client()',
      description: '获取全局 Redis 客户端',
      returns: 'RedisClient',
      example: `client = redis_client()`
    },
    {
      name: '.set(key, value, ttl?)',
      description: '设置键值',
      params: 'key: str, value: str, ttl?: int',
      example: `await client.set("name", "Alice", ttl=3600)`
    },
    {
      name: '.get(key)',
      description: '获取值',
      params: 'key: str',
      returns: 'str | None',
      example: `value = await client.get("name")`
    },
    {
      name: '.delete(key)',
      description: '删除键',
      params: 'key: str',
      example: `await client.delete("name")`
    },
    {
      name: '.exists(key)',
      description: '检查键是否存在',
      params: 'key: str',
      returns: 'bool',
      example: `exists = await client.exists("name")`
    },
    {
      name: '.expire(key, ttl)',
      description: '设置过期时间',
      params: 'key: str, ttl: int',
      example: `await client.expire("name", 3600)`
    },
    {
      name: '.incr(key)',
      description: '自增',
      params: 'key: str',
      returns: 'int',
      example: `count = await client.incr("visits")`
    },
    {
      name: '.decr(key)',
      description: '自减',
      params: 'key: str',
      returns: 'int',
      example: `count = await client.decr("visits")`
    },
    {
      name: '.set_json(key, data, ttl?)',
      description: '设置 JSON 数据',
      params: 'key: str, data: dict, ttl?: int',
      example: `await client.set_json("user:1", {"name": "Alice"}, ttl=3600)`
    },
    {
      name: '.get_json(key)',
      description: '获取 JSON 数据',
      params: 'key: str',
      returns: 'dict | None',
      example: `user = await client.get_json("user:1")`
    },
    {
      name: '.hset(key, mapping)',
      description: 'Hash 设置',
      params: 'key: str, mapping: dict',
      example: `await client.hset("user:1", {"name": "Alice", "age": "25"})`
    },
    {
      name: '.hget(key, field)',
      description: 'Hash 获取',
      params: 'key: str, field: str',
      returns: 'str | None',
      example: `name = await client.hget("user:1", "name")`
    },
    {
      name: '.hgetall(key)',
      description: 'Hash 获取所有',
      params: 'key: str',
      returns: 'dict',
      example: `data = await client.hgetall("user:1")`
    },
    {
      name: '.hdel(key, fields)',
      description: 'Hash 删除',
      params: 'key: str, fields: str[]',
      example: `await client.hdel("user:1", "age")`
    },
    {
      name: '.hincrby(key, field, amount)',
      description: 'Hash 自增',
      params: 'key: str, field: str, amount: int',
      example: `await client.hincrby("user:1", "views", 1)`
    },
    {
      name: '.lpush(key, ...values)',
      description: 'List 左推',
      params: 'key: str, ...values: str[]',
      example: `await client.lpush("tasks", "task1", "task2")`
    },
    {
      name: '.rpush(key, ...values)',
      description: 'List 右推',
      params: 'key: str, ...values: str[]',
      example: `await client.rpush("tasks", "task3")`
    },
    {
      name: '.lpop(key)',
      description: 'List 左弹',
      params: 'key: str',
      returns: 'str | None',
      example: `task = await client.lpop("tasks")`
    },
    {
      name: '.lrange(key, start, end)',
      description: 'List 范围',
      params: 'key: str, start: int, end: int',
      returns: 'list[str]',
      example: `tasks = await client.lrange("tasks", 0, -1)`
    },
    {
      name: '.llen(key)',
      description: 'List 长度',
      params: 'key: str',
      returns: 'int',
      example: `count = await client.llen("tasks")`
    },
    {
      name: '.sadd(key, ...members)',
      description: 'Set 添加',
      params: 'key: str, ...members: str[]',
      example: `await client.sadd("tags", "python", "web")`
    },
    {
      name: '.srem(key, ...members)',
      description: 'Set 删除',
      params: 'key: str, ...members: str[]',
      example: `await client.srem("tags", "web")`
    },
    {
      name: '.smembers(key)',
      description: 'Set 所有成员',
      params: 'key: str',
      returns: 'set[str]',
      example: `tags = await client.smembers("tags")`
    },
    {
      name: '.sismember(key, member)',
      description: 'Set 是否成员',
      params: 'key: str, member: str',
      returns: 'bool',
      example: `is_member = await client.sismember("tags", "python")`
    },
    {
      name: '.scard(key)',
      description: 'Set 数量',
      params: 'key: str',
      returns: 'int',
      example: `count = await client.scard("tags")`
    },
    {
      name: '.lock(key, timeout)',
      description: '分布式锁',
      params: 'key: str, timeout: int',
      example: `async with await client.lock("order:1", timeout=10):
    await process_order(1)`
    },
    {
      name: 'CacheGuard',
      description: '三层缓存防护',
      example: `guard = CacheGuard(client)
data = await guard.get("key", fetch_fn, ttl=3600)`
    },
    {
      name: '@cached',
      description: '缓存装饰器',
      params: 'ttl: int, key?: string, jitter?: int',
      example: `@cached(ttl=3600, key="user:{id}")
async def get_user(id: int):
    return await db.find_by_id(id)`
    }
  ],
  security: [
    {
      name: 'hash_password(password)',
      description: '哈希密码',
      params: 'password: str',
      returns: 'str',
      example: `hashed = hash_password("my_secret_password")`
    },
    {
      name: 'verify_password(password, hashed)',
      description: '验证密码',
      params: 'password: str, hashed: str',
      returns: 'bool',
      example: `is_valid = verify_password("my_secret_password", hashed)`
    },
    {
      name: '@api_key_required',
      description: 'API Key 认证装饰器',
      params: 'keys?: string[], validator?: Function, header?: string',
      example: `@get_controller("/api/data")
@api_key_required(keys=["key1", "key2"])
async def get_data():
    return {"data": "secret"}`
    },
    {
      name: 'generate_csrf_token()',
      description: '生成 CSRF 令牌',
      returns: 'str',
      example: `token = generate_csrf_token()`
    },
    {
      name: '@oauth2_required',
      description: 'OAuth2 令牌验证',
      params: 'scopes?: string[]',
      example: `@get_controller("/api/protected")
@oauth2_required(scopes=["read:profile"])
async def get_protected(request):
    return request.user`
    },
    {
      name: 'OAuth2Server',
      description: 'OAuth2 服务器',
      example: `server = OAuth2Server()
server.register_client("my_app", "secret", redirect_uri="...")`
    },
    {
      name: 'get_session(request)',
      description: '获取会话',
      params: 'request: Request',
      returns: 'dict',
      example: `session = get_session(request)`
    },
    {
      name: 'SessionManager',
      description: '会话管理器',
      example: `manager = SessionManager()
manager.set(request, "user_id", 123)`
    }
  ],
  messaging: [
    {
      name: '@event_node',
      description: '事件发布装饰器',
      params: 'name: str, event: str',
      example: `@event_node(name="send_email", event="email_sent")
async def send_email(to: str, body: str):
    await mailer.send(to, body)`
    },
    {
      name: '@on_event',
      description: '事件订阅装饰器',
      params: 'event: str',
      example: `@on_event("email_sent")
async def log_email_sent(event_data: dict):
    print(f"Email sent: {event_data}")`
    },
    {
      name: 'SimpleBroker',
      description: '内存消息代理',
      example: `broker = SimpleBroker()
await broker.subscribe("orders", handle_order)`
    },
    {
      name: 'RedisBroker',
      description: 'Redis 消息代理',
      example: `broker = RedisBroker(redis_client())
await broker.subscribe("orders", handle_order)`
    },
    {
      name: 'broker.subscribe(topic, handler)',
      description: '订阅主题',
      params: 'topic: str, handler: Function',
      example: `await broker.subscribe("user.created", send_welcome_email)`
    },
    {
      name: 'broker.publish(topic, message)',
      description: '发布消息',
      params: 'topic: str, message: Any',
      example: `await broker.publish("user.created", {"id": 1, "name": "Alice"})`
    },
    {
      name: 'get_broker()',
      description: '获取消息代理',
      returns: 'Broker',
      example: `broker = get_broker()`
    },
    {
      name: 'set_broker(broker)',
      description: '设置消息代理',
      params: 'broker: Broker',
      example: `set_broker(RedisBroker(redis_client()))`
    }
  ],
  remote: [
    {
      name: '@remote_node',
      description: '远程调用装饰器',
      params: 'name, protocol, url, endpoint, timeout',
      example: `@remote_node(name="user_service", protocol="http", url="http://api.example.com")
async def get_user(id: int): ...`
    },
    {
      name: 'HttpRemote',
      description: 'HTTP 远程客户端',
      example: `client = HttpRemote(base_url="http://api.example.com", timeout=30)
response = await client.get("/users/1")`
    },
    {
      name: 'GrpcRemote',
      description: 'gRPC 远程客户端',
      example: `client = GrpcRemote(target="localhost:50051")
response = await client.call("UserService.GetUser", request)`
    },
    {
      name: 'RemoteProxy',
      description: '远程代理管理器',
      example: `proxy = RemoteProxy()
client = proxy.get_http("http://api.example.com")`
    },
    {
      name: 'proxy.get_http(base_url, timeout)',
      description: '获取 HTTP 客户端',
      params: 'base_url: str, timeout: int',
      returns: 'HttpRemote',
      example: `client = proxy.get_http("http://api.example.com", timeout=30)`
    },
    {
      name: 'proxy.get_grpc(target)',
      description: '获取 gRPC 客户端',
      params: 'target: str',
      returns: 'GrpcRemote',
      example: `client = proxy.get_grpc("localhost:50051")`
    },
    {
      name: 'proxy.close_all()',
      description: '关闭所有连接',
      example: `proxy.close_all()`
    }
  ],
  lifecycle: [
    {
      name: 'Lifecycle 基类',
      description: '生命周期基类',
      example: `class MyNode(Lifecycle):
    async def on_start(self): ...
    async def on_stop(self): ...
    async def run(self, state: dict) -> dict: ...`
    },
    {
      name: '@lifecycle_node',
      description: '生命周期节点装饰器',
      params: 'node_name: str',
      example: `@lifecycle_node(node_name="process_input")
async def process_input(state: dict) -> dict:
    return {"processed": True}`
    },
    {
      name: 'LifecycleManager',
      description: '生命周期管理器',
      example: `manager = LifecycleManager()
manager.register(MyNode())
await manager.start()`
    },
    {
      name: 'lifecycle_context()',
      description: '生命周期上下文管理器',
      example: `async with lifecycle_context() as ctx:
    ctx.set("user_id", 123)`
    }
  ],
  plugin: [
    {
      name: 'InitAction',
      description: '插件基类',
      example: `class MyPlugin(InitAction):
    def __init__(self, oven):
        self.oven = oven
    def on_start(self): ...`
    },
    {
      name: 'Main 类',
      description: '插件入口类',
      example: `class Main(InitAction):
    def __init__(self, oven):
        self.oven = oven
    def on_start(self):
        # 注册装饰器、类、实例等
        pass`
    },
    {
      name: 'oven.muffin_flour',
      description: '装饰器注册表',
      example: `oven.muffin_flour["my_decorator"] = my_decorator`
    },
    {
      name: 'oven.muffin_water',
      description: '类注册表',
      example: `oven.muffin_water["my_service"] = MyService`
    },
    {
      name: 'oven.muffin_sugar',
      description: '实例/工厂注册表',
      example: `oven.muffin_sugar["my_instance"] = my_factory()`
    },
    {
      name: 'oven.pancake_yaml',
      description: '配置注册表',
      example: `oven.pancake_yaml["my_config"] = {"key": "value"}`
    }
  ],
  config: [
    {
      name: 'settings.get(key, default)',
      description: '获取配置',
      params: 'key: str, default?: Any',
      returns: 'Any',
      example: `port = settings.get("service.port", 8080)`
    },
    {
      name: 'settings.get_path(key)',
      description: '获取路径配置',
      params: 'key: str',
      returns: 'str',
      example: `log_path = settings.get_path("app.log_path")`
    },
    {
      name: 'settings.get_all(prefix)',
      description: '按前缀获取配置',
      params: 'prefix: str',
      returns: 'dict',
      example: `db_config = settings.get_all("database.")`
    },
    {
      name: 'settings.set(key, value)',
      description: '设置配置',
      params: 'key: str, value: Any',
      example: `settings.set("app.debug", True)`
    },
    {
      name: 'pancake.xml',
      description: 'XML 全局配置',
      example: `# src/resource/config.xml
# 框架核心配置文件`
    },
    {
      name: 'YAML 配置',
      description: 'src/resource/yaml/ 下的 YAML 文件',
      example: `# src/resource/yaml/database.yaml
database:
  host: localhost
  port: 3306`
    },
    {
      name: '.env 环境变量',
      description: '根目录 .env 文件',
      example: `# .env
DATABASE_URL=mysql://root:pass@localhost/db
SECRET_KEY=my_secret_key`
    }
  ]
}
