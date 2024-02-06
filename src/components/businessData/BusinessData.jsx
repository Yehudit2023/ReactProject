
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import Edit from '@mui/icons-material/Edit';
import { Dialog, DialogTitle, DialogContent, Container, Typography, Fab } from "@mui/material";
import { getBusinessData } from "../../data/server";
import dataStore from "../../data/dataStore";
import EditBusinessData from "./EditBusinessData";
import logo2 from '../../images/logo2.png'
import './businessData.css'

const BusinessData = observer(() => {
  useEffect(() => {
    getBusinessData();
  }, []);

  const bd = dataStore.BusinessData;
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <Container className="b_data_container" style={{ display: "flex", gap: "6rem", alignItems: "center", textAlign: "right" }}>
      <div style={{ display: "flex", alignItems: "right" }}>
        <div>
          <img src={logo2} alt='logo' style={{ marginRight: "16px" }}></img>
        </div> </div>
      {/* <div>
        <Typography variant="h6">Business Data</Typography>
        <Typography variant="body1" style={{ marginBottom: "8px" }}>Business name: {bd.name}</Typography>
        <Typography variant="body1" style={{ marginBottom: "8px" }}>Owner: {bd.owner}</Typography>
        <Typography variant="body1" style={{ marginBottom: "8px" }}>Address: {bd.address}</Typography>
        <Typography variant="body1" style={{ marginBottom: "8px" }}>Phone: {bd.phone}</Typography>
      </div> */}
      <div>
        <Typography variant="h6">Interior - Design</Typography>
        <Typography variant="body1" style={{ marginBottom: "8px" }}>שם העסק: {bd.name}</Typography>
        <Typography variant="body1" style={{ marginBottom: "8px" }}>בעלים: {bd.owner}</Typography>
        <Typography variant="body1" style={{ marginBottom: "8px" }}>כתובת: {bd.address}</Typography>
        <Typography  style={{ marginBottom: "8px" }}>טלפון: {bd.phone}</Typography>
      </div>

      {dataStore.isLogin && (
        <div>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <div style={{ marginRight: "16px" }}>
              <Fab className="Fab" style={{ color: "black", background: "#C0AA81", }} aria-label="edit">
                <Edit onClick={handleOpenModal} />
              </Fab>
            </div>
          </div>
          <Dialog open={open} onClose={handleCloseModal}>
            <DialogTitle>Edit business data</DialogTitle>
            <DialogContent><EditBusinessData handleCloseModal={handleCloseModal} /></DialogContent>
          </Dialog>
        </div>
      )}
    </Container>
  )
});
export default BusinessData
