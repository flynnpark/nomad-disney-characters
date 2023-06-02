import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Character from './pages/Character';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'characters/:id',
        element: <Character />,
      },
    ],
  },
]);

export default router;
