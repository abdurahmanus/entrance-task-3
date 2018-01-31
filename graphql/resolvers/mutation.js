const { models, sequelize } = require('../../models');

module.exports = {
  // User
  createUser (root, { input }, context) {
    return models.User.create(input);
  },

  updateUser (root, { id, input }, context) {
    return models.User.findById(id).then(user => {
      return user.update(input);
    });
  },

  removeUser (root, { id }, context) {
    return models.User.findById(id).then(user => user.destroy());
  },

  // Room
  createRoom (root, { input }, context) {
    return models.Room.create(input);
  },

  updateRoom (root, { id, input }, context) {
    return models.Room.findById(id).then(room => {
      return room.update(input);
    });
  },

  removeRoom (root, { id }, context) {
    return models.Room.findById(id).then(room => room.destroy());
  },

  // Event
  createEvent (root, { input, usersIds, roomId }, context) {
    return sequelize
      .transaction(t =>
        models.Event.create(input, { transaction: t })
          .then(event => event.setRoom(roomId, { transaction: t }))
          .then(event =>
            event
              .setUsers(usersIds, { transaction: t })
              .then(eventsUsers => event)
          )
      )
      .catch(_ => { throw Error('Something goes wrong'); });
  },

  updateEvent (root, { id, input }, context) {
    return models.Event.findById(id).then(event => {
      return event.update(input);
    });
  },

  removeUserFromEvent (root, { id, userId }, context) {
    return models.Event.findById(id).then(event => {
      return event.removeUser(userId).then(() => event);
    });
  },

  addUserToEvent (root, { id, userId }, context) {
    return models.Event.findById(id).then(event => {
      return event.addUser(userId).then(() => event);
    });
  },

  changeEventRoom (root, { id, roomId }, context) {
    return models.Event.findById(id).then(event => {
      return event.setRoom(roomId).then(e => e);
    });
  },

  removeEvent (root, { id }, context) {
    return models.Event.findById(id).then(event => event.destroy());
  }
};
