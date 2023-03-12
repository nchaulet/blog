/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/post.js`);
  console.log(blogPostTemplate);
  return graphql(`
    {
      allMdx(sort: { frontmatter: { date: DESC } }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMdx.edges.forEach(({ node }) => {
      console.log(node);
      createPage({
        path: node.frontmatter.path,
        component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`
      });
    });
  });
};
