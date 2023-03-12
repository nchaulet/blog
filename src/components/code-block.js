import {
  LiveProvider,
  LiveEditor,
  LiveError as BaseLiveError,
  LivePreview
} from "react-live";

import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/shadesOfPurple";

import styled from "styled-components";
import React, {
  useState,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useMemo
} from "react";
import { useColorScheme } from "../hooks/use_color_scheme";

const LiveEditorWrapper = styled.div({
  flex: 8,
  background: "rgb(45, 42, 85)",
  padding: 0,
  maxHeight: "50em",
  overflow: "scroll"
});

const Container = styled.div({
  display: "flex",
  border: "0.5px solid rgba(0, 0, 0, .2)",
  borderRadius: "0.25em",
  marginBottom: "0.5em"
});

const DarkContainer = styled.div({
  display: "flex",
  border: "2px solid rgb(236 236 236)",
  marginBottom: "0.5em",
  backgroundColor: "rgb(236 236 236)"
});

const LiveError = styled(BaseLiveError)({
  backgroundColor: "rgba(255, 132, 132, 0.1)"
});
const LivePreviewWrapper = styled.div({
  flex: 4,
  padding: "0.5em 0.5em 0.5em 0.5em"
});

const PreviewContainer = styled.div({
  input: {
    display: "block",
    margin: "0.5em"
  },
  button: {
    display: "block",
    margin: "0.5em"
  }
});

function LiveCodeBlock(props) {
  const scope = Object.assign(
    { useState, useCallback, useContext, useEffect, useRef, useMemo },
    props.scope
  );

  const { colorScheme } = useColorScheme();

  const ContainerComponent = colorScheme === "dark" ? DarkContainer : Container;

  return (
    <ContainerComponent>
      <LiveProvider
        theme={theme}
        noInline={props.noInline}
        scope={scope}
        code={props.code}
      >
        <LiveEditorWrapper>
          <LiveEditor theme={theme} />
        </LiveEditorWrapper>
        <LivePreviewWrapper>
          <LivePreview Component={PreviewContainer} />
          <LiveError />
        </LivePreviewWrapper>
      </LiveProvider>
    </ContainerComponent>
  );
}

const CodeBlock = ({ children, className = "", live, noInline, ...rest }) => {
  const language = className.replace(/language-/, "");
  if (!language) {
    return <code>{children}</code>;
  }
  if (live) {
    return <LiveCodeBlock code={children} noInline={noInline} />;
  }
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
