import { Icon, Link } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthProvider";

function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useAuthContext();

  const logout = () => {
    setAuth(undefined);
    navigate("/");
  };

  return (
    <NavLink
      to={""}
      onClick={logout}
      className={`px-4 flex flex-col items-center`}
    >
      <Icon>logout</Icon>
      <Link component="button">Logout</Link>
    </NavLink>
  );
}

export default Logout;
