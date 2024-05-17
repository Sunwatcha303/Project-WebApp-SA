import './Header.css'

const Header = () => {
    return (
        <div id="header-container">
            <div className="nav-bar" id='search-padding'>Search</div>
            <div className="nav-bar">Setting</div>
            <div className="nav-bar">Studio</div>
        </div>
    );
}

export default Header;