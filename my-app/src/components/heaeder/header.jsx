import './header.css';
import Search from '../search/search';
import Filter from '../filter/filter';
import Mode from '../mode/mode';

const Header = () => {
    return (
        <header className='header'>
                <h1>Word Simulator</h1>
                <div class="control-panel">
                    <Search />
                    <Filter />
                </div>
                <Mode />
        </header>
    );
}

export default Header;