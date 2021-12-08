import React from "react";
import Typical from 'react-typical';

const Home = () => {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="cols">
                        <a href="#">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-google-plus-square"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-youtube-square"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highlighted-text">Rabeya</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev 🔴",
                                        1000,
                                        "Front-End Developer 💻",
                                        1000,
                                        "MERN Stack Developer 😎",
                                        1000,
                                        "React Js Developer 😍",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
Knack of building applications with front and back end operations.
                            </span>
                        </span>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;