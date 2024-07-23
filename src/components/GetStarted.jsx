import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import rct from '../assets/rct.png';
import materialUI from '../assets/materialUI.jpg';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'This Project is build using React JS'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    React.js is a popular JavaScript library developed by Facebook for building user interfaces, particularly single-page applications  where data changes over time.<br/> It allows developers to create reusable UI components, enhancing development efficiency and consistency. <br/>React's virtual DOM efficiently updates and renders only the necessary components, improving performance and user experience.
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={rct} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={materialUI} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Beautified Using Material UI'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Material-UI is a widely-used React component library that implements Google's Material Design guidelines, providing a consistent and modern look for web applications.<br/> It offers a comprehensive set of customizable components, enabling developers to build responsive and aesthetically pleasing user interfaces with ease. <br/>Material-UI's theming capabilities allow for easy customization to match the design requirements of any project.
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;