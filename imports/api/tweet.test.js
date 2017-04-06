/* eslint-env mocha */

import {Meteor} from "meteor/meteor";
import {Tweets} from "./tweet.js";
import { assert } from 'meteor/practicalmeteor:chai';



describe("Tweet", function () {

	beforeEach(function () {
		Tweets.remove({});
		Tweets.insert({id:1, text:"John"});
		Tweets.insert({id:2, text:"El Creativo"});
	})


	it("Should find tweets", function () {
		const result = Tweets.find({});
		assert.equal(result.count(), 2);
	});
});


