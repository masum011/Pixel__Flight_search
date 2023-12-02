import React, { useState } from "react";
import "./homeStyle.css";
import {
  Button,
  InputLabel,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import NearMeIcon from "@mui/icons-material/NearMe";
import Modal from "../../components/Modal";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlight } from "./homeSlice";
import { useNavigate } from "react-router-dom";
export default function Home() {

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const {cartValue}=useSelector((state)=>state.home);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferred, setPreferred] = useState(false);
  const [chooseClass,setChooseClass]=useState('')
  const [adults,setAdults]=useState(0)
  const [children,setChildren]=useState(0)
  const [infant,setInfant]=useState(0)
  const [personCount,setPersonCount]=useState()
  const [value,setValue]=useState('')
  const [dates,setDates]=useState()
  const [fromLocation,setFromLocation]=useState('')
  const [toLocation,setToLocation]=useState('')
  const [userModal,setUserModal]=useState(false)


  const openModal = () => {
    setIsModalOpen(true);
  };
  console.log(value)
  const handlePersonCpint = () => {
    const personCount={
      adults:adults,
      child:children,
      infant:infant
    }
    setPersonCount((prestate)=>({
      ...prestate,
      personCount
    }))
    setValue(`${personCount?.adults} adults ${personCount?.child} child ${personCount?.infant} infant`)
    setIsModalOpen(false);
  };
  const handleSelect=(e)=>{
    setChooseClass(e)
    setPreferred(false)
  } 


  // searching flight
  const handleSearch=()=>{
  const {personCount:{adults,child,infant}}=personCount;
  const payload={
  from_airport:fromLocation,
  to_airport:toLocation,
  departure_date:dates,
  return_date:'',
  adults:adults,
  childs:child,
  infants:infant,
  class_type:chooseClass,
  travel_type:'oneway',
  max_result:100,
  user_id:0
  }
      dispatch(fetchFlight(payload))
      navigate('/flight-list')
  }

  const hanldeOpen=()=>setUserModal(true)
  const handleClose=()=>setUserModal(false)

  
  return (
    <div className="home--bg">
      <div className="home--contaner">
        <div className="logout-card">
          <div className="cart-box">
            <span className="cartvalue">{cartValue}</span>
          <ShoppingCartIcon fontSize="large" color="primary"/>
          </div>
          <AccountCircleIcon fontSize="large" color="primary" onClick={hanldeOpen}/>
        </div>

        {/* modal */}
        <Modal showModal={userModal} onClose={handleClose}>
            <h1>User Profile</h1>
        </Modal>


        <div className="header-group-btn">
          <Button className="btn" variant="contained">
            <span>
              <NearMeIcon fontSize="small" />
            </span>
            One way
          </Button>
          <Button className="btn" variant="contained">
            <span>
              <AvTimerIcon fontSize="small" />
            </span>
            Rouned trip
          </Button>
          <Button className="btn" variant="contained">
            <span>
              <LocationCityIcon fontSize="small" />
            </span>
            Multi-city
          </Button>
        </div>
        <br />
        <div className="contaner">
          <div className="flying--field">
            <div>
              <InputLabel className="label">Fliying From</InputLabel>
              <TextField
                size="small"
                sx={textfield}
                onChange={(e)=>setFromLocation(e.target.value)}
                className="inputfield"
                placeholder="City OR Ariport"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LocationOnIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <SwapHorizIcon />
            <div>
              <InputLabel className="label">Flying To</InputLabel>
              <TextField
                placeholder="City OR Ariport"
                size="small"
                sx={textfield}
                onChange={(e)=>setToLocation(e.target.value)}
                className="inputfield"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LocationOnIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              <InputLabel className="label">Departure Date</InputLabel>
              <TextField
                size="small"
                sx={textfield}
                className="inputfield"
                onChange={(e)=>setDates(e.target.value)}
                type="date"
              />
            </div>
          </div>
          <br />
          <div className="traveling">
            <div className="traveling-data">
              <div>
                {isModalOpen && (
                  <div className="maodal">
                    <Typography>Traveller</Typography>
                    <div className="person">
                      <p>Adults</p>
                      <div>
                        <Button id="btn-id" variant="contained" onClick={()=>setAdults(adults>0?adults-1:0)}>
                          -
                        </Button>
                        <span className="count--show">{adults}</span>
                        <Button id="btn-id" variant="contained" onClick={()=>setAdults(adults+1)}>
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="person">
                      <p>Children(3-12)</p>
                      <div>
                        <Button id="btn-id" variant="contained" onClick={()=>setChildren(children>0?children-1:0)}>
                          -
                        </Button>
                        <span className="count--show">{children}</span>
                        <Button id="btn-id" variant="contained" onClick={()=>setChildren(children+1)}>
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="person">
                      <p>Infant(0-2)</p>
                      <div>
                        <Button id="btn-id" variant="contained" onClick={()=>setInfant(infant>0?infant-1:0)}>
                          -
                        </Button>
                        <span className="count--show">{infant}</span>
                        <Button id="btn-id" variant="contained" onClick={()=>setInfant(infant+1)}>
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="person--modal--btn">
                      <Button
                        variant="contained"
                        className="btn"
                        fullWidth
                        onClick={handlePersonCpint}
                      >
                        Done
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              <InputLabel className="label">Traveller(s)</InputLabel>
              <TextField
                size="small"
                sx={textfield}
                value={value}
                onClick={openModal}
                className="inputfield"
                placeholder="City OR Ariport"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <KeyboardArrowDownIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div className="preferred-div">
              {preferred && (
                <div className="preferred-select">
                  <li>Preferrend Class</li>
                  <li onClick={()=>handleSelect('Premimue Economy')}>Premimue Economy</li>
                  <li onClick={()=>handleSelect('Economy')}>Economy</li>
                  <li onClick={()=>handleSelect('Business')}>Business</li>
                  <li onClick={()=>handleSelect('First')}>First</li>
                </div>
              )}
              <InputLabel className="label">Preferred Class</InputLabel>
              <TextField
                sx={textfield}
                className="inputfield"
                value={chooseClass}
                size="small"
                placeholder="Preferred Class"
                onClick={() => setPreferred(true)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <KeyboardArrowDownIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <br />
          <div className="search-btn">
            <Button variant="contained" className="btn"  onClick={handleSearch} disabled={dates ? false : true}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
const textfield = {
  input: { color: "white" },
  "& fieldset": { border: "none" },
};
