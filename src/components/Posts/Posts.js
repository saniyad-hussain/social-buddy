import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
});

const Posts = (props) => {
	const classes = useStyles();
	const { id, body } = props.post;
	return (
		<Grid item xs={3}>
			<Card className={classes.root}>
				<CardActionArea>
					{/* <CardMedia className={classes.media} image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" /> */}
					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							{body.substring(0, 45)}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Link to={`/post/${id}`}>
						<Button size="small" color="primary">
							See More
						</Button>
					</Link>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default Posts;
