"use client"
import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  AppBar,
  Toolbar,
  Button,
  Typography,
  useTheme,
  ListItemButton,
  Container,
  PaletteMode,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';
import SectionContainer from "@/components/SectionContainer";

interface MenuItem {
  label: string;
  path: string;
  subItems?: MenuItem[];
}

interface IProps {
  routes: MenuItem[];
  mode?: PaletteMode;
}


const Navbar = ({ routes , mode = 'light' }: IProps) => {
  const theme = useTheme();
  const fullMenuView = useMediaQuery(theme.breakpoints.up('sm'));

  const [open, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = React.useState<number | null>(null);

  const handleClick = () => {
    setOpen(!open);
  };


  const handleSubItemClick = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };


  const renderMenuItems = (items: MenuItem[]) => {
    return items?.map((item, index) => {
      if (item.subItems && item.subItems.length > 0) {
        return (
          <div key={index}>
            <ListItemButton onClick={() => handleSubItemClick(index)}>
              <ListItemText primary={item.label} />
              {openSubMenu === index ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openSubMenu === index} timeout="auto" unmountOnExit>
              {renderMenuItems(item.subItems)}
            </Collapse>
          </div>
        );
      } else {
        return (
          <ListItemButton key={index} component={NextLink} href={item.path} className="grow-0" passHref>
            <ListItemText primary={item.label} />
          </ListItemButton>
        );
      }
    });
  };



  return (
    <SectionContainer mode="light">
      <AppBar position="static">
        <Toolbar variant="dense">
          {!fullMenuView && (
            <>
              <List>
                <ListItem>
                  <Button
                    onClick={
                      handleClick
                    }
                  >
                    <MenuIcon color="secondary" />
                    {open ? (
                      <ExpandLess color="secondary" />
                    ) : (
                      <ExpandMore color="secondary" />
                    )}
                  </Button>
                  <Typography
                    variant="h6"
                    color="inherit"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    paraplanner mobile
                  </Typography>
                </ListItem>
                <Collapse
                  in={open}
                  timeout="auto"
                  unmountOnExit
                >
                  <List
                    component="div"
                    disablePadding
                  >
                    {renderMenuItems(routes)}
                  </List>
                </Collapse>
              </List>
            </>
          )}

          {fullMenuView && (
            <>
              <Typography
                variant="h6"
                color="inherit"
              >
                paraplanner.ai
              </Typography>
              <Container
                // sx={{ display: { xs: 'none', md: 'block' } }}
                component="div"
              >
                <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  className="flex flex-row"
                >
                  {renderMenuItems(routes)}
                </List>
              </Container>
            </>
          )}
        </Toolbar>
      </AppBar>
    </SectionContainer>
  );
}

export default Navbar;