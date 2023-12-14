import { Outlet } from 'react-router-dom'

import { Main as Layout } from '../components/layout'
import { pages } from './pages';

export const routes = [
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: pages.map(
      ({ path, element }) => ({
        path: path,
        element: element
      })
    )
  }
];