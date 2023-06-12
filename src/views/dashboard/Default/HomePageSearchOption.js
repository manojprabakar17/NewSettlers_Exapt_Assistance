import { useState } from 'react';
// import MainCard from 'ui-component/cards/MainCard';
import { Grid , TextField , Button , InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const HomePageSearchOption = ({ onAddressChange }) => {
  
  const [inputData, setInputData] = useState('');

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const handleClick = () => {
    onAddressChange(inputData);
  };
  return (
    <>
    {/* <MainCard  elevation={10} > */}
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/** multiline rows={1}  */}
            <TextField
              variant="outlined"
              placeholder="Enter Address to Search ... "
              label="Address" value={inputData} onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button variant="text" onClick={handleClick}>
                      <SearchIcon />
                    </Button>
                  </InputAdornment>
                ),
              }}  fullWidth style={{ marginRight: '10px' }}
            />
          </div>
        </Grid>
      </Grid>
    {/* </MainCard> */}
    </>
  );
};

export default HomePageSearchOption;