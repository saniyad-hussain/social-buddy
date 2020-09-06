import React, { createContext, useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PostArea from '../PostArea/PostArea';
import NoMatch from '../NoMatch/NoMatch';
import PostDetail from '../PostDetail/PostDetail';
export const postData = createContext();

const Main = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);
	return (
		<postData.Provider value={posts}>
			<Router>
				<Switch>
					<Route path={'/posts'}>
						<PostArea></PostArea>
					</Route>
					<Route exact path={'/'}>
						<PostArea></PostArea>
					</Route>
					<Route path="/post/:id">
						<PostDetail></PostDetail>
					</Route>
					<Route path="*">
						<NoMatch />
					</Route>
				</Switch>
			</Router>
		</postData.Provider>
	);
};

export default Main;
