import React, { Component, useState } from 'react';
import { Query, Mutation } from 'react-apollo';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { ADD_USER } from "./../Queries/query";


export class Create extends Component {


    render() {

        let name, phone, email;
        function setName(value) {
            name = value;
        }
        function setPhone(value) {
            phone = value;
        }

        function setEmail(value) {
            email = value;
        }

        function createCustomerData(createCustomer, e) {
            e.preventDefault();
            createCustomer({ variables: { name: name, phone: phone, email: email } })

        }
        return (
            <Mutation mutation={ADD_USER} onCompleted={() => this.props.history.push('/')}>
                {(createCustomer, { loading, error }) => (
                    <div className="card border-0 shadow">
                        <div className="card-header">
                            Add a contact
                        </div>
                        <div className="card-body">
                            <form onSubmit={(e) => { createCustomerData(createCustomer, e) }

                            }>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your name"
                                        defaultValue={name}
                                        onChange={(e) => setName(e.target.value)}
                                    // ref={node => {
                                    //     name = node;
                                    // }}
                                    />

                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your phone number"
                                        defaultValue={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    // ref={node => {
                                    //     phone = node;
                                    // }}
                                    />

                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your email address"
                                        defaultValue={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    // ref={node => {
                                    //     email = node;
                                    // }}
                                    />

                                </div>

                                <button className="btn btn-warning" type="submit"> Add Contact</button>
                            </form>
                            {loading && <p>Loading...</p>}
                            {error && <p>Error :( Please try again</p>}
                        </div>
                    </div>
                )}
            </Mutation>
        );
    }



}

