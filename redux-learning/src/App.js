import './App.css';
import { Counter } from './features/counter/counter';
import SearchWrap from './components/searchWrap';
import SearchBar from './components/searchBar';
import SearchDropDown from './components/searchDropDown';

function App() {
  return (
    <div className="App">
      <SearchBar>
        <SearchDropDown>
        </SearchDropDown>
      </SearchBar>

    </div>
  );
}

export default App;
