'use client';
import Button from '../ui/button';
import { useState } from 'react';
import Loading from '../ui/loading';

export default function YouTubeSubmission() {
	
	const [tyMessage, setTyMessage] = useState<any | undefined>();
	const [loading, setLoading] = useState<boolean>(false);
	
	const handleClick = () => {
		setLoading(true);
	}

	const submitData = async (formData: any) => {

		if(formData.get("video_url") === null || formData.get("video_url") === '') {
			return {
				statusCode: 400,
				body: JSON.stringify("Payload required"),
			};
		}

		try {
			await fetch(
				`${process.env.SITE_URL}/.netlify/functions/emails/subscribed`,
				{
				  headers: {
					"netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
				  },
				  method: "POST",
				  body: JSON.stringify({
					from: "loftmusic.ca@gmail.com",
					to: "loftmusic.ca@gmail.com",
					subject: "YouTube submission",
					template: "subscribed",
					parameters: {
						url: `${formData.get("video_url")}`
					},
				  }),
				}
			);

			setLoading(false);
			setTyMessage(`Your YouTube video was submitted. Check my Youtube channel in a few days.`);

			return {
				statusCode: 200,
				body: JSON.stringify("Subscribe email sent!"),
			};

		} catch (err) {
			console.log(err);
		}		

	}
    const handleSubmit = async (formData: any) => {
		const submission = await submitData(formData);
		console.log(submission);
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