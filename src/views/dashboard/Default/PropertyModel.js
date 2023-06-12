import { useState, useEffect } from 'react';
import CardMedia from '@mui/material/CardMedia';
import logo from 'assets/images/property/pexels-james-wheeler-1619311.jpg';
import { Modal, Card, Typography, Fade , Button , Grid  } from '@mui/material';

const PropertyModel = ({ data , onClose}) => {

  const [open, setOpen] = useState(false);
  const [modelData, setPropertyData] = useState(' ');

  useEffect(() => {
    setOpen(true);
    setPropertyData(data);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setPropertyData(' ');
    onClose();
  };

  const modalStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const cardStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    height: '75%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const buttonStyle = {
    position: 'absolute',
    top: '8px',
    right: '8px',
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
      style={modalStyle}
    >
      <Fade in={open}>
      <Card sx={cardStyle}>
        <Grid container spacing={2}>
          <Grid item>
            <Button size="small" color="secondary" onClick={handleClose} style={buttonStyle}>
              X
            </Button>
          </Grid>
        </Grid>
        <div className="bottom-detail"  style={{ height: '100%' }}>
          <div style={{ width: '100%', height: '100%' }}>
            <Grid container spacing={1} style={{ height: '100%' }}>
              <Grid item xs={12} sm={6}>
                  <CardMedia
                    component="img"
                    image={logo}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
              </Grid>
              <Grid item xs={12} sm={6} style={{ height: '100%' }}>
                <Typography variant="h3" id="transition-modal-description" sx={{ mt: 2 }}>
                  {modelData.Suburb}
                </Typography>
                <Typography variant="body1" id="transition-modal-description" sx={{ mt: 2 }}>
                  DISTANCE : {modelData.distance}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </Card>
      </Fade>
    </Modal>
  );
};

export default PropertyModel;
