import './home.html';

import '../../components/hello/hello.js';
import '../../components/info/info.js';

import '../../components/q1/q1.js';
import '../../components/q2/q2.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.App_home.helpers({
//   activityInfo() {
//     // return FlowRouter
//     console.log(this);
//   }
  activities() {
    acts = {
      "q1": {"activityText": "Activity 1", "activeState": ""},
      "q2": {"activityText": "Activity 2", "activeState": ""},
      "q3": {"activityText": "Activity 3", "activeState": ""},
    };

    console.log("flow router", FlowRouter.getQueryParam("activity"))
    acts[FlowRouter.getQueryParam("activity")]["activeState"] = "active";

    return Object.values(acts);
  }

})


Template.App_home.events({
 'click .actChoice'(event) {
   a = "q" + (event.target.innerHTML).slice(-1);
   console.log(a);
   FlowRouter.setQueryParams({"activity": a});
 }
})