Package.describe({
  summary: 'Widget for displaying a calendar date picker',
  version: '1.3.0',
  name: 'deepwell:bootstrap-datepicker2',
  git: 'https://github.com/deepwell/meteor-bootstrap-datepicker.git'
});

Package.onUse(function (api, where) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('jquery');

  api.addFiles('lib/js/bootstrap-datepicker.js', 'client');
  api.addFiles('lib/css/datepicker.css', 'client');
});
