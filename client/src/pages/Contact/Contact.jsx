import React from 'react';
import { Nav } from '../../components/Nav/Nav';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export const Contact = (props) => {

    return (
        <>
        <Nav />
        <Header imgName="img/LogoMain.jpg"
                altImg = "Company Logo Image" 
                title="Contact Us" 
                subtitle="Please let us know if there is a question." 
        />

        <div className="container">
        <div className="row">
        <div className="col-lg-8 mx-auto mt-3">
            <h5>Want to get in touch? Fill out the form below to send us a message and we will get back to you as soon as possible!</h5>
            <form name="sentMessage" id="contactForm" >
            <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name."/>
                <p className="help-block text-danger"></p>
                </div>
            </div>
            <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                <label>Email Address</label>
                <input type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address."/>
                <p className="help-block text-danger"></p>
                </div>
            </div>
            <div className="control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                <label>Phone Number</label>
                <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number."/>
                <p className="help-block text-danger"></p>
                </div>
            </div>
            <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                <label>Message</label>
                <textarea rows="5" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                <p className="help-block text-danger"></p>
                </div>
            </div>
            <br/>
            <div id="success"></div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary" id="sendMessageButton">Send</button>
            </div>
            </form>
        </div>
        </div>
    </div>

    <Footer />
    </>
    )
}