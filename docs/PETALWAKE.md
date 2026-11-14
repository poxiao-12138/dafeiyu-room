# 飞行王国（Petalwake）

从场景选择器点「飞行王国」，进入骑扫把飞行的海岛。角色使用大肥鱼的 Dafeiyu 模型，默认已经坐在扫把上；进入后点「起飞」起飞。

## 来源与许可

- 原项目：[Petalwake](https://github.com/jjcm/petalwake)，commit `25443cef0eba802052d9ef24c94ba3c4157b6f2e`，MIT License（见 `public/petalwake/LICENSE`）。
- 原版骑手、树木、石头和隐藏地点模型由 Petalwake 作者用 Meshy / fal 生成；代码和建筑为项目内生成/编写。商用前仍需按 Meshy / fal 的账号和模型条款确认素材权利。
- 大肥鱼版加入了 Dafeiyu 骑手、扫把和本地场景入口。`Dafeiyu.glb` 来自大肥鱼的 Hyper3D Rodin 模型，不属于 Petalwake 的 MIT 授权范围；Rodin 条款不限制输出使用，但不保证独占版权。
- `public/petalwake/manifest.json` 列出并校验全部 300 个随包文件；`npm run check:public` 只按清单放行，新增或替换素材必须同步更新清单。
- 字体 Fraunces / Karla 从 Google Fonts 加载，SIL OFL；three.js 为 MIT，见 `public/petalwake/vendor/three/LICENSE`。

## 素材生成渠道与发布判断

代码和随包许可证是 MIT，但生成素材不能仅凭 MIT 视为全部权利已清。按生成渠道分组：

| 目录/范围 | 生成渠道 | 适用条款与发布判断 |
|---|---|---|
| `src/`、`index.html`、`vendor/` | Petalwake 源码 / three.js | MIT；可商用，保留 LICENSE 与 three.js 通知 |
| `assets/models/`、`assets/places/models/` | Meshy 图生 3D | Petalwake 使用 Meshy API；付费方案为私有所有权，免费方案为 CC BY 4.0 署名。需保留生成时账号方案记录 |
| `assets/textures/`、`assets/town/tex/` | fal `patina` | fal 不保证输出所有权；需确认 fal/模型条款，否则替换 |
| `assets/town/`、`assets/terrain/`、`assets/shore/` | Petalwake 代码/烘焙 | MIT；其中材质引用仍需遵守上一行 |
| `assets/models/dafeiyu.glb` | Hyper3D Rodin | 输出使用不受限制，但不保证版权/第三方权利；保留生成记录 |

因此：**代码按 MIT 直接使用没问题；整包商用前，不能仅凭 LICENSE 宣称所有生成素材都已按 MIT 清权。** 需要 Meshy 生成时方案记录、fal 生成条款确认，二者齐备后再按整包商用发布。
