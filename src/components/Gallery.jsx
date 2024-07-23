import React, { useState } from 'react';
// MUI components
import { Typography, Box, Stack } from "@mui/material";
// Carousel styles
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// Components
import Title from './Title';
import Paragraph from './Paragraph';

// Import images from assets
import Grppic from '../assets/Grppic.jpeg';
import Gg from "../assets/Gg.jpeg";
import Adi from '../assets/Adi.jpeg';
import Karthik from '../assets/Karthik.jpeg';
import Ragh_sir from '../assets/Ragh_sir.jpeg';



const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Initialize currentIndex

    const imageData = [
        { alt: 'Ragh_sir', url: Ragh_sir },
        { alt: 'Grppic', url: Grppic },
        { alt: 'Gg', url: Gg },
        { alt: 'Adi', url: Adi },
        { alt: 'Karthik', url: Karthik },
    ];

    const renderSlides = imageData.map((image, index) => (
        <div key={index} style={{ position: 'relative', maxWidth: '100%', height: 'auto' }}>
            <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 1, color: '#fff', background: 'rgba(0, 0, 0, 0.5)', padding: '4px 8px', borderRadius: '4px' }}>
                Image {index + 1}
            </div>
            <img
                src={image.url}
                alt={image.alt}
                style={{
                    maxWidth: '300px',
                    height: 'auto',
                    maxHeight: '400px', // Adjust the maximum height as per your requirement
                    zIndex: 0,
                }}
            />
        </div>
    ));

    const handleChange = (index) => {
        setCurrentIndex(index);
    };

    return (
        <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{
                py: 8,
                px: 2,
                display: { xs: 'flex' },
            }}
        >
            <Box
                component='section'
                sx={{
                    paddingBottom: 3,
                }}
            >
                <Title
                    text={'Meet our Team and Mentor'}
                    textAlign={'center'}
                />
                <Typography
                    variant='h5'
                    component='h4'
                    align='center'
                    sx={{
                        paddingTop: 1,
                    }}
                >
                    Team Member Pictures
                </Typography>
                <Paragraph
                    text={'TeamPegasus has gained significant exposure through prestigious platforms like the Smart India Hackathon, where we emerged as winners, and participation in Manthan round 2. With a proven track record, we bring expertise and innovation to every project, delivering impactful solutions tailored to complex technological challenges.'}
                    maxWidth={'sm'}
                    mx={'auto'}
                    textAlign={'center'}
                />
            </Box>

            <Box sx={{
                maxWidth: 700,
                width: '100%',
            }}>
                <Carousel
                    centerSlidePercentage={40}
                    thumbWidth={180}
                    dynamicHeight={false}
                    centerMode={false}
                    showArrows={false}
                    autoPlay={false}
                    infiniteLoop={true}
                    selectedItem={imageData[currentIndex]}
                    onChange={handleChange}
                    className="carousel-container"
                >
                    {renderSlides}
                </Carousel>
            </Box>
        </Stack>
    );
};

export default Gallery;
