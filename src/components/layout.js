import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby-link";
import { StaticQuery, graphql } from "gatsby";

import Header from "../components/header";
import "./layout.css";
import { Switch } from "./switch";
import { ColorSchemeProvider, useColorScheme } from "../hooks/use_color_scheme";

const IS_SSR = !("window" in global);

const Layout = ({ children, data, location }) => {
  const { colorScheme } = useColorScheme();

  return (
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
        <html
          lang="en"
          data-prefer-color-scheme={IS_SSR ? undefined : colorScheme}
        />
      </Helmet>
      {location.pathname === "/" ? (
        <Header siteTitle={data.site.siteMetadata.title} />
      ) : (
        <div
          style={{
            margin: "0 auto",
            maxWidth: 1100,
            padding: "0.5rem 1rem",
            display: "flex",
            justifyContent: "space-between"
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
          <Switch />
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
};

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const DefaultLayout = props => (
  <ColorSchemeProvider>
    <StaticQuery
      query={query}
      render={data => <Layout data={data} {...props} />}
    />
  </ColorSchemeProvider>
);

export default DefaultLayout;
