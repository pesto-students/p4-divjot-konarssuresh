import styled from "styled-components";
import classes from "../Layout/Layout.module.css";
import {useState} from "react";
import {API} from "../../constants";

export const Container = styled.div`
  display: flex;
  width: 100%;
  column-gap: 1rem;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.16);
  margin-bottom: 2rem;
  background-color: #eff1f7;
`;

const StyledInput = styled.input`
  font-size: 1.25rem;
  flex-grow: 1;
  outline: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #eeeeee;
  :focus {
    box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.16);
  }
  ::placeholder {
    color: #f47c74;
  }
`;

export const StyledButton = styled.button`
  background-color: #2bcfce;
  font-size: 1rem;
  border-radius: 1rem;
  color: white;
  cursor: pointer;
  border-color: #4b3f6b;
  :hover {
    background-color: #10a1a0;
  }
  :active {
    background-color: #035151;
  }
  :disabled {
    cursor: disabled;
  }
`;

const AddShortUrl = ({onAddUrl}) => {
  const {BASE_URL, SHORTEN} = API;
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const getShortUrl = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}${SHORTEN}?url=${url}`);
      const data = await response.json();
      console.log(data);
      if (data.ok) {
        onAddUrl({
          shortUrl: data.result["full_short_link"],
          url: data.result["original_link"],
        });
        setUrl("");
      } else {
        alert(data?.error);
      }
    } catch (e) {
      alert("Something went wrong. Contact Support");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <StyledInput
        placeholder="shorten a link here..."
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
        disabled={loading}
      />
      <StyledButton
        onClick={async () => {
          await getShortUrl();
        }}
      >
        <div className={`${loading ? classes["dot-typing"] : ""}`}>
          Shorten it!
        </div>
      </StyledButton>
    </Container>
  );
};

export {AddShortUrl};
