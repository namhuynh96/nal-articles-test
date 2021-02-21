import { ActionTypes } from "./actionTypes";
import { IArticle } from "../../reducers/detailArticle";

export interface IArticlesRequestStart {
  type: ActionTypes.ARTICLES_REQUEST_START;
}

export interface IArticlesRequestFail {
  type: ActionTypes.ARTICLES_REQUEST_FAIL;
}

export interface IArticlesGetSuccess {
  type: ActionTypes.ARTICLES_GET_SUCCESS;
  articles: IArticle[];
}

export type ArticlesActions =
  | IArticlesRequestStart
  | IArticlesRequestFail
  | IArticlesGetSuccess;
