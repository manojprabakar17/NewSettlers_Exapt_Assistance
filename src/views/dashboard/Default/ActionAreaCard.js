import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import logo from 'assets/images/property/pexels-james-wheeler-1619311.jpg';


import PropertyModel from './PropertyModel';

const ActionAreaCard = ( prob ) => {
  
  const {card } = prob;
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = () => {
    setSelectedCard(card);
  };

  const handleModelClose = () => {
    setSelectedCard(null);
  };

  return (
    <>
    <Card onClick={handleClick}>
      <CardActionArea>
        {card ? (
          <CardMedia component="img" height="140" image={logo} />
        ) : (
          <Skeleton variant="rectangular" width="100%" height={118} />
        )}

        {card ? (
          <CardContent style={{ border: '2px solid #e1e1e1', backgroundColor: '#f5f5f5' }}>
            <Typography gutterBottom variant="h5" component="div">
              {card.Suburb}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Distance: </b>
              {card.distance}
            </Typography>
          </CardContent>
        ) : (
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        )}
      </CardActionArea>
    </Card>

    <div>
    {selectedCard ?
    (<PropertyModel data = {selectedCard} onClose={handleModelClose} />)
    :
    (<div></div>)
    }
    </div>
    </>
  );
};

  
  export default ActionAreaCard;