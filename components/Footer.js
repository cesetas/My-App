import * as React from "react";
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const Footer = () => {
  return (
    <div className="text font-style: italic  p-8 text-center bg-black text-white fixed inset-x-0 bottom-0">
      <a>
        Powered by <span className="text-xl font-bold">set@s</span>
      </a>

      <div>Copyright &#169; 2022</div>
    </div>
  );
};

export default Footer;
