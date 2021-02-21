import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Search from "../../../components/smart/Search/Search";
import Sorts from "../../../components/smart/Sorts/Sorts";
import Pagination from "../../../components/smart/Pagination/Pagination";

import classes from "./Query.module.css";

interface IQueryProps {
  searchInit: string | null;
  sortByInit: string | null;
  orderByInit: string | null;
  pageInit: number | null;
  isLastPage: boolean;
}

const Query: React.FC<IQueryProps> = (props) => {
  const history = useHistory();

  const { searchInit, sortByInit, orderByInit, pageInit } = props;
  const [searchQuery, setSearchQuery] = useState(searchInit);
  const [sortByQuery, setSortByQuery] = useState(sortByInit);
  const [orderByQuery, setOrderByQuery] = useState(orderByInit);
  const [pageQuery, setPageQuery] = useState(pageInit);

  useEffect(() => {
    if (!pageQuery) {
      history.push("?page=1");
    }
  }, [pageQuery, history]);

  const queryHandler = (
    queryName: "search" | "sortBy" | "order" | "page",
    queryValue: string
  ) => {
    const currentQuery = {
      search: searchQuery,
      sortBy: sortByQuery,
      order: orderByQuery,
      page: pageQuery,
    };
    const newQuery = { ...currentQuery, [queryName]: queryValue };

    if (queryName === "search") {
      setSearchQuery(queryValue);
      newQuery.page = 1;
      setPageQuery(1);
    } else if (queryName === "sortBy") {
      setSortByQuery(queryValue);
    } else if (queryName === "order") {
      setOrderByQuery(queryValue);
    } else {
      setPageQuery(Number(queryValue));
    }

    const queryArray: string[] = [];
    const queryNames = Object.keys(newQuery);
    for (let i = 0; i < queryNames.length; i++) {
      const queryName = queryNames[i];
      const queryValue =
        newQuery[queryName as "search" | "sortBy" | "order" | "page"];
      if (queryValue !== null) {
        queryArray.push(`${queryName}=${queryValue}`);
      }
    }
    const finalQueryString = queryArray.join("&");

    history.push(`?${finalQueryString}`);
  };

  return (
    <div>
      <div className={classes.Search}>
        <Search
          initialValue={searchQuery}
          onQuery={(value) => queryHandler("search", value)}
        />
      </div>

      <div className={classes.SortsAndPagination}>
        <div className={classes.Sorts}>
          <Sorts
            initialSortBy={sortByQuery}
            initialOrderBy={orderByQuery}
            onSortQuery={(value) => queryHandler("sortBy", value)}
            onOrderQuery={(value) => queryHandler("order", value)}
          />
        </div>
        <div className={classes.Pagination}>
          <Pagination
            currentPage={pageQuery ? pageQuery : 1}
            isLastPage={props.isLastPage}
            onQuery={(value) => queryHandler("page", value.toString())}
          />
        </div>
      </div>
    </div>
  );
};

export default Query;
