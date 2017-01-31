import {Mongo} from 'meteor/mongo';

export const Tweets = new Mongo.Collection("mainApp_tweet");

// if (Meteor.isServer) {
//   // This code only runs on the server
//   Meteor.publish('mainApp_tweet', function tweetsPublication() {
//     return Tweets.find();
//   });
// }