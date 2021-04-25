import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDirectory = path.join(process.cwd(), "content/blog");

export function getDocBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(docsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents, { eval: true });

  return { slug: realSlug, data, content };
}

export function getAllDocs() {
  const slugs = fs.readdirSync(docsDirectory);
  const docs = slugs.map((slug) => getDocBySlug(slug));

  return docs;
}
