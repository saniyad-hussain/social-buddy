import React, { useEffect, useState, createContext } from 'react';
export const userData = createContext();
const UserInfo = () => {
	const [photos, setPhotos] = useState([]);
	useEffect(() => {
		fetch('https://randomuser.me/api/?results=1')
			.then((res) => res.json())
			.then((data) => setPhotos(data.results));
	}, []);

	return (
		<div>
			{photos.map((photo) => (
				<img src={photo.picture.thumbnail} />
			))}
		</div>
	);
};

export default UserInfo;
