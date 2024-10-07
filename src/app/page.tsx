import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getPageBySlug } from './api/api';
import Card from './ui/card';

export const metadata: Metadata = {
  title: 'Home | This Light',
  description: 'This Light\'s home. Submit free to my Spotify playlists. It is quick and simple and I do not retain personal information.',
}


export default async function Home() {

	const homeContent = await getPageBySlug('home');
	const content = homeContent.content;

	return (
		<>
			<Link href="https://open.spotify.com/artist/2oJYxQHQ1bnyGpXDQGxu6i" target="_blank">
				<Image
					className="mb-5"
					src="/images/home/hero.jpg"
					width={1024}
					height={576}
					alt="Discover This Light on Spotify"
				/>
			</Link>

			{/* Tiles R1 */}
			<div className="tiles flex flex-col lg:flex-row justify-between">

				<Card
					bgColour="purple-medium-2"
					shadowColour="purple-medium"
					ctaBgColour="purple-medium"
					basisPercentage="medium"
					href="/playlists/"
					imgSrc="/images/home/playlists.webp"
					imgW="771"
					imgH="500"
					imgAlt="Submit your music to my Spotify playlists."
					cardTitle="Submit your music"
					cardText="Submit your music to my Spotify playlists. The process is uncomplicated and you can submit in less than a minute."
					ctaText="Submit Now"
				/>
				<Card
					bgColour="blue-medium"
					shadowColour="blue-medium"
					ctaBgColour="blue-light"
					basisPercentage="medium"
					href="/blog/"
					imgSrc="/images/home/blog.webp"
					imgW="771"
					imgH="500"
					imgAlt="Ready my blog."
					cardTitle="Ready my blog"
					cardText="Read my blog to discover what I have been doing and listening to lately."
					ctaText="Read"
				/>

			</div>
			{/* e:Tiles R1 */}


			{/* Tiles R2 */}
			<div className="tiles flex flex-col lg:flex-row justify-between">

				<Card
					bgColour="blue-medium"
					shadowColour="blue-medium"
					ctaBgColour="blue-light"
					basisPercentage="small"
					href="/spotify-playlist-curators-you-can-submit-your-music-to-for-free/"
					cardTitle="Spotify playlist curators you can submit your music to for free"
					ctaText="Read"
				/>
				<Card
					bgColour="purple-medium-2"
					shadowColour="purple-medium"
					ctaBgColour="purple-medium"
					basisPercentage="large"
					href="/how-to-promote-your-music-for-free/"
					cardTitle="How to promote your music for free"
					ctaText="Read"
				/>

			</div>
			{/* e:Tiles R2 */}


			{/* Tiles R3 */}
			<div className="tiles flex flex-col lg:flex-row justify-between">

				<Card
					bgColour="purple-medium-2"
					shadowColour="purple-medium"
					ctaBgColour="purple-medium"
					basisPercentage="large"
					href="/submit-music-to-spotify-playlist-curator/"
					cardTitle="Submit music to Spotify playlist curator This Light"
					ctaText="Read"
				/>
				<Card
					bgColour="blue-medium"
					shadowColour="blue-medium"
					ctaBgColour="blue-light"
					basisPercentage="small"
					href="/submit-your-music-for-free-to-our-spotify-playlists/"
					cardTitle="Submit your music for free to our Spotify playlists"
					ctaText="Read"
				/>

			</div>
			{/* e:Tiles R3 */}

			<div dangerouslySetInnerHTML={{ __html: content }}></div>

		</>
	)
}
