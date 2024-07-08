import app from 'flarum/admin/app';

app.initializers.add('maimmm-star-rating', function(app) {

  app.extensionData
    .for('maimmm-star-rating')
    .registerSetting(
      {
        setting: 'maimmm-star-rating.tag', // This is the key the settings will be saved under in the settings table in the database.
        label: app.translator.trans('Tags to include(leave empty to make this feature global)'), // The label to be shown letting the admin know what the setting does.
        help: app.translator.trans('This feature will be available tags entered below'), // Optional help text where a longer explanation of the setting can go.
        placeholder: 'example: tag1 tag2 tag3',
        type: 'text', // What type of setting this is, valid options are: boolean, text (or any other <input> tag type), and select. 
        tagScoped: true, // Whether or not this setting should be saved on a per-tag basis.
      },
    )
});