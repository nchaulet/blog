import React from 'react'
import styled from 'styled-components';


const LabelH2 = styled.h2`
  background-color: #264e86;
  display: inline-block;
  padding: 0.3rem;
  color: #eff0f4;
  font-size: 1.2rem;
  font-weight: normal;
  border-radius: 0.2rem;
  opacity: 0.9;
  float:right;
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
      <LabelH2>{frontmatter.date}</LabelH2>
        <h1>{frontmatter.title}</h1>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
    }
  }
`
