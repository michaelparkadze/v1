import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDirectory = path.join(process.cwd(), "content/blog");

export function getArticleSlugs() {
  const articles = getAllArticles();

  const paths = articles.map((item) => ({
    params: {
      slug: item.slug,
    },
  }));

  return paths;
}

export function getArticleBySlug(slg) {
  const articles = getAllArticles();
  const articleIndex = articles.findIndex((item) => item.slug === slg);

  const { slug, frontmatter, content } = articles[articleIndex];

  const previousArticle = articles[articleIndex + 1];
  const nextArticle = articles[articleIndex - 1];

  return {
    slug,
    frontmatter,
    content,
    previousArticle,
    nextArticle,
  };

  // const realSlug = slug.replace(/\.md$/, "");
  // const fullPath = path.join(docsDirectory, `${realSlug}.md`);
  // const fileContents = fs.readFileSync(fullPath, "utf8");

  // return { slug: realSlug, data, content };
}

export function getAllArticles() {
  const articlesDir = fs.readdirSync(docsDirectory);

  const articles = articlesDir
    .map((item) => {
      const fullPath = path.join(docsDirectory, item);

      const markdownWithMetadata = fs.readFileSync(fullPath).toString();
      const { data, content } = matter(markdownWithMetadata);

      const slug = item.replace(".md", "");

      const frontmatter = {
        ...data,
        date: data.date.toISOString(),
      };

      return {
        slug,
        frontmatter,
        content,
      };
    })
    .sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );

  return articles;

  // const docs = slugs
  //   .map((slug) => getDocBySlug(slug))
  //   .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

  // return docs;
}
