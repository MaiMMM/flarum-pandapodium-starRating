import Model from 'flarum/common/Model';

// For more details about frontend models
// checkout https://docs.flarum.org/extend/models.html#frontend-models

export default class saveRating extends Model {
  title = Model.attribute('title');
  createdAt = Model.attribute('createdAt', Model.transformDate);
}
