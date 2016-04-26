import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(`session`),

  model() {
    // Get user id from the session
    const userId = this.get(`session.data.authenticated.userId`);

    // Filter where user id is the current user id
    return this.store.query(`recipe`, {
      filter: {
        where: {
          'user-id': userId,
        },
      },
    });
  },
});
