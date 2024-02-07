import { Dialog, DialogContent, DialogTitle, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react"
import { observer } from "mobx-react";
import dataStore from "../../data/dataStore";
import { getMeetings } from "../../data/server"
import Meeting from "./Meeting";
import AddMeeting from "./AddMeeting";

const MeetingList = (observer(() => {

  const [open, setOpen] = useState(false);
  useEffect(() => {
    getMeetings()
      .then(success => {
        sortMeetingsArray()
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  useEffect(() => {
    if (dataStore.isAdd)
      sortMeetingsArray();
  }, [dataStore.isAdd])

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const sortMeetingsArray = () => {
    const sortedArray = dataStore.meetingsArray.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
    dataStore.setMeetings(sortedArray)
  }
  return (<>
    {dataStore?.isLogin ?
      <><div><h2 style={{ textAlign: "center" }}>הפגישות שלי:</h2></div>
        <div className="grid-container">
          {dataStore.meetingsArray.map((_, value) => {
            return <Meeting key={value} index={value} className="grid-item" />
          })}
        </div> </>
      :
      <>
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
          <DialogTitle>Add Meeting</DialogTitle>
          <DialogContent>
            <AddMeeting handleCloseModal={handleCloseModal} />
          </DialogContent>
        </Dialog></>}
  </>)
}))
export default MeetingList;