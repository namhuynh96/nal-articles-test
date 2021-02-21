interface IPaginationProps {
  currentPage: number;
  isLastPage: boolean;
  onQuery: (value: number) => void;
}

const Pagination: React.FC<IPaginationProps> = (props) => {
  const pageNumbers =
    props.currentPage === 1
      ? [1, 2, 3]
      : [props.currentPage - 1, props.currentPage, props.currentPage + 1];

  const paginateHandler = (page: number) => {
    props.onQuery(page);
  };

  return (
    <nav>
      <ul className="pagination">
        <li className={"page-item" + (props.currentPage === 1 && " disabled")}>
          <button
            className="page-link"
            onClick={() => paginateHandler(props.currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => {
          if (props.isLastPage && number > props.currentPage) {
            return <li key={number}></li>;
          }
          let styles =
            props.currentPage === number ? "page-item active" : "page-item";
          return (
            <li key={number} className={styles}>
              <button
                onClick={() => paginateHandler(number)}
                className="page-link"
              >
                {number}
              </button>
            </li>
          );
        })}
        <li className={"page-item" + (props.isLastPage && " disabled")}>
          <button
            className="page-link"
            onClick={() => paginateHandler(props.currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
