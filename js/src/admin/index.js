import app from 'flarum/admin/app';

app.initializers.add('starrating', function(app) {

  app.extensionData
    .for('maimmm-starrating')
    .registerSetting(
      {
        setting: 'maimmm-starrating.coordinates', // This is the key the settings will be saved under in the settings table in the database.
        label: app.translator.trans('maimmm-starrating.admin.coordinates_label'), // The label to be shown letting the admin know what the setting does.
        help: app.translator.trans('maimmm-starrating.admin.coordinates_help'), // Optional help text where a longer explanation of the setting can go.
        type: 'boolean', // What type of setting this is, valid options are: boolean, text (or any other <input> tag type), and select. 
      },
      30 // Optional: Priority
    )
});