import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  amount: attr('number'),
  description: attr(),
  unitOfMeasure: attr(),
  recipe: belongsTo('recipe')
});
