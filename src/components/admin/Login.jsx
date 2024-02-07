import { useState } from 'react'
import { CardContent, Card, Button, InputAdornment, TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import HttpsIcon from '@mui/icons-material/Https';
import { CheckLogin } from '../../data/server';

function Login() {
  const [name, setName] = useState('');
  const [password, setPasword] = useState('');

  const handleLogin=()=>{
    CheckLogin(name, password);
    setName('');
    setPasword('');
  }

  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <FormControl sx={{ m: 5, width: '25ch' }} variant="outlined">
          <TextField
            id="input-with-icon-textfield"
            label="Name:" type='text' value={name} onChange={(e) => setName(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"> <AccountCircle /> </InputAdornment>
              ),
            }}
            variant="standard" margin="dense"
          />
          <TextField
            id="input-with-icon"
            label="Password:"
            type='password' value={password} onChange={(e) => setPasword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HttpsIcon />
                </InputAdornment>
              ),
            }}
            variant="standard" margin="dense"
          />
          {/* <Button style={{ color: "#C0AA81", backgroundColor: "black"}} onClick={() => CheckLogin(name, password)}>Sign In</Button> */}
          <Button style={{ color: "#C0AA81", backgroundColor: "black"}} onClick={handleLogin}>Sign In</Button>

        </FormControl>
      </CardContent>
    </Card></>
  )
}
export default Login
