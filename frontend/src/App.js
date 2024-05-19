import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import Setting from './pages/Setting/Setting';
import Studio from './pages/Studio/Studio';
import Watch from './pages/Watch/Watch';

import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/studio" element={<Studio />} />
                <Route path="/watch" element={<Watch />} />
            </Routes>
        </Router>
    );
}

export default App;