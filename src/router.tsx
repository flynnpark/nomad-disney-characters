import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Character from './pages/Character';
import { loader as characterLoader } from './pages/Character/loader';
import Home from './pages/Home';
import { loader as homeLoader } from './pages/Home/loader';
import { queryClient } from './utils/queryClient';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Home />,
          loader: homeLoader(queryClient),
        },
        {
          path: 'characters/:id',
          element: <Character />,
          loader: characterLoader(queryClient),
        },
      ],
    },
  ],
  {
    basename: '/nomad-disney-characters',
  }
);

export default router;
