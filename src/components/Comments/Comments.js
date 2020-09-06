import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import UserInfo from '../UserInfo/UserInfo';

const Comments = (props) => {
	const { body } = props.comment;
	const commentStyle = {
		margin: '10px',
	};
	console.log(props);
	return (
		<Card style={commentStyle}>
			<CardContent>
				<UserInfo></UserInfo>
				<h4>{body}</h4>
			</CardContent>
		</Card>
	);
};

export default Comments;
