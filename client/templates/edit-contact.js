console.log(this._id)
Template.editContact.helpers ({
  formData: function () {
    return Contacts.findOne({_id: this._id});    
  }
});

Template.editContact.events({
  "submit .editEntry": function (event) {

    event.preventDefault();

    var firstname = event.target.firstname.value;
    var lastname = event.target.lastname.value;
    var email = event.target.email.value;
    var number = event.target.number.value;
    var city = event.target.city.value;

    var id = this._id;

    Meteor.call('editContact', firstname, lastname, email, number, city, id);

    event.target.firstname.value = "";
    event.target.lastname.value = "";
    event.target.email.value = "";
    event.target.number.value = "";
    event.target.city.value = "";

    Router.go('/');

      // Prevent default form submit
      // return false;

    }
  });
