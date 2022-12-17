import {Container, StyledButton} from "./AddShortUrl";
import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const UrlContainer = styled.div`
  border: 1px solid #c8c7c7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
`;

const StyledContainer = styled(Container)`
  flex-direction: column;
  background-color: white;
`;

const ShortUrlContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
`;
const CopyButton = styled(StyledButton)`
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
`;

const ShortLink = styled.a`
  text-decoration: none;
  color: #30c0be;
`;

const Url = React.memo(({url, shortUrl}) => {
  return (
    <UrlContainer>
      <p>{url}</p>
      <ShortUrlContainer>
        <ShortLink href={shortUrl} target="_blank">
          {shortUrl}
        </ShortLink>
        <CopyButton
          onClick={async () => {
            await navigator.clipboard.writeText(shortUrl);
            alert("url copied to clipboard");
          }}
        >
          Copy
        </CopyButton>
      </ShortUrlContainer>
    </UrlContainer>
  );
});

const UrlList = ({urlList = []}) => {
  return (
    <StyledContainer>
      {urlList.map(({url, shortUrl}, index) => {
        return (
          <React.Fragment key={index}>
            <Url url={url} shortUrl={shortUrl} />
          </React.Fragment>
        );
      })}
    </StyledContainer>
  );
};

UrlList.propTypes = {
  urlList: PropTypes.array,
};

export {UrlList};
