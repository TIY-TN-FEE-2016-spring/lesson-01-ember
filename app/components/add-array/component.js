import Ember from 'ember';

export default Ember.Component.extend({
  items: [],

  init() {
    this._super(...arguments);

    this.addItem();
  },

  addItem() {
    this.set(`items`, [...this.items, {}]);

    this.onadd(this.items);
  },
});
