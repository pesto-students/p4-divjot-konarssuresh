import {AddShortUrl, UrlList} from "../ShortUrl";
import {useReducer} from "react";

const reducer = (state, {type, data}) => {
  switch (type) {
    case "add":
      return {...state, urlList: [...state.urlList, data]};
    default:
      return state;
  }
};
const ShortenUrl = () => {
  const [state, dispatch] = useReducer(reducer, {
    urlList: [
      {
        url: "https://developer.chrome.com/blog/new-in-devtools-105/?utm_source=devtools",
        shortUrl: "https://shrtco.de/zYKqCb",
      },
    ],
  });

  const handleAddUrl = (data) => {
    const {url, shortUrl} = data;
    dispatch({type: "add", data: {url, shortUrl}});
  };
  return (
    <>
      <AddShortUrl onAddUrl={handleAddUrl} />
      <UrlList urlList={state.urlList} />
    </>
  );
};

export {ShortenUrl};
