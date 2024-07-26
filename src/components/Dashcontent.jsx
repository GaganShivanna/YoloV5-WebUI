import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SpurImage from '../assets/spur.jpeg';
import ShortImage from '../assets/short.jpeg';
import OpenCircuitImage from '../assets/opencircuit.jpeg';
import MouseBiteImage from '../assets/mouse_bite.jpeg';
import MissingHoleImage from '../assets/Missing_hole.jpeg';
import SpuriousCopperImage from '../assets/spurious.jpeg';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './DashContent.css';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '800px',
  backgroundColor: '#fff',
  border: '2px solid #000',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  position: 'relative',
};

function DashContent() {
  const [open, setOpen] = React.useState(false);
  const [currentDefect, setCurrentDefect] = React.useState(null);
  const { toggleTheme } = useContext(ThemeContext);
  const theme = useTheme();

  const handleOpen = (defect) => {
    setCurrentDefect(defect);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentDefect(null);
  };

  const defects = [
    {
      title: 'Spur',
      image: SpurImage,
      description: 'Unwanted copper traces extending from the main circuit path.',
      impact: 'Can cause short circuits or signal integrity issues.',
      detection: 'Highlighted in Blue on the PCB image.',
      details: 'Spurs are often caused by errors in the etching process during PCB manufacturing. They can create unintended connections that interfere with the circuit\'s normal operation, making their detection and removal crucial for ensuring PCB reliability.'
    },
    {
      title: 'Open Circuit',
      image: OpenCircuitImage,
      description: 'Breaks in the electrical path that interrupt the circuit.',
      impact: 'Leads to malfunctioning circuits or complete failure.',
      detection: 'Highlighted in white on the PCB image.',
      details: 'Open circuits are usually the result of incomplete etching or physical damage to the PCB. Detecting these interruptions ensures all electrical paths are intact and functioning correctly.'
    },
    {
      title: 'Short Circuit',
      image: ShortImage,
      description: 'Accidental connection between two conductive paths.',
      impact: 'Can cause excessive current flow, overheating, and damage.',
      detection: 'Highlighted in yellow on the PCB image.',
      details: 'Short circuits often result from manufacturing errors such as solder bridging or conductive debris. Identifying these defects prevents further damage and ensures device safety.'
    },
    {
      title: 'Mouse Bite',
      image: MouseBiteImage,
      description: 'Small semi-circular notches on the edge of the PCB.',
      impact: 'Weakens the PCB structure and can cause breakage.',
      detection: 'Highlighted in turquoise on the PCB image.',
      details: 'Mouse bites typically occur during the depaneling process when PCBs are separated from the larger panel. Detecting these defects helps maintain the structural integrity of the PCB.'
    },
    {
      title: 'Missing Hole',
      image: MissingHoleImage,
      description: 'Absence of required drilled holes for component placement.',
      impact: 'Prevents proper component mounting and connectivity.',
      detection: 'Highlighted in turquoise on the PCB image.',
      details: 'Missing holes can result from drilling errors or blockages during the manufacturing process. Ensuring all necessary holes are present is crucial for proper component installation.'
    },
    {
      title: 'Spurious Copper',
      image: SpuriousCopperImage,
      description: 'Unintended copper remnants on the PCB surface.',
      impact: 'Can cause short circuits or interfere with signal paths.',
      detection: 'Highlighted in Dark Blue on the PCB image.',
      details: 'Spurious copper is often a result of incomplete etching or contamination during the manufacturing process. Detecting and removing these residues ensures proper PCB operation.'
    }
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: 1800, mx: 'auto', textAlign: 'center', backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}>
      <Box className="title-section" sx={{ position: 'relative' }}>
        <Typography variant="h2" gutterBottom>
          DEFECT DETECTION ON PCB
        </Typography>
        <Button onClick={toggleTheme} variant="contained" sx={{ position: 'absolute', top: 16, right: 16 }}>
          Toggle Theme
        </Button>
      </Box>

      <Box className="info-box">
        <Typography variant="h4" gutterBottom>
          Overview
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Welcome to the PCB Defect Detection Dashboard! This platform leverages advanced deep learning techniques to provide accurate and real-time identification of various defects in Printed Circuit Boards (PCBs). Enhance your quality control processes with our intuitive interface and comprehensive reporting tools. Our system helps you maintain high standards of quality control and ensures that your PCBs meet the required specifications for reliable performance.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Types of Defects
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Our system detects a wide range of PCB defects to ensure thorough quality assessment:
        </Typography>
      </Box>

      <div className="card-container">
        {defects.map((defect, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src={defect.image} alt={`${defect.title} defect`} onClick={() => handleOpen(defect)} />
              <div className="image-popup">
                <button className="close-button" onClick={handleClose}>×</button>
                <img src={defect.image} alt={`${defect.title} defect pop-up`} />
              </div>
            </div>
            <div className="card-content">
              <Typography className="card-title" variant="h5">
                {defect.title}
              </Typography>
              <ul>
                <li><b>Description:</b> {defect.description}</li>
                <li><b>Impact:</b> {defect.impact}</li>
                <li><b>Detection:</b> {defect.detection}</li>
              </ul>
              <div className="button-container">
                <Button variant="contained" className="button" onClick={() => handleOpen(defect)}>Read More</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Box variant='contained' className="redirect-info-box">
        <Typography variant="h3">DETECT DEFECTS ON PRINTED CIRCUIT BOARDS</Typography>
        <Typography variant="h5">Click on the Below Link</Typography>
        <Typography variant="subtitle1">
          Which will redirect you to our exclusive interface which is made using YOLOV5 Model
        </Typography>
        <a
          href="http://localhost:7860"
          target="_blank"
          rel="noopener noreferrer"
          className="redirect-button"
        >
          Go to Gradio Interface
        </a>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          {currentDefect && (
            <>
              <Typography id="modal-modal-title" variant="h5" component="h2">
                {currentDefect.title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {currentDefect.details}
              </Typography>
              <Button
                variant="contained"
                onClick={handleClose}
                sx={{ mt: 2 }}
              >
                Return
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

export default DashContent;
