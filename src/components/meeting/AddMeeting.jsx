import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { observer } from 'mobx-react';
import { useState } from 'react'
import { addMeeting } from '../../data/server';
import TextFieldCustom from '../TextFieldCustom/TextFieldCustom';
import dataStore from '../../data/dataStore';
import { getCurrentDateTime } from '../../data/allData'

const AddMeeting = (observer((props) => {
  const defMeeting = {
    id: '',
    serviceType: '',
    dateTime: '',
    clientName: '',
    clientPhone: '',
    clientEmail: '',
  }
  const [dateTimeError, setDateTimeError] = useState(false);
  const [meeting, setMeeting] = useState(defMeeting);

  const { handleCloseModal } = props;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addMeeting(meeting).then(x => {
      if (!dataStore.isAdd) {
        setDateTimeError(true);
      } else {
        setDateTimeError(false);
        setMeeting({ defMeeting })
        handleCloseModal();
      }
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeeting({ ...meeting, [name]: value, });
  };
  //מערך של שמות השירותים לאתחול האופציות של הסלקט
  const serviceOptions = dataStore.servicesArray.map((service) => service.name);
  return (<>
    <div>AddMeeting</div>
    <form onSubmit={handleFormSubmit}>
      {/* <TextFieldCustom name="id" type='number' label="meetingId" value={meeting.id} onChange={handleInputChange} /><br /> */}
      <FormControl fullWidth sx={{ mt: 1 }}><InputLabel id="serviceType-label">Service Type</InputLabel>
        <Select labelId="serviceType-label" id="serviceType" name="serviceType" value={meeting.serviceType} onChange={handleInputChange} variant="outlined">
          <MenuItem value="">Select an option</MenuItem>
          {serviceOptions?.map((option) => (<MenuItem key={option} value={option}>{option}</MenuItem>))}
        </Select>
      </FormControl> <br />
      <TextField fullWidth sx={{ mt: 1 }} type='datetime-local' name="dateTime" variant="outlined" value={meeting.dateTime} onChange={handleInputChange} margin="dense"
        error={dateTimeError} helperText={dateTimeError && 'Enter another date'} inputProps={{ min: getCurrentDateTime() }} /><br />
      <TextFieldCustom name="clientName" label="clientName" value={meeting.clientName} onChange={handleInputChange} /><br />
      <TextFieldCustom name="clientPhone" type='phone' label="clientPhone" value={meeting.clientPhone} onChange={handleInputChange} /><br />
      <TextFieldCustom name="clientEmail" type='email' label="clientEmail" value={meeting.clientEmail} onChange={handleInputChange} />
      <div>
        <Button type="submit">Add</Button>
        <Button type="button" onClick={handleCloseModal}>Cancel</Button>
      </div>
    </form> </>
  )
}))
export default AddMeeting