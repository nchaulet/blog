import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { StaticQuery, graphql } from "gatsby";

import Header from "../components/header";
import "./layout.css";

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    >
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Helmet>
    {location.pathname === "/" ? (
      <Header siteTitle={data.site.siteMetadata.title} />
    ) : (
      <div
        style={{
          margin: "0 auto",
          maxWidth: 1100,
          padding: "1.45rem 1.0875rem"
        }}
      >
        <Link
          to="/"
          style={{
            color: "#264e86",
            textDecoration: "none",
            fontSize: "2em"
          }}
        >
          {"< "}
        </Link>
      </div>
    )}
    <div
      style={{
        margin: "0 auto",
        maxWidth: 1100,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children}
    </div>
  </div>
);

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={query}
    render={data => <Layout data={data} {...props} />}
  />
);
