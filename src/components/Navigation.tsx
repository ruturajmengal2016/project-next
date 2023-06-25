"use client";
import * as React from "react";
import { Box, IconButton } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Style from "./styles/Navigation.module.scss";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
interface INavigationProps {}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.8),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
  const router: AppRouterInstance = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      className={Style.root}
      component="div"
      sx={{
        height: "8%",
        backgroundColor: "pink",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: "80%",
          gap: "1.5rem",
          marginLeft: "1rem",
        }}
      >
        <Link className={Style.link} href="/">
          Home
        </Link>
        <Link className={Style.link} href="/about">
          About
        </Link>
        <Link className={Style.link} href="/contact">
          Contact
        </Link>
        <Link className={Style.link} href="/user">
          User
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          width: "15%",
        }}
      >
        <IconButton onClick={handleClick}>
          <MenuIcon
            sx={{
              fontSize: "2rem",
              color: "white",
            }}
          />
        </IconButton>
      </Box>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={() => {
            router.push("/");
            handleClose();
          }}
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push("/about");
            handleClose();
          }}
        >
          About
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push("/contact");
            handleClose();
          }}
        >
          Contact
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push("/user");
            handleClose();
          }}
        >
          User
        </MenuItem>
      </Menu>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: { xs: "85%", md: "20%" },
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>
    </Box>
  );
};

export default Navigation;
