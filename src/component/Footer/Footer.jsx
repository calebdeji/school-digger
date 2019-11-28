import React, { Component } from 'react'
import './Footer.css';

export default class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <p className="footer__text">Developed by <a href="https://calebdeji.tech" target="blank" className="portfolio-link">Calebdeji</a></p>
            </footer>
        )
    }
}