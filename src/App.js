import { useState, useEffect } from "react";
  // Add useNavigate to the import statement
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
    // Add code to mock user authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  const login = () => {
    setIsLoggedIn(true)
  }
  const logout = () => {
    setIsLoggedIn(false)
  }

    // Add programmatic navigation for login and logout
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/') // navigates to Home route if user is logged in
    } else {
      navigate('/login') // navigates to Login route if user is logged out
    }
  }, [isLoggedIn])

  return (
    <div className="app">
      {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to="/login" />} {/* Add conditional rendering so users have to be logged in to see pages on the site */}
      <Outlet context={login}/> { /* Pass login function to Outlet as context */}
    </div>
  );
}

export default App;
