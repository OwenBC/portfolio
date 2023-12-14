import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import { app_routes } from './routes';

const router = createBrowserRouter(app_routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
