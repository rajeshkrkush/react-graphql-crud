import React, { Component, useState } from 'react';
import { Query, Mutation } from 'react-apollo';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { EDIT_USER, VIEW_USERS } from "./../Queries/query";


export class Edit extends Component {


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

        function updateCustomerInfor(data, updateCustomerInfo, e) {
            e.preventDefault();
            updateCustomerInfo({ variables: { id: data.getCustomerInfo.id, name: name, phone: phone, email: email } })

        }
        return (
            <Query query={VIEW_USERS} variables={{ id: parseInt(this.props.match.params.id) }}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;
                    return (
                        <Mutation mutation={EDIT_USER} key={data.getCustomerInfo.id} onCompleted={() => this.props.history.push('/')}>
                            {(updateCustomerInfo, { loading, error }) => (
                                <div className="card border-0 shadow">
                                    <div className="card-header">
                                        Update a contact
                        </div>
                                    <div className="card-body">
                                        <form onSubmit={(e) => { updateCustomerInfor(data, updateCustomerInfo, e) }

                                        }>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter your name"
                                                    defaultValue={data.getCustomerInfo.name}
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
                                                    defaultValue={data.getCustomerInfo.phone}
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
                                                    defaultValue={data.getCustomerInfo.email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                // ref={node => {
                                                //     email = node;
                                                // }}
                                                />

                                            </div>

                                            <button className="btn btn-warning" type="submit"> Update Contact</button>
                                        </form>
                                        {loading && <p>Loading...</p>}
                                        {error && <p>Error :( Please try again</p>}
                                    </div>
                                </div>
                            )}
                        </Mutation>
                    )
                }}
            </Query>
        );
    }



}

