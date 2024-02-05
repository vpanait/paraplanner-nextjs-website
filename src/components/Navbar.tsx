"use client"
import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react";
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
  createTheme,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';
import SectionContainer from "@/components/SectionContainer";
import { animated, useScroll, useSpring } from "@react-spring/web";
import Image from 'next/image';
import t from '@/app/dictionaries/en.json';
import { APP_SIGN_IN_URL, APP_SIGN_UP_URL } from "@/utils/constants";
import { usePathname } from 'next/navigation'
import { getThemeOptions } from "@/theme/theme";
import useWindowPosition from "@/hooks/useWindowPosition";
import ThemeModeWrapper from "@/theme/ThemeModeWrapper";

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
  const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode]);

  const windowPosition = useWindowPosition();
  const { padding } = useSpring({
    padding: windowPosition > 0 ? 0 : 20,
  });

  const logo = (
    <Image
      src="/paraplanner.png"
      alt="paraplanner.ai"
      width={200}
      height={35}
      priority
      style={{ cursor: 'pointer' }}
    />
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = React.useState<number | null>(null);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSubItemClick = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const renderMenuItems = (items: MenuItem[], isSubmenu?: boolean) => {
    const renderedItems = items?.map((item, index) => {
      const hasSubItems: boolean = !!item.subItems && item?.subItems?.length > 0;
      const isActive = hasSubItems ? pathname?.includes(item.path) : pathname === item.path;

      const sx = isActive ? { backgroundColor: theme.palette.secondary.main } : {};

      if (item.subItems && item?.subItems?.length > 0) {
        return (
          <div key={index} style={{ position: 'relative' }}>
            <ListItemButton onClick={() => handleSubItemClick(index)} sx={sx}>
              <ListItemText primary={item.label} />
              {openSubMenu === index ? <ExpandLess sx={{ color: theme.palette.primary.main }} /> : <ExpandMore sx={{ color: theme.palette.primary.main }} />}
            </ListItemButton>
            <Collapse
              in={openSubMenu === index}
              timeout="auto"
              unmountOnExit
              sx={{
                position: 'absolute',
                background: theme.palette.secondary.main,
                zIndex: 2,
                width: '100%'
              }}
            >
              {renderMenuItems(item.subItems, true)}
            </Collapse>
          </div>
        );
      } else {
        return (
          <ListItemButton key={index} component={NextLink} href={item.path} sx={{ flexGrow: 0, ...sx }
          } passHref >
            <ListItemText primary={item.label} />
          </ListItemButton >
        );
      }
    });

    return isSubmenu ? renderedItems : [...renderedItems, (
      <>
        <ThemeModeWrapper>
          <Button variant="text" href={APP_SIGN_IN_URL} target="_blank"
            sx={{ display: { xs: "none", md: "flex" }, marginLeft: 2 }}
          >
            {t.common.signIn}
          </Button>
          <Button variant="outlined" href={APP_SIGN_UP_URL} target="_blank"
            sx={{ display: { xs: "none", md: "flex" }, borderRadius: 48, marginLeft: 2 }}
          >
            {t.common.signUp}
          </Button>
        </ThemeModeWrapper>
        <ListItemButton component={NextLink} href={APP_SIGN_IN_URL} target="_blank"
          sx={{ display: { xs: "block", md: "none" }, flexGrow: 0 }}
          passHref
        >
          <ListItemText primary={t.common.signIn as ReactNode} />
        </ListItemButton>
        <ListItemButton component={NextLink} href={APP_SIGN_UP_URL} target="_blank"
          sx={{ display: { xs: "block", md: "none" }, flexGrow: 0 }}
          passHref
        >
          <ListItemText primary={t.common.signUp as ReactNode} />
        </ListItemButton>
      </>
    )];
  };


  return (
    <AppBar position="sticky">
      <SectionContainer
        mode={mode}
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
                    sx={{ marginRight: 1, color: 'white' }}
                  >
                    <MenuIcon />
                    {mobileMenuOpen ? <ExpandLess /> : <ExpandMore />}
                  </Button>
                  <NextLink href="/">
                    {logo}
                  </NextLink>
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
                    {renderMenuItems(routes)}
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
              <NextLink href="/">
                {logo}
              </NextLink>

              <animated.div >
                <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  sx={{ display: 'flex', gap: 1 }}
                >
                  {renderMenuItems(routes)}
                </List>
              </animated.div>
            </Container>
          </Toolbar>
        </animated.div>
      </SectionContainer>
    </AppBar>
  );
}

export default Navbar;