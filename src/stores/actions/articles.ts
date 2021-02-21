import { ActionTypes } from "./types/actionTypes";
import axios from "axios";
import { Dispatch } from "redux";
import * as ArticlesActions from "./types/articles";
import { IArticle } from "../reducers/detailArticle";

const requestStart = (): ArticlesActions.IArticlesRequestStart => ({
  type: ActionTypes.ARTICLES_REQUEST_START,
});

const requestFail = (): ArticlesActions.IArticlesRequestFail => ({
  type: ActionTypes.ARTICLES_REQUEST_FAIL,
});

const getArticlesSuccess = (
  articles: IArticle[]
): ArticlesActions.IArticlesGetSuccess => {
  return {
    type: ActionTypes.ARTICLES_GET_SUCCESS,
    articles,
  };
};

export const getArticles = (query: string) => {
  return (dispatchEvent: Dispatch) => {
    dispatchEvent(requestStart());
    axios
      .get("https://5f55a98f39221c00167fb11a.mockapi.io/blogs" + query)
      .then((res) => {
        dispatchEvent(getArticlesSuccess(res.data));
      })
      .catch((e) => dispatchEvent(requestFail()));
  };
};
