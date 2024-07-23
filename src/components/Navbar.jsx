import React from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography, 
    styled,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';  // Import useAuth0 hook
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import DrawerItem from './DrawerItem';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // Align items center to vertically align content
    padding: '0 20px', // Add padding horizontally
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
    },
}));

const itemList = [
    {
        text: "Home",
        to: "/"
    },
    {
        text: "About",
        to: "/about"
    },
    {
        text: "Contact",
        to: "/contact"
    }
];

const Navbar = () => {
    const { isAuthenticated } = useAuth0(); // Correct usage of useAuth0 hook

    return (
        <AppBar 
            component="nav" 
            position="sticky"
            sx={{ 
                backgroundColor: 'orange', 
            }}
            elevation={0}
        >
            <StyledToolbar>
                <Typography
                    variant="h6"
                    component="h2"
                >
                    PEGASUS CORP
                </Typography>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <DrawerItem /> 
                </Box>
                <ListMenu>
                    {itemList.map((item) => (
                        !isAuthenticated && (
                            <ListItem key={item.text}>
                                <ListItemButton 
                                    component={Link} 
                                    to={item.to}
                                    sx={{
                                        color: '#fff',
                                        "&:hover": {
                                            backgroundColor: 'transparent',
                                            color: '#1e2a5a',
                                        }
                                    }}
                                >
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    ))}
                </ListMenu>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px' }}>
                    {isAuthenticated ? (
                        <>
                            <Box sx={{ padding: '10px' }}>
                                <Profile />
                            </Box>
                            <LogoutButton />
                        </>
                    ) : (
                        <LoginButton />
                    )}
                </Box>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
