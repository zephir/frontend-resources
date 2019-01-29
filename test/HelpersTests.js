const path = require('path'),
      sassTrue = require('sass-true'),
      assert = require('assert');

var helpersFile = path.join(__dirname, 'HelpersTests.scss');
sassTrue.runSass({file: helpersFile}, describe, it);