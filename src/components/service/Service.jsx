import { Card, CardContent } from "@mui/material";
import dataStore from "../../data/dataStore";
import ser1 from '../../assets/images/ser1.webp';
import ser2 from '../../assets/images/ser2.jpg';
import ser3 from '../../assets/images/ser3.webp';
import ser4 from '../../assets/images/ser4.webp';


function Service({ index }) {
  const thisService = dataStore.servicesArray[index];

  const images = [ser1, ser2, ser3, ser4];

  const selectedImage = images[index % images.length];

  return (<>
    <Card sx={{ maxWidth: 500 }}>
      <CardContent style={{ textAlign: "center" }}>
        <div>
          {thisService && (
            <>
              <div>
                <div>
                <img src={selectedImage} alt='service' style={{ width: "300px", height: "300px", borderRadius: "5%" }}></img>
              </div>
                <h2>{thisService.name}</h2>
                <h4>{thisService.description}</h4>
                <p>{thisService.price}</p>
                <p>{thisService.duration}</p>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  </>
  );
}

export default Service;
