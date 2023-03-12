import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "../components/code-block";

const LabelH2 = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.7;
  float: right;
`;

const components = {
  pre: ({ children, className, ...props }) => {
    const mappedChildren = React.Children.map(children, child => (
      <CodeBlock {...child.props} {...props} />
    ));
    return <div className={className}>{mappedChildren}</div>;
  },
  code: CodeBlock
};

function Template({
  data, // this prop will be injected by the GraphQL query below.,
  children,
  ...rest
}) {
  const { mdx } = data; // data.markdownRemark holds our post data
  const { frontmatter } = mdx;

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <LabelH2>{frontmatter.date}</LabelH2>
        <h1>{frontmatter.title}</h1>
        {children}
      </div>
    </div>
  );
}

const PostTemplate = props => (
  <MDXProvider components={components}>
    <Layout location={props.location}>
      <Template {...props} />
    </Layout>
  </MDXProvider>
);

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
    }
  }
`;
