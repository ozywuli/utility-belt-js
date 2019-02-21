'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extractRootDomain = require('./extractRootDomain');

var _extractRootDomain2 = _interopRequireDefault(_extractRootDomain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extractSecondLevelName(url) {
    var rootDomain = (0, _extractRootDomain2.default)(url);

    return rootDomain.split('.')[0];
}

exports.default = extractSecondLevelName;