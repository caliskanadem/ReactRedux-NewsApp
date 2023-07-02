import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/authSlice";
import megaphone from "../assets/megaphone.png";

export default function Navbar() {
  const navigate = useNavigate();
  //&user bilgisini globalState ten oku
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.auth.user);
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    //£ user global state'ini sil
    dispatch(clearUser());
    navigate("/login");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="info">
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Voice of the News
            <img src={megaphone} alt="newspaper" />
          </Typography>
          {user?.email && (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
          {!user?.email && (
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
