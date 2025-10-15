import { RouterProvider, Navigate } from 'react-router-dom'
import router from './routes/route.jsx'
import './App.css'

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
