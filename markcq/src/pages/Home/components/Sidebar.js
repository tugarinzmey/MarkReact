import './Sidebar.css';
import Contacts from './Contacts';
import Searchbar from './Searchbar';
import othersvg from "../../../assets/icons/others.svg";
import writesvg from "../../../assets/icons/write.svg";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <div className='sidebar-top-wrapper'>
                    <img src={othersvg} className="others top-button" alt=""></img>
                    <span className="sidebar-top__title"> Чаты </span>
                    <img src={writesvg} className="write top-button" alt=""></img>
                </div>
                <Searchbar />
            </div>
            <div className='sidebar-scrollbar'>
                <Contacts/>
            </div>
            
        </div>
    );
}

export default Sidebar;