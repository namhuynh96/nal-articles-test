import { useState } from "react";
import Sort from "./Sort/Sort";

import classes from "./Sorts.module.css";

interface ISortsProps {
  initialSortBy: null | string;
  initialOrderBy: null | string;
  onSortQuery: (value: string) => void;
  onOrderQuery: (value: string) => void;
}

const Sorts: React.FC<ISortsProps> = (props) => {
  const [sortBy, setSortBy] = useState(props.initialSortBy);
  const [orderBy, setOrderBy] = useState(props.initialOrderBy);

  const sortHandler = (value: string) => {
    props.onSortQuery(value);
    setSortBy(value);
  };

  const orderHandler = (value: string) => {
    props.onOrderQuery(value);
    setOrderBy(value);
  };

  return (
    <div>
      <div className={classes.Button}>
        <Sort
          title={
            "Sort by" +
            (sortBy === "title"
              ? " title"
              : sortBy === "createdAt"
              ? " date"
              : "")
          }
        >
          <button
            className="dropdown-item"
            onClick={() => sortHandler("title")}
          >
            Title
          </button>
          <button
            className="dropdown-item"
            onClick={() => sortHandler("createdAt")}
          >
            Date
          </button>
        </Sort>
      </div>
      <div className={classes.Button}>
        <Sort
          title={
            "Order by " +
            (orderBy === "asc"
              ? "ascending"
              : orderBy === "desc"
              ? "descending"
              : "")
          }
        >
          <button className="dropdown-item" onClick={() => orderHandler("asc")}>
            Ascending
          </button>
          <button
            className="dropdown-item"
            onClick={() => orderHandler("desc")}
          >
            Descending
          </button>
        </Sort>
      </div>
    </div>
  );
};

export default Sorts;
