import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Shouts = new Mongo.Collection('shouts');

Shouts.helpers({
  user() {
    console.log(this, Meteor.users.findOne(this.userId));
    return Meteor.users.findOne(this.userId);
  }
});

export const ShoutSchema = new SimpleSchema({
  userId: { type: String },
  body: { type: String, max: 34 },
  createdAt: { type: Date },
  updatedAt: { type: Date }
});
