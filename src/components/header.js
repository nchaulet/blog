import React from "react";
import styled from "styled-components";

import Link from "gatsby-link";

const linkStyle = { margin: "0.25em" };

const ProfileImg = styled.img({
  borderRadius: "8em",
  boxShadow: "2px 2px 5px 0px rgba(158,158,158,1)"
});

const SmallText = styled.span({
  fontSize: ".65em",
  display: "block"
});

const CompanyLink = styled.a`
  text-decoration: none;
  color: #0074e4;
  &:hover {
    /* cursor: pointer; */
  }
`;

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: "1rem"
    }}
  >
    <div
      style={{
        margin: "2em auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
        textAlign: "center"
      }}
    >
      <ProfileImg
        alt="profile image"
        src="data:image/jpeg;base64,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"
      />
      <h1 style={{ margin: 0, color: "#264e86" }}>
        Nicolas Chaulet
        <SmallText>
          Developer{" "}
          <CompanyLink href="https://www.elastic.co">@elastic</CompanyLink>
        </SmallText>
      </h1>
      <div
        style={{
          textAlign: "center",
          color: "#264e86",
          marginTop: "1em",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <a
          class="btn btn-large"
          href="https://github.com/nchaulet"
          style={linkStyle}
          title="github"
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
          class="btn btn-large"
          href="https://twitter.com/n_chaulet"
          style={linkStyle}
          title="twitter"
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" />
          </svg>
        </a>
        <a
          class="btn btn-large"
          href="https://www.linkedin.com/in/nchaulet/"
          style={linkStyle}
          title="mail"
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
          class="btn btn-large"
          href="mailto:n.chaulet@gmail.com"
          rel="noopener noreferrer"
          style={linkStyle}
          title="mail"
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
