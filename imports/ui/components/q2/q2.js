import {Entries, Links} from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './q2.html';

Template.q2.onCreated(function () {
  Meteor.subscribe('links.all');
  Meteor.subscribe('entries.student');
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
  },

  ADK(){
    ee = Entries.findOne({$and: [{"studentID": Meteor.userId()}, {"challengeID": "rollerCoaster"},
        {"activityID": "brainstorm"}]});
    // console.log(ee);
    if (ee != undefined) {
      if ("ADK" in ee) { return [ee.ADK.Q1,ee.ADK.Q2, ee.ADK.Q3,ee.ADK.Q4]; }
    }
    else{ return ""; }
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

  'submit .save-car-exploration' (event) {
    //1. prevent default behavior (form submission)
    event.preventDefault();
    //2. get your data
    //either by name (HTML name attribute)
    var option1 = document.getElementById('option1').value;
    var option2 = document.getElementById('option2').value;
    var option3 = document.getElementById('option3').value;

    // if (option1.check){
    //   $('input[id = "option1"]:checked', event.target);
    // }else if (option2.check){
    //   $('input[id = "option2"]:checked', event.target);
    // }else if (option3.check){
    //   $('input[id = "option3"]:checked', event.target);
    // }

    //or by id (HTML id attribute)
    //var inputValue = template.find('#myId').value;
    // $('input[name="mysteryForm"]:checked', event.target)
    console.log(event.target);
    // bbt = document.getElementById("bbox").value;
    // Meteor.call('record.bbox', event.target.bboxData, (error) => {
    //   if (error) { console.error(error.error); }
    //   //callback stuff in here
    // });
  }
});
