import { useState } from 'react';
import Fab from '@mui/material/Fab';
import MainCard from 'ui-component/cards/MainCard';
import { Grid ,  useTheme, useMediaQuery , Tooltip , Drawer , Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


import sampleData from './sampleData';
import ActionAreaCard from './ActionAreaCard';

const PropertyListingSection = (recievedData) => {
    
  const [state, setState] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState('descending');

  let data = sampleData;
  let enteredAddress = (recievedData.data.address);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const listingCount = isMobile ? 3 : 6;
  const totalPages = Math.ceil(data.length / listingCount);
  const startIndex = (currentPage - 1) * listingCount;
  const endIndex = startIndex + listingCount;
  const displayedData = data.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  const filterClickEvent = () => {
    setState(true);
  }

  const handleChange = (event) => {
    setValue(event.target.value);
    switch (value) {
      case 'ascending':
        data = data.sort((a, b) => b.distance - a.distance);
        console.error(data);
        break;
      case 'descending':
        data = data.sort((a, b) => a.distance - b.distance);
        break;
      default:
        break;
    }
  };

  return (
    <>
    <MainCard elevation={1} >
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={11} sm={11}>
        <h4>searching address : {enteredAddress}</h4>
      </Grid>
      <Grid item xs={1} sm={1}>
      <Tooltip title="Filter">
        <FilterAltOutlinedIcon  onClick={filterClickEvent} />
      </Tooltip>
      </Grid>
    </Grid>
      <Grid container spacing={1} alignItems="center">
        {displayedData.map((card, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <div style={{ margin: '10px' }}>
              <ActionAreaCard card={card}/>
            </div>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <Fab  size="small" color="secondary" aria-label="add"  onClick={handlePreviousPage} 
                  disabled={currentPage === 1}
                  style={{ zIndex: 999 }}>
              <NavigateBeforeIcon />
          </Fab>
        </Grid>
        <Grid item xs />
        <Grid item>
          {currentPage } / {totalPages}
        </Grid>
        <Grid item xs />
        <Grid item>
        <Fab  size="small" color="secondary" aria-label="add" onClick={handleNextPage} 
                disabled={currentPage === totalPages}
                style={{ zIndex: 999 }}>
            <NavigateNextIcon />
          </Fab>
        </Grid>
      </Grid>
    </MainCard>

    { state ? (
      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 300 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{
            backgroundColor: '#ffffff',
            padding: '16px',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Sort</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="ascending" control={<Radio />} label="Distance Low to High" />
              <FormControlLabel value="descending" control={<Radio />} label="Distance High to Low" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Drawer>
    ) : 
    (<div></div>)}
    </>
  );
};

export default PropertyListingSection;
