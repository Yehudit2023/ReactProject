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
      <div>
        <h1 variant="h6">Interior - Design</h1>
        <h4  style={{ marginBottom: "8px" }}>בעלים: {bd.owner}</h4>
        <h4  style={{ marginBottom: "8px" }}>כתובת: {bd.address}</h4>
        <h4  style={{ marginBottom: "8px" }}>טלפון: {bd.phone}</h4>
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
