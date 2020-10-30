import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './q2.html';

Template.q2.onCreated(function () {

});

Template.q2.helpers({
  queries() {
    qq = [
      "If the mass is greater, the applied force needed to lift the cars to the top will be greater.",
      "Potential energy is not related to work",
      "If there is friction, some energy will be transformed into less useful forms when doing work.",
      "Friction does not affect applied force, work, or energy."
    ]
    return qq;
  }
});

Template.q2.events({
  'submit .info-link-add'(event) {
    event.preventDefault();

    const target = event.target;
    const title = target.title;
    const url = target.url;

    Meteor.call('links.insert', title.value, url.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        title.value = '';
        url.value = '';
      }
    });
  },

  'submit .save-bstorm' (event) {
    event.preventDefault();
    console.log(event.target);
    // Meteor.call('record.bbox', event.target.bb oxData, (error) => {
      //callback stuff in here
    // })''
  }
});
