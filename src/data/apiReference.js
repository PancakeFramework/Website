export const apiReference = {
  decorators: [
    {
      name: '@Mapper',
      description: '标记类为 MyBatis Plus Mapper，自动注册到 IoC 容器',
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
      name: '@Singleton',
      description: '标记 Bean 为单例作用域，全局唯一实例',
      params: '无参数',
      example: `@Singleton
class UserService(Dough):
    pass`
    },
    {
      name: '@Prototype',
      description: '标记 Bean 为原型作用域，每次创建新实例',
      params: '无参数',
      example: `@Prototype
class UserRequest(Dough):
    pass`
    },
    {
      name: '@Lazy',
      description: '延迟加载 Bean，首次使用时才实例化',
      params: '无参数',
      example: `@Lazy
class HeavyService(Dough):
    pass`
    },
    {
      name: '@inject',
      description: '注入指定 Bean 到方法参数',
      params: 'bean_class: Type - 要注入的 Bean 类',
      example: `@inject(UserService)
def create_user(user_service: UserService, data: dict):
    return user_service.create(data)`
    },
    {
      name: '@auto_inject',
      description: '自动根据参数名称注入匹配的 Bean',
      params: '无参数',
      example: `@auto_inject()
def get_config(service_port: int, db_url: str):
    return {"port": service_port, "url": db_url}`
    },
    {
      name: '@Config',
      description: '从 YAML 配置自动注入属性值',
      params: 'prefix: str - 配置前缀',
      example: `@Config(prefix="service")
class ServiceConfig:
    title: str
    port: int`
    }
  ],
  orm: [
    {
      name: 'qw()',
      description: '创建 QueryWrapper 实例，用于链式查询',
      params: 'entity_class?: Type - 实体类（可选）',
      returns: 'QueryWrapper 实例',
      example: `qw().eq("name", "Alice").list()`
    },
    {
      name: '.eq(column, value)',
      description: '等于条件',
      params: 'column: str, value: Any',
      example: `qw().eq("name", "Alice")`
    },
    {
      name: '.ne(column, value)',
      description: '不等于条件',
      params: 'column: str, value: Any',
      example: `qw().ne("status", "deleted")`
    },
    {
      name: '.gt(column, value)',
      description: '大于条件',
      params: 'column: str, value: Any',
      example: `qw().gt("age", 18)`
    },
    {
      name: '.ge(column, value)',
      description: '大于等于条件',
      params: 'column: str, value: Any',
      example: `qw().ge("age", 18)`
    },
    {
      name: '.lt(column, value)',
      description: '小于条件',
      params: 'column: str, value: Any',
      example: `qw().lt("age", 60)`
    },
    {
      name: '.le(column, value)',
      description: '小于等于条件',
      params: 'column: str, value: Any',
      example: `qw().le("age", 60)`
    },
    {
      name: '.like(column, value)',
      description: 'LIKE 模糊查询',
      params: 'column: str, value: str',
      example: `qw().like("name", "%张%")`
    },
    {
      name: '.order_by_asc(column)',
      description: '升序排序',
      params: 'column: str',
      example: `qw().order_by_asc("age")`
    },
    {
      name: '.order_by_desc(column)',
      description: '降序排序',
      params: 'column: str',
      example: `qw().order_by_desc("age")`
    },
    {
      name: '.limit(n)',
      description: '限制返回数量',
      params: 'n: int',
      example: `qw().limit(50)`
    },
    {
      name: '.list()',
      description: '执行查询返回列表',
      params: '无参数',
      returns: 'list[Entity]',
      example: `users = await qw().eq("active", True).list()`
    }
  ],
  ai: [
    {
      name: 'chat_model.chat(messages, **kwargs)',
      description: '发送对话请求，返回模型响应',
      params: 'messages: list[dict], model?: str, temperature?: float',
      returns: 'dict - 模型响应',
      example: `response = await chat_model.chat([
    {"role": "user", "content": "你好"}
])`
    },
    {
      name: 'chat_model.chat_stream(messages, **kwargs)',
      description: '流式对话，逐块返回响应',
      params: 'messages: list[dict], model?: str',
      returns: 'AsyncGenerator[str, None]',
      example: `async for chunk in chat_model.chat_stream([...]):
    print(chunk, end="")`
    },
    {
      name: 'short_term_memory.add(role, content)',
      description: '添加短期记忆（对话上下文）',
      params: 'role: str, content: str',
      example: `short_term_memory.add("user", "我叫小明")`
    },
    {
      name: 'short_term_memory.get_messages()',
      description: '获取完整的对话历史消息',
      params: '无参数',
      returns: 'list[dict]',
      example: `messages = short_term_memory.get_messages()`
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
      name: 'rag.add_document(text)',
      description: '添加文档到 RAG 向量库',
      params: 'text: str',
      example: `await rag.add_document("Pancake 是一个 Python 框架...")`
    },
    {
      name: 'rag.ask(question)',
      description: '基于向量检索的回答',
      params: 'question: str',
      returns: 'str',
      example: `answer = await rag.ask("什么是 Pancake？")`
    }
  ]
}
