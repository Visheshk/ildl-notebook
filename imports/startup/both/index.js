// Import modules used by both client and server through a single index entry point
// e.g. useraccounts configuration file.
AccountsTemplates.configure({
  confirmPassword: false,
  overrideLoginErrors: false,
  lowercaseUsername: true,
  showForgotPasswordLink: true,
  homeRoutePath: '/'
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

