const { createEvent } = require("./createEvent");

const resolvers = {
    events: () => ["Coding", "Chess", "Movie"],
    createEvent: createEvent,
};

module.exports = resolvers;
