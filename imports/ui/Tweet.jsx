import React, {Component} from 'react';
import Meteor from 'meteor/meteor';


export default class Tweet extends Component {

	render() {
		console.log(this.props);
		return (
				<div className="tweet">
					<img className="profile_pic" src={this.props.tweet.user.profile_image_url} alt={this.props.tweet.user.screen_name + " user profile image"}/>
					<div className="text">{this.props.tweet.text}</div>
					<div className="user_name">{this.props.tweet.user.screen_name}</div>
					<div className="name">{this.props.tweet.user.name}</div>
					<div className="date">{new Date(this.props.tweet.created_at).toLocaleString()}</div>
				</div>
			);
	}
}