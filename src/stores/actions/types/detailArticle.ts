import { ActionTypes } from "./actionTypes";
import { IArticle } from "../../reducers/detailArticle";

export interface IDetailArticleRequestStart {
  type: ActionTypes.DETAIL_ARTICLE_REQUEST_START;
}

export interface IDetailArticleRequestFail {
  type: ActionTypes.DETAIL_ARTICLE_REQUEST_FAIL;
}

export interface IDetailArticleGetSuccess {
  type: ActionTypes.DETAIL_ARTICLE_GET_SUCCESS;
  article: IArticle;
}

export interface IDetailArticleRemove {
  type: ActionTypes.DETAIL_ARTICLE_REMOVE;
}

export type DetailArticleActions =
  | IDetailArticleRequestStart
  | IDetailArticleRequestFail
  | IDetailArticleGetSuccess
  | IDetailArticleRemove;
