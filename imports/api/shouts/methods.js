import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Shouts } from './shouts';

export const postShout = new ValidatedMethod({
  name: 'shouts:post',

  validate: new SimpleSchema({
    body: { type: String, max: 32 }
  }).validator(),

  run({ body }) {
    if (!this.userId)
      throw new Meteor.Error('shouts.post.unauthorized',
                            'Not Logged In');
    Shouts.insert({
      body,
      userId: this.userId,
      dateCreated: new Date()
    });
  }
});
