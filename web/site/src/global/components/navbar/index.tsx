import React from "react";
import "./styles/index.scss";
import Button from "../btn";
const NavBar = () => {
    return (
        <nav>
            <div className="nav-flex">
                <div className="nav-left">
                    <div className="logo"></div>
                </div>
                <div className="nav-right">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Courses</li>
                        <li>Scholarship</li>
                        <li>Contact</li>
                        <li>
                            <Button
                                text="Join Now!"
                                width={100}
                                height={30}
                                type="filled"
                                bgColor="#0056B8"
                                fgColor="#fff"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
