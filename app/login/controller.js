import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  loginUser(params) {
    this.get(`session`).authenticate(`authenticator:application`, params.email, params.password)
      .then(() => {
        console.log('logged in');
      }).catch((err) => {
        console.log(err);
      });
  },
});
