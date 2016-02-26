Meteor.subscribe("contacts");

Template.index.helpers({
  contacts: function () {
  return Contacts.find();
},

loggedInUser: function () {
  return Meteor.user().username || Meteor.user().profile.name || Meteor.userId().services.google.given_name;
},
});

// Accounts.ui.config({
//     requestPermissions: {},
//     extraSignupFields: [{
//         fieldName: 'first-name',
//         fieldLabel: 'First name',
//         inputType: 'text',
//         visible: true,
//         validate: function(value, errorFunction) {
//           if (!value) {
//             errorFunction("Please write your first name");
//             return false;
//           } else {
//             return true;
//           }
//         }
//     }, {
//         fieldName: 'last-name',
//         fieldLabel: 'Last name',
//         inputType: 'text',
//         visible: true,
//     }]
// });