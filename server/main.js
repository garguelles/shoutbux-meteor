import { Meteor } from 'meteor/meteor';

// Shouts
import { Shouts } from '../imports/api/shouts/shouts';
import '/imports/api/shouts/server/publications';
import '/imports/api/shouts/methods';

Meteor.startup(() => {
  // code to run on server at startup
});
