"use strict";

var moment = require('moment');

module.exports = {
	ago: function(parseTime) {
    var postTime = moment.utc(parseTime);
    var now = moment.utc();
    return moment.duration(now.diff(postTime)).humanize();
  }
};
