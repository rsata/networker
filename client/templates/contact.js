Template.contact.events({
  'click #refreshDate': function (event) {
    event.preventDefault();
    var id = this._id;
    Meteor.call('refreshDate', id);
  },

  'click #delete': function (event) {
    event.preventDefault();
    var id = this._id;
    Meteor.call('deleteContact', id);
  },

});