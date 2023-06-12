import React, { useState } from "react";

export default function Searchbar(props) {
  const [search, setSearch] = useState("");
  const { onSearch } = props;
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <div className="search d-flex justify-content-center gap-3 mt-5">
      <div className="p-1">
        <input placeholder="Search Pokemon..." onChange={onChangeHandler} />
      </div>
      <div>
        <button className="btn btn-warning" onClick={onButtonClickHandler}>
          Search
        </button>
      </div>
    </div>
  );
}
