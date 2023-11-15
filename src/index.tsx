import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import { App } from './App'
import { Main as Layout } from './components/layout'
import './index.css'

const router = createBrowserRouter([
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: '/',
        element: <App />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
