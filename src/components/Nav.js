// new
import About from "./About/About";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../logo.png"
const { Component } = require("react");

class Nav extends Component {
    render(){
        return (
            <header>
                <article>
                    <h1>           
                        <img src={logo} alt="imposter"/>
                        YouTube
                        <span> clone</span>
                    </h1>
                </article>
                <aside>
                    <Link to="/">
                        <p>
                            <i className="fas fa-home"></i>
                            <span>HOME</span>
                        </p>
                    </Link>
                    <Link to="/about">
                        <p>
                            <i className="fas fa-users"></i>
                            <span>ABOUT</span>
                        </p>
                    </Link>
                    
                </aside>
            </header>
        )
    }

}

export default Nav;