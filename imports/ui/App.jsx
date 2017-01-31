import React, {Component, PropTypes} from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

import {Tweets} from '../api/tweet.js';

import Tweet from './Tweet.jsx';

class App extends Component {
	renderTweets() {
		console.log("render");
		// console.log(Tweets.find().fetch());
		return this.props.tweets.map((t) => (
			<Tweet key={t._id} tweet={t} />
		));
	}

	addTweet(event) {
		event.preventDefault();
		console.log(this);
		Tweets.insert({
			"id": this.refs.id.value.trim(),
			"name":this.refs.name.value.trim()
		})
	}
	render() {
		console.log(this.props);
		return (
			<div>
				<h1>Tweets</h1>
				<div>
					{this.renderTweets()}
				</div>
				<form onSubmit={this.addTweet.bind(this)}>
					<input type="text"
						ref="id"/>
					<input type="text"
						ref="name"
						placeholder="name"/>
					<input type="submit" value="submit"/>
				</form>
			</div>
			);
	}
}

App.propTypes = {
	tweets: PropTypes.array.isRequired,
};

export default createContainer(() => {
  var handle = Meteor.subscribe("mainApp_tweet");
	console.log(Tweets.find({}).fetch());
	return {
		tweets: Tweets.find({}).fetch() ,
		ready:  handle.ready(),
	};
}, App);

