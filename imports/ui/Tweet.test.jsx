import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';

import Tweet from './Tweet.jsx';
import {Tweets} from "../api/tweet.js";


Factory.define("tweet", Tweets, {});

describe("Tweet", function () {



	it("Renders correctly", function () {
		const tweet = Factory.build('tweet', { "_id" :  "588a17e8f8225e1428acd075" , "favorited" : false, "contributors" : null, "truncated" : false, "text" : "testing #webDev @uniandes", "is_quote_status" : false, "in_reply_to_status_id" : null, "user" : { "follow_request_sent" : null, "profile_use_background_image" : true, "default_profile_image" : false, "id" : 2456657174, "verified" : false, "profile_image_url_https" : "https://pbs.twimg.com/profile_images/781654425425379328/Vg_gQbey_normal.jpg", "profile_sidebar_fill_color" : "DDEEF6", "profile_text_color" : "333333", "followers_count" : 535, "profile_sidebar_border_color" : "C0DEED", "id_str" : "2456657174", "profile_background_color" : "C0DEED", "listed_count" : 1, "profile_background_image_url_https" : "https://abs.twimg.com/images/themes/theme1/bg.png", "utc_offset" : -25200, "statuses_count" : 971, "description" : "Tweetometro monitorea el estado de las conversaciones en Twitter acerca del #Plebiscito en #Colombia #AcuerdoDePaz", "friends_count" : 487, "location" : null, "profile_link_color" : "1DA1F2", "profile_image_url" : "http://pbs.twimg.com/profile_images/781654425425379328/Vg_gQbey_normal.jpg", "following" : null, "geo_enabled" : false, "profile_banner_url" : "https://pbs.twimg.com/profile_banners/2456657174/1475203542", "profile_background_image_url" : "http://abs.twimg.com/images/themes/theme1/bg.png", "name" : "Tweetometro", "lang" : "es", "profile_background_tile" : false, "favourites_count" : 22, "screen_name" : "TweetometroCo", "notifications" : null, "url" : "http://Paz.tweetometro.co", "created_at" : "Mon Apr 21 14:07:06 +0000 2014", "contributors_enabled" : false, "time_zone" : "Arizona", "protected" : false, "default_profile" : true, "is_translator" : false }, "filter_level" : "low", "geo" : null, "id" : 824642605669642240, "favorite_count" : 0, "lang" : "en", "entities" : { "user_mentions" : [ { "id" : 44151017, "indices" : [ 16, 25 ], "id_str" : "44151017", "screen_name" : "Uniandes", "name" : "Uniandes" } ], "symbols" : [], "hashtags" : [ { "indices" : [ 8, 15 ], "text" : "webDev" } ], "urls" : [] }, "in_reply_to_user_id_str" : null, "retweeted" : false, "coordinates" : null, "timestamp_ms" : "1485445092967", "source" : "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>", "in_reply_to_status_id_str" : null, "in_reply_to_screen_name" : null, "id_str" : "824642605669642240", "place" : null, "retweet_count" : 0, "created_at" : "Thu Jan 26 15:38:12 +0000 2017", "in_reply_to_user_id" : null });

		const result  = shallow(<Tweet tweet={tweet} /> );

	  chai.assert(result.hasClass('tweet'));
	})
})