
import { CardContent, Card } from '@mui/material';
import dataStore from "../../data/dataStore";
import logo2 from '../../images/logo2.png';
import './Meeting.css'
import {getColorClass} from "../../data/allData";

function Meeting({ index }) {
 
  const thisMeeting = dataStore.meetingsArray[index];

  const colorClass = getColorClass(thisMeeting.dateTime);
  
  return (
    <>
      <Card sx={{ maxWidth: 345 }} className={colorClass}>
        <CardContent  className={colorClass}>
          <div>
            {thisMeeting && (
              <>
                <div>
                  <img src={logo2} alt='logo' />
                </div>
                <h2 style={{ textAlign: "center" }}>{thisMeeting.serviceType}</h2>
                <p>Date: {new Date(thisMeeting.dateTime).toLocaleDateString()}</p>
                <p>Time: {thisMeeting.dateTime.split('T')[1]}</p>
                <p>Name: {thisMeeting.clientName}</p>
                <p>Phone: {thisMeeting.clientPhone}</p>
                <p>Email: {thisMeeting.clientEmail} {colorClass}</p>
                
              </>)}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
export default Meeting;
