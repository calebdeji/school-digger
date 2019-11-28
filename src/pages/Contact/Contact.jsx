import React, { Component } from 'react'
import './Contact.css';

export default class Contact extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {height: ''};
    }
    componentDidMount(){
        window.addEventListener("resize", this.heightAdjust);
        this.heightAdjust();
    }
    handleSubmission = (event)=>{
        event.preventDefault();
    }
    heightAdjust = () =>{
        const windowHeight = window.innerHeight;
        const contactHeight = windowHeight-160;
        this.setState({height : contactHeight.toString().concat('px')});
    }
    render(){
        return(
            <div className="contact-container" style={{height: this.state.height}}>
                <div className="contact-me">
                    <form action="" onSubmit={this.handleSubmission} className="contact-me__form">
                        <h3 className="contact-me__text">Contact Caleb</h3>

                        <div className="form__personal-details">
                            <div className="form__input">
                                <label className="form__input-label" htmlFor="name" required>Name</label>
                                <input type="text" name="name" id="name" className="form__input-field"/>
                            </div>
                            <div className="form__input">
                                <label className="form__input-label" htmlFor="email" required>Email</label>
                                <input type="email" name="email" id="email" className="form__input-field"/>
                            </div>
                        </div>
                        <div className="form__textarea form__input">
                            <label className="form__input-label" htmlFor="textarea" required>Message</label>
                            <textarea name="message" id="message" className="textarea-field" ></textarea>
                        </div>
                        <button type="submit" className="form__button">SEND</button>
                    </form>
                </div>
            </div>
        );
    }
}