import React, { useEffect, useState, useContext } from 'react';
import Container from '@material-ui/core/Container';
import Posts from '../Posts/Posts';
import Grid from '@material-ui/core/Grid';
import { postData } from '../Main/Main';

const PostArea = () => {
	const posts = useContext(postData);
	return (
		<Container>
			<Grid container spacing={3}>
				{posts.map((post) => (
					<Posts post={post}></Posts>
				))}
			</Grid>
		</Container>
	);
};

export default PostArea;
