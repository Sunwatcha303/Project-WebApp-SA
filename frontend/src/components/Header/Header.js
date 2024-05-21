import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import Search from '../Content/Search/Search';

import './Header.css';

const Header = ({ setIsSearchHome }) => {
    const navigate = useNavigate();
    const [isSearchHeader, setIsSearchHeader] = useState(false);

    const handleNavbar = (event, router) => {
        event.preventDefault();
        navigate(router);
    }

    return (
        
        <div id="header-container">
            <Search setIsSearchHome={setIsSearchHome} setIsSearchHeader={setIsSearchHeader} />
            {!isSearchHeader &&(
                <>
                    <div className="nav-bar" id='setting-icon' onClick={(e) => handleNavbar(e, '/setting')}></div>
                    <div className="nav-bar" id='studio-icon' onClick={(e) => handleNavbar(e, '/studio')}></div>
                </>
            )}
        </div>
    );
}

export default Header;