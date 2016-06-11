import { Meteor } from 'meteor/meteor';
import { Shouts } from '../shouts';

Meteor.publish('shouts', function () {
  if (this.userId) {
    return Shouts.find();
  } else {
    return this.ready();
  }
});
