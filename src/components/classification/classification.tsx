import Table from "components/table/table";
import { ChevronDownIcon } from "@heroicons/react/outline";
import React from "react";

const Classification = () => {
  return (
    <>
      <div className="w-body flex flex-col mx-auto text-white text-sm p-5">
        <p>Temporada</p>
        <div className="flex text-cyan-800 font-semibold">
          2022 <ChevronDownIcon className="w-4 h-4"></ChevronDownIcon>
        </div>
      </div>
        <div className="w-body mx-auto bg-table m-1 pt-3 pl-3 pb-2 text-white text-sm">
          <Table></Table>
        </div>
    </>
  );
};

export default Classification;
