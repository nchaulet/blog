const data = require("./data.json");
const fs = require("fs");

const path = require("path");

async function run() {
  for (post of data.db[0].data.posts) {
    if (!post.published_at) {
      continue;
    }
    const date = new Date(post.published_at).toISOString().substr(0, 10);
    const markdown = `---
path: "/${post.slug}"
date: "${date}"
title: "${post.title.replace(/"/, '"')}"
---
${post.markdown.replace(/\/content\/images/g, "/images")}
`;
    const file_name = `${date}-${post.slug}.md`;
    fs.writeFileSync(
      path.join(__dirname, "../data/posts", file_name),
      markdown
    );
  }
}

run();
