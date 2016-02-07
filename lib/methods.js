Meteor.methods({
   newContact: function (firstname, lastname, email, number, city, owner, date) {
    
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Contacts.insert({
        owner: Meteor.userId(), 
        contactFN: firstname,
        contactLN: lastname,
        contactEmail: email,
        contactNumber: number,
        contactCity: city,
        lastContactDate: new moment().format('MMM Do, YYYY'),
    });
  },

  deleteContact: function (id) {
    Contacts.remove({_id: id});
  },

  refreshDate: function (id) {
    Contacts.update(
      {_id: id},
      {$set: {
        lastContactDate: new moment().format('MMM Do, YYYY'),
      }}
    );
  },

  // isOwner: function () {
  //   return this.owner === Meteor.userId();
  // },
});

