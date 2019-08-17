const auth = require('./auth.controller');
const user = require('./user.controller');
const mentor = require('./mentor.controller');
const manager = require('./manager.controller');
const shg = require('./shg.controller');

module.exports = {
    auth,
    user,
    mentor,
    manager,
    shg
};