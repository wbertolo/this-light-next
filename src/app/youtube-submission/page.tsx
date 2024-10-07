import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import YouTubeSubmission from '../components/youtube-submission';

export const metadata: Metadata = {
	title: 'Music releases on all streaming platforms',
	description: 'Submit music to my YouTube playlists. It is free and the submission process is simple. I do not collect personal information.',
}

export default function Page() {

	return (
		<>
			<h1>YouTube Submission</h1>

			<p>It’s easy to submit music to my <Link href="https://www.youtube.com/@thislight" target='_blank'>Youtube playlists.</Link></p>

			<p>We do not store any personal data on our servers. Thanks to that, you will not get a confirmation email when we approve or decline your submission. Check my YouTube channel in 48 hours to see if I added your music.</p>

			<p>After submission, the browser will redirect you to the <Link href="/">homepage.</Link></p>

			<p className="mb-10">After approval, your track will be part of the playlist for 14 days.</p>

			<h2 className="text-center">Follow us:</h2>

			<Image
				className="mx-auto mb-8"
				src="/images/icons/platforms/ig.png"
				width={32}
				height={32}
				alt="Instagram logo"
			/>

			<YouTubeSubmission />

		</>
	);
}