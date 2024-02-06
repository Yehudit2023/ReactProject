import { Dialog, DialogTitle, DialogContent, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import dataStore from "../../data/dataStore"
import { getServices } from "../../data/server"
import AddService from "./AddService";
import Service from "./Service";
import "./servicesList.css"

const ServicesList = (observer(() => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getServices();
  }, [])

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div><h2 style={{ textAlign: "center" }}>השירותים שלנו</h2></div>

      <div className="grid-container">
        {dataStore.servicesArray.map((_, index) => (
          <Service key={index} index={index} className="grid-item" />
        ))}
      </div>

      {dataStore.isLogin &&
        <div>
          <Fab color="primary" aria-label="add" onClick={handleOpenModal} style={{
            position: "fixed",
            left: 50,
            bottom: 20,
            background: "beige",
            color: "black",
            borderColor: "black",
          }}>
            <AddIcon />
          </Fab>
          <Dialog open={open} onClose={handleCloseModal}>
            <DialogTitle>Add Service</DialogTitle>
            <DialogContent>
              <AddService handleCloseModal={handleCloseModal} />
            </DialogContent>
          </Dialog>
        </div>
      };
    </>)
}));
export default ServicesList;
