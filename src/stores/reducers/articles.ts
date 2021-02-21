import { ActionTypes } from "../actions/types/actionTypes";
import { ArticlesActions } from "../actions/types/articles";
import { IArticle } from "./detailArticle";

export interface IArticlesReducer {
  totalNumber: null | number;
  articles: null | IArticle[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: IArticlesReducer = {
  totalNumber: null,
  articles: null,
  isLoading: false,
  isError: false,
};

const reducer = (
  state = initialState,
  action: ArticlesActions
): IArticlesReducer => {
  switch (action.type) {
    case ActionTypes.ARTICLES_REQUEST_START:
      return { ...state, isLoading: true, isError: false };
    case ActionTypes.ARTICLES_REQUEST_FAIL:
      return { ...state, isLoading: false, isError: true };

    case ActionTypes.ARTICLES_GET_SUCCESS:
      return {
        ...state,
        articles: action.articles,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};

export default reducer;
