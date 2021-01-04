import React, { useState } from 'react';
import Log from './Log';
import Entries from './Entries';
import Header from './Header';
import Footer from './Footer';
import './App.css';


const App = () => {

    return (
        <div className="ui centered grid">
            <div className="ui container">
                <div className="ui item">
                    <Header />
                </div>
                <div className="ui item">
                    <Log items={ Entries }/>
                </div>
            </div>
            <Footer />
        </div>
        
    );
};

export default App;