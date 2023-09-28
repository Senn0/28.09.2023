import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import Users from './users';
import User from './User';


export default function Routers() {
  const routers = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/users',
      element:<>
        <p>Пользователи:</p>
        <Outlet/>
    </>,
      children:[
        {
            path:"",
            element:<Users />
        },
        {
            path:":id",
            element:<User/>
        },
      ]
    },
    {
      path: '/todolist',
      element: <>todolist</>,
    },
    {
      path: '/group',
      element: <>group</>,
    },
    {
      path: '/*',
      element: <NotFound />,
    },
  ]);
  return routers;
}
