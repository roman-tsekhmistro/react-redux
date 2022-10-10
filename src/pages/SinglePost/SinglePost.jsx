import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchComments, fetchSinglePost } from '../../redux/thunk/singlePostAndComments';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './SinglePost.module.scss';
import image1 from '../../assets/images/PostRandomImages/wallhaven-4o17g5.jpg';
import image2 from '../../assets/images/PostRandomImages/wallhaven-2kk589.jpg';
import image3 from '../../assets/images/PostRandomImages/wallhaven-42qxzy.jpg';
import image4 from '../../assets/images/PostRandomImages/wallhaven-96g9kx.jpg';
import image5 from '../../assets/images/PostRandomImages/wallhaven-572zv7.jpg';
import image6 from '../../assets/images/PostRandomImages/wallhaven-g79rpl.jpg';
import image7 from '../../assets/images/PostRandomImages/wallhaven-k7dpyq.jpg';
import image8 from '../../assets/images/PostRandomImages/wallhaven-lq6xj2.jpg';
import image9 from '../../assets/images/PostRandomImages/wallhaven-yjqe2x (2).jpg';
import image10 from '../../assets/images/PostRandomImages/wallhaven-nzvlmy.jpg';
import { RotatingLines } from 'react-loader-spinner';
import Comments from '../../components/Comments';

export default function SinglePost() {
	const { postId } = useParams();
	const navigate = useNavigate();
	const currentPost = useSelector(state => state.singlePostReducer.post);
	const dispatch = useDispatch();
	const arrWithImagesForHeader = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
	const randomImageForHeader = arrWithImagesForHeader[Math.floor(Math.random() * arrWithImagesForHeader.length)];
	const [prevBtnState, setPrevBtnState] = useState(false);
	const [nextBtnState, setNextBtnState] = useState(false);

	useEffect(() => {
		dispatch(fetchSinglePost(postId));
		dispatch(fetchComments(postId));
		+postId === 1 ? setPrevBtnState(true) : setPrevBtnState(false);
		+postId === 50 ? setNextBtnState(true) : setNextBtnState(false);
	}, [dispatch, postId]);

	const routToPrevPost = () => {
		return navigate(`/blog/${+postId - 1}`);
	};

	const routToNextPost = () => {
		return navigate(`/blog/${+postId + 1}`);
	};

	return currentPost ? (
		<div className={styles.container}>
			<h1> Post #{currentPost.id}</h1>
			<img
				src={randomImageForHeader}
				alt='Pict for single post'
			/>
			<header>Title: {currentPost.title}</header>
			<p className={styles.text}>
				<strong>Text:</strong> {currentPost.body}
			</p>
			<Comments />
			<footer className={styles.footer}>
				<button
					className={styles.btn}
					onClick={routToPrevPost}
					disabled={prevBtnState}>
					Prev
				</button>
				<Link
					to='/blog'
					className={styles.btn}>
					Back to all posts
				</Link>
				<button
					className={styles.btn}
					onClick={routToNextPost}
					disabled={nextBtnState}>
					Next
				</button>
			</footer>
		</div>
	) : (
		<div className={styles.spinner}>
			<RotatingLines
				strokeColor='#5932ea'
				strokeWidth='5'
				animationDuration='0.75'
				width='50'
				visible={true}
			/>
		</div>
	);
}
