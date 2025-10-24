import { useLocation } from "react-router-dom";
import useNavBar from "../hooks/useNavBar";

const NavBar = () => {
  const { navToLibrary, navToHome, navToGameDetails, navToStats } = useNavBar();
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <nav>
        <button onClick={navToLibrary}>Library</button>
        <button onClick={navToStats}>Stats</button>
        <button onClick={navToGameDetails}>Game Details</button>
      </nav>
    );
  } else if (location.pathname === "/library") {
    return (
      <nav>
        <button onClick={navToHome}>Home</button>
        <button onClick={navToStats}>Stats</button>
        <button onClick={navToGameDetails}>Game Details</button>
      </nav>
    );
  } else if (location.pathname === "/stats") {
    return (
      <nav>
        <button onClick={navToHome}>Home</button>
        <button onClick={navToLibrary}>Library</button>
        <button onClick={navToGameDetails}>Game Details</button>
      </nav>
    );
  } else if (location.pathname === "/game/:id") {
    return (
      <nav>
        <button onClick={navToHome}>Home</button>
        <button onClick={navToLibrary}>Library</button>
        <button onClick={navToStats}>Stats</button>
      </nav>
    );
  }
};
export default NavBar;
