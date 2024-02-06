import { TextField, Button } from "@mui/material"
import { observer } from "mobx-react"
import { useState } from "react"
import { editedBusinessData } from "../../data/server"

const EditBusinessData = (observer((props) => {
  const { handleCloseModal } = props;

  const [editedBusiness, setEditedBusiness] = useState({
    id: "",
    name: " ",
    address: " ",
    phone: "",
    owner: "",
    logo: "",
    description: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    editedBusinessData(editedBusiness);
    handleCloseModal();
  };

  const handleInputChange = (e) => {
    setEditedBusiness({
      ...editedBusiness, [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <TextField name="id" type='number' label="id" variant="outlined" value={editedBusiness.id} onChange={handleInputChange} margin="dense" />
        <br />
        <TextField name="name" type='text' label="name" variant="outlined" value={editedBusiness.name} onChange={handleInputChange} margin="dense" />
        <br />
        <TextField name="address" label="address" variant="outlined" value={editedBusiness.address} onChange={handleInputChange} margin="dense" />
        <br />
        <TextField name="owner" label="owner" variant="outlined" value={editedBusiness.owner} onChange={handleInputChange} margin="dense" />
        <br />
        <TextField name="logo" label="logo" variant="outlined" value={editedBusiness.logo} onChange={handleInputChange} margin="dense" />

        <br />
        <TextField name="phone" label="phone" variant="outlined" value={editedBusiness.phone} onChange={handleInputChange} margin="dense" />
        <br />
        <TextField name="description" label="description" variant="outlined" value={editedBusiness.description} onChange={handleInputChange} margin="dense" />
        <Button type="submit">Save </Button>
        <Button type="button" onClick={handleCloseModal}>Cancel</Button>
      </form>
    </>
  )
}))
export default EditBusinessData