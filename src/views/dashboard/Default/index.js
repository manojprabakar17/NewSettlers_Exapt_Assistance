import { useEffect, useState } from 'react';
import { gridSpacing } from 'store/constant';
import { Grid } from '@mui/material';
// import MainCard from 'ui-component/cards/MainCard';
import SearchAddressField from './HomePageSearchOption';
import PropertyListingSection from './PropertyListingSection';
// import logo from 'assets/images/property/homeLandingPage.jpg';

const Dashboard = () => {

  const [address, setAddress] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  
  const handleAddressChange = (enteredAddress) => {
    setAddress(enteredAddress);
  };

  return (
    <>
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <SearchAddressField isLoading={isLoading} onAddressChange={handleAddressChange} />
      </Grid>
    </Grid>
    <br/>
    {address ? (
        <div style={{ marginBottom: '16px' }}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <PropertyListingSection data={{address}} />
            </Grid>
          </Grid>
        </div>
      ) : (
        <div>
          {/* <MainCard elevation={1}>
            <Grid item xs={12} md={8} container spacing={2} justify="center" alignItems="center">
                <Grid item>
                  <img src={logo} alt="Search Not Found" style={{ maxWidth: '100%' }} />
                </Grid>
                <Grid item xs={12} md={8} container spacing={2} justify="center" alignItems="center">
                  <Typography variant="body2">No results found</Typography>
                </Grid>
              </Grid>
          </MainCard> */}
        </div>
      )}
    </>
  );
};

export default Dashboard;