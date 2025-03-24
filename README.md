# DeepSeek高效使用指南网站

这是一个专注于帮助用户高效使用DeepSeek AI助手的教学网站。网站采用现代化的响应式设计，提供结构化的学习路径和实用的案例展示。

## 功能特点

- 响应式设计，支持PC和移动端访问
- 核心功能展示：Prompt优化、工具协同、案例实战
- 简洁直观的用户界面
- 快速加载的静态页面

## 技术栈

- HTML5
- Tailwind CSS (通过CDN引入)
- Alpine.js (用于轻量级交互)
- Font Awesome (图标库)

## 本地开发

1. 克隆项目到本地：
```bash
git clone [repository-url]
```

2. 使用本地服务器运行项目（例如使用Python的简单HTTP服务器）：
```bash
python -m http.server 8000
```

3. 在浏览器中访问：`http://localhost:8000`

## 部署到Netlify

1. 将代码推送到GitHub仓库

2. 登录Netlify并连接GitHub仓库

3. 配置部署设置：
   - Build command: 留空（静态网站）
   - Publish directory: `/`（根目录）

4. 点击"Deploy site"开始部署

## 项目结构

```
.
├── index.html          # 主页面
├── README.md          # 项目说明文档
└── assets/           # 静态资源目录（待添加）
    ├── images/       # 图片资源
    └── css/          # 自定义样式
```

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## 许可证

MIT License - 详见 LICENSE 文件

## 联系方式

- 邮箱：contact@deepseek.guide
- 网站：[https://deepseek.guide](https://deepseek.guide) 