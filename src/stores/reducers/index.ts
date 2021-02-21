import { combineReducers } from "redux";
import articlesReducer, { IArticlesReducer } from "./articles";
import detailArticleReducer, { IDetailArticleReducer } from "./detailArticle";

export interface IStoreState {
  articles: IArticlesReducer;
  detailArticle: IDetailArticleReducer;
}

export default combineReducers<IStoreState>({
  articles: articlesReducer,
  detailArticle: detailArticleReducer,
});
