
import React from "react";
import { Button, Container, Grid } from '@mui/material';
import { Link ,Outlet} from "react-router-dom";
import BusinessData from "../businessData/BusinessData";
import './adminHome.css'

const AdminHome = () => {
  return (
    <Container   dir="rtl">
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <BusinessData />
        </Grid>
        
        <Grid item container justifyContent="center" spacing={2}>
          <Grid item>
            <Button   className="button_admin_home" >
              <Link to="/admin/services">Services</Link>
            </Button>
          </Grid>
          <Grid item>
            <Button  className="button_admin_home">
              <Link to="/admin/meetings">Meetings</Link>
            </Button>
          </Grid>
        </Grid>
        
        <Grid item>
          <h1 >Admin Home</h1>
        </Grid>
        
        <Grid item>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminHome;
