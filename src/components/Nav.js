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
                            <a href="/">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about">
                                About
                            </a>
                        </li>
                    </ul>
                </aside>
            </header>
        )
    }

}

export default Nav;