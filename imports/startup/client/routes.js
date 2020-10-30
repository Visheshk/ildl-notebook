// import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'home',
  action() {
    // BlazeLayout.render('App_body', { main: 'App_home' });
    FlowRouter.go('/rollerCoaster?challenge=1&activity=q1');
  },
});

FlowRouter.route('/:notebookState', {
  name: 'notebookPage',
  action(params, queryParams) {
    console.log("p: ", params);
    console.log("q: ", queryParams);
    validActs = ["q1", "q2", "q3", "q4"];
    if (validActs.includes(queryParams.activity)){
      BlazeLayout.render('App_body', { main: 'App_home', qp: queryParams.activity});
    }
    else {
      FlowRouter.go('home');
    }
    
  }
});

// FlowRouter.route('/:notebook?challenge=1&activity=1')


FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
