// load router
const bankRouter = require('./bank.router');
const busRouter = require('./bus.router');
const busTypeRouter = require('./bustype.router');
const reservationRouter = require('./reservation.router');
const routeRouter = require('./route.router');
const scheduleRouter = require('./schedule.router');
const stationRouter = require('./station.router');
const userRouter = require('./user.router');

// router mapping
const routeList = {
    "/bank": bankRouter,
    "/bus": busRouter,
    "/bustype": busTypeRouter,
    "/reservation": reservationRouter,
    "/route": routeRouter,
    "/schedule": scheduleRouter,
    "/station": stationRouter,
    "/user": userRouter,
};

// register routers
module.exports = {
    register(app) {
        for (let address in routeList)
            app.use(address,routeList[address]);
    }
};;