"use client"
import React from 'react';
// import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, Collapse, Container, ListItemButton } from '@mui/material';
import { Menu as MenuIcon, Home as HomeIcon, ExpandLess, ExpandMore } from '@mui/icons-material';

interface MenuItem {
    label: string;
    path: string;
    icon?: JSX.Element;
    subItems?: MenuItem[];
}

interface MenuProps {
    logo: string;
    routes: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ logo, routes }) => {
    // const router = useRouter();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const isActiveRoute = (path: string) => {
        // return router.pathname === path;
        return false
    };

    const renderMenuItems = (items: MenuItem[]) => {
        return items.map((item, index) => {
            if (item.subItems && item.subItems.length > 0) {
                return (
                    <div key={index}>
                        <ListItemButton onClick={() => handleSubItemClick(index)}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
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
                    <ListItemButton key={index} component={NextLink} href={item.path} passHref>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.label} />
                    </ListItemButton>
                );
            }
        });
    };

    const [openSubMenu, setOpenSubMenu] = React.useState<number | null>(null);

    const handleSubItemClick = (index: number) => {
        setOpenSubMenu(openSubMenu === index ? null : index);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerOpen}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        <NextLink href="/" passHref>
                            <img src={logo} alt="Logo" style={{ maxHeight: '50px', cursor: 'pointer' }} />
                        </NextLink>
                    </Typography>
                    <Container sx={{ display: { xs: 'none', md: 'block' } }} component="div">
                        <List component="nav" aria-labelledby="nested-list-subheader">
                            {renderMenuItems(routes)}
                        </List>
                    </Container>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="temporary"
                anchor="left"
                open={open}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <List>
                    <ListItemButton onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <MenuIcon />
                        </ListItemIcon>
                        <ListItemText primary="Menu" />
                    </ListItemButton>
                    <Divider />
                    {renderMenuItems(routes)}
                </List>
            </Drawer>
        </>
    );
};

export default Menu;
