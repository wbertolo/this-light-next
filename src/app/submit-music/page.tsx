import { authenticate } from '../components/authenticate';

export default async function Page() {

	authenticate();

	return (
		<>
			<h1>Spotify</h1>
			<div dangerouslySetInnerHTML={{ __html: ['spot'] }}></div>
		</>
	);
}

