const { Component } = require("react");

class Nav extends Component {

    render(){
        return (
            <header>
                <article>
                    <h1>
                        YouTube
                    </h1>
                </article>
                <aside>
                    <ul>
                        <li>
                            <a href="/">
                                Home
                            </a>
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