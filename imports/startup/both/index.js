// Import modules used by both client and server through a single index entry point
// e.g. useraccounts configuration file.
import { FlowRouter } from 'meteor/kadira:flow-router';

AccountsTemplates.configure({
  confirmPassword: false,
  overrideLoginErrors: false,
  lowercaseUsername: true,
  showForgotPasswordLink: true,
  homeRoutePath: '/',
  onSubmitHook: ( error, state ) => {
      if ( !error && state === 'signIn' ) {
          // login successful, route to index
          console.log("sign in?");
          FlowRouter.go('/rollerCoaster/?challenge=1&activity=q1');
      }
      console.log(state);
  },
  onLogoutHook: ( error, state ) => {
      FlowRouter.go('/');
  }
});

// AccountsTemplates.removeField('email');
// AccountsTemplates.addField({
    // _id: 'name',
    // type: 'text',
    // displayName: "Full Name",
    // func: function(value){return value !== 'Full Name';},
    // errStr: 'Only "Full Name" allowed!',
// });

AccountsTemplates.addField({
    _id: 'username',
    type: 'text',
    required: true,
    func: function(value){
      if (Meteor.isClient) {
          console.log("Validating username...");
          var self = this;
          // Meteor.call("userExists", value, function(err, userExists){
          //     if (!userExists)
          //         self.setSuccess();
          //     else
          //         self.setError(userExists);
          //     self.setValidating(false);
          // });
          return;
      }
      // Server
      // return Meteor.call("userExists", value);
    },
});

