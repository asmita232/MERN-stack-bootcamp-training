const mongoose = require('mongoose');

// create models
require( '../models/Article' );
require('../models/Comment')
require('../models/ArticleWithComments')

mongoose.connect( 'mongodb://localhost/blog', 
{ 
  useNewUrlParser: true,
  useUnifiedTopology: true 
} );

const connection = mongoose.connection;

connection.on( 'error', console.error.bind( console, 'connection error:') );

connection.on('open', function() {
  console.log( 'connected to mongodb database' );
});

// module.exports = connection;