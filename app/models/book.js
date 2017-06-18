import Model from 'ember-data/model';
import attr from 'ember-data/attr';


export default Model.extend({
  title: attr('string'),
  author: attr('string'),
  year: attr('number'),
  image: attr('string'),
  blurb: attr('string')
});
