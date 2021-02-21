interface ISortProps {
  title: string;
}

const Sort: React.FC<ISortProps> = (props) => {
  return (
    <div className={"dropdown"}>
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {props.title}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {props.children}
      </div>
    </div>
  );
};

export default Sort;
