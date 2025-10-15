import { createBrowserRouter, Navigate } from 'react-router-dom';
import Signin from '../components/SignIn';
import Dashboard from '../components/Dashboard';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  return token ? children : <Navigate to="/" />
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Signin />
    },
    {
        path: '/dashboard',
        element: (
        <PrivateRoute>
            <Dashboard />
        </PrivateRoute>
        )
    }
]);

export default router;