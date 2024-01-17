import { createRoot } from 'react-dom/client';

import Home from './pages/Home/Home';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<Home />);