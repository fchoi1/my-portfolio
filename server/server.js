global.base_dir = __dirname;
global.abs_path = function (path) {
  return base_dir + path;
};
global.include = function (file) {
  return require(abs_path('/' + file));
};

const express = require('express');
const path = require('path');
const db = include('config/connection');

// const { authMiddleware } = require('./utils/auth');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = include('schemas');

const PORT = process.env.PORT || 3001;
const app = express();

// startServer();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// serve up react front-end in production
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

// app.use(routes);

// db.once('open', () => {
app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });
