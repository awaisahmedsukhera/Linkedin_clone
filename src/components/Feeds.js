import React, {useEffect, useState} from 'react'
import FeedsInputs from './FeedsInputs';
import FeedPosts from "./FeedPosts";
import { db } from "../server/firestore";
import "../assets/styles/Feeds.css"
import FlipMove from "react-flip-move"


const Feeds = () => {
	const [Posts, setPosts]= useState([]);
	useEffect(()=>{
		db.collection("posts")
		.orderBy("publishedAt","desc")
		.onSnapshot((snapshot)=>
		  setPosts(
			snapshot.docs.map((doc)=>({
			Avatar: doc.data().Avatar,
			Description: doc.data().Description,
			Message: doc.data().Message,
			Name: doc.data().Name,
			id: doc.id,
		}))
		)
		)
	},[]);

	useEffect(()=>{
		console.log(Posts);
	},[Posts]);

	return (
		<div className='feedscontainer'>
			<FeedsInputs/>
			<FlipMove>
			{Posts &&
			Posts.map((post)=>(
				<FeedPosts
				key={post.id}
				AvatarURL={post.Avatar}
				Description={post.Description}
				Message={post.Message}
				Name={post.Name}
				/>
			))}
			</FlipMove>
		</div>
	)
}

export default Feeds