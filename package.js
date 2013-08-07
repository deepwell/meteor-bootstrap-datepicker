Package.describe({
  summary: 'Widget for displaying a calendar date picker'
});

Package.on_use(function (api, where) {
  api.add_files('lib/js/bootstrap-datepicker.js', 'client');
  api.add_files('lib/css/datepicker.css', 'client');
});
