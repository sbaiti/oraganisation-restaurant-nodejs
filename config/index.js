var configValues = require('./config');

module.exports = {
    getDbConnectionString: function () {
        return 'mongodb://' + configValues.uname +
            ':' + configValues.pwd + '@ds161426.mlab.com:61426/first-database';
    }
}