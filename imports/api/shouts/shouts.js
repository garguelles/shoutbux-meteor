import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Shouts = new Mongo.Collection('shouts');
