// eslint-disable-next-line @typescript-eslint/no-var-requires
const rewireEslint = require('react-app-rewire-eslint');

module.exports = function override(config, env) {
  // eslint-disable-next-line no-param-reassign
  config = rewireEslint(config, env);
  return config;
};
