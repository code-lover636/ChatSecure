import React from 'react';
import '../styles/WelcomePage.scss';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
        <div className="wrapper">
            <h1 className="heading">ChatSecure</h1>
            <h2 className="sub-heading">Where Security Meets Simplicity: Chat Secure, Simplified</h2>
            <div className="buttons">
                <a href="/login" className="button1">Login</a>
                <a href="/login" className="button2">Sign Up</a>
            </div>
        </div>
      <p className="welcome-page__copy-right">ChatSecure is a spam classifier implemented using Machine Learning and NLP</p>
    </div>
  );
};

export default WelcomePage;