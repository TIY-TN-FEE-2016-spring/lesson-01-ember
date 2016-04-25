import Ember from 'ember';

export default Ember.Controller.extend({
  createNewUser(attrs) {
    const user = this.store.createRecord(`end-user`, attrs);

    user.save().then(() => {
      this.transitionToRoute(`login`);
    });
  },
});
