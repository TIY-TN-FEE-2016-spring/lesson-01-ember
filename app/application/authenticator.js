import Loopback from 'ember-simple-auth-loopback/authenticators/loopback';
import config from 'lesson-01-ember/config/environment';

export default Loopback.extend({
  loginEndpoint: `${config.apiHost}/api/end-users/login`,
});
