---
author: Sat Naing
pubDatetime: 2022-09-23T15:22:00Z
modDatetime: 2025-06-13T16:52:45.934Z
title: 在 AstroPaper 主題中新增文章
slug: adding-new-posts-in-astropaper-theme
featured: true
draft: false
tags:
  - docs
description: 使用 AstroPaper 主題建立或新增文章的一些規則和建議。
---

以下是在 AstroPaper 部落格主題中建立新文章的一些規則/建議、技巧和訣竅。

<figure>
  <img
    src="https://images.pexels.com/photos/159618/still-life-school-retro-ink-159618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="經典木桌上的書寫用品、復古時鐘和皮革包"
  />
    <figcaption class="text-center">
    照片來自 <a href="https://www.pexels.com/photo/brown-wooden-desk-159618/">Pixabay</a>
  </figcaption>
</figure>

## 目錄

## 建立部落格文章

要撰寫新的部落格文章，請在 `src/data/blog/` 目錄內建立一個 markdown 檔案。

> 在 AstroPaper v5.1.0 之前，所有部落格文章都必須放在 `src/data/blog/` 中，意味著您無法將它們組織到子目錄中。

從 AstroPaper v5.1.0 開始，您現在可以將部落格文章組織到子目錄中，使內容管理更加容易。

例如，如果您想要將文章歸類在 `2025` 下，您可以將它們放在 `src/data/blog/2025/` 中。這也會影響文章的 URL，所以 `src/data/blog/2025/example-post.md` 將可在 `/posts/2025/example-post` 存取。

如果您不希望子目錄影響文章 URL，只需在資料夾名稱前加上底線 `_`。

```bash
# 範例：部落格文章結構和 URL
src/data/blog/very-first-post.md          -> mysite.com/posts/very-first-post
src/data/blog/2025/example-post.md        -> mysite.com/posts/2025/example-post
src/data/blog/_2026/another-post.md       -> mysite.com/posts/another-post
src/data/blog/docs/_legacy/how-to.md      -> mysite.com/posts/docs/how-to
src/data/blog/Example Dir/Dummy Post.md   -> mysite.com/posts/example-dir/dummy-post
```

> 💡 小技巧：您也可以在 frontmatter 中覆寫部落格文章的 slug。詳情請見下一節。

如果子目錄 URL 沒有出現在建置輸出中，請移除 node_modules，重新安裝套件，然後重新建置。

## Frontmatter

