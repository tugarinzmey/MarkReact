import React, { useState } from "react";

export default function SearchWrap({children, url}){
    return(
        <div className="search-wrap">
            {children}
        </div>
    )
}
