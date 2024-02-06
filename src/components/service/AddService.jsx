import { TextField, Button } from "@mui/material"
import { observer } from "mobx-react"
import { useState } from "react"
import { addServiceToServer } from "../../data/server"

const AddService = (observer((props) => {

  const { handleCloseModal } = props;
  const [service, setService] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    duration: '',
  })
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addServiceToServer(service).then(x => {

      setService({
        id: '',
        name: '',
        description: '',
        price: '',
        duration: '',
      });
    });

    handleCloseModal();
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        {/* <TextField name="id" type='number' label="serviceId" variant="outlined" value={service.id} onChange={handleInputChange} margin="dense" />
        <br /> */}
        <TextField name="name" type='text' label="serviceName" variant="outlined" value={service.name} onChange={handleInputChange} margin="dense" />
        <br />
        <TextField name="description" label="description" variant="outlined" value={service.description} onChange={handleInputChange} margin="dense" />
        <br />
        <TextField name="price" label="servicePrice" variant="outlined" value={service.price} onChange={handleInputChange} margin="dense" />
        <br />
        <TextField name="duration" label="serviceDuration" variant="outlined" value={service.duration} onChange={handleInputChange} margin="dense" />
        <div>
          <Button type="submit">Add</Button>
          <Button type="button" onClick={handleCloseModal}>Cancel</Button>
        </div>
      </form>
    </>
  )
}))
export default AddService