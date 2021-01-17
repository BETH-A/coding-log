import React from 'react';
import Link from './Link';
import './Navbar.css';


const Navbar = () => {
    return(
        <div className="ui secondary pointing">
            {/* <div className="ui section divider" /> */}
            <div className="ui secondary pointing header">
                <Link href="https://www.barnoldcoding.com/" className="item links" target="_blank">
                    Portfolio
                </Link>
                <Link href="https://www.barnoldcoding.com/contact" className="item links" target="_blank">
                    Contact Me
                </Link>
            </div>
            {/* <div className="ui section divider" /> */}
            <div className="ui secondary pointing header">
                <Link href="https://www.linkedin.com/en/barnoldcoding/" className="item" target="_blank">
                    <i class="linkedin icon"></i>
                </Link>
                <Link href="https://github.com/BETH-A" className="item" target="_blank">
                    <i class="github icon"></i>
                </Link> 
            </div>
        </div>
    )
}

export default Navbar;