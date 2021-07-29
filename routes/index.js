module.exports = (app) => {
    require('./main.routes')(app);
    require('./sub.routes')(app);
}