import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import * as actions from "../../stores/actions";
import { IStoreState } from "../../stores/reducers/index";
import Article from "../../components/smart/Article/Article";
import Query from "./Query/Query";
import ErrorLoadingHandler from "../../components/dumb/ErrorLoadingHandler/ErrorLoadingHandler";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const HomePage = () => {
  const query = useQuery();
  const dispatch = useDispatch();

  const { isLoading, isError, articles } = useSelector(
    (state: IStoreState) => state.articles
  );

  const searchQuery = query.get("search");
  const sortByQuery = query.get("sortBy");
  const orderByQuery = query.get("order");
  const pageQuery = query.get("page");

  useEffect(() => {
    const queryArray: string[] = [];
    if (searchQuery) {
      queryArray.push(`search=${searchQuery}`);
    }
    if (sortByQuery) {
      queryArray.push(`sortBy=${sortByQuery}`);
    }
    if (orderByQuery) {
      queryArray.push(`order=${orderByQuery}`);
    }
    if (pageQuery) {
      queryArray.push(`page=${pageQuery}&limit=10`);
    }

    if (queryArray.length > 0) {
      const queryString = `?${queryArray.join("&")}`;
      dispatch(actions.getArticles(queryString));
    }
  }, [searchQuery, sortByQuery, orderByQuery, pageQuery, dispatch]);

  let listElement: JSX.Element = <></>;
  if (articles) {
    if (articles.length === 0) {
      listElement = <div>Nothing found.</div>;
    } else {
      listElement = (
        <ul className="list-unstyled">
          {articles.map((a) => (
            <Article key={a.id} article={a} />
          ))}
        </ul>
      );
    }
  }

  return (
    <div>
      <Query
        searchInit={searchQuery}
        sortByInit={sortByQuery}
        orderByInit={orderByQuery}
        pageInit={pageQuery ? Number(pageQuery) : null}
        isLastPage={articles ? articles.length < 10 : true}
      />

      <ErrorLoadingHandler isLoading={isLoading} isError={isError} />

      {listElement}
    </div>
  );
};

export default HomePage;
