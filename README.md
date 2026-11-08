# noEfforts · 研究与实践 / Research & Practice

[个人网站 / Website](https://noefforts.github.io/) · [GitHub](https://github.com/noEfforts)

中英文结合的个人学术主页，以暖灰、鼠尾草绿、雾紫和沙色组成克制的莫兰迪配色，搭配半透明玻璃面板、缓慢流光和轻量交互。纯静态实现，无运行时依赖、远程字体、分析追踪或构建步骤。

## 内容 / Content

- 称呼：noEfforts。
- 研究方向（本人提供）：NLP 自然语言处理、WebGIS 前端开发、文化遗产。
- 论文：尚未提供，页面明确标为“待补充”，不显示示例或虚构条目。
- 开源项目：[Vue 3 运营管理平台](https://github.com/noEfforts/vue3-operations-platform)。原站的项目介绍、技术栈、文档、Issues 与贡献指南入口均保留。项目配图是标注清楚的功能示意图，并非实际界面截图。
- 联系入口：GitHub。没有添加未经提供的单位、学位、奖项或联系方式。

## 维护 / Editing

- `index.html`：双语正文、研究方向、论文和项目内容。
- `styles.css`：配色、玻璃效果和手机/桌面响应式布局。
- `script.js`：可选的当前栏目提示，禁用 JavaScript 后正文和链接仍可使用。
- `assets/favicon.svg`：站点图标。
- `.nojekyll`：直接使用静态文件发布。

新增论文时，以实际题名、作者顺序、期刊/会议、年份和 DOI/公开链接替换论文待补充区块，并移除待补充状态。不要填入示例学术成果。

## 本地预览 / Preview

在仓库目录运行 `python -m http.server 8765`，然后访问 `http://localhost:8765`。

## 无障碍与动效 / Accessibility

语义化结构、跳至正文链接、键盘焦点提示、明确的导航标签和原生锚点跳转。支持 `prefers-reduced-motion`，关闭持续动画、交互动效和平滑滚动；支持减少透明度与强制颜色偏好。小屏导航保持可见，无需打开菜单。

## 发布 / GitHub Pages

沿用仓库的 GitHub Pages 配置：`main` 分支、根目录 `/`。提交并推送后由 GitHub Pages 自动构建。发布地址保持为 https://noefforts.github.io/ 。
