import { Meteor } from 'meteor/meteor';

// Shouts
import { Shouts } from '../imports/api/shouts/shouts';
import '../imports/api/shouts/server/publications';

Meteor.startup(() => {
  // code to run on server at startup
});
