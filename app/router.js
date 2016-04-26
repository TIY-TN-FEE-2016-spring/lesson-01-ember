import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('logout');
  this.route('register');
  this.route('login');

  this.route('dashboard', {path: '/'}, function() {
    this.route('my-recipes', function() {
      this.route('new');
    });
  });
});

export default Router;
