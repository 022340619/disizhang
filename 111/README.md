# 数据可视化网站

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chart.js&logoColor=white)](https://www.chartjs.org/)

一个基于Chart.js的交互式数据可视化平台，展示图书采购数据和汇率走势分析。

## 📊 项目介绍

本项目是一个完整的数据可视化网站，基于Python Matplotlib可视化案例开发，使用现代Web技术实现交互式数据展示。网站包含多种图表类型和数据可视化功能，为用户提供直观的数据分析体验。

### 主要特性

- 📈 **交互式图表** - 支持图表缩放、筛选和悬停查看详细信息
- 📱 **响应式设计** - 完美适配桌面、平板和移动设备
- 💾 **数据导出** - 支持将数据导出为CSV格式
- 🎨 **现代化UI** - 美观的渐变色彩和流畅的动画效果
- 🔧 **用户友好** - 直观的导航和操作界面

## 🚀 快速开始

### 环境要求

- 现代浏览器（Chrome、Firefox、Safari、Edge等）
- 支持HTML5和ES6+的浏览器环境

### 安装和运行

1. **克隆项目**
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. **直接运行**
   直接打开 `index.html` 文件或在本地服务器中运行：

```bash
# 使用Python内置服务器
python -m http.server 8000

# 或使用Node.js的http-server
npx http-server -p 8000
```

3. **访问网站**
   打开浏览器访问 `http://localhost:8000`

## 📂 项目结构

```
data-visualization-platform/
├── index.html          # 主页面文件
├── style.css           # 样式文件
├── script.js           # 交互逻辑文件
├── README.md           # 项目说明文档
└── 第4章(1).ipynb      # 原始数据分析文件
```

## 📈 功能模块

### 1. 图书采购数据分析
- **图表类型**: 分组柱状图
- **数据内容**: 地区1和地区2对五类图书（家庭、小说、心理、科技、儿童）的采购情况
- **交互功能**: 
  - 显示/隐藏特定地区数据
  - 悬停查看详细数值
  - 数据表格展示

### 2. 汇率走势分析
- **图表类型**: 双线图
- **数据内容**: 2017年7月 vs 2019年7月美元/人民币汇率走势对比
- **统计信息**: 
  - 最高汇率
  - 最低汇率
  - 平均汇率

### 3. 关于项目
- 项目介绍和技术栈说明
- 数据来源和功能特色

## 🛠️ 技术栈

### 前端技术
- **HTML5** - 语义化结构和现代标签
- **CSS3** - 响应式布局、Flexbox、Grid、动画效果
- **JavaScript ES6+** - 模块化编程、异步处理

### 图表库
- **Chart.js 3.x** - 强大的JavaScript图表库
- 支持多种图表类型：柱状图、折线图、饼图等
- 丰富的配置选项和交互功能

### 设计特色
- **响应式设计** - 移动优先的适配策略
- **渐变色彩** - 现代感的视觉设计
- **平滑动画** - CSS3过渡和JavaScript动画
- **用户体验** - 直观的导航和交互反馈

## 💻 使用方法

### 基本操作
1. **导航切换** - 点击顶部导航栏在不同页面间切换
2. **数据筛选** - 在图书采购页面勾选/取消地区复选框
3. **图表交互** - 鼠标悬停查看数据详情
4. **数据导出** - 点击"导出数据"按钮下载CSV文件

### 自定义配置
可以修改 `script.js` 文件中的数据部分来自定义显示内容：

```javascript
// 自定义图书数据
const bookData = {
    categories: ["家庭", "小说", "心理", "科技", "儿童"],
    region1: [1200, 2400, 1800, 2200, 1600],
    region2: [1050, 2100, 1300, 1600, 1340]
};
```

## 🎨 自定义主题

可以通过修改CSS变量来快速更改网站主题：

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #FFCC00;
    --text-color: #333;
    --background-color: #f8f9fa;
}
```

## 📱 浏览器兼容性

| 浏览器 | 版本 | 支持状态 |
|--------|------|----------|
| Chrome | 60+  | ✅ 完全支持 |
| Firefox | 55+ | ✅ 完全支持 |
| Safari | 12+ | ✅ 完全支持 |
| Edge | 79+ | ✅ 完全支持 |
| IE | 11 | ⚠️ 部分支持 |

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进这个项目！

### 开发流程
1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

### 代码规范
- 使用ES6+语法
- 遵循语义化HTML结构
- 保持CSS样式模块化
- 添加必要的注释

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- 感谢 [Chart.js](https://www.chartjs.org/) 提供的优秀图表库
- 感谢 Matplotlib 社区的图表设计灵感
- 感谢所有贡献者和用户的支持

## 📞 联系方式

- 项目主页: [GitHub Repository](https://github.com/your-username/your-repo-name)
- 问题反馈: [Issues](https://github.com/your-username/your-repo-name/issues)
- 邮箱: your-email@example.com

---

⭐ 如果这个项目对您有帮助，请给个Star支持一下！