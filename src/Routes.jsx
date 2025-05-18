import React from 'react'; 
import { createBrowserRouter } from 'react-router-dom'; 
import App from './App.jsx';
import NotFound from './NotFound.jsx';
import InventoryRegister from './Authentication/InventoryRegister.jsx';
import InventoryLogin from './Authentication/InventoryLogin.jsx';
import InventoryDashboard from './Components/InventoryDashboard.jsx';



const routes = [
  {
    path: '/',
    element: <App />,
    errorElement:<NotFound/>
  },
  {
    path:'/inventory/register',
    element:<InventoryRegister/>
  } ,
  {
    path:'/inventory/login',
    element:<InventoryLogin/>
  },
  {
    path:'/inventory/dashboard',
    element:<InventoryDashboard/>
  }

];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
  }
});

export default router;