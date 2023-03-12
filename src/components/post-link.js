import React from "react";
import { Link } from "gatsby-link";

import styled from "styled-components";
import { COLORS } from "../constants";

const PostLinkContainer = styled.div`
  margin-bottom: 1rem;
  a {
    color: ${COLORS.DARK};
    text-decoration: none;
    width: auto;
    &:hover {
      color: ${COLORS.DARK};
    }
  }
`;

const DateBadge = styled.span``;

const PostLink = ({ post }) => (
  <PostLinkContainer>
    <Link to={post.frontmatter.path}>
      <DateBadge>{post.frontmatter.date}</DateBadge> - {post.frontmatter.title}
    </Link>
  </PostLinkContainer>
);

export default PostLink;
