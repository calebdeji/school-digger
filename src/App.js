import React, { Component, Fragment } from 'react';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import Logo from './logo.png';
import Home  from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Footer from './component/Footer/Footer';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhoneAlt, faBars } from '@fortawesome/free-solid-svg-icons';



export default class App extends Component{
	constructor(props){
		super(props);
        this.props = props;
        this.state = {navText:false, navTextDisplay : 'none'};
    }


    /**
     * to detects the screen size and decide the view of nav-text
     */
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
                navText : false,
                navTextDisplay : 'none'
            }));
        }
    }

    /**
     * method called when the bar icon is clicked
     */
    handleBarClick = (event) =>{

        event.preventDefault();
        console.log("state status is : ", this.state);
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
			<Fragment>
                <Router>
                    <nav className ="nav">
                        <Link to='/pages/Home/Home' className="nav__nav-link-logo link"><img src={Logo} className="nav__nav-logo" alt="A figure that depicts school"></img></Link>
                        <button onClick={this.handleBarClick} className="nav__nav-bar-icon link"><FontAwesomeIcon icon={faBars} /></button>
                        <div className="nav__text-and-icon" style={{display : this.state.navTextDisplay}}>
                            <Link to = '/pages/Home/Home' className="nav__text link"><FontAwesomeIcon icon={faHome} className="icon" />  Home </Link>
                            <Link to = '/pages/Contact/Contact' className="nav__text link"><FontAwesomeIcon icon={faPhoneAlt} className="icon"/>  Contact the Dev</Link>
                        </div>
                    </nav>
                    <Switch>
                        <Route path='/pages/Home' component = { Home } />
                        <Route path='/pages/Home' component = { Home } />
                        <Route path='/pages/Contact' component = { Contact } />
                        <Route component={NotFoundPage}/>
                    </Switch>
                </Router>
                <Footer />
            </Fragment>
		);
	}
}

