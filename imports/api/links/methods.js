// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';
import { Entries } from './links.js';

Meteor.methods({
  'links.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Links.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },

  'record.bbox'(text) {
    ///<test>
    return Entries.update({$and: [
      {"studentID": Meteor.userId()},
      {"challengeID": "rollerCoaster"},
      {"activityID": "brainstorm"},
    ]},
    {$set: 
      { "info": { "box": text } }
    },
    {$set:
      { "ADK": {"Q1": text, "Q2": text, "Q3": text, "Q4": text}}
    },
    {upsert: true});
  }


});
