# 数据可视化网站 - 基于matplotlib图表样式

> 一个交互式数据可视化网站，基于第四章matplotlib图表样式教学内容，展示专业的图表设计和用户交互功能。

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chart.js&logoColor=white)](https://www.chartjs.org/)

## 🌟 项目简介

本项目是基于第四章matplotlib教学内容开发的交互式数据可视化网站，完整实现了Jupyter笔记本中的图表样式、颜色系统和线型选择等数据可视化技术。

### 特色功能
- **matplotlib配色系统展示** - 完整的基础颜色和颜色映射表
- **地区图书采购数据分析** - 基于真实数据的交互式柱状图
- **汇率走势对比图表** - 2017年与2019年美元/人民币汇率分析
- **多种线型样式演示** - 专业的matplotlib线型展示
- **完全响应式设计** - 适配各种屏幕尺寸
- **丰富的用户交互** - 实时数据切换和图表控制

## 📁 项目结构

```
数据可视化网站/
├── index.html          # 主页面文件
├── style.css           # 样式文件
├── script.js           # JavaScript交互逻辑
├── 第4章(1).ipynb      # 原始数据文件
└── README.md          # 项目说明文档
```

## 🚀 快速开始

### 方法一：直接打开（推荐）
直接在浏览器中打开 `index.html` 文件即可运行网站。

### 方法二：本地服务器
为了获得更好的体验，建议使用本地服务器：

```bash
# 使用Python 3
python -m http.server 8000
# 然后访问 http://localhost:8000

# 或使用Node.js
npx serve
# 或安装全局服务
npm install -g serve
serve .

# 或使用PHP
php -S localhost:8000
```

## 📊 功能模块详解

### 1. 颜色系统展示
- **15种基础颜色**：matplotlib标准配色方案
- **颜色映射表**：完整的颜色映射展示
- **鼠标悬停效果**：实时显示颜色值信息

### 2. 图书采购数据分析
- **地区对比**：地区1 vs 地区2的图书采购情况
- **多种图表类型**：支持柱状图和折线图切换
- **交互控制**：可切换显示/隐藏地区数据
- **数据来源**：基于真实的图书采购数据

### 3. 汇率走势分析
- **时间对比**：2017年7月 vs 2019年7月汇率走势
- **平滑曲线**：专业的汇率波动展示
- **数据控制**：年份选择和数据显示控制
- **数据导出**：支持JSON格式数据下载

### 4. 线型样式演示
- **三种线型**：实线、虚线、点划线
- **直观对比**：不同线型的并排展示
- **专业布局**：符合matplotlib标准

### 5. 交互式图表
- **动态柱状图**：滑块控制数据点数量（3-10个）
- **响应式饼图**：随机数据生成和实时更新
- **平滑动画**：流畅的过渡效果

## 🎯 技术栈

### 前端技术
- **HTML5**：语义化结构，现代化标签
- **CSS3**：渐变设计、Flexbox布局、响应式设计
- **JavaScript**：ES6+语法，Chart.js图表库

### 核心库
- **Chart.js**：专业的图表渲染库
- **Google Fonts**：现代化的字体支持

### 交互功能
- **事件监听**：点击、悬停、滑块等交互
- **数据管理**：本地数据存储和动态更新
- **动画效果**：CSS3过渡和JavaScript动画

## 📱 响应式设计

网站采用完全响应式设计，支持：
- **桌面设备**：1920px以上分辨率
- **平板设备**：768px - 1920px分辨率
- **移动设备**：320px - 768px分辨率

## 🎨 设计特色

### UI/UX设计
- **现代化界面**：简洁美观的视觉设计
- **色彩搭配**：基于matplotlib的配色方案
- **用户体验**：直观的操作流程和反馈

### 动画效果
- **平滑过渡**：所有交互都有动画效果
- **加载动画**：数据加载时的视觉反馈
- **悬停效果**：增强用户交互体验

## 🔧 开发指南

### 本地开发
1. 克隆项目到本地
2. 使用本地服务器运行（推荐）
3. 修改代码后刷新浏览器查看效果

### 自定义数据
要修改图表数据，请编辑 `script.js` 文件中的相应数据对象：

```javascript
// 图书采购数据示例
const bookData = {
    categories: ["家庭", "小说", "心理", "科技", "儿童"],
    region1: [1200, 2400, 1800, 2200, 1600],
    region2: [1050, 2100, 1300, 1600, 1340]
};
```

## 📈 浏览器兼容性

| 浏览器 | 版本 | 支持状态 |
|--------|------|----------|
| Chrome | 60+  | ✅ 完全支持 |
| Firefox | 55+ | ✅ 完全支持 |
| Safari | 12+ | ✅ 完全支持 |
| Edge | 79+ | ✅ 完全支持 |

## 🌐 部署指南

### GitHub Pages
1. 将项目推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择master分支作为源
4. 访问提供的URL即可查看在线版本

### Netlify部署
1. 将项目推送到Git仓库
2. 在Netlify中连接仓库
3. 设置构建命令（空）和发布目录（当前目录）
4. 完成部署

### Vercel部署
1. 将项目推送到Git仓库
2. 在Vercel中导入项目
3. 使用默认配置
4. 完成部署

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进项目！

### 开发流程
1. Fork本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## 📄 许可证

本项目采用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- **matplotlib开发团队** - 提供优秀的图表库
- **Chart.js团队** - 强大的前端图表解决方案
- **Google Fonts** - 提供现代化字体支持

## 📞 联系方式

- **项目维护者**：数据可视化项目团队
- **邮箱**：[your-email@example.com]
- **项目链接**：https://github.com/your-username/data-visualization-website

## 🔮 未来规划

- [ ] 添加更多图表类型（散点图、热力图等）
- [ ] 实现数据上传功能
- [ ] 添加用户自定义配色方案
- [ ] 支持更多数据格式导入
- [ ] 增加图表导出功能（PNG/SVG）

---

⭐ 如果这个项目对您有帮助，请给个Star支持一下！

**更新说明**：当前版本已成功部署到GitHub，包含完整的第四章数据可视化功能。项目基于matplotlib教学内容，提供了专业的交互式图表展示。

---

*最后更新：2025年11月12日*