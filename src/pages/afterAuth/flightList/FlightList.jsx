import React, { useEffect, useState } from "react";
import "./style.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EastIcon from "@mui/icons-material/East";
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { fetchFlightList, increment } from "../homeSlice";
import { useNavigate } from "react-router-dom";
export default function FlightList() {
    const [showHide,setShowHide]=useState(true)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    useEffect(()=>{
      dispatch(fetchFlightList())
    },[])

    const addcart=()=>{
      dispatch(increment())
    }
  return (
    <div>
      <div className="flight--contaner">
      <div className="back-btn">
        <ArrowBackIcon onClick={()=>navigate('/flight-search')}/>
      </div>
        <hr />
        <div className="from--to">
          <div>
            <div className="station">
              <LocationOnIcon />
              <div>
                <b>From Startion</b>
                <br />
                <b>Netaji Subhas Chandra Bose International Airport</b>
                <p className="p--tag">Sun 27 Aug 2023</p>
              </div>
            </div>
          </div>
          <EastIcon />
          <div>
            <div className="station">
              <LocationOnIcon />
              <div>
                <b>To Station</b>
                <br />
                <b>Airport Authority Of India</b>
              </div>
            </div>
          </div>
        </div>

        <div className="ticket-pdf">
          <b>ECONOME</b>
          <div>
            <div className="ticket-contaner">
              <img
                src="https://th.bing.com/th/id/OIP.ZheefQNdlukJfSMYOYC1kAHaGn?w=60&h=60&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt=""
              />
              <p>
                Time <br /> DEL
              </p>
              <div className="arrow--duration">
                <EastIcon />
                <div>
                  <p>
                    14 hr 20 mine <span>.</span> onestop
                  </p>
                </div>
              </div>
              <p>
                time <br /> LHR
              </p>
              <div className="select-btn">
                <p>$440</p>
                <Button variant="contained" style={{ textTransform: "none" }} onClick={addcart}>
                  Select
                </Button>
              </div>
            </div>
            <br />
            <p className="p--tag hide--detalis" onClick={()=>setShowHide(!showHide)}> Hide Detalis</p>

            {showHide && 
            <div>
            <hr />
            <div className="flight--detalis">
              <div className="depart--section">
                <p className="p--tag">
                  <span style={{ color: "#1967d2" }}>Depart</span> Del to Kol
                </p>
                <p className="p--tag">
                  Sun 27 Aug 2023 ECONOMY{" "}
                  <span style={{ fontSize: "12px" }}>4 hr 00 mins</span>
                </p>
                <hr />
              </div>
              <div className="child">
                <div>
                  <img
                    src="https://th.bing.com/th/id/OIP.ZheefQNdlukJfSMYOYC1kAHaGn?w=60&h=60&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="flight--logo"
                  />
                  <p className="p--tag">QUATAR ARIWAY</p>
                  <p className="p--tag" style={{ color: "#bdc8ce" }}>
                    ARIBUS A333-200
                  </p>
                </div>
                <div className="location">
                  <p className="p--tag">
                    23 Aug 2023 <br />
                    10:35 <br />
                    KOL
                  </p>
                  <p className="p--tag ">
                  Netaji Subhas Chandra Bose International Airport
                  </p>
                </div>
                <div>
                  <EastIcon />
                </div>
                <div className="location">
                  <p className="p--tag">
                    23 Aug 2023 <br />
                    12:35 <br />
                    DEL
                  </p>
                  <p className="p--tag">
                    {" "}
                    indira gandhi international airport,delhi,india
                  </p>
                </div>
              </div>
            </div><br /><hr/><br />
            <div className="flight--detalis">
              <div className="depart--section">
                <p className="p--tag">
                  <span style={{ color: "#1967d2" }}>Depart</span> Del to Kol
                </p>
                <p className="p--tag">
                  Sun 27 Aug 2023 ECONOMY{" "}
                  <span style={{ fontSize: "12px" }}>4 hr 00 mins</span>
                </p>
                <hr />
              </div>
              <div className="child">
                <div>
                  <img
                    src="https://th.bing.com/th/id/OIP.ZheefQNdlukJfSMYOYC1kAHaGn?w=60&h=60&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="flight--logo"
                  />
                  <p className="p--tag">QUATAR ARIWAY</p>
                  <p className="p--tag" style={{ color: "#bdc8ce" }}>
                    ARIBUS A333-200
                  </p>
                </div>
                <div className="location">
                  <p className="p--tag">
                    23 Aug 2023 <br />
                    10:35 <br />
                    KOL
                  </p>
                  <p className="p--tag ">
                  Netaji Subhas Chandra Bose International Airport
                  </p>
                </div>
                <div>
                  <EastIcon />
                </div>
                <div className="location">
                  <p className="p--tag">
                    23 Aug 2023 <br />
                    12:35 <br />
                    DEL
                  </p>
                  <p className="p--tag">
                    {" "}
                    indira gandhi international airport,delhi,india
                  </p>
                </div>
              </div>
            </div>
            </div>
            }

          </div>
        </div>
      </div>
    </div>
  );
}
