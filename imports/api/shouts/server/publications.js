import { Meteor } from 'meteor/meteor';
import { Shouts } from '../shouts';

Meteor.publishComposite('shouts', function () {
  if (this.userId) {
    return {
      find() {
        return Shouts.find();
      },
      children: [{
        find(shout) {
          return Meteor.users.find({ _id: shout.userId });
        }
      }]
    }
  } else {
    return this.ready();
  }
});
