import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';
import Comments from '../Comments/Comments';

const PostDetail = () => {
	const { id } = useParams();
	const [detail, setDetail] = useState({});
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((res) => res.json())
			.then((data) => setDetail(data));
	}, []);
	const [comments, setComments] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/comments')
			.then((res) => res.json())
			.then((data) => setComments(data));
	}, []);
	const commentOfPost = comments.filter((comment) => comment.postId === detail.id);
	const containerStyle = {
		padding: '30px',
	};

	return (
		<Container maxWidth="sm" style={containerStyle}>
			<Typography variant="h5">{detail.title}</Typography>
			<Typography>{detail.body}</Typography>
			<h4>Comments:</h4>
			{commentOfPost.map((cm) => (
				<Comments comment={cm}></Comments>
			))}
		</Container>
	);
};

export default PostDetail;
