import React, { useState } from "react";
import Odometer from "react-odometerjs";
import './AboutMe.css';
import "odometer/themes/odometer-theme-default.css";

const AboutMe = () => {
    //for project
    let count = 0;
    let project = setInterval(projects, 10);
    function projects() {
        count++;
        let odometer = document.getElementById("odometer").innerHTML = count;
        if (count == 200) {
            clearInterval(project);
        }
    }
    //for Client
    let count1 = 0;
    let client = setInterval(clients, 10);
    function clients() {
        count1++;
        let odometerTwo = document.getElementById("odometerTwo").innerHTML = count1;
        if (count1 == 365) {
            clearInterval(client);
        }
    }
    //for achive
    let count2 = 0;
    let achive = setInterval(achives, 10);
    function achives() {
        count2++;
        let odometerThree = document.getElementById("odometerThree").innerHTML = count2;
        if (count2 == 165) {
            clearInterval(achive);
        }
    }

    

    return (
    < div className="container">
        <div className="odometer-section">
            <h3>Total Project</h3>
            <div className="d-flex odometer-part">
                <p  id="odometer"></p>
                <p >+</p>
            </div>
        </div>
        <div className="odometer-section">
            <h3>Total Client</h3>
            <div className="d-flex odometer-part">
                <p id="odometerTwo"></p>
                <p >+</p>
            </div>
        </div>
        <div className="odometer-section">
            <h3>Total Achive</h3>
            <div className="d-flex odometer-part">
                <p id="odometerThree"></p>
                <p >+</p>
            </div>
        </div>
        </div>
    );
};

export default AboutMe;
