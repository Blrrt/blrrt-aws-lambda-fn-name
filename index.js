'use strict';

module.exports = function (prefix, env, name, version) {
  return prefix + '__' + env + '__' + name + '__v' + version.replace(/\./g, '_');
};
