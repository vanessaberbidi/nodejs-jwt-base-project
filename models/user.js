const connect = require('./connection');

const registerUser = async (username, password) =>
  connect()
    .then((db) => db.collection('users').insertOne({ username, password }))
    .then((result) => result.ops[0]);

const findUser = async (username) =>
  connect()
    .then((db) => db.collection('users').findOne({ username }));

module.exports = { registerUser, findUser };
