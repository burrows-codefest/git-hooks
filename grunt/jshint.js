'use strict';

module.exports = function () {
  return {
    options: {
      jshintrc: true
    },
    all: [
      'Gruntfile.js',
      'node/**/*'
    ]
  };
};