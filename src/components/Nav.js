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
                    <ul>
                        <li>
                            <Link to="/">Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">About
                            </Link>
                        </li>
                    </ul>
                </aside>
            </header>
        )
    }

}

export default Nav;