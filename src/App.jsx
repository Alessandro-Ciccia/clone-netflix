import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Accedi";
import Signup from "./pages/Registrati";
import Account from "./pages/Account";
import Middleware from "./components/Middleware";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/accedi" element={<Login />} />
          <Route path="/registrati" element={<Signup />} />
          <Route
            path="/account"
            element={
              <Middleware>
                <Account />
              </Middleware>
            }
          />

          <Route
            path="/home"
            element={
              <Middleware>
                <Home />
              </Middleware>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
