import { useLocation, useMatch } from "react-router-dom";
import useNavBar from "../hooks/useNavBar";

const NavBar = () => {
  const { navToLibrary, navToHome } = useNavBar();
  const location = useLocation();
  const matchGame = useMatch("/game/:id");

  if (location.pathname === "/") {
    return (
      <nav>
        <button onClick={navToLibrary}>Library</button>
      </nav>
    );
  } else if (location.pathname === "/library") {
    return (
      <nav>
        <button onClick={navToHome}>Home</button>
      </nav>
    );
  } else if (matchGame) {
    return (
      <nav>
        <button onClick={navToHome}>Home</button>
        <button onClick={navToLibrary}>Library</button>
      </nav>
    );
  }
};
export default NavBar;
