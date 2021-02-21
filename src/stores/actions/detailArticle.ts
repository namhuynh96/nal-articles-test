import { ActionTypes } from "./types/actionTypes";
import axios from "axios";
import { Dispatch } from "redux";
import * as ArticlesActions from "./types/detailArticle";
import { IArticle } from "../reducers/detailArticle";

const requestStart = (): ArticlesActions.IDetailArticleRequestStart => ({
  type: ActionTypes.DETAIL_ARTICLE_REQUEST_START,
});

const requestFail = (): ArticlesActions.IDetailArticleRequestFail => ({
  type: ActionTypes.DETAIL_ARTICLE_REQUEST_FAIL,
});

const getDetailArticleSuccess = (
  article: IArticle
): ArticlesActions.IDetailArticleGetSuccess => {
  return {
    type: ActionTypes.DETAIL_ARTICLE_GET_SUCCESS,
    article,
  };
};

export const getDetailArticle = (id: string) => {
  return (dispatchEvent: Dispatch) => {
    dispatchEvent(requestStart());
    axios
      .get(`https://5f55a98f39221c00167fb11a.mockapi.io/blogs/${id}`)
      .then((res) => {
        dispatchEvent(getDetailArticleSuccess(res.data));
      })
      .catch((e) => dispatchEvent(requestFail()));
  };
};

export const removeDetailArticle = (): ArticlesActions.IDetailArticleRemove => {
  return {
    type: ActionTypes.DETAIL_ARTICLE_REMOVE,
  };
};
