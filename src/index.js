import React, {Component} from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import App from "./App";
import Users from "./Dashboard/users";
import Contact from "./Dashboard/contact";
//import Login from "./Dashboard/login";


const arr=['Home','Users', 'Contact']

class Routing extends Component {
        constructor(props) {
                super(props);
                this.state={
                        name: 'Santhosh Reddy'
                }
        }
        render(){
         return (
                <Router>
                <div className= "App">
                <ul className="ul_top_hypers">
                {arr.map(item => 
                <li className="col-xs-4">
                        <NavLink exact activeClassName="active" to={"/"+ item}>
                                {item}
                        </NavLink>
                </li>
                )}
                    </ul> 
                    <hr />
                      <Route exact path="/Home" component={App} />
                      <Route path="/users"  render= {()=> (<Users info= {this.state.name} />)}></Route>
                      <Route path="/contact" component={Contact} />
                      {/* <Route path="/Login" component={Login} /> */}
                  </div>
                </Router>
              );
         }
}

ReactDOM.render(<Routing/>, document.getElementById("root"));