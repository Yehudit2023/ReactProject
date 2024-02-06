import { TextField } from '@mui/material';

const TextFieldCustom = (props) => {
  const { name, type = "text", label, value, onChange } = props;

  return (
    <TextField
      name={name}
      type={type}
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      margin="dense" />
  )
}
export default TextFieldCustom
