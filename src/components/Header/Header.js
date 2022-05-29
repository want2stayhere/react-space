import React from 'react';
import './header.scss';
import logo from '../../img/logo.svg';

const Header = () => (
    <header className="header">
        <div className='container'>
            <div className='header__wrap'>
                <img
                    src={logo}
                    alt="Logo Space X"
                    className="logo"
                />
                <nav className="main-nav nav">
                    <ul className="list">
                        <li className="item">
                            <a href="/" className="item-link">Falcon 1</a>
                        </li>
                        <li className="item">
                            <a href="/" className="item-link">Falcon 9</a>
                        </li>
                        <li className="item">
                            <a href="/" className="item-link">Falcon Heavy</a>
                        </li>
                        <li className="item">
                            <a href="/" className="item-link">Updates</a>
                        </li>
                    </ul>
                </nav>
                <nav className="secondary-nav">
                    <ul className="list">
                        <li className="item">
                            <a href="/" className="item-link">Home</a>
                        </li>
                        <li className="item">
                            <a href="calendar.html" className="item-link">Calendar</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
)

export default Header;