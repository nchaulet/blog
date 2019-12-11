import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "../components/code-block";
import Disqus from "gatsby-plugin-disqus";

const LabelH2 = styled.h2`
  background-color: #264e86;
  /* display: inline-block; */
  padding: 0.3rem;
  color: #eff0f4;
  font-size: 1.2rem;
  font-weight: normal;
  border-radius: 0.2rem;
  opacity: 0.9;
  float: right;
`;

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
};

function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data; // data.markdownRemark holds our post data

  const { siteUrl } = data.site.siteMetadata;
  const { frontmatter, body } = mdx;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <LabelH2>{frontmatter.date}</LabelH2>
        <h1>{frontmatter.title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
        <br />
        <Disqus
          identifier={frontmatter.path}
          title={frontmatter.title}
          url={`${siteUrl}${frontmatter.path}`}
        />
      </div>
    </div>
  );
}

export default props => (
  <MDXProvider components={components}>
    <Layout location={props.location}>
      <Template {...props} />
    </Layout>
  </MDXProvider>
);

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
    }
  }
`;
