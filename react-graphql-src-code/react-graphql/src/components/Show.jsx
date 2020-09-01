import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import React, { Component } from 'react';
import { GET_USERS, VIEW_USERS } from "./../Queries/query";
import { Contact } from './Contact';

export class Show extends Component {

    constructor() {
        super();
        this.state = {
            contacts: [],
            selectAll: false
        }
    }
    render() {
        return (
            <Query query={GET_USERS} >
                {({ loading, error, data }) => {
                    //pollInterval={500}
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    return (
                        <div>
                            <table className="table shadow">
                                <thead>
                                    <tr>
                                        <th><div className="custom-control custom-checkbox">
                                            <input
                                                id="selectAll"
                                                type="checkbox"
                                                className="custom-control-input"
                                            //   value={selectAll}
                                            // onClick={() => setSelectAll(!selectAll)}
                                            />
                                            <label
                                                htmlFor="selectAll"
                                                className="custom-control-label"
                                            ></label>
                                        </div></th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th >Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.getCustomers.map((customer, index) =>
                                        <Contact customer={customer} key={customer.id} selecAll={this.state.selectAll} />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    );
                }}
            </Query>
        )
    }
}

