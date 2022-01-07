const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project1",
};

async function adduser(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let addquery = `insert into MESSAGE(records)values(?)`;
  connection.query(addquery, [user.record]);

  console.log("RECORD ADDED");

  await connection.endAsync();
}

module.exports = { adduser };
