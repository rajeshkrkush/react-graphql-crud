import React, { Component } from 'react';
import Avatar from 'react-avatar';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import { useDispatch } from "react-redux";
import { DELETE_USER } from "./../Queries/query";
export class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contact: this.props.customer
        }
    }

    render() {
        var selecAll = false;
        function deleteContact(deleteCustomer, id, e) {
            e.preventDefault();
            deleteCustomer({ variables: { id: id } });
        }
        const { name, phone, email, id } = this.state.contact;
        return (
            <tr>
                <td>
                    <div className="custom-control custom-checkbox">
                        <input checked={selecAll} type="checkbox" className="custom-control-input" />
                        <label className="custom-control-label"></label>
                    </div>
                    {/* {id} */}
                </td>
                <td><Avatar name={name} size="40" round={true} className="mr-2" />{name}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td className="action">
                    <Link to={`/contact/edit/${id}`}>
                        <span className="material-icons mr-2">edit</span>
                    </Link>
                    <Link to="/">
                        <Mutation mutation={DELETE_USER} key={id}>
                            {(deleteCustomer, { loading, error }) => (
                                <span className="material-icons text-danger" onClick={(e) => deleteContact(deleteCustomer, id, e)}>remove_circle</span>

                            )
                            }

                        </Mutation>
                    </Link>
                </td>
            </tr>
        )
    }
}