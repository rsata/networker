Router.configure({
  layoutTemplate: 'layout',
});

Router.route('/', function() {
  this.render('index');
});

Router.route('/new', function() {
  this.render('newContact');
});

Router.route('/edit/:_id', function() {
  this.render('editContact', {data: Contacts.findOne({_id: this.params._id})});
});

// Router.route('/pickup/:_id', function () {
//   var pickupID = this.params._id;
//   var pickupLocation = Pickup.findOne({_id: pickupID});
//   this.render('map2', {data: pickupLocation});
//   // Don't need this anymore?
// });