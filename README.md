# 森林工作台 · Gamified Workbench

> 推开小屋的门，开始今天的工作。累了，就去池塘边玩一关。

一个以像素庭院为入口的个人工作台，也是一份可复用的 Codex Skill。把项目、计划、日报周报和 AI 入口放进同一个小世界：找资料少翻几层，休息时也有地方可去。

[快速开始](#三分钟住进来) · [工作入口](#先把工作放到顺手的位置) · [休息玩法](#工作之间留一点好玩的) · [安装 Skill](#让-codex-继续搭建你的版本) · [测试](https://github.com/s530han8e-rgb/gamified-workbench-skill/actions/workflows/check.yml)

![验证](https://github.com/s530han8e-rgb/gamified-workbench-skill/actions/workflows/check.yml/badge.svg)

![夜晚的森林工作台：庭院即导航](docs/screenshots/garden-night.jpg)

## 先把工作放到顺手的位置

房门是项目入口，路牌是报告归档，庭院中的物件打开相应功能。工作与休息都留在画面里。

| 走到哪里 | 可以做什么 |
| --- | --- |
| 四间小屋 | 分别记录计划、任务和进展；按自己的用途扩展 |
| 日报周报路牌 | 按日期和报告类型查看、保存完整正文与来源 |
| AI 入口 | 打开 ChatGPT 或 Codex，接着处理工作 |
| 路灯 | 建立印度占星出生资料，查看排盘配置状态 |
| 树篱灯 | 抽一张带图的塔罗，阅读正逆位提示 |
| 池塘 | 打开庭园拼图或倒水瓶，慢慢玩，不计时 |
| 右上角 | 切换昼夜、查看游玩指引 |

计划与进展、报告正文、来源和关卡位置会自动保存在当前浏览器。不同房间各自保存记录，公开示例首次打开为空，方便换成自己的生活和项目。

### 一座庭院，几种心情

以下均为运行中的通用版实拍截图，未使用私人文档或真实项目记录。

| 白天庭院 | 安静书房 |
| --- | --- |
| ![白天庭院与工作入口](docs/screenshots/garden-day.jpg) | ![研究书房与计划入口](docs/screenshots/study.jpg) |

## 工作之间，留一点好玩的

### 🧩 庭园拼图 · 12 关

点击空格旁的图块，把庭院拼回完整的样子。前四关从 **3×3** 热身，中间四关进入 **4×4**，最后四关挑战 **5×5**。支持选关、重玩、完成后进入下一关，并记住所选关卡。

图块经合法移动打乱，确保可还原。难度逐步提高格数和打乱预算；随机局面的最短解步数有波动，不保证每一局都比上一局难。

### 🧪 倒水瓶 · 12 关

先选源瓶，再选目标瓶，每次倒一层颜色。目标必须为空或顶层同色；把每种颜色装回各自的满瓶就过关。

从 **2 色、每瓶 3 层** 起步，逐步扩展到 **7 色、每瓶 4 层**。支持撤销、重玩、选关和下一关。每局从完成状态反向生成，保留用于测试的还原路径。

| 拼好一座庭院 | 把颜色慢慢归位 |
| --- | --- |
| ![庭园拼图第1关](docs/screenshots/puzzle.jpg) | ![倒水瓶第7关：5色4层](docs/screenshots/water-sort.jpg) |

### 🃏 塔罗 · 78 张都有图

完整的 **22 张大阿卡纳＋56 张小阿卡纳**：随机抽牌、正逆位、牌面主题与解读。把抽到的牌当作一次短暂停顿：它让你想到什么？眼前哪件事值得重新观察？

### ✦ 印度占星 · 从自己的出生资料开始

首次点开会弹出表单：**出生日期、出生时间、出生城市／地区／国家、时区**。不需要家庭门牌地址；不知道时间可以明确勾选。资料只存当前浏览器，可删除后重新填写。

**当前公开版已实现资料弹窗和保存流程，通用排盘引擎尚未接入。** 保存后显示配置提示，暂不输出个性化每日运势。接入时需补齐坐标、历史时区与恒星黄道等计算设置；时间未知时限制上升、宫位和精确时间推断。

| 塔罗牌面与解读 | 出生资料首次设置 |
| --- | --- |
| ![78张塔罗中的一次抽牌](docs/screenshots/tarot.jpg) | ![空白出生信息弹窗](docs/screenshots/birth-profile.jpg) |

占星与塔罗面向娱乐及自我观察。

## 三分钟住进来

需要 Python 3 和现代浏览器，无需 API Key，无需安装前端依赖。

```bash
git clone https://github.com/s530han8e-rgb/gamified-workbench-skill.git
cd gamified-workbench-skill
python3 -m http.server 8080
```

打开 **<http://localhost:8080/demo/>**，点击房间或庭院物件即可使用。浏览器可能限制 `file://` 下的 ES Modules，请使用本地服务器。

## 让 Codex 继续搭建你的版本

仓库同时包含 `gamified-workbench-builder` Skill，帮助你连接自己的工作流、数据保存和场景交互。

```bash
mkdir -p ~/.codex/skills
cp -R gamified-workbench-builder ~/.codex/skills/
```

在 Codex 中使用：

```text
使用 $gamified-workbench-builder，以 demo 为起点建立我的工作台。
先确定工作入口和项目房间，再接入我的数据；保留关卡、塔罗与出生资料弹窗。
```

Skill 还覆盖来源校验、报告去重、保存冲突、备份恢复、AI 交接和跨设备架构。这些是实现指南，不代表静态示例已具备后台能力。详见 [架构](gamified-workbench-builder/references/architecture.md)、[数据契约](gamified-workbench-builder/references/data-contract.md) 与 [验收清单](gamified-workbench-builder/references/review-checklist.md)。

## 当前能用到哪一步

| 功能 | 公开版状态 |
| --- | --- |
| 庭院、四个房间、手动昼夜切换 | 可运行 |
| 房间笔记、按日期存取日报周报与来源 | 当前浏览器自动保存 |
| ChatGPT / Codex | 网页入口跳转；不自动发送项目内容 |
| 78 张塔罗、拼图 12 关、倒水瓶 12 关 | 可玩 |
| 印度占星 | 出生资料弹窗可用；排盘引擎待接 |
| 手机电脑云同步、Notion、后台自动导入 | 需接自己的后端与授权 |
| 独立角色逐帧动作、完整物件灯光交互 | 未包含在通用示例中 |

当前浏览器存储不等于文件备份或云同步。清理浏览器数据、换设备或换访问地址不会自动迁移记录；承载重要工作前，应接入备份与存储服务。

## 复用画面，保留自己的隐私

公开包只有通用代码、场景美术、牌面和空白工作区。私人项目文件、聊天、报告、附件、出生资料、配置和本机路径不随示例发布。截图来自空白通用版。

新增资料请放到发布目录之外；`.gitignore` 提供基础排除，发布前仍应检查提交。素材与复用边界见 [ASSETS.md](demo/ASSETS.md)，开发约定见 [安全与交接](gamified-workbench-builder/references/safety-and-handoffs.md)。

## 运行检查

需要 Node.js 22 或以上：

```bash
node --test tests/*.test.mjs
node scripts/check-release.mjs
```

GitHub Actions 检查关卡可解性、移动规则、塔罗牌面、本地文档链接与公开包边界。浏览器检查记录见 [展示与验证](docs/SHOWCASE.md)。

```text
demo/                         可运行空白工作台和素材
gamified-workbench-builder/    Codex Skill 与架构参考
docs/screenshots/             通用版实际截图
tests/                        关卡与牌组验证
scripts/                      文档及发布检查
```

## 设计参考

展示形式参考 [Trianon](https://github.com/qimingjiu/Trianon) 的场景画廊与功能边界说明，以及 [RSSHub](https://github.com/DIYgod/RSSHub) 的简洁入口组织。采用自己的像素庭院、美术和实现，没有复制它们的界面代码。
