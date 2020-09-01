var express = require('express');
const { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
let mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `); 
//Crud operation schema for graphql. we can have the schema on different file and then we can use
//const fs = require('fs');
//const Schema = String(fs.readFileSync('./data/schema.graphql'));
// for now use in a single one
var schema = buildSchema(`
 
 type Customer {
  id: Int
  name: String
  phone: String
  email: String
}
type Query {
  hello: String,
  getCustomers: [Customer],
  getCustomerInfo(id: Int) : Customer
}

type Mutation {
  updateCustomerInfo(id: Int, name: String, email: String, phone: String): Boolean
  createCustomer(name: String, email: String, phone: String): Boolean
  deleteCustomer(id: Int): Boolean
}
`);

const queryDB = (req, sql, args) => new Promise((resolve, reject) => {
  req.mysqlDb.query(sql, args, (err, rows) => {
    if (err)
      return reject(err);
    rows.changedRows || rows.affectedRows || rows.insertId ? resolve(true) : resolve(rows);
  });
});

var root = {
  getCustomers: (args, req) => queryDB(req, "select * from customer").then(data => data),
  getCustomerInfo: (args, req) => queryDB(req, "select * from customer where id = ?", [args.id]).then(data => data[0]),
  hello: () => "World",
  updateCustomerInfo: (args, req) => queryDB(req, "update customer SET ? where id = ?", [args, args.id]).then(data => data),
  createCustomer: (args, req) => queryDB(req, "insert into customer SET ?", args).then(data => data),
  deleteCustomer: (args, req) => queryDB(req, "delete from customer where id = ?", [args.id]).then(data => data)
};

// var root = {
//   hello: () => "World"
// };


//we can get the creddential from config folder 
// same as schema but I have hardcoded this too.
app.use((req, res, next) => {
  req.mysqlDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'reactDb'
  });
  req.mysqlDb.connect();
  next();
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));



app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');