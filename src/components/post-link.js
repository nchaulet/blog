import React from "react";
import Link from "gatsby-link";

import styled from "styled-components";

const Date = styled.span`
  color: #264e86;
  opacity: 0.6;
  text-decoration: "none";
  margin-right: 0.5em;
`;

const Title = styled.span``;

const Post = styled(Link)`
  color: #0074e4;
  border-bottom: 2px solid #74dbef;
  text-decoration: none;
  width: auto;
`;

const PostLinkContainer = styled.div`
  margin-bottom: 1rem;
`;

const PostLink = ({ post }) => (
  <PostLinkContainer>
    <Post to={post.frontmatter.path}>
      <Date>{post.frontmatter.date}</Date>
      <Title>{post.frontmatter.title}</Title>
    </Post>
  </PostLinkContainer>
);

export default PostLink;
