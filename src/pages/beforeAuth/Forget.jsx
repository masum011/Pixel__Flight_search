import { Button, InputLabel, TextField } from '@mui/material'
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
export default function Forget() {
  const navigate=useNavigate()
  return (
    <div>
       <div className="login--contaner">
        <ArrowBackIosIcon onClick={()=>navigate('/login')}/>
       <InputLabel className="label" htmlFor="username">
          Email Address*
        </InputLabel>
        <TextField size="small" className="inputfield" fullWidth type="email" />
        <Button  sx={styleBtn}
            variant="contained"
            color="primary">Forget password</Button>
       </div>
    </div>
  )
}

const styleBtn={
  padding:".6rem 1.5rem",
  marginTop:"1rem"
}