import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import './index.css';
import Logo from './logo.png';
import App from './App';
import Contact from './component/Contact/Contact';
import NotFoundPage from './component/NotFoundPage/NotFoundPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhoneAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import * as serviceWorker from './serviceWorker';



class Routing extends Component{
	constructor(props){
		super(props);
        this.props = props;
        this.state = {navText:false, navTextDisplay : 'none'};
    }

    componentDidMount(){
        window.addEventListener("resize",this.handleNavDisplay);
        this.handleNavDisplay()
    }

    handleNavDisplay = () => {
        const screenSize = window.innerWidth;
        if(screenSize > 500){
            this.setState( ( state ) => ({
                navText : !state.navText,
                navTextDisplay : 'flex'
            }));
        }
        else{
            this.setState( ( state ) => ({
                navText : !state.navText,
                navTextDisplay : 'none'
            }));
        }
    }

    handleBarClick = (event) =>{

        event.preventDefault();

        if(this.state.navText){
            this.setState( ( state ) => ({
                navText : !state.navText,
                navTextDisplay : 'none'
            }));
        }
        else{
            this.setState( ( state ) => ({
                navText : !state.navText,
                navTextDisplay : 'flex'
            }));
        }
    }

	render(){
		return(
			<Router>
				<nav className ="nav">
                    <Link to='/' className="nav__nav-link-logo link"><img src={Logo} className="nav__nav-logo" alt="A figure that depicts school"></img></Link>
                    <button onClick={this.handleBarClick} className="nav__nav-bar-icon link"><FontAwesomeIcon icon={faBars} /></button>
                    <div className="nav__text-and-icon" style={{display : this.state.navTextDisplay}}>
                        <Link to = '/' className="nav__text link"><FontAwesomeIcon icon={faHome} className="icon" />  Home </Link>
                        <Link to = '/component/Contact/Contact' className="nav__text link"><FontAwesomeIcon icon={faPhoneAlt} className="icon"/>  Contact the Dev</Link>
                    </div>
                </nav>
                <Switch>
                    <Route exact path='/' component={App}></Route>
                    <Route exact path='/' component={App}></Route>
                    <Route path='/component/Contact' component={Contact}></Route>
                    <Route component={NotFoundPage}></Route>
                </Switch>
			</Router>
		)
	}
}

ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
