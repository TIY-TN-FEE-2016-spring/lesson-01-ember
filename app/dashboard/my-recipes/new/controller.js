import Ember from 'ember';

export default Ember.Controller.extend({
  saveRecipe({ title, ingredients, steps }) {
    const recipe = this.store.createRecord(`recipe`, { title });

    recipe.save().then(() => {
      // Take array of ingredient POJOs turn into array of Promises
      const ingredientModels = ingredients.map((ingredient) => {
        // Create a new record with ingredient properties and recipe relation
        const iModel = this.store.createRecord(`ingredient`, { ...ingredient, recipe });

        // Return promise from saving model
        return iModel.save();
      });

      // Take array of step POJOs turn into array of Promises
      const stepModels = steps.map((step, order) => {
        // Create a new record with step properties and recipe relation
        const sModel = this.store.createRecord(`step`, { ...step, order, recipe });

        // Return promise from saving model
        return sModel.save();
      });

      // Wait for all ingredients and steps to finish saving before moving on
      return Promise.all([...ingredientModels, ...stepModels]);
    }).then(() => {
      this.transitionToRoute(`dashboard.my-recipes.index`);
    });
  },
});
