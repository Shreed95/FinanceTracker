import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/Home";
import SignUp from "./page/SignUp";
import LogIn from "./page/LogIn";
import { useAuthContext } from "./hooks/useAuthContext";
function App() {
  const { user } = useAuthContext();
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={!user ? <SignUp /> : <Navigate to="/home" />}
        />
        <Route
          exact
          path="/login"
          element={!user ? <LogIn /> : <Navigate to="/home" />}
        />
        <Route
          exact
          path="/home"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
