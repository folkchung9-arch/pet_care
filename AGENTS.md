# 项目说明

## 给后续 AI 的沟通要求

- 用户叫 Forrest Chang。
- Forrest 是技术小白，正在练习 vibe coding。
- 解释问题时请用大白话，少用术语；如果必须用术语，要顺手解释它是什么意思。
- 修改代码前后都尽量说明“为什么这么做”和“改完会有什么效果”。

## 项目是什么

这是一个宠物洗护门店的展示和预约页面，主题大概是“毛绒星球宠物洗护”。

页面内容包括：

- 顶部导航。
- 首屏大图和预约入口。
- 服务项目介绍。
- 护理标准介绍。
- 店内环境轮播图。
- 套餐价格。
- 预约表单。
- 用户评价滚动展示。
- 到店信息和手绘风格地图。

简单说：它不是后台系统，也不是多页面 App，而是一个“宠物店官网 + 在线预约表单”的单页网站。

## 正确的访问方式

这个项目是 Next.js 项目，主页应该通过开发服务器访问：

```bash
npm run dev
```

然后在浏览器打开：

```text
http://localhost:3000/
```

这里的 `localhost:3000` 可以理解成“你电脑本机临时开了一个网站服务”。Next.js 会把 `app/page.tsx` 作为主页渲染出来。

项目里的 `index.html` 更像是一份独立 HTML 版本或旧版本备份。当前项目的主入口不是它。以后改主页，优先看 `app` 目录。

## node_modules 是什么

`D:\pet_care\node_modules` 是 npm 自动下载的依赖文件夹。

大白话说：项目自己只写了少量代码，但它需要很多现成工具帮忙，比如 Next.js、React、TypeScript 等。`node_modules` 里面装的就是这些工具和它们依赖的其它小工具。

需要注意：

- 一般不要手动改 `node_modules` 里面的文件。
- 它通常很大，这是正常的。
- 它可以删掉，但删掉后项目会跑不起来，需要重新执行 `npm install` 下载回来。
- 它不应该提交到 Git，通常 `.gitignore` 会忽略它。
- 判断项目真正依赖什么，要看 `package.json` 和 `package-lock.json`，不是手动翻 `node_modules`。

## 技术栈

- 使用 Next.js。
- 使用 React。
- 使用 TypeScript。
- 样式主要写在 `app/globals.css`。
- 页面 HTML 内容主要放在 `app/pageContent.ts` 的 `pageHtml` 字符串里。
- 页面交互逻辑放在 `app/booking-behavior.tsx`。
- 依赖管理使用 npm，项目里有 `package-lock.json`。

## 主要文件

- `package.json`：项目脚本和依赖。
- `package-lock.json`：锁定依赖版本，让别人安装出来的依赖尽量一致。
- `app/layout.tsx`：Next.js 的根布局，设置页面语言和 metadata。
- `app/page.tsx`：首页入口，把 `pageHtml` 塞进页面，并挂载预约表单交互组件。
- `app/pageContent.ts`：大段页面 HTML 内容。
- `app/booking-behavior.tsx`：预约表单的前端交互逻辑。
- `app/globals.css`：整站样式。
- `public/assets/environment/`：网站实际引用的店内环境图片。
- `assets/environment/`：也有一份环境图片，可能是原始素材或备份。
- `index.html`：独立 HTML 版本或旧版本备份，不是当前 Next.js 主页入口。
- `node_modules/`：npm 下载的依赖文件夹，不要手动维护。

## 常用命令

```bash
npm run dev
```

启动开发服务器，用来本地预览页面。

```bash
npm run build
```

检查项目能不能正常打包上线。

```bash
npm run start
```

运行已经打包好的正式版本。通常要先执行 `npm run build`。

```bash
npm install
```

根据 `package.json` 和 `package-lock.json` 重新下载依赖。比如 `node_modules` 被删了，就用这个命令恢复。

```bash
npm run lint
```

检查代码规范。不过当前 `package.json` 里写的是 `next lint`，新版本 Next.js 可能不再支持这个命令，如果报错，需要再调整 lint 配置。

## 当前代码结构特点

- `app/page.tsx` 使用 `dangerouslySetInnerHTML` 渲染 `pageHtml`。
- 这代表页面主体不是用 React 组件一块块拼出来的，而是把一整段 HTML 字符串直接塞进页面。
- 这样做改静态页面比较快，但维护起来容易乱；如果后面项目变复杂，建议逐步拆成 React 组件。
- `booking-behavior.tsx` 是客户端组件，负责给 HTML 表单加行为：
  - 自动设置最早可选日期。
  - 默认预约日期设为明天。
  - 根据套餐价格更新预计到店价。
  - 提交表单时不真的发请求，只在页面上显示“预约信息已收到”的提示。

## 图片和资源

页面里有两类图片：

- 远程图片：来自 Unsplash，例如首屏图、护理场景图、团队/评价相关图片。
- 本地图片：来自 `/assets/environment/...`，实际对应 `public/assets/environment/` 目录。

如果之后换店铺环境图，优先替换 `public/assets/environment/` 里的图片，并确认 `app/pageContent.ts` 里的路径还对。

## 需要特别注意的问题

当前很多中文内容在源码里显示成乱码，比如 `姣涚粧鏄熺悆瀹犵墿娲楁姢` 这种。

这通常说明文件内容曾经被错误编码保存过。大白话说：原本的中文被“翻译错频道”了，所以人看不懂。

受影响的文件包括：

- `app/pageContent.ts`
- `app/globals.css` 中少量符号内容
- `index.html`
- 旧的 `AGENTS.md`

如果后面要正式做这个项目，建议优先修复中文乱码，不然页面上的文案、无障碍标签、按钮文字都会不可靠。

## 修改建议

短期小改可以直接改：

- 文案：`app/pageContent.ts`
- 样式：`app/globals.css`
- 预约表单行为：`app/booking-behavior.tsx`

中期维护建议：

- 把 `pageContent.ts` 里的大 HTML 字符串拆成多个 React 组件。
- 把服务、套餐、评论这些重复内容整理成数组，然后用 `.map()` 渲染。
- 修复中文乱码，统一使用 UTF-8 编码保存文件。
- 如果预约要真的提交，需要接后端接口或第三方表单服务；现在只是前端假提交。

## Git 状态提醒

当前 `AGENTS.md` 是未跟踪文件。后续如果需要提交代码，要记得把它加入 Git。
