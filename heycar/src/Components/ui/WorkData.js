import { Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import NoInternetConnection from "./NoInternetConnection";
import Dashboard from "./Dashboard";
import UIBasics from "./UIBasics";
import Lisa from "../../Images/img_lisa_circle.png";

const WorkData = () => {
  const [selectedComponent, setSelectedComponent] = useState("Home1");

  return (
    <div>
      <AppBar
        data-testid="mainappbar"
        position="static"
        sx={{ backgroundColor: "white" }}
      >
        <Toolbar>
          <div className="AppbarGrid">
            <button
              onClick={() => setSelectedComponent("Home1")}
              classsName="ActiveButton"
            >
              Home1
            </button>
            <button
              onClick={() => setSelectedComponent("Home2")}
              classsName={selectedComponent === "NonActiveButton"}
            >
              Home2
            </button>
            <button
              onClick={() => setSelectedComponent("Home3")}
              classsName={
                selectedComponent === "Home3"
                  ? "ActiveButton"
                  : "NonActiveButton"
              }
            >
              Home3
            </button>
          </div>
        </Toolbar>
      </AppBar>

      <div className="topSection">
        <div className="topSection--center">
          <h1>START PAGE</h1>
          <h4>Template by css</h4>
          <button className="topSectionbutton">Get Started</button>
        </div>
      </div>

      <div >
        <div
          className="split split--workdata"
          
        >
          <div className="divtext">
            <h2> Loreum Ipsum</h2>
            <h3>
              Loreum Ipsum Loreum IpsumLoreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Lo reum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum
            </h3>
            <h6>
              Loreum Ipsum Loreum IpsumLoreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum IpsumLoreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum
            </h6>
          </div>
          <div>
            <img src={Lisa} alt="logo" />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "antiquewhite" }}>
        <div
          className="split split--workdata"
          
        >
            <div>
            <img src={Lisa} alt="logo" />
          </div>
          <div className="divtext">
            <h2> Loreum Ipsum</h2>
            <h3>
              Loreum Ipsum Loreum IpsumLoreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Lo reum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum
            </h3>
            <h6>
              Loreum Ipsum Loreum IpsumLoreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum IpsumLoreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum
            </h6>
          </div>
        
        </div>
      </div>
      {/* <div className="split split--workdata"  style={{backgroundColor:"gray"}}>
          <div > 
            <img src={Lisa} alt="logo" />
          </div>
          <div className="divtext">
          <h3 >
            {" "}
            Loreum Ipsum
          </h3>
          <h6>
            Loreum Ipsum Loreum IpsumLoreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Lo reum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum
          </h6>
          <h7 >
            Loreum Ipsum Loreum IpsumLoreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum IpsumLoreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum
          </h7>
        </div>
        </div> */}

      <div className="quoteText">
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          Quote of the day:live life
        </h3>
      </div>
    </div>
  );
};

export default WorkData;
