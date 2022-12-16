import searchsvg from "../../../assets/icons/search.svg";

function Searchbar(){
    return(
        <button className="searchbar">
            <input class="search-field" type="text" placeholder="Поиск" value=""></input>
            <img src={searchsvg} className="search-icon" alt=""></img>
        </button>
    )
}

export default Searchbar;