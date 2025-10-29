import { useNavigate } from "react-router-dom";

const useNavBar = () => {
  const navigate = useNavigate();

  const navToLibrary = () => {
    navigate("/library");
  };

  const navToHome = () => {
    navigate("/");
  };

  const navToGameDetails = (id: number) => {
    navigate(`/game/${id}`);
  };

  return {
    navToLibrary,
    navToHome,
    navToGameDetails,
  };
};
export default useNavBar;
