import { ActionTypes } from "../actions/types/actionTypes";
import { DetailArticleActions } from "../actions/types/detailArticle";

export interface IArticle {
  id: string;
  createdAt: string;
  title: string;
  image: string;
  content: string;
}

export interface IDetailArticleReducer {
  detailArticle: null | IArticle;
  isLoading: boolean;
  isError: boolean;
}

const initialState: IDetailArticleReducer = {
  detailArticle: null,
  isLoading: false,
  isError: false,
};

const reducer = (
  state = initialState,
  action: DetailArticleActions
): IDetailArticleReducer => {
  switch (action.type) {
    case ActionTypes.DETAIL_ARTICLE_REQUEST_START:
      return { ...state, isLoading: true, isError: false };
    case ActionTypes.DETAIL_ARTICLE_REQUEST_FAIL:
      return { ...state, isLoading: false, isError: true };

    case ActionTypes.DETAIL_ARTICLE_GET_SUCCESS:
      return {
        ...state,
        detailArticle: action.article,
        isLoading: false,
        isError: false,
      };

    case ActionTypes.DETAIL_ARTICLE_REMOVE:
      return {
        ...state,
        detailArticle: null,
      };

    default:
      return state;
  }
};

export default reducer;
