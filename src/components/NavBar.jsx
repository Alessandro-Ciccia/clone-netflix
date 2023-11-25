import { Link, Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const NavBar = () => {
  const { user, logOut } = UserAuth();

  const Esci = async () => {
    try {
      await logOut();
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>
          <button
            onClick={Esci}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Esci
          </button>
        </div>
      ) : (
        <div>
          <Link to="/accedi">
            <button className="text-white pr-4">Accedi</button>
          </Link>
          <Link to="/registrati">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Registrati
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
