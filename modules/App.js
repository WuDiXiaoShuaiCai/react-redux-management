import React,{Component} from 'react';
import NavLink from './NavLink';

class App extends React.Component {
  render() {
    return (
        <div>

            <div className="navbar-wrapper">
                <div className="container">

                    <nav className="navbar navbar-inverse navbar-static-top">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" 
                                data-toggle="collapse" data-target="#navbar" aria-expanded="false" 
                                aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#">React-Redux</a>
                            </div>
                            <div id="navbar" className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                                    <li><NavLink to="/about">About</NavLink></li>
                                    <li><NavLink to="/counter">Counter</NavLink></li>
                                    <li><NavLink to="/carts">Cart</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="container">
                {this.props.children}
            </div>

        </div>
    )
  }
}

module.exports = App;