"use client"
import React, { Fragment, ReactNode, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  AppBar,
  Toolbar,
  Button,
  ListItemButton,
  Container,
  PaletteMode,
  Typography,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';
import SectionContainer from "@/components/SectionContainer";
import InfoBanner from "@/components/InfoBanner";
import { animated, useSpring } from "@react-spring/web";
import t from '@/dictionaries/en.json';
import { APP_SIGN_IN_URL } from "@/utils/constants";
import { usePathname } from 'next/navigation'
import useWindowPosition from "@/hooks/useWindowPosition";
import { useTheme } from "@emotion/react";
import { alpha } from '@mui/system';


interface MenuItem {
  label: string;
  path: string;
  subItems?: MenuItem[];
}

interface IProps {
  routes: MenuItem[];
  mode?: PaletteMode;
}

const Navbar = ({ routes, mode = 'light' }: IProps) => {
  const pathname = usePathname();
  const theme = useTheme();

  const windowPosition = useWindowPosition();
  const { padding } = useSpring({
    padding: windowPosition > 0 ? 8 : 16,
  });

  const logo = (
    <NextLink href="/" style={{
      textDecoration: 'none'
    }}>
      <Typography variant="h5" sx={{ color: theme => theme.palette.text.primary }}>{t.app.name}</Typography>
    </NextLink>
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = React.useState<number | null>(null);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSubItemClick = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const renderMenuItems = (keyPrefix: string, items: MenuItem[], isSubmenu?: boolean) => {
    const renderedItems = items?.map((item, index) => {
      const hasSubItems: boolean = !!item.subItems && item?.subItems?.length > 0;
      const isActive = hasSubItems ? pathname?.includes(item.path) : pathname === item.path;

      const sx = isActive ? { backgroundColor: "primary.main" } : {};

      if (item.subItems && item?.subItems?.length > 0) {
        return (
          <div key={`${item?.path}-${item?.label}`} style={{ position: 'relative' }}>
            <ListItemButton onClick={() => handleSubItemClick(index)} sx={sx}>
              <ListItemText primary={item?.label} />
              {openSubMenu === index ? <ExpandLess sx={{ color: "primary.main" }} /> : <ExpandMore sx={{ color: "primary.main" }} />}
            </ListItemButton>
            <Collapse
              in={openSubMenu === index}
              timeout="auto"
              unmountOnExit
              sx={{
                position: 'absolute',
                background: "secondary.main",
                zIndex: 2,
                width: '100%'
              }}
            >
              {renderMenuItems(keyPrefix, item.subItems, true)}
            </Collapse>
          </div>
        );
      } else {
        return (
          <ListItemButton key={`${item?.path}-${item?.label}`} component={NextLink} href={item.path} sx={{ flexGrow: 0, ...sx }
          } passHref >
            <ListItemText primary={item?.label} />
          </ListItemButton >
        );
      }
    });

    return isSubmenu ? renderedItems : [...renderedItems, (
      <Fragment key={`buttons`}>
        {/* <Button variant="text" href={APP_SIGN_IN_URL} target="_blank"
          sx={{ display: { xs: "none", md: "flex" }, marginLeft: 2 }}
        >
          {t.common.signIn}
        </Button> */}
        <ListItemButton component={NextLink} href={APP_SIGN_IN_URL} target="_blank"
          sx={{ display: { xs: "block", md: "none" }, flexGrow: 0 }}
          passHref
        >
          <ListItemText primary={t.common.signIn as ReactNode} />
        </ListItemButton>
      </Fragment>
    )];
  };


  return (
    <AppBar position="sticky" sx={{
      backgroundColor: theme => alpha(theme.palette.background.default, 0.9)
    }}>
      <InfoBanner>
        <Typography variant="body1">
          {t.homePage.banner}
        </Typography>
      </InfoBanner>

      <SectionContainer
        withoutAnimation
        disablePaddingY
      >
        <animated.div style={{ paddingBlock: padding }}>
          <Toolbar variant="dense" sx={{ padding: { xs: 0 } }}>
            <Container sx={{ display: { xs: "block", md: "none" }, padding: { xs: 0 } }}>
              <List>
                <ListItem sx={{ padding: 0 }}>
                  <Button
                    onClick={handleToggleMobileMenu}
                    sx={{ marginRight: 1 }}
                  >
                    <MenuIcon />
                    {mobileMenuOpen ? <ExpandLess /> : <ExpandMore />}
                  </Button>
                  {logo}
                </ListItem>
                <Collapse
                  in={mobileMenuOpen}
                  timeout="auto"
                  unmountOnExit
                >
                  <List
                    component="div"
                    disablePadding
                  >
                    {renderMenuItems('smallMenu', routes)}
                  </List>
                </Collapse>
              </List>
            </Container>

            <Container sx={{
              display: { xs: "none", md: "flex" },
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: { xs: 0 }
            }}>
              {logo}

              <animated.div >
                <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  sx={{ display: 'flex', gap: 1 }}
                >
                  {renderMenuItems('largeMenu', routes)}
                </List>
              </animated.div>

              <Button variant="text" href={APP_SIGN_IN_URL} target="_blank"
                sx={{ paddingX: 2, paddingY: 1, minWidth: "auto", borderRadius: 0 }}
              >
                {t.common.signIn}
              </Button>
            </Container>
          </Toolbar>
        </animated.div>
      </SectionContainer>
    </AppBar>
  );
}

export default Navbar;