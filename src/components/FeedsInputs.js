import {Avatar} from "@material-ui/core";
import React, {useState} from 'react'
import Feedsinputoption from './Feedsinputoption'
import "../assets/styles/Feeds.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import DescriptionIcon from '@material-ui/icons/Description';
import PhotoIcon from '@material-ui/icons/Photo';
import {db} from '../server/firestore'
import firebase from "firebase"
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

const FeedsInputs = () => {
	const user = useSelector(selectUser);
	const [EnterPost , setEnterPost] = useState("")

	const InputChangeHandler = (event) => {
		setEnterPost(event.target.value)
	}


	const createposthandler = (e) => {
		e.preventDefault()
		db.collection("posts").add({
			Name: user.FullName,
			Description: user.Email,
			Message: EnterPost,
			Avatar: user.ProfileURL == null ? "" : user.ProfileURL,
			publishedAt: firebase.firestore.FieldValue.serverTimestamp(),
		})
		.catch(()=>alert("OOPS! There was an error storing the data in the database"))
		
		setEnterPost("")
	}

	return (
		<div className='feedsInput_container'>
			<div className='feedsinput_writeplace'>
					<AccountCircleIcon className='avatar'/>
				<div className='feedsinputs_textcontainer'>
					<form action="">
						<input type="text" placeholder='Start a Post' className='feed_input' value={EnterPost} onChange={InputChangeHandler}/>
						<input type='submit' onClick={createposthandler} style={{display:'none'}}/>
					</form>
				</div>
			</div>
			<div className="feeds_option">
				<Feedsinputoption Title='Photo' Icon={PhotoIcon} color='#70b5f9'/>
	  	     	<Feedsinputoption Title='Video' Icon={YouTubeIcon} color='#7fc15e'/>
				<Feedsinputoption Title='Event' Icon={EventNoteIcon} color='#e7a33e'/>
				<Feedsinputoption Title='Write article' Icon={DescriptionIcon} color='#fc9295'/>
			</div>

		</div>
	)
}

export default FeedsInputs