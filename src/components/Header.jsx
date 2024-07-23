import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, ThemeProvider, createTheme, styled } from "@mui/material";
import { Link } from 'react-router-dom';
import PCB2 from '../assets/PCB2.jpg';
import LoginButton from './LoginButton';
import PCB3 from '../assets/PCB3.jpg';
import PCB4 from '../assets/PCB4.png';
import PCB5 from '../assets/pcb5.jpg';

// Create a custom theme
const theme = createTheme();

const Header = () => {
    const [bgImages, setBgImages] = useState([PCB2, PCB3, PCB4, PCB5]);
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    // Function to rotate background images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
        }, 5000); // Rotate every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [bgImages]);

    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        backgroundImage: `url(${bgImages[currentBgIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'orange',  // Fallback background color
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box)(({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
        paddingTop: theme.spacing(10),  // Adjust padding for vertical alignment
        paddingBottom: theme.spacing(10),  // Adjust padding for vertical alignment
        backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Semi-transparent background for readability
        color: '#fff',
        borderRadius: theme.spacing(1),
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            flex: '2',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        },
    }));

    return (
        <ThemeProvider theme={theme}>
            <CustomBox component='header'>
                <BoxText component='section'>
                    <Typography
                        variant='h2'
                        component='h1'
                        sx={{
                            fontWeight: 700,
                            marginBottom: theme.spacing(2),
                        }}
                    >
                        "Defect-Free PCBs with TeamPegasus!"
                    </Typography>

                    <Typography
                        variant='body1'
                        component='p'
                        sx={{
                            py: 3,
                            lineHeight: 1.6,
                        }}
                    >
                        We thrive on dynamic solutions that make a significant impact, solving complex problems with precision.
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: theme.spacing(2) }}>
                        
                        <Button 
                            component={Link} 
                            to={'/about'}
                            variant='outlined'
                            sx={{
                                px: 4, 
                                py: 1,
                                fontSize: '0.9rem',
                                textTransform: 'capitalize',
                                borderRadius: 0,
                                color: '#fff',
                                backgroundColor: 'transparent',
                                borderColor: '#fff',
                                "&:hover": {
                                    color: '#343a55',
                                    borderColor: '#343a55',
                                },
                                "&:focus": {
                                    color: '#343a55',
                                    borderColor: '#343a55',
                                }
                            }}
                        >
                            Explore
                        </Button>
                    </Box>
                </BoxText>
            </CustomBox>
        </ThemeProvider>
    )
}

export default Header;
