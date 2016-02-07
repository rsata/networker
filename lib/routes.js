Router.route('/', function() {
  this.render('index');
});

Router.route('/new', function() {
  this.render('newContact');
});