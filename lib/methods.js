Meteor.methods({
   newContact: function (firstname, lastname, email, number, city) {
    
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

  editContact: function (firstname, lastname, email, number, city, id) {
    
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Contacts.update(
      {_id: id},
      {$set: {
        owner: Meteor.userId(), 
        contactFN: firstname,
        contactLN: lastname,
        contactEmail: email,
        contactNumber: number,
        contactCity: city,
      }}
    );
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

