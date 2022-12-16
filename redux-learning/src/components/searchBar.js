import React from 'react';
import { clearResults, updateInput, getResults} from '../features/search/searchSlice'
import { useDispatch } from 'react-redux';

export default function SearchBar({children}){
    const dispatch = useDispatch();
    function handleChange(e){
        let {value} = e.target;
        dispatch(updateInput(value));

        if (value.length > 0){
            dispatch(getResults(value));
        }
        else
            dispatch(clearResults());
    }

    return(
        <div className="search-bar">
            <input onChange={handleChange} />
            {children}
        </div>
    )
}