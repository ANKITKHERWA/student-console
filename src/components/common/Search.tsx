import React from "react";
import { Input } from "../ui/input";
import { SearchIcon } from "../helper/Icon2";

function Search() {
  return (
    <>
      <div className="flex items-center gap-1 w-full xl:min-w-[290px] py-1.5 px-3 !border-[#D9DDE3] border rounded md:rounded-[6px]">
        <Input
          placeholder="Search..."
          className="!ring-0 w-full !shadow-none !border-none !rounded-[0px] !h-[20px] !p-0"
        />
        <SearchIcon />
      </div>
    </>
  );
}

export default Search;
