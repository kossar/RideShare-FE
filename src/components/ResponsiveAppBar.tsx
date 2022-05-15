import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  makeStyles,
} from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { deepPurple, teal } from "@mui/material/colors";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const settings = ["Profile", "Account", "Dashboard", "ut"];

const ResponsiveAppBar = () => {
  const [isOpen, setState] = React.useState(false);
  const appState = useContext(AppContext);
  const avatarText = () => {
    if(appState.auth.token && appState.auth.firstname.length > 0 && appState.auth.lastname.length > 0){
      var firstLetter = appState.auth.firstname.toUpperCase()[0];
      var lastLetter = appState.auth.lastname.toUpperCase()[0];
      return `${firstLetter}${lastLetter}`;
    }
    return 'XX';
  }
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    // setAnchorElNav(event.currentTarget);
    toggleDrawer(true);
    console.log("open");
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    // setAnchorElNav(null);
    toggleDrawer(false);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();

  const handleLogOut = () => {
    appState.setState({firstname: '', lastname: '', token: null});
    navigate('/');
  }
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Tahan Küüti
            </Typography>
          </Box>

          <Drawer anchor={"left"} open={isOpen} onClose={toggleDrawer(false)}>
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                <ListItem button>
                  {/* <ListItemText primary={"RideShare"} /> */}
                  <Typography textAlign="center" variant="h6" noWrap>
                    Tahan Küüti
                  </Typography>
                </ListItem>
              </List>
              <Divider />
              <List role={"navigation"}>
                <ListItem button component={NavLink} to={"/"}>
                  <ListItemText primary="Avaleht" />
                </ListItem>
                <ListItem button component={NavLink} to={"/transportneeds"}>
                  <ListItemText primary="Soovid" />
                </ListItem>
                <ListItem button component={NavLink} to={"/transportoffers"}>
                  <ListItemText primary="Pakkumised" />
                </ListItem>
                {appState.auth.token !== null ? (
                  <ListItem button component={NavLink} to={"/plan"}>
                    <ListItemText primary="Minu plaan" />
                  </ListItem>
                ) : null}
                <ListItem button component={NavLink} to={"/"}>
                  <ListItemText primary="KKK" />
                </ListItem>
              </List>
              <Divider />
              {appState.auth.token === null ? (
                <List>
                  <ListItem button={false}>
                    <Button
                      title="Logi sisse"
                      variant="contained"
                      size="small"
                      component={NavLink}
                      to="/identity/login"
                      onClick={handleCloseNavMenu}
                      sx={{
                        bgcolor: teal[700],
                      }}
                    >
                      Logi sisse
                    </Button>
                  </ListItem>
                  <ListItem button={false}>
                    <Button
                      title="Logi sisse"
                      variant="contained"
                      size="small"
                      component={NavLink}
                      to="/identity/register"
                      onClick={handleCloseNavMenu}
                      sx={{
                        bgcolor: teal[700],
                      }}
                    >
                      Registreeru
                    </Button>
                  </ListItem>
                </List>
              ) : (
                <List>
                  <ListItem>
                    <Button
                      title="Lisa kuulutus"
                      variant="contained"
                      size="small"
                      component={NavLink}
                      to="/add"
                      onClick={handleCloseNavMenu}
                      sx={{
                        bgcolor: teal[700],
                      }}
                    >
                      Lisa kuulutus
                    </Button>
                  </ListItem>
                  <ListItem>
                  <Button
                      title="Logi välja"
                      variant="text"
                      size="small"
                      onClick={handleLogOut}
                      color="error"
                    >
                      Logi välja
                    </Button>
                  </ListItem>
                </List>
              )}
            </Box>
          </Drawer>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Tahan Küüti
          </Typography>

          <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
            <Button
              key={"Avaleht"}
              component={NavLink}
              to="/"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Avaleht
            </Button>
            <Button
              key={"Soovid"}
              component={NavLink}
              to="/transportneeds"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Soovid
            </Button>
            <Button
              key={"Pakkumised"}
              component={NavLink}
              to="/transportoffers"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Pakkumised
            </Button>
            {appState.auth.token !== null ? (
              <Button
                key={"MinuPlaan"}
                component={NavLink}
                to="/plan"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Minu plaan
              </Button>
            ) : null}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key={"KKK"}
              name={"KKK"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              KKK
            </Button>
            {appState.auth.token !== null ? (
              <Tooltip title="Ava seaded">
                <IconButton>
                  <Typography
                    variant="button"
                    display="block"
                    gutterBottom
                    sx={{ my: 2, mr: 2, color: "white", display: "block" }}
                  >
                    {appState.auth.firstname}
                  </Typography>
                  <Avatar
                    sx={{
                      my: 1,
                      bgcolor: teal[700],
                      border: "1px solid #ffffff",
                      width: 35,
                      height: 35,
                    }}
                  >
                    {avatarText()}
                  </Avatar>
                </IconButton>
              </Tooltip>
            ) : (
              <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
                <Button
                  title="Logi sisse"
                  variant="contained"
                  size="small"
                  component={NavLink}
                  to="/identity/login"
                  onClick={handleCloseNavMenu}
                  sx={{
                    bgcolor: teal[700],
                    border: 1,
                    my: 2,
                    padding: "6px 16px",
                    color: "white",
                    display: "block",
                  }}
                >
                  Logi sisse
                </Button>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  component="p"
                  color="white"
                  mx={2}
                  my={"auto"}
                >
                  või
                </Typography>
                <Button
                  title="Logi sisse"
                  variant="contained"
                  size="small"
                  component={NavLink}
                  to="/identity/register"
                  onClick={handleCloseNavMenu}
                  sx={{
                    bgcolor: teal[700],
                    border: 1,
                    my: 2,
                    padding: "6px 16px",
                    color: "white",
                    display: "block",
                  }}
                >
                  Registreeru
                </Button>
              </Box>
            )}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
