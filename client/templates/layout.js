Template.layout.events({  
    'click button#loginFacebook': function(e, t) {
        e.preventDefault();

        Meteor.loginWithFacebook({
            requestOfflineToken: 'true'
        }, Router.go('/'));
    },

    'click button#loginGoogle': function(e, t) {
        e.preventDefault();

        Meteor.loginWithGoogle({
            requestOfflineToken: 'true'
        }, Router.go('/'));
    }
});
