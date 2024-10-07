import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'Music releases on all streaming platforms',
	description: 'This Light\'s music releases on all streaming platforms: Spotify, Deezer, Apple, Amazon Music, Google Play, and YouTube.',
}

const getReleases = async () => {
	try {
		const res = await fetch(`https://followthislight.com/wp-json/thislight/v1/releases`);
		const data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}

};

export default async function Page() {

	const releases = await getReleases();
	
	return (
		<>
			<h1>Music</h1>

			<ul className="flex justify-center list-none mb-7">
				<li className="px-2">
					<a href="https://open.spotify.com/artist/2oJYxQHQ1bnyGpXDQGxu6i?si=ycrnFCIaS_iuprfQtP2OTQ" target="_blank" rel="noopener noreferrer">
					<Image
						src="/images/icons/platforms/spotify.png"
						width={40}
						height={40}
						alt="Spotify"
					/>
					</a>
				</li>
				<li className="px-2">
					<a href="https://music.apple.com/ca/artist/this-light/1463951567" target="_blank" rel="noopener noreferrer">
						<Image
							src="/images/icons/platforms/apple.png"
							width={40}
							height={40}
							alt="Apple Music"
						/>
					</a>
				</li>
				<li className="px-2">
					<a href="https://music.youtube.com/channel/UCEmSkpcoA_ssOtyBJXI37zA" target="_blank" rel="noopener noreferrer">
						<Image
							src="/images/icons/platforms/youtubeMusic.png"
							width={40}
							height={40}
							alt="YouTube Music"
						/>
					</a></li>
				<li className="px-2">
					<a href="https://www.youtube.com/channel/UCEmSkpcoA_ssOtyBJXI37zA" target="_blank" rel="noopener noreferrer">
						<Image
							src="/images/icons/platforms/youtube.png"
							width={40}
							height={40}
							alt="YouTube"
						/>
					</a>
				</li>
				<li className="px-2">
					<a href="https://music.amazon.ca/artists/B07RY4BJ54/this-light?tab=CATALOG&" target="_blank" rel="noopener noreferrer">
						<Image
							src="/images/icons/platforms/amazonMusic.png"
							width={40}
							height={40}
							alt="Amazon Music"
						/>
					</a>
				</li>
				<li className="px-2">
					<a href="https://www.deezer.com/en/artist/66797462" target="_blank" rel="noopener noreferrer">
						<Image
							src="/images/icons/platforms/deezer.png"
							width={40}
							height={40}
							alt="Deezer"
						/>
					</a>
				</li>
			</ul>

			<div className="flex flex-wrap justify-center">
				{ releases.map( ( release: { name: string, url: string, image: string }, i: number ) => (
						<div className="basis-[48%] md:basis-[31%] lg:basis-[24%] p-1" key={i}>
							<a href={release.url} target="_blank">
								<Image
									src={release.image}
									width={246}
									height={246}
									alt={release.name}
								/>
							</a>
						</div>
					)
				) }l
			</div>
		</>
	);
}