import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome to Dashboard</h1>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  )
}

export default Dashboard