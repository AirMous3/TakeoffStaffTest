import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../redux/store/store";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar/AppBar";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import { Button } from "@mui/material";
import { logout } from "../../redux/reducers/appReducer/actions/appActions";

export const Header = () => {
  const isLoggedIn = useSelector((state: RootStateType) => state.app.userID);
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logout());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar style={{ marginLeft: "auto" }}>
          {isLoggedIn && (
            <Button onClick={() => logOutHandler()} color="inherit">
              logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