Frontmatter 是儲存部落格文章（文章）重要資訊的主要地方。Frontmatter 位於文章頂部，以 YAML 格式撰寫。更多關於 frontmatter 及其用法的資訊請參閱 [astro 文檔](https://docs.astro.build/en/guides/markdown-content/)。

以下是每篇文章的 frontmatter 屬性清單。

| 屬性               | 描述                                                                                         | 備註                                       |
| ------------------ | -------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **_title_**        | 文章標題 (h1)                                                                                | 必填<sup>\*</sup>                          |
| **_description_**  | 文章描述。用於文章摘要和文章的網站描述。                                                     | 必填<sup>\*</sup>                          |
| **_pubDatetime_**  | ISO 8601 格式的發布日期時間。                                                                | 必填<sup>\*</sup>                          |
| **_modDatetime_**  | ISO 8601 格式的修改日期時間。（僅在部落格文章被修改時添加此屬性）                            | 可選                                       |
| **_author_**       | 文章作者。                                                                                   | 預設 = SITE.author                         |
| **_slug_**         | 文章的 slug。此欄位是可選的。                                                                | 預設 = 檔案名稱的 slug 化                  |
| **_featured_**     | 是否在首頁的精選區塊中顯示此文章                                                             | 預設 = false                               |
| **_draft_**        | 將此文章標記為「未發布」。                                                                   | 預設 = false                               |
| **_tags_**         | 此文章的相關關鍵字。以 YAML 陣列格式撰寫。                                                   | 預設 = others                              |
| **_ogImage_**      | 文章的 OG 圖片。對社群媒體分享和 SEO 很有用。這可以是遠端 URL 或相對於當前資料夾的圖片路徑。 | 預設 = `SITE.ogImage` 或生成的 OG 圖片     |
| **_canonicalURL_** | 規範 URL（絕對路徑），以防文章已在其他來源存在。                                             | 預設 = `Astro.site` + `Astro.url.pathname` |
| **_hideEditPost_** | 隱藏部落格標題下的編輯文章按鈕。這僅適用於當前部落格文章。                                   | 預設 = false                               |
| **_timezone_**     | 為當前部落格文章指定 IANA 格式的時區。這將覆寫當前部落格文章的 `SITE.timezone` 配置。        | 預設 = `SITE.timezone`                     |

> 小技巧！您可以透過在主控台執行 `new Date().toISOString()` 來取得 ISO 8601 日期時間。但請確保移除引號。

frontmatter 中只有 `title`、`description` 和 `pubDatetime` 欄位是必須指定的。

標題和描述（摘要）對搜尋引擎最佳化（SEO）很重要，因此 AstroPaper 建議在部落格文章中包含這些。

`slug` 是 url 的唯一識別符。因此，`slug` 必須是唯一的且與其他文章不同。`slug` 的空白應該用 `-` 或 `_` 分隔，但建議使用 `-`。Slug 會使用部落格文章檔案名稱自動生成。但是，您可以在部落格文章的 frontmatter 中定義您的 `slug`。

例如，如果部落格檔案名稱是 `adding-new-post.md` 且您沒有在 frontmatter 中指定 slug，Astro 會自動使用檔案名稱為部落格文章建立 slug。因此，slug 將是 `adding-new-post`。但如果您在 frontmatter 中指定 `slug`，這將覆寫預設 slug。您可以在 [Astro 文檔](https://docs.astro.build/en/guides/content-collections/#defining-custom-slugs) 中閱讀更多相關資訊。

如果您在部落格文章中省略 `tags`（換句話說，如果沒有指定標籤），預設標籤 `others` 將用作該文章的標籤。您可以在 `content.config.ts` 檔案中設定預設標籤。

```ts file="src/content.config.ts"
export const blogSchema = z.object({
  // ...
  draft: z.boolean().optional(),
  // [!code highlight:1]
  tags: z.array(z.string()).default(["others"]), // 將 "others" 替換為您想要的任何內容
  // ...
});
```

### 範例 Frontmatter

以下是文章的範例 frontmatter。

```yaml file="src/data/blog/sample-post.md"
---
title: 文章的標題
author: 您的名字
pubDatetime: 2022-09-21T05:17:19Z
slug: the-title-of-the-post
featured: true
draft: false
tags:
  - 一些
  - 範例
  - 標籤
ogImage: ../../assets/images/example.png # src/assets/images/example.png
# ogImage: "https://example.org/remote-image.png" # 遠端 URL
description: 這是範例文章的範例描述。
canonicalURL: https://example.org/my-article-was-already-posted-here
---
```

## 添加目錄

預設情況下，文章（article）不包含任何目錄（toc）。要包含目錄，您必須以特定方式指定它。

以 h2 格式（markdown 中的 ##）寫入 `Table of contents`，並將其放在您希望它出現在文章中的位置。

例如，如果您想將目錄放在介紹段落下方（就像我通常做的），您可以這樣做：

<!-- prettier-ignore-start -->
```md
---
# frontmatter
---

以下是在 AstroPaper 部落格主題中建立新文章的一些建議、技巧和訣竅。

<!-- [!code ++] -->
## 目錄

<!-- 文章的其餘部分 -->
```
<!-- prettier-ignore-end -->

## 標題

關於標題有一件事要注意。AstroPaper 部落格文章使用標題（frontmatter 中的 title）作為文章的主標題。因此，文章中的其餘標題應該使用 h2
