import { useNavigate } from "react-router-dom";

const useNavBar = () => {
  const navigate = useNavigate();

  const navToLibrary = () => {
    navigate("/library");
  };
  const navToHome = () => {
    navigate("/");
  };
  const navToGameDetails = () => {
    navigate("/game/:id");
  };
  const navToStats = () => {
    navigate("/stats");
  };

  return {
    navToLibrary,
    navToHome,
    navToGameDetails,
    navToStats,
  };
};
export default useNavBar;
