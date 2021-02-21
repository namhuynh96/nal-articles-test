import { FormEvent, useState } from "react";

interface ISearchProps {
  initialValue: string | null;
  onQuery: (value: string) => void;
}

const Search: React.FC<ISearchProps> = (props) => {
  const [searchValue, setSearchValue] = useState(props.initialValue || "");

  const searchHanlder = (e: FormEvent) => {
    e.preventDefault();
    props.onQuery(`${searchValue.trim()}`);
  };

  return (
    <form onSubmit={searchHanlder}>
      <input
        type="text"
        placeholder="Search by title, content, date"
        className="form-control"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value={searchValue}
      />
    </form>
  );
};

export default Search;
