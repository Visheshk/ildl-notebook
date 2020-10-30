import { Links } from '/imports/api/links/links.js';
import { Entries } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './q1.html';

Template.q1.onCreated(function () {
  Meteor.subscribe('links.all');
  Meteor.subscribe('entries.student');
});

Template.q1.helpers({

  bboxText() {
    //TODO: possible alternate way - pass data down from page template, rather than retrieve it from mongo on every page
    // console.log(Meteor.userId());
    ee = Entries.findOne({$and: [{"studentID": Meteor.userId()}, {"challengeID": "rollerCoaster"},
      {"activityID": "brainstorm"}]});
    // console.log(ee);
    if (ee != undefined) {
      if ("info" in ee) { return ee.info.box; }
    }
    else{ return ""; }
    
  }
});

Template.q1.events({
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
    // console.log(event.target);
    bbt = document.getElementById("bbox").value;

    Meteor.call('record.bbox', bbt, (error) => {
      if (error) { console.error(error.error); }
      // else { }
    });
  }
});
