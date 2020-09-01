import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary'>
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        Contact Book
            </Link>
                    <div>
                        <Link to="/contact/add" className="btn btn-light ml-auto">
                            Create Contact
              </Link>
                    </div>
                </div>
            </nav>
        );
    };
};