'use strict';

const SwaggerExpress = require('swagger-express-mw');
const passport = require('passport');
const app = require('express')();

const config = {
  appRoot: __dirname // required config
};

require('./initializers/passport');

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  app.use(passport.initialize());
  swaggerExpress.register(app);

  const port = process.env.PORT || 10010;
  app.listen(port);

  console.log(`Listening on port ${port}`);
});

module.exports = app; // for testing
