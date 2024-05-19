import { useNavigate } from 'react-router-dom';

import './Header.css'

const Header = () => {
    const navigate = useNavigate();

    const handleNavbar = (event, router) =>{
        event.preventDefault();

        navigate(router);
    }
    return (
        <div id="header-container">
            <div className="nav-bar" id='search-icon'></div>
            <div className="nav-bar" id='setting-icon' onClick={e => handleNavbar(e, '/setting')}></div>
            <div className="nav-bar" id='studio-icon' onClick={e => handleNavbar(e, '/studio')}></div>
        </div>
    );
}

export default Header;