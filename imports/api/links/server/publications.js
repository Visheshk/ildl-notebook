// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Links } from '../links.js';
import { Entries } from '../links.js';

Meteor.publish('links.all', function () {
  return Links.find();
});


Meteor.publish('entries.student', function () {
  return Entries.find({"studentID": Meteor.userId()});
})