---
title: "How to write a post (draft, only visible locally)"
date: 2026-10-08
description: "A quick reference for the Markdown features this blog supports."
tags: [meta, guide]
draft: true
---

This post has `draft: true`, so it only shows up when you run `npm run dev`. It never gets published.
Delete it whenever you like.

## Creating a post

Add a Markdown file to `content/blog/`. The file name becomes the URL, so
`content/blog/my-first-paper.md` is served at `/blog/my-first-paper`. Start the file with front matter:

```yaml
---
title: "My post title"
date: 2026-10-20
description: "One-sentence summary shown in the post list."
tags: [research, 3d-vision]
draft: false
---
```

## Formatting

Regular **bold**, *italic*, [links](https://rigan31.github.io), and `inline code` work as usual.

> Blockquotes are good for highlighting a key idea.

### Code

```python
import torch

def gaussian(x, mu, sigma):
    return torch.exp(-0.5 * ((x - mu) / sigma) ** 2)
```

### Math

Inline math like $\mathcal{L} = \lVert I - \hat{I} \rVert_1$ and display math:

$$
G(\mathbf{x}) = \exp\left(-\tfrac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^\top \Sigma^{-1} (\mathbf{x}-\boldsymbol{\mu})\right)
$$

### Tables

| Method   | PSNR ↑ | SSIM ↑ |
| -------- | -----: | -----: |
| Baseline |  27.10 |  0.861 |
| Ours     |  29.45 |  0.902 |

### Images

Put images in `public/blog/` and reference them as `![alt text](/blog/figure.png)`.
