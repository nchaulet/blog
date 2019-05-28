import {
  LiveProvider,
  LiveEditor,
  LiveError as BaseLiveError,
  LivePreview,
} from "react-live";

import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/shadesOfPurple';


import styled from "styled-components";
import React, { useState, useCallback, useContext, useEffect, useRef, useMemo } from 'react';


const LiveEditorWrapper = styled.div({
  flex: 8,
  background: "rgb(45, 42, 85)",
  padding: 0,
  maxHeight: "50em",
  overflow: "scroll",
});


const Container = styled.div({
  display: "flex",
  border: "0.5px solid rgba(0, 0, 0, .2)",
  borderRadius: "0.25em",
  marginBottom: "0.5em",
});

const LiveError = styled(BaseLiveError)({
  backgroundColor: "rgba(255, 132, 132, 0.1)",
});
const LivePreviewWrapper = styled.div({
  flex: 4,
  padding: "0.5em 0.5em 0.5em 0.5em"
});

const PreviewContainer = styled.div({
  input: {
    display: "block",
    margin: "0.5em",
  },
  button: {
    display: "block",
    margin: "0.5em",
  }
});



function CodeBlock(props) {
  const scope = Object.assign({ useState, useCallback, useContext, useEffect, useRef, useMemo }, props.scope);

  return (
    <Container >
      <LiveProvider noInline={props.noInline} scope={scope} code={props.code}>
        <LiveEditorWrapper>
          <LiveEditor theme={theme} />
        </LiveEditorWrapper>
        <LivePreviewWrapper>
          <LivePreview Component={PreviewContainer}  />
          <LiveError />
        </LivePreviewWrapper>
      </LiveProvider>
    </Container>
  );
}


export default ({children, className = "", live, noInline}) => {
  const language = className.replace(/language-/, '')
  if (live) {
    return (
      <CodeBlock code={children} noInline={noInline} />
    );
  }
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
