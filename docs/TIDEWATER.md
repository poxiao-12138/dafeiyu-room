# 潮汐海岛

在场景选择器打开「潮汐海岛」，用 WASD 探索码头和沙滩，按 V 切换第一、第三人称。海岛使用 WebGPU。

## 来源与许可

- 原项目为 [Tidewater](https://github.com/dgreenheck/tidewater)，代码版权归 DRG Software Solutions LLC。海岛目录保留[原始 MIT 许可](../public/tidewater/LICENSE)和[素材署名](../public/tidewater/CREDITS.md)。资源核对以[这个上游版本](https://github.com/dgreenheck/tidewater/tree/4811ba48d795197de5621985f404e765c0b7c0ef)为准，当前构建包含大肥鱼的本地修改。
- Freesound 音效和 Poly Haven 素材按 CC0 1.0 使用，Microsoft Rocketbox 角色保留[原始许可](../public/tidewater/models/characters/LICENSE-Rocketbox.md)。
- 海岛的大肥鱼角色与本仓库公开的角色模型内容一致。几何小鲸鱼的元数据标明来自大肥鱼的鲸鱼代码。
- 加载图由本项目实机截图制作。截图中的第三方素材保留各自许可。
- 鲸鱼骨架模型 `models/whale-skeleton/east_whale.glb` 来自 [Petalwake](https://github.com/jjcm/petalwake)（commit `25443ce`，MIT License）；该模型由 Petalwake 作者用 Meshy/fal 生成。Petalwake 的 MIT 许可副本见 [`public/tidewater/models/whale-skeleton/LICENSE-Petalwake.txt`](../public/tidewater/models/whale-skeleton/LICENSE-Petalwake.txt)，本项目的再分发声明见 `THIRD-PARTY-NOTICES.md`。
- 海岛目录内每个文件都登记在 [`public/tidewater/manifest.json`](../public/tidewater/manifest.json) 中，`npm run check:public` 只按清单放行并校验 SHA-256；新增或替换素材必须同时更新清单和许可说明。
