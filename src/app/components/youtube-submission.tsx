'use client';
import Button from '../ui/button';
import { Component, useState } from 'react';
import Loading from '../ui/loading';

export default function YouTubeSubmission() {
	
	const [tyMessage, setTyMessage] = useState<any | undefined>();
	const [loading, setLoading] = useState<boolean>(false);
	
	const handleClick = () => {
		setLoading(true);
	}

    const handleSubmit = async (formData: any) => {
		
		try {
			const res = await fetch(
				`${process.env.WP_API}/submityt?url=${formData.get("video_url")}`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				}
				);
				const data = await res.json();
				setLoading(false);
				setTyMessage(`Your YouTube video was submitted. Check my Youtube channel in a few days.`);
			return data;
		} catch (err) {
			console.log(err);
		}

    }

	return (
		<>
			<div className="h-10 mx-auto mb-4">
			{
				loading ? 
					<Loading />
				:
					<p className="text-bold text-lg text-center text-purple-light">{tyMessage}</p>
			}
			</div>

			<form action={handleSubmit} name="video-submission" className="trackSubmission__form flex flex-col justify-center items-center">
				
				<label className="playlistsSubmission__trackLabel mb-5">Your Video URL</label>

				<input 
					className="playlistsSubmission__trackURL w-[98%] max-w-[600px] mb-6 text-black"
					type="text"
					id="video_url"
					name="video_url"
					placeholder="https://www.youtube.com/watch?v=KGJYM5IJv-k"
				/>

				<Button type="submit" className="button submit__track" ctaText="Submit" callback="handleSubmit"onClick={handleClick}></Button>
				
			</form>

		</>
	);
}