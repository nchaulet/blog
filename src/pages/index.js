import React from "react";
import PostLink from "../components/post-link";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { COLORS } from "../constants";

const IndexPage = ({
  data: {
    allMdx: { edges }
  }
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return <div>{Posts}</div>;
};

export default props => (
  <Layout location={props.location}>
    <hr />
    <h2 style={{ color: COLORS.DARK }}>Latests posts</h2>
    <IndexPage {...props} />
  </Layout>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            path
            title
          }
        }
      }
    }
  }
`;
