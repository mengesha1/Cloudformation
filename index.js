   
vartime = require('time');
exports.handler = (event, context, callback) => {​​​​​
varcurrentTime = newtime.Date(); 
currentTime.setTimezone("America/Los_Angeles");
callback(null, {​​​​​
statusCode:'200',
body:'Major, The time in Los Angeles is: ' + currentTime.toString(),
}​​​​​);
}​​​​​;
