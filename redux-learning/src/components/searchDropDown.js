import React from "react";
import { useSelector } from "react-redux";
import { showResults } from "../features/search/searchSlice";
import DropDownItem from "./dropDownItem";

export default function SearchDropDown(){
    console.log("dropdown render");
    const { results } = useSelector((state) => state.search.results);
    console.log(results);

    return(
        <div className="dropdown-list">
            {results}
            <DropDownItem/>
        </div>
    )
}