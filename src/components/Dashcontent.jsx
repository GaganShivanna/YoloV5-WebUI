import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SpurImage from '../assets/spur.jpeg';
import short from '../assets/short.jpeg';
import opencircuit from '../assets/opencircuit.jpeg';
import MouseBiteImage from '../assets/mouse_bite.jpeg';
import MissingHoleImage from '../assets/Missing_hole.jpeg';
import SpuriousCopperImage from '../assets/spurious.jpeg';
import { Button } from '@mui/material';


function DashContent() {
  return (
    <Box sx={{ width: '100%', maxWidth: 1800, mx: 'auto', textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        PCB Defect Detection Dashboard
      </Typography>
      <Typography variant="h4" gutterBottom>
        Overview
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Welcome to the PCB Defect Detection Dashboard! This platform leverages advanced deep learning techniques to provide accurate and real-time identification of various defects in Printed Circuit Boards (PCBs). Enhance your quality control processes with our intuitive interface and comprehensive reporting tools.
      </Typography>
      <br />
      <br />
      <Typography variant="h4" gutterBottom>
        Types of Defects
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Our system detects a wide range of PCB defects to ensure thorough quality assessment:
      </Typography>
      <br />

      <div>
        <Typography variant="h4" gutterBottom>
          Spur
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <img src={SpurImage} alt="Spur defect" style={{ maxWidth: '100%', height: 'auto' }} />
        </Box>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        <br/>
          <li><b>Description:</b> Unwanted copper traces extending from the main circuit path.</li>
          <li><b>Impact: </b>Can cause short circuits or signal integrity issues.</li>
          <li><b>Detection:</b> Highlighted in Blue on the PCB image.</li>
        </ul>
        
        <br />
      </div>
      <hr />

      <div>
        <Typography variant="h4" gutterBottom>
          Open Circuit
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <img src={opencircuit} alt="Open Circuit defect" style={{ maxWidth: '100%', height: 'auto' }} />
        </Box>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        <br/>
          <li><b>Description:</b> Breaks in the electrical path that interrupt the circuit.</li>
          <li><b>Impact:</b> Leads to malfunctioning circuits or complete failure.</li>
          <li><b>Detection:</b> Highlighted in white on the PCB image.</li>
        </ul>
        
        <br />
      </div>
      <hr />

      <div>
        <Typography variant="h4" gutterBottom>
          Short Circuit
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <img src={short} alt="Short Circuit defect" style={{ maxWidth: '100%', height: 'auto' }} />
        </Box>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        <br/>
          <li><b>Description:</b> Accidental connection between two conductive paths.</li>
          <li><b>Impact:</b> Can cause excessive current flow, overheating, and damage.</li>
          <li><b>Detection:</b> Highlighted in yellow on the PCB image.</li>
        </ul>
        
        <br />
      </div>
      <hr />

      <div>
        <Typography variant="h4" gutterBottom>
          Mouse Bite
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <img src={MouseBiteImage} alt="Mouse Bite defect" style={{ maxWidth: '100%', height: 'auto' }} />
        </Box>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        <br/>
          <li><b>Description:</b> Small semi-circular notches on the edge of the PCB.</li>
          <li><b>Impact:</b> Weakens the PCB structure and can cause breakage.</li>
          <li><b>Detection:</b> Highlighted in turquoise on the PCB image.</li>
        </ul>
        
        <br />
      </div>
      <hr />

      <div>
        <Typography variant="h4" gutterBottom>
          Missing Hole
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <img src={MissingHoleImage} alt="Missing Hole defect" style={{ maxWidth: '100%', height: 'auto' }} />
        </Box>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        <br/>
          <li><b>Description:</b> Absence of required drilled holes for component placement.</li>
          <li><b>Impact:</b> Prevents proper component mounting and connectivity.</li>
          <li><b>Detection:</b> Highlighted in turquoise on the PCB image.</li>
        </ul>
        
        <br />
      </div>
      <hr />

      <div>
        <Typography variant="h4" gutterBottom>
          Spurious Copper
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <img src={SpuriousCopperImage} alt="Spurious Copper defect" style={{ maxWidth: '100%', height: 'auto' }} />
        </Box>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
        <br/>
          <li><b>Description:</b> Unintended copper remnants on the PCB surface.</li>
          <li><b>Impact:</b> Can cause short circuits or interfere with signal paths.</li>
          <li><b>Detection:</b> Highlighted in Dark Blue on the PCB image.</li>
        </ul>
        
        <br />
      </div>
      <hr/>
      <div>
        <br/>
        <br/>
        <Typography variant="h3">
          DETECT DEFECTS ON PRINTED CIRCUIT BOARDS
        </Typography>
        <br/>
        <br/>
        <Typography variant="h5">
           Click on the Below Button
        </Typography>
        <Typography variant="h5">
          Which will redirect you to our exclusive interface which is made using YOLOV5 Model
        </Typography>
        <br/>
        <br/>

        <Button 
          variant="contained" 
          href="http://localhost:7860" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          REDIRECT TO THE GRADIO INTERFACE
        </Button>
      </div>
      <br/>
      <br/>

    </Box>
  );
}

export default DashContent;