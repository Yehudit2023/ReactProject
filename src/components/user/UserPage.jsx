
import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Grid } from "@mui/material";
import BusinessData from "../businessData/BusinessData";
import MeetingList from "../meeting/MeetingList";
import ServicesList from "../service/ServicesList";

function UserPage() {
  return (
    <Container maxWidth="lg" dir="rtl">
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item xs={12} md={6} style={{ position: "fixed", left: 50, top: 20, borderColor: "black" }}>
          <Button>
            <Link to="/admin">Sign in Admin</Link>
          </Button>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <BusinessData />
        </Grid>
        <Grid item xs={12} md={6}>
          <ServicesList />
        </Grid>
        <Grid item xs={12} md={6} style={{ position: "fixed", left: 50, bottom: 20 }}>
          <MeetingList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default UserPage;

