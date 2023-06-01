import ShopData from "./ShopData";
import { useState } from "react";

const ShopSection = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="search">Search: </label>
        <input type="text" id="search" onChange={handleSearch} />
      </div>
      <ShopData searchKeyword={searchKeyword} />
    </>
  );
};

export default ShopSection;
