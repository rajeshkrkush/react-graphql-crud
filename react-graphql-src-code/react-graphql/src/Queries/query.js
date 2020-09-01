import { gql } from 'apollo-boost';

export const GET_USERS = gql`
  {
    getCustomers {
      id,
      name,
      phone,
      email
    }
  }
`;

export const VIEW_USERS = gql`
  query ($id: Int){
    getCustomerInfo(id: $id) {
      id,
      name,
      phone,
      email
    }
  }
`;

export const ADD_USER = gql`
  mutation($name: String, $email: String, $phone: String) {
    createCustomer (name: $name, email: $email, phone: $phone)
  }
`;

export const EDIT_USER = gql`
  mutation($id: Int, $name: String, $email: String, $phone: String) {
    updateCustomerInfo (id: $id, name: $name, email: $email, phone: $phone)
  }
`;

export const DELETE_USER = gql`
  mutation ($id: Int) {
    deleteCustomer(id: $id)
  }
`