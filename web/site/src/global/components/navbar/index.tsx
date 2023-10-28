import "./styles/index.scss";
import Button from "../btn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [navopen, setNavopen] = useState(false);
    return (
        <nav>
            <div className="nav-flex">
                <div className="nav-left">
                    <div className="logo" onClick={() => navigate("/")}></div>
                </div>
                <div className="nav-right">
                    <ul>
                        <li className={location.pathname === "/" ? "current-page" : ""}>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className={location.pathname === "/about" ? "current-page" : ""}>
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li className={location.pathname === "/courses" ? "current-page" : ""}>
                            <Link to={"/courses"}>Courses</Link>
                        </li>
                        <li className={location.pathname === "/scholarship" ? "current-page" : ""}>
                            <Link to={"/scholarship"}>Scholarship</Link>
                        </li>
                        <li className={location.pathname === "/contact" ? "current-page" : ""}>
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                        <li>
                            <Button
                                text="Join Now!"
                                width={100}
                                height={30}
                                type="filled"
                                bgColor="#0056B8"
                                fgColor="#fff"
                                linkTo="/register"
                            />
                        </li>
                    </ul>
                </div>
                <div className="nav-right-mobile">
                    <div
                        className="hamburger-icon"
                        onClick={() => {
                            setNavopen(!navopen);
                        }}
                    ></div>
                </div>
            </div>
            {navopen && (
                <ul className="mobile-nav-tray">
                    <li className={location.pathname === "/" ? "current-page" : ""}>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className={location.pathname === "/about" ? "current-page" : ""}>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li className={location.pathname === "/courses" ? "current-page" : ""}>
                        <Link to={"/courses"}>Courses</Link>
                    </li>
                    <li className={location.pathname === "/scholarship" ? "current-page" : ""}>
                        <Link to={"/scholarship"}>Scholarship</Link>
                    </li>
                    <li className={location.pathname === "/contact" ? "current-page" : ""}>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
