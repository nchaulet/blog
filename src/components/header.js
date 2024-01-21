import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import { picture } from "./profile-picture";
import { Switch } from "./switch";

const linkStyle = { margin: "0.25em" };

const ProfileImg = styled.img({
  borderRadius: "8em",
  boxShadow: "2px 2px 5px 0px rgba(158,158,158,1)",
  width: "135px"
});

const SmallText = styled.span({
  fontSize: ".65em",
  marginTop: ".25em",
  display: "block"
});

const CompanyLink = styled.a`
  text-decoration: none;
  color: #0074e4;
  &:hover {
    /* cursor: pointer; */
  }
`;

const Title = styled.h1({
  margin: 0,
  color: COLORS.DARK
});

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: "1rem"
    }}
  >
    <div
      style={{
        margin: "0.5em auto",
        maxWidth: 1100,
        display: "flex",
        justifyContent: "end"
      }}
    >
      <Switch />
    </div>
    <div
      style={{
        margin: ".5em auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
        textAlign: "center"
      }}
    >
      <ProfileImg alt="profile image" src={picture} />
      <Title>
        Nicolas Chaulet
        <SmallText>
          Developer{" "}
          <CompanyLink target="_blank" href="https://www.elastic.co">
            @elastic
          </CompanyLink>
        </SmallText>
      </Title>
      <div
        style={{
          textAlign: "center",
          color: COLORS.DARK,
          marginTop: "1em",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <a
          href="https://github.com/nchaulet"
          style={linkStyle}
          title="github"
          aria-label="github"
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1664 896q0 251-146.5 451.5t-378.5 277.5q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 89t.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/nchaulet/"
          style={linkStyle}
          title="mail"
          aria-label="linkedin"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>
        <a
          href="mailto:n.chaulet@gmail.com"
          rel="noopener noreferrer"
          style={linkStyle}
          title="mail"
          aria-label="mail"
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
);

export default Header;
